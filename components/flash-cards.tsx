"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, RotateCcw, Plus, Trash2, BookOpen, Brain, CheckCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

interface FlashCard {
  id: string
  question: string
  answer: string
  category: string
  difficulty: "Fácil" | "Medio" | "Difícil"
  isCustom?: boolean
}

interface FlashCardsProps {
  onBack: () => void
}

const defaultFlashCards: FlashCard[] = [
  {
    id: "1",
    question: "¿Cuál es la dilución correcta para preparar solución clorada al 10%?",
    answer: "10ml de cloro en 990ml de agua (1000ml total)",
    category: "Diluciones",
    difficulty: "Fácil",
  },
  {
    id: "2",
    question: "¿Cuántos gramos de jabón en polvo se requieren por litro de agua?",
    answer: "20 gramos de jabón en polvo por cada litro de agua",
    category: "Diluciones",
    difficulty: "Fácil",
  },
  {
    id: "3",
    question: "¿Cada cuántas horas deben ser desinfectadas las camas?",
    answer: "Cada 72 horas, con o sin paciente",
    category: "Procedimientos",
    difficulty: "Medio",
  },
  {
    id: "4",
    question: "¿Qué NOM regula las infecciones nosocomiales?",
    answer: "NOM-045-SSA2-2005 para vigilancia epidemiológica, prevención y control de infecciones nosocomiales",
    category: "Normatividad",
    difficulty: "Medio",
  },
  {
    id: "5",
    question: "¿Qué incluyen las áreas NO CRÍTICAS?",
    answer:
      "Entrada, escaleras, estacionamiento, pasillos, sala de espera, oficinas administrativas, archivo clínico, biblioteca, aulas de enseñanza, residencias médicas",
    category: "Clasificación de Áreas",
    difficulty: "Medio",
  },
  {
    id: "6",
    question: "¿Qué incluyen las áreas CRÍTICAS?",
    answer:
      "CEYE, Hemodiálisis, UCIN, UCIP, Terapia intensiva, Quirófanos, Laboratorio clínico, Oncología (hospitalización), Depósito de cadáveres, Inhaloterapia",
    category: "Clasificación de Áreas",
    difficulty: "Difícil",
  },
  {
    id: "7",
    question: "¿Cuál es la técnica correcta para limpiar mobiliario?",
    answer: "De arriba hacia abajo, de adentro hacia fuera, sin regresar por la superficie ya limpiada",
    category: "Técnicas de Limpieza",
    difficulty: "Fácil",
  },
  {
    id: "8",
    question: "¿En cuántas partes se debe doblar la franela?",
    answer: "En 5 partes para realizar la limpieza efectiva",
    category: "Técnicas de Limpieza",
    difficulty: "Fácil",
  },
  {
    id: "9",
    question: "¿Cuál es la forma correcta de movimiento al trapear?",
    answer: "Movimientos en forma de 'S' para una limpieza efectiva",
    category: "Técnicas de Limpieza",
    difficulty: "Fácil",
  },
  {
    id: "10",
    question: "¿Qué está prohibido usar dentro del hospital?",
    answer: "Escobas (solo permitidas en baños y áreas externas como estacionamiento, terraza, patios)",
    category: "Normatividad",
    difficulty: "Medio",
  },
  {
    id: "11",
    question: "¿Cuántas cubetas se utilizan en la técnica de tres cubetas?",
    answer: "3 cubetas: Cubeta 1 (solución desinfectante), Cubeta 2 (agua limpia), Cubeta 3 (solución jabonosa)",
    category: "Técnicas de Limpieza",
    difficulty: "Medio",
  },
  {
    id: "12",
    question: "¿Cuántos ml de líquido para mops se aplican?",
    answer: "20 ml de forma vertical en un espacio de 60 cm junto con aserrín",
    category: "Técnicas de Limpieza",
    difficulty: "Medio",
  },
  {
    id: "13",
    question: "¿Cuál es la forma correcta de movimiento con mops?",
    answer: "Movimientos en forma de '8' de arriba hacia abajo, arrastrando el polvo poco a poco",
    category: "Técnicas de Limpieza",
    difficulty: "Medio",
  },
  {
    id: "14",
    question: "¿Con qué frecuencia se debe lavar el mops?",
    answer: "Diariamente con solución clorada, exprimir y dejar secando al sol",
    category: "Mantenimiento de Equipos",
    difficulty: "Fácil",
  },
  {
    id: "15",
    question: "¿Qué incluyen las áreas SEMI CRÍTICAS?",
    answer:
      "Medicina Interna, Cirugía, Urgencias, Consulta externa, Consulta de especialidades, Oncología (consultorios), Cocina, Banco de leche",
    category: "Clasificación de Áreas",
    difficulty: "Medio",
  },
  {
    id: "16",
    question: "¿Cuáles son las dos zonas en quirófanos?",
    answer:
      "Zona limpia (salas de recuperación, áreas de lavado quirúrgico, pasillos limpios) y Zona sucia (transfer y pasillos sucios)",
    category: "Procedimientos Críticos",
    difficulty: "Difícil",
  },
  {
    id: "17",
    question: "¿Cuándo se realiza la limpieza terminal?",
    answer: "Cuando se da de alta al paciente o se traslada a otro servicio, previo al ingreso de otro paciente",
    category: "Procedimientos Críticos",
    difficulty: "Medio",
  },
  {
    id: "18",
    question: "¿Qué incluye la limpieza profunda?",
    answer: "Pisos, paredes, muebles, techos y utensilios de manera programada y seccionada",
    category: "Procedimientos Críticos",
    difficulty: "Difícil",
  },
  {
    id: "19",
    question: "¿Cuál es el primer paso para limpiar cómodos?",
    answer: "Introducir el cómodo u orinal en el aparato lava cómoda y ponerlo a funcionar",
    category: "Equipos Especializados",
    difficulty: "Medio",
  },
  {
    id: "20",
    question: "¿Qué se debe usar para lavar cómodos después del lava cómoda?",
    answer: "Escobillón con agua y jabón hasta retirar completamente la suciedad",
    category: "Equipos Especializados",
    difficulty: "Medio",
  },
  {
    id: "21",
    question: "¿Cómo se aplica el cloro en cómodos?",
    answer: "Con atomizador cubriendo perfectamente todas las partes, sin enjuagar después",
    category: "Equipos Especializados",
    difficulty: "Medio",
  },
  {
    id: "22",
    question: "¿Dónde se desecha el contenido de los riñones?",
    answer: "En el lava cómodos (nunca usar riñones para drenar bolsas de estomas)",
    category: "Equipos Especializados",
    difficulty: "Medio",
  },
  {
    id: "23",
    question: "¿Qué se usa para lavar riñones?",
    answer: "Fibra con agua y jabón, luego enjuagar y aplicar cloro con atomizador",
    category: "Equipos Especializados",
    difficulty: "Medio",
  },
  {
    id: "24",
    question: "¿Dónde se desecha el agua de lebrillos?",
    answer: "Siempre en la tarja del séptico",
    category: "Equipos Especializados",
    difficulty: "Fácil",
  },
  {
    id: "25",
    question: "¿Qué equipo de protección se usa para limpiar cómodos?",
    answer: "Gafas para evitar salpicaduras en la cara, además del equipo básico",
    category: "Seguridad",
    difficulty: "Medio",
  },
  {
    id: "26",
    question: "¿Cuál es la preparación de cloro para 4 litros de agua?",
    answer: "40 ml de cloro líquido (10 ml por cada litro de agua)",
    category: "Diluciones",
    difficulty: "Fácil",
  },
  {
    id: "27",
    question: "¿Qué guantes se usan para preparar cloro?",
    answer: "Guantes blancos antes y durante la preparación",
    category: "Seguridad",
    difficulty: "Fácil",
  },
  {
    id: "28",
    question: "¿Por qué no se debe mezclar detergente con cloro?",
    answer: "Porque el cloro pierde su efecto desinfectante",
    category: "Seguridad",
    difficulty: "Medio",
  },
  {
    id: "29",
    question: "¿En qué orden se limpia mobiliario con precauciones de contacto?",
    answer:
      "Primero las menos contaminadas (equipos, mesas, buro, biombo, gavetas), luego las más contaminadas (cama y pared)",
    category: "Procedimientos Críticos",
    difficulty: "Difícil",
  },
  {
    id: "30",
    question: "¿Cuándo se aplica desinfectante con atomizador en cubículos?",
    answer: "Cuando el cubículo se encuentre desocupado, dejando que seque solo",
    category: "Procedimientos Críticos",
    difficulty: "Medio",
  },
  {
    id: "31",
    question: "¿Hasta qué altura se limpia primero la pared en cubículos?",
    answer: "Hasta la cintura hacia arriba, luego continuar con la parte de abajo y el piso",
    category: "Técnicas de Limpieza",
    difficulty: "Medio",
  },
  {
    id: "32",
    question: "¿Qué guantes se usan para limpiar pisos?",
    answer: "Guantes rojos (diferentes a los blancos para otras superficies)",
    category: "Seguridad",
    difficulty: "Fácil",
  },
  {
    id: "33",
    question: "¿Cómo se limpian los aspiradores en quirófanos?",
    answer:
      "Abriendo el pase del aspirador, introduciendo la manguera en solución clorada al 10%, lavando el frasco por separado",
    category: "Procedimientos Críticos",
    difficulty: "Difícil",
  },
  {
    id: "34",
    question: "¿Qué se desecha en quirófanos excepto batas y botas?",
    answer: "Todo el equipo de seguridad (gorro, cubre bocas, etc.)",
    category: "Procedimientos Críticos",
    difficulty: "Medio",
  },
  {
    id: "35",
    question: "¿Cómo se limpian los techos en limpieza profunda?",
    answer: "Sacudir con franela humedecida con solución clorada al 10% para eliminar polvo y telarañas",
    category: "Procedimientos Críticos",
    difficulty: "Medio",
  },
  {
    id: "36",
    question: "¿Qué se usa para lavar canceles?",
    answer: "Cepillo de cerdas y solución jabonosa, usar fibra verde si están manchados",
    category: "Técnicas de Limpieza",
    difficulty: "Medio",
  },
  {
    id: "37",
    question: "¿Cuál es el diámetro para lavar paredes?",
    answer: "40 cm aproximadamente, de arriba hacia abajo y de derecha a izquierda",
    category: "Técnicas de Limpieza",
    difficulty: "Medio",
  },
  {
    id: "38",
    question: "¿Qué se aplica al final de la limpieza profunda?",
    answer: "Soluciones de alta desinfección en equipo médico y posteriormente en el trapeado",
    category: "Procedimientos Críticos",
    difficulty: "Difícil",
  },
  {
    id: "39",
    question: "¿Qué se hace en caso de brote epidemiológico?",
    answer: "Coordinar con Epidemiología, Coord. Médica, Enfermería y Mantenimiento para evacuar el área",
    category: "Procedimientos Críticos",
    difficulty: "Difícil",
  },
  {
    id: "40",
    question: "¿Quién maneja los plafones en limpieza profunda?",
    answer: "El departamento de mantenimiento se encarga de retirar, lavar y colocar los plafones",
    category: "Procedimientos Críticos",
    difficulty: "Medio",
  },
  {
    id: "41",
    question: "¿Qué colores se usan en bitácoras de control?",
    answer: "Rojo para programado, azul para realizado",
    category: "Control y Documentación",
    difficulty: "Fácil",
  },
  {
    id: "42",
    question: "¿Qué se etiqueta en contenedores punzo cortantes?",
    answer: "Fecha de instalación y retiro",
    category: "Control y Documentación",
    difficulty: "Fácil",
  },
  {
    id: "43",
    question: "¿Cuál es la dilución del Extran para laboratorios?",
    answer: "100 ml en 3 litros de agua",
    category: "Diluciones",
    difficulty: "Medio",
  },
  {
    id: "44",
    question: "¿Cuántas limpiezas exhaustivas se deben cumplir al año?",
    answer: "52 limpiezas (una vez por semana en cada servicio)",
    category: "Procedimientos",
    difficulty: "Medio",
  },
  {
    id: "45",
    question: "¿Qué tipo de agua se usa en laboratorio para cloro?",
    answer: "Agua destilada para preparar la solución clorada al 10%",
    category: "Diluciones",
    difficulty: "Medio",
  },
  {
    id: "46",
    question: "¿Cuántos recorridos mínimos hace el supervisor?",
    answer: "Cuando menos 2 recorridos durante su jornada laboral",
    category: "Supervisión",
    difficulty: "Fácil",
  },
  {
    id: "47",
    question: "¿Cuánto tiempo máximo para tomar alimentos?",
    answer: "30 minutos como máximo durante la jornada laboral",
    category: "Normatividad",
    difficulty: "Fácil",
  },
  {
    id: "48",
    question: "¿Qué debe portar obligatoriamente el afanador?",
    answer: "Uniforme reglamentario, gafete de identificación vigente, zapatos cerrados y material de trabajo",
    category: "Normatividad",
    difficulty: "Medio",
  },
  {
    id: "49",
    question: "¿Cuándo se debe realizar lavado de manos?",
    answer: "Antes y después de cualquier procedimiento de limpieza, después de quitarse los guantes",
    category: "Seguridad",
    difficulty: "Fácil",
  },
  {
    id: "50",
    question: "¿Qué guantes se usan para técnicas de limpieza?",
    answer: "Guantes de hule de ¾ de largo para realizar cualquier técnica de limpieza",
    category: "Seguridad",
    difficulty: "Fácil",
  },
]

export default function FlashCards({ onBack }: FlashCardsProps) {
  const [flashCards, setFlashCards] = useState<FlashCard[]>([])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [studiedCards, setStudiedCards] = useState<Set<string>>(new Set())
  const [filterCategory, setFilterCategory] = useState<string>("Todas")
  const [filterDifficulty, setFilterDifficulty] = useState<string>("Todas")
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [newCard, setNewCard] = useState({
    question: "",
    answer: "",
    category: "",
    difficulty: "Fácil" as const,
  })

  // Cargar flash cards del localStorage
  useEffect(() => {
    const savedCards = localStorage.getItem("hospital-flashcards")
    const savedStudied = localStorage.getItem("hospital-flashcards-studied")

    if (savedCards) {
      setFlashCards(JSON.parse(savedCards))
    } else {
      setFlashCards(defaultFlashCards)
      localStorage.setItem("hospital-flashcards", JSON.stringify(defaultFlashCards))
    }

    if (savedStudied) {
      setStudiedCards(new Set(JSON.parse(savedStudied)))
    }
  }, [])

  // Guardar progreso en localStorage
  useEffect(() => {
    if (studiedCards.size > 0) {
      localStorage.setItem("hospital-flashcards-studied", JSON.stringify([...studiedCards]))
    }
  }, [studiedCards])

  // Filtrar tarjetas
  const filteredCards = flashCards.filter((card) => {
    const categoryMatch = filterCategory === "Todas" || card.category === filterCategory
    const difficultyMatch = filterDifficulty === "Todas" || card.difficulty === filterDifficulty
    return categoryMatch && difficultyMatch
  })

  const currentCard = filteredCards[currentCardIndex]
  const categories = [...new Set(flashCards.map((card) => card.category))]

  const handleNext = () => {
    if (currentCardIndex < filteredCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setIsFlipped(false)
    }
  }

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
      setIsFlipped(false)
    }
  }

  const handleMarkAsStudied = () => {
    if (currentCard) {
      setStudiedCards((prev) => new Set([...prev, currentCard.id]))
    }
  }

  const handleAddCard = () => {
    if (newCard.question && newCard.answer && newCard.category) {
      const card: FlashCard = {
        id: Date.now().toString(),
        ...newCard,
        isCustom: true,
      }

      const updatedCards = [...flashCards, card]
      setFlashCards(updatedCards)
      localStorage.setItem("hospital-flashcards", JSON.stringify(updatedCards))

      setNewCard({ question: "", answer: "", category: "", difficulty: "Fácil" })
      setShowAddDialog(false)
    }
  }

  const handleDeleteCard = (cardId: string) => {
    const updatedCards = flashCards.filter((card) => card.id !== cardId)
    setFlashCards(updatedCards)
    localStorage.setItem("hospital-flashcards", JSON.stringify(updatedCards))

    if (currentCardIndex >= updatedCards.length) {
      setCurrentCardIndex(Math.max(0, updatedCards.length - 1))
    }
  }

  const resetProgress = () => {
    setStudiedCards(new Set())
    localStorage.removeItem("hospital-flashcards-studied")
  }

  if (!currentCard) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center mb-8">
            <Button onClick={onBack} variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
            <h1 className="text-3xl font-bold text-gray-800">Flash Cards</h1>
          </div>
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-600">No hay tarjetas disponibles con los filtros seleccionados.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button onClick={onBack} variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Flash Cards</h1>
              <p className="text-gray-600">Estudia con tarjetas interactivas</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Agregar Tarjeta
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Agregar Nueva Tarjeta</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="question">Pregunta</Label>
                    <Textarea
                      id="question"
                      value={newCard.question}
                      onChange={(e) => setNewCard({ ...newCard, question: e.target.value })}
                      placeholder="Escribe la pregunta..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="answer">Respuesta</Label>
                    <Textarea
                      id="answer"
                      value={newCard.answer}
                      onChange={(e) => setNewCard({ ...newCard, answer: e.target.value })}
                      placeholder="Escribe la respuesta..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Categoría</Label>
                    <Input
                      id="category"
                      value={newCard.category}
                      onChange={(e) => setNewCard({ ...newCard, category: e.target.value })}
                      placeholder="Ej: Técnicas de Limpieza"
                    />
                  </div>
                  <div>
                    <Label htmlFor="difficulty">Dificultad</Label>
                    <select
                      id="difficulty"
                      value={newCard.difficulty}
                      onChange={(e) => setNewCard({ ...newCard, difficulty: e.target.value as any })}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="Fácil">Fácil</option>
                      <option value="Medio">Medio</option>
                      <option value="Difícil">Difícil</option>
                    </select>
                  </div>
                  <Button onClick={handleAddCard} className="w-full">
                    Agregar Tarjeta
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Button onClick={resetProgress} variant="outline">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reiniciar Progreso
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-blue-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Total Tarjetas</p>
                  <p className="text-2xl font-bold">{flashCards.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Brain className="h-8 w-8 text-green-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Estudiadas</p>
                  <p className="text-2xl font-bold">{studiedCards.size}</p>
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
                  <p className="text-2xl font-bold">{Math.round((studiedCards.size / flashCards.length) * 100)}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Plus className="h-8 w-8 text-orange-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Personalizadas</p>
                  <p className="text-2xl font-bold">{flashCards.filter((c) => c.isCustom).length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <select
            value={filterCategory}
            onChange={(e) => {
              setFilterCategory(e.target.value)
              setCurrentCardIndex(0)
            }}
            className="p-2 border rounded-md"
          >
            <option value="Todas">Todas las categorías</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={filterDifficulty}
            onChange={(e) => {
              setFilterDifficulty(e.target.value)
              setCurrentCardIndex(0)
            }}
            className="p-2 border rounded-md"
          >
            <option value="Todas">Todas las dificultades</option>
            <option value="Fácil">Fácil</option>
            <option value="Medio">Medio</option>
            <option value="Difícil">Difícil</option>
          </select>
        </div>

        {/* Flash Card */}
        <div className="max-w-2xl mx-auto mb-8">
          <Card className="min-h-[400px] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Badge variant="outline">{currentCard.category}</Badge>
                  <Badge
                    variant={
                      currentCard.difficulty === "Fácil"
                        ? "secondary"
                        : currentCard.difficulty === "Medio"
                          ? "default"
                          : "destructive"
                    }
                  >
                    {currentCard.difficulty}
                  </Badge>
                  {currentCard.isCustom && <Badge variant="outline">Personalizada</Badge>}
                  {studiedCards.has(currentCard.id) && (
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Estudiada
                    </Badge>
                  )}
                </div>

                {currentCard.isCustom && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDeleteCard(currentCard.id)
                    }}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                )}
              </div>
              <CardTitle className="text-center">{isFlipped ? "Respuesta" : "Pregunta"}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center min-h-[250px] p-8">
              <div className="text-center">
                <p className="text-lg leading-relaxed">{isFlipped ? currentCard.answer : currentCard.question}</p>
                {!isFlipped && <p className="text-sm text-gray-500 mt-4">Haz clic para ver la respuesta</p>}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <Button onClick={handlePrevious} disabled={currentCardIndex === 0} variant="outline">
            Anterior
          </Button>

          <span className="text-sm text-gray-600">
            {currentCardIndex + 1} de {filteredCards.length}
          </span>

          <Button onClick={handleNext} disabled={currentCardIndex === filteredCards.length - 1} variant="outline">
            Siguiente
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <Button onClick={() => setIsFlipped(!isFlipped)} variant="outline">
            {isFlipped ? "Ver Pregunta" : "Ver Respuesta"}
          </Button>

          {!studiedCards.has(currentCard.id) && (
            <Button onClick={handleMarkAsStudied} className="bg-green-600 hover:bg-green-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              Marcar como Estudiada
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
