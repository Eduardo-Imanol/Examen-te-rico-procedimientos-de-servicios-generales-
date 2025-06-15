"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Trophy, BarChart3, Clock, CheckCircle } from "lucide-react"
import QuizInterface from "@/components/quiz-interface"
import StatsPanel from "@/components/stats-panel"
import StudyGuide from "@/components/study-guide"
import FlashCards from "@/components/flash-cards"

const examTopics = [
  {
    id: 1,
    title: "Fundamentos y Normatividad",
    description: "Normas oficiales, marco normativo y políticas generales",
    difficulty: "Básico",
    questions: 20,
    timeLimit: 30,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Clasificación de Áreas Hospitalarias",
    description: "Áreas críticas, semi-críticas y no críticas",
    difficulty: "Intermedio",
    questions: 20,
    timeLimit: 35,
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Técnicas de Limpieza y Desinfección",
    description: "Procedimientos específicos y diluciones",
    difficulty: "Intermedio",
    questions: 20,
    timeLimit: 40,
    color: "bg-yellow-500",
  },
  {
    id: 4,
    title: "Equipos y Materiales Especializados",
    description: "Manejo de mops, cómodos, riñones y lebrillos",
    difficulty: "Avanzado",
    questions: 20,
    timeLimit: 35,
    color: "bg-purple-500",
  },
  {
    id: 5,
    title: "Procedimientos Críticos y Control",
    description: "Quirófanos, limpieza terminal y bitácoras",
    difficulty: "Avanzado",
    questions: 20,
    timeLimit: 45,
    color: "bg-red-500",
  },
]

export default function HomePage() {
  const [currentView, setCurrentView] = useState<"home" | "quiz" | "stats" | "study" | "flashcards">("home")
  const [selectedExam, setSelectedExam] = useState<number | null>(null)
  const [userStats, setUserStats] = useState({
    totalExams: 0,
    averageScore: 0,
    completedExams: [] as number[],
    weakAreas: [] as string[],
  })

  useEffect(() => {
    const savedStats = localStorage.getItem("hospital-quiz-stats")
    if (savedStats) {
      setUserStats(JSON.parse(savedStats))
    }
  }, [])

  const startExam = (examId: number) => {
    setSelectedExam(examId)
    setCurrentView("quiz")
  }

  const handleExamComplete = (examId: number, score: number, incorrectTopics: string[]) => {
    const newStats = {
      ...userStats,
      totalExams: userStats.totalExams + 1,
      averageScore: (userStats.averageScore * userStats.totalExams + score) / (userStats.totalExams + 1),
      completedExams: [...userStats.completedExams, examId],
      weakAreas: [...new Set([...userStats.weakAreas, ...incorrectTopics])],
    }
    setUserStats(newStats)
    localStorage.setItem("hospital-quiz-stats", JSON.stringify(newStats))
    setCurrentView("home")
  }

  if (currentView === "quiz" && selectedExam) {
    return (
      <QuizInterface
        examId={selectedExam}
        examData={examTopics.find((e) => e.id === selectedExam)!}
        onComplete={handleExamComplete}
        onBack={() => setCurrentView("home")}
      />
    )
  }

  if (currentView === "stats") {
    return <StatsPanel stats={userStats} onBack={() => setCurrentView("home")} />
  }

  if (currentView === "study") {
    return <StudyGuide weakAreas={userStats.weakAreas} onBack={() => setCurrentView("home")} />
  }

  if (currentView === "flashcards") {
    return <FlashCards onBack={() => setCurrentView("home")} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-teal-600 text-white p-3 rounded-full mr-3">
              <BookOpen className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800">Sistema de Evaluación</h1>
          </div>
          <p className="text-xl text-gray-600 mb-2">Manual de Procedimientos - Servicios Generales</p>
          <p className="text-lg text-gray-500">Hospital General Regional "Emilio Sánchez Piedras"</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Exámenes Completados</p>
                  <p className="text-2xl font-bold">{userStats.completedExams.length}/5</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-blue-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Promedio General</p>
                  <p className="text-2xl font-bold">{userStats.averageScore.toFixed(1)}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-green-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Tiempo Total</p>
                  <p className="text-2xl font-bold">{examTopics.reduce((acc, exam) => acc + exam.timeLimit, 0)} min</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-purple-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Progreso</p>
                  <Progress value={(userStats.completedExams.length / 5) * 100} className="mt-1" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            onClick={() => setCurrentView("stats")}
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <BarChart3 className="h-5 w-5" />
            Ver Estadísticas
          </Button>
          <Button
            onClick={() => setCurrentView("study")}
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <BookOpen className="h-5 w-5" />
            Guía de Estudio
          </Button>
          <Button
            onClick={() => setCurrentView("flashcards")}
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <BookOpen className="h-5 w-5" />
            Flash Cards
          </Button>
        </div>

        {/* Exam Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examTopics.map((exam) => (
            <Card key={exam.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`w-4 h-4 rounded-full ${exam.color}`}></div>
                  <Badge
                    variant={
                      exam.difficulty === "Básico"
                        ? "secondary"
                        : exam.difficulty === "Intermedio"
                          ? "default"
                          : "destructive"
                    }
                  >
                    {exam.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{exam.title}</CardTitle>
                <CardDescription>{exam.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Preguntas: {exam.questions}</span>
                    <span>Tiempo: {exam.timeLimit} min</span>
                  </div>

                  {userStats.completedExams.includes(exam.id) && (
                    <div className="flex items-center text-green-600 text-sm">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Completado
                    </div>
                  )}

                  <Button
                    onClick={() => startExam(exam.id)}
                    className="w-full"
                    variant={userStats.completedExams.includes(exam.id) ? "outline" : "default"}
                  >
                    {userStats.completedExams.includes(exam.id) ? "Repetir Examen" : "Iniciar Examen"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p>Sistema desarrollado por Eduardo Imanol - Lamap (15/Junio/25)</p>
        </div>
      </div>
    </div>
  )
}
