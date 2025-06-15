"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, FileText, AlertCircle, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface StudyGuideProps {
  weakAreas: string[]
  onBack: () => void
}

const studyMaterial = {
  "Fundamentos y Normatividad": {
    icon: "📋",
    sections: [
      {
        title: "Normas Oficiales Mexicanas (NOM)",
        content: [
          "NOM-045-SSA2-2005: Vigilancia Epidemiológica, Prevención y control de infecciones Nosocomiales",
          "NOM-087-ECOL-SSA1-2002: Protección ambiental - Residuos Peligrosos biológico-infecciosos",
          "NOM-056-SSAI-1993: Requisitos sanitarios del equipo de protección personal",
        ],
        page: "Página 6",
      },
      {
        title: "Políticas Generales",
        content: [
          "Uso obligatorio de uniforme reglamentario y gafete de identificación",
          "Horarios de limpieza respetando jornadas laborales",
          "Permanencia en servicio asignado con máximo 30 min para alimentos",
          "Lavado diario de materiales con solución jabonosa y clorada",
        ],
        page: "Página 7",
      },
    ],
  },
  "Clasificación de Áreas Hospitalarias": {
    icon: "🏥",
    sections: [
      {
        title: "Áreas No Críticas",
        content: [
          "Entrada, escaleras, estacionamiento, pasillos",
          "Sala de espera, oficinas administrativas",
          "Archivo clínico, biblioteca, aulas de enseñanza",
          "Menor riesgo de contaminación",
        ],
        page: "Página 11",
      },
      {
        title: "Áreas Semi Críticas",
        content: [
          "Medicina Interna, Cirugía, Urgencias",
          "Consulta externa y de especialidades",
          "Cocina, Banco de leche",
          "Menor impacto de infección intrahospitalaria",
        ],
        page: "Página 14",
      },
      {
        title: "Áreas Críticas",
        content: [
          "CEYE, Hemodiálisis, UCIN, UCIP",
          "Terapia intensiva, Quirófanos",
          "Laboratorio clínico, Oncología",
          "Mayor cuidado por impacto de infección",
        ],
        page: "Página 18",
      },
    ],
  },
  "Técnicas de Limpieza y Desinfección": {
    icon: "🧽",
    sections: [
      {
        title: "Diluciones Básicas",
        content: [
          "Cloro al 10%: 10ml de cloro en 990ml de agua",
          "Solución jabonosa: 20 grs de jabón en 1 litro de agua",
          "Extran: 100ml en 3 litros de agua (laboratorios)",
          "Líquido para mops: 20ml aplicación directa",
        ],
        page: "Página 10",
      },
      {
        title: "Técnica de Dos Cubetas",
        content: [
          "Cubeta 1: Solución clorada al 10%",
          "Cubeta 2: Agua limpia para enjuague",
          "Movimientos en forma de 'S'",
          "Enjuagar mechudo entre aplicaciones",
        ],
        page: "Página 21",
      },
      {
        title: "Manejo de Mops",
        content: [
          "Aplicar 20ml de líquido para mops",
          "Movimientos en forma de '8'",
          "Lavado diario con solución clorada",
          "Secado al sol, evitar remojos de 24 hrs",
        ],
        page: "Página 22",
      },
    ],
  },
  "Equipos y Materiales Especializados": {
    icon: "🧴",
    sections: [
      {
        title: "Limpieza de Cómodos y Orinales",
        content: [
          "Introducir en aparato lava cómodos",
          "Lavar con agua y jabón usando escobillón",
          "Enjuagar con agua suficiente",
          "Aplicar cloro con atomizador sin enjuagar",
        ],
        page: "Página 33",
      },
      {
        title: "Limpieza de Riñones",
        content: [
          "Desechar contenido en lava cómodos",
          "Lavar con agua y jabón usando fibra",
          "Enjuagar y escurrir",
          "Aplicar cloro con atomizador",
        ],
        page: "Página 34",
      },
      {
        title: "Limpieza de Lebrillos",
        content: [
          "Desechar agua en tarja del séptico",
          "Lavar con agua y jabón usando fibra",
          "Enjuagar y escurrir",
          "Aplicar cloro sin enjuagar",
        ],
        page: "Página 34",
      },
    ],
  },
  "Procedimientos Críticos y Control": {
    icon: "⚕️",
    sections: [
      {
        title: "Limpieza en Quirófanos",
        content: [
          "Zona limpia: salas de recuperación, áreas de lavado",
          "Zona sucia: transfer y pasillos sucios",
          "Material exclusivo para cada zona",
          "Limpieza de lámparas, aspiradores y equipos",
        ],
        page: "Página 26",
      },
      {
        title: "Limpieza Terminal",
        content: [
          "Se realiza al dar de alta al paciente",
          "Limpieza de cortinas, toma de oxígeno, rieles",
          "Limpieza específica de cama o camilla",
          "Trapeado con técnica de dos cubetas",
        ],
        page: "Página 26",
      },
      {
        title: "Limpieza Profunda",
        content: [
          "Programada y seccionada por servicio",
          "Incluye pisos, paredes, muebles, techos",
          "Lavado de canceles con cepillo de cerdas",
          "Aplicación final de desinfectante de alta eficacia",
        ],
        page: "Página 28",
      },
      {
        title: "Bitácoras de Control",
        content: [
          "Supervisión de limpieza y actividades",
          "Marcado en rojo: programado, azul: realizado",
          "Control cada 72 hrs de camas con/sin paciente",
          "Etiquetado de contenedores punzo cortantes",
        ],
        page: "Página 35",
      },
    ],
  },
}

export default function StudyGuide({ weakAreas, onBack }: StudyGuideProps) {
  const priorityAreas = weakAreas.length > 0 ? [...new Set(weakAreas)] : []
  const allAreas = Object.keys(studyMaterial)

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button onClick={onBack} variant="ghost" size="sm" className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Guía de Estudio</h1>
            <p className="text-gray-600">Manual de Procedimientos - Servicios Generales</p>
          </div>
        </div>

        {/* Priority Areas Alert */}
        {priorityAreas.length > 0 && (
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center text-red-800">
                <AlertCircle className="h-5 w-5 mr-2" />
                Áreas Prioritarias para Estudio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 mb-4">
                Basado en tus resultados, estas son las áreas que requieren mayor atención:
              </p>
              <div className="flex flex-wrap gap-2">
                {priorityAreas.map((area, index) => (
                  <Badge key={index} variant="destructive">
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Study Material */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {allAreas.map((area) => {
            const material = studyMaterial[area as keyof typeof studyMaterial]
            const isPriority = priorityAreas.includes(area)

            return (
              <Card key={area} className={`${isPriority ? "border-red-300 shadow-lg" : ""}`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{material.icon}</span>
                      {area}
                    </div>
                    {isPriority && (
                      <Badge variant="destructive" className="ml-2">
                        Prioritario
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {material.sections.map((section, index) => (
                      <AccordionItem key={index} value={`section-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            {section.title}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-sm font-medium text-blue-800 mb-2">📖 Referencia: {section.page}</p>
                            </div>
                            <ul className="space-y-2">
                              {section.content.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Study Tips */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Consejos de Estudio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-700">✅ Estrategias Efectivas</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Estudia las áreas prioritarias primero</li>
                  <li>• Revisa las páginas específicas del manual</li>
                  <li>• Practica las diluciones y técnicas</li>
                  <li>• Memoriza las clasificaciones de áreas</li>
                  <li>• Repite los exámenes después de estudiar</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-700">💡 Puntos Clave</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Siempre usar equipo de protección personal</li>
                  <li>• Respetar las diluciones exactas</li>
                  <li>• Seguir el orden: menos a más contaminado</li>
                  <li>• Nunca mezclar detergente con cloro</li>
                  <li>• Documentar en bitácoras de control</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
