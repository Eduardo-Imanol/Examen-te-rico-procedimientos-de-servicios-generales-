"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Clock, ArrowLeft, ArrowRight, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { getQuestionsForExam } from "@/lib/questions"

interface QuizInterfaceProps {
  examId: number
  examData: {
    title: string
    timeLimit: number
    questions: number
  }
  onComplete: (examId: number, score: number, incorrectTopics: string[]) => void
  onBack: () => void
}

export default function QuizInterface({ examId, examData, onComplete, onBack }: QuizInterfaceProps) {
  const [questions] = useState(() => getQuestionsForExam(examId))
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [timeLeft, setTimeLeft] = useState(examData.timeLimit * 60) // Convert to seconds
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<{
    score: number
    correctAnswers: number
    incorrectQuestions: Array<{
      question: string
      userAnswer: string
      correctAnswer: string
      explanation: string
      reference: string
    }>
  } | null>(null)

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      handleSubmit()
    }
  }, [timeLeft, showResults])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleAnswerChange = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: value,
    }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    let correctAnswers = 0
    const incorrectQuestions: any[] = []
    const incorrectTopics: string[] = []

    questions.forEach((question, index) => {
      const userAnswer = answers[index]
      if (userAnswer === question.correctAnswer) {
        correctAnswers++
      } else {
        incorrectQuestions.push({
          question: question.question,
          userAnswer: userAnswer || "Sin respuesta",
          correctAnswer: question.correctAnswer,
          explanation: question.explanation,
          reference: question.reference,
        })
        incorrectTopics.push(question.topic)
      }
    })

    const score = (correctAnswers / questions.length) * 100

    setResults({
      score,
      correctAnswers,
      incorrectQuestions,
    })
    setShowResults(true)
  }

  const handleFinish = () => {
    if (results) {
      const incorrectTopics = results.incorrectQuestions.map((q) => q.reference)
      onComplete(examId, results.score, incorrectTopics)
    }
  }

  if (showResults && results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 p-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-6">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">Resultados del Examen</CardTitle>
              <p className="text-lg text-gray-600">{examData.title}</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{results.score.toFixed(1)}%</div>
                  <p className="text-gray-600">Calificación</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {results.correctAnswers}/{questions.length}
                  </div>
                  <p className="text-gray-600">Respuestas Correctas</p>
                </div>
                <div className="text-center">
                  <div className={`text-4xl font-bold mb-2 ${results.score >= 70 ? "text-green-600" : "text-red-600"}`}>
                    {results.score >= 70 ? "APROBADO" : "REPROBADO"}
                  </div>
                  <p className="text-gray-600">Estado</p>
                </div>
              </div>

              <Progress value={results.score} className="mb-6" />

              {results.incorrectQuestions.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                    Preguntas Incorrectas - Áreas de Estudio
                  </h3>

                  {results.incorrectQuestions.map((item, index) => (
                    <Alert key={index} className="border-red-200">
                      <AlertDescription>
                        <div className="space-y-2">
                          <p className="font-semibold">{item.question}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-red-600 font-medium">Tu respuesta: </span>
                              {item.userAnswer}
                            </div>
                            <div>
                              <span className="text-green-600 font-medium">Respuesta correcta: </span>
                              {item.correctAnswer}
                            </div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded mt-2">
                            <p className="text-sm">
                              <strong>Explicación:</strong> {item.explanation}
                            </p>
                            <p className="text-sm mt-1">
                              <strong>Revisar:</strong> {item.reference}
                            </p>
                          </div>
                        </div>
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
              )}

              <div className="flex justify-center gap-4 mt-8">
                <Button onClick={onBack} variant="outline" size="lg">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al Inicio
                </Button>
                <Button onClick={handleFinish} size="lg">
                  Finalizar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Button onClick={onBack} variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Salir
              </Button>
              <Badge variant="outline" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {formatTime(timeLeft)}
              </Badge>
            </div>
            <div className="text-center">
              <CardTitle className="text-2xl mb-2">{examData.title}</CardTitle>
              <p className="text-gray-600">
                Pregunta {currentQuestion + 1} de {questions.length}
              </p>
              <Progress value={progress} className="mt-2" />
            </div>
          </CardHeader>
        </Card>

        {/* Question */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">{currentQ.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={answers[currentQuestion] || ""} onValueChange={handleAnswerChange} className="space-y-3">
              {currentQ.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-gray-50">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <Button onClick={handlePrevious} disabled={currentQuestion === 0} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Anterior
              </Button>

              <div className="text-sm text-gray-600">
                {Object.keys(answers).length} de {questions.length} respondidas
              </div>

              {currentQuestion === questions.length - 1 ? (
                <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                  Finalizar Examen
                </Button>
              ) : (
                <Button onClick={handleNext}>
                  Siguiente
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
