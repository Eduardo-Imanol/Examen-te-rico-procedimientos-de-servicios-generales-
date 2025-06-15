"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, TrendingUp, Target, BookOpen, AlertTriangle } from "lucide-react"

interface StatsPanelProps {
  stats: {
    totalExams: number
    averageScore: number
    completedExams: number[]
    weakAreas: string[]
  }
  onBack: () => void
}

const examTitles = {
  1: "Fundamentos y Normatividad",
  2: "Clasificación de Áreas",
  3: "Técnicas de Limpieza",
  4: "Equipos Especializados",
  5: "Procedimientos Críticos",
}

export default function StatsPanel({ stats, onBack }: StatsPanelProps) {
  const getPerformanceLevel = (score: number) => {
    if (score >= 90) return { level: "Excelente", color: "bg-green-500", textColor: "text-green-700" }
    if (score >= 80) return { level: "Muy Bueno", color: "bg-blue-500", textColor: "text-blue-700" }
    if (score >= 70) return { level: "Bueno", color: "bg-yellow-500", textColor: "text-yellow-700" }
    return { level: "Necesita Mejorar", color: "bg-red-500", textColor: "text-red-700" }
  }

  const performance = getPerformanceLevel(stats.averageScore)

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button onClick={onBack} variant="ghost" size="sm" className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
          <h1 className="text-3xl font-bold text-gray-800">Estadísticas de Rendimiento</h1>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Promedio General</p>
                  <p className="text-2xl font-bold">{stats.averageScore.toFixed(1)}%</p>
                  <Badge className={performance.textColor + " text-xs"}>{performance.level}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Exámenes Completados</p>
                  <p className="text-2xl font-bold">{stats.completedExams.length}/5</p>
                  <Progress value={(stats.completedExams.length / 5) * 100} className="mt-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total de Intentos</p>
                  <p className="text-2xl font-bold">{stats.totalExams}</p>
                  <p className="text-xs text-gray-500">Exámenes realizados</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Áreas Débiles</p>
                  <p className="text-2xl font-bold">{stats.weakAreas.length}</p>
                  <p className="text-xs text-gray-500">Temas a repasar</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Exam Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Progreso por Examen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(examTitles).map(([id, title]) => {
                  const examId = Number.parseInt(id)
                  const isCompleted = stats.completedExams.includes(examId)

                  return (
                    <div key={id} className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="flex-1">
                        <p className="font-medium">{title}</p>
                        <p className="text-sm text-gray-600">Examen {id}</p>
                      </div>
                      <div className="text-right">
                        {isCompleted ? (
                          <Badge className="bg-green-100 text-green-800">Completado</Badge>
                        ) : (
                          <Badge variant="outline">Pendiente</Badge>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Weak Areas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Áreas que Requieren Estudio
              </CardTitle>
            </CardHeader>
            <CardContent>
              {stats.weakAreas.length > 0 ? (
                <div className="space-y-3">
                  {[...new Set(stats.weakAreas)].map((area, index) => (
                    <div key={index} className="p-3 bg-red-50 rounded-lg border border-red-200">
                      <p className="text-sm font-medium text-red-800">{area}</p>
                      <p className="text-xs text-red-600 mt-1">Revisar el manual en esta sección</p>
                    </div>
                  ))}
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      💡 <strong>Recomendación:</strong> Revisa estas secciones del manual antes de repetir los
                      exámenes.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="text-gray-600">¡Excelente! No tienes áreas débiles identificadas.</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Completa más exámenes para obtener un análisis detallado.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Performance Analysis */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Análisis de Rendimiento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div
                  className={`w-16 h-16 ${performance.color} rounded-full mx-auto mb-3 flex items-center justify-center`}
                >
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Nivel Actual</h3>
                <p className={`${performance.textColor} font-medium`}>{performance.level}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Progreso</h3>
                <p className="text-blue-700 font-medium">
                  {((stats.completedExams.length / 5) * 100).toFixed(0)}% Completado
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Siguiente Paso</h3>
                <p className="text-purple-700 font-medium">
                  {stats.completedExams.length === 5 ? "¡Completado!" : "Continuar Exámenes"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
