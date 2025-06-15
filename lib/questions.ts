interface Question {
  question: string
  options: string[]
  correctAnswer: string
  explanation: string
  reference: string
  topic: string
}

const questionsBank: Record<number, Question[]> = {
  1: [
    // Fundamentos y Normatividad
    {
      question: "¿Cuál es la dilución correcta para preparar solución clorada al 10%?",
      options: [
        "5ml de cloro en 995ml de agua",
        "10ml de cloro en 990ml de agua",
        "15ml de cloro en 985ml de agua",
        "20ml de cloro en 980ml de agua",
      ],
      correctAnswer: "10ml de cloro en 990ml de agua",
      explanation:
        "La dilución correcta es 10ml de cloro por cada 990ml de agua para obtener una solución clorada al 10%.",
      reference: "Página 8 - Recomendaciones del Comité de Infecciones Nosocomiales",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Cuál es la NOM que regula la vigilancia epidemiológica y prevención de infecciones nosocomiales?",
      options: ["NOM-087-ECOL-SSA1-2002", "NOM-045-SSA2-2005", "NOM-056-SSAI-1993", "NOM-025-SSA2-1994"],
      correctAnswer: "NOM-045-SSA2-2005",
      explanation:
        "La NOM-045-SSA2-2005 es específica para la vigilancia epidemiológica, prevención y control de infecciones nosocomiales.",
      reference: "Página 6 - Marco Normativo",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Cuántos gramos de jabón en polvo se requieren por litro de agua para preparar solución jabonosa?",
      options: ["10 gramos", "15 gramos", "20 gramos", "25 gramos"],
      correctAnswer: "20 gramos",
      explanation: "La solución jabonosa se prepara con 20 gramos de jabón en polvo por cada litro de agua.",
      reference: "Página 9 - Diluciones y Página 10 - Tabla de Diluciones",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Cuál es el tiempo máximo permitido para que el afanador tome sus alimentos durante su jornada?",
      options: ["20 minutos", "30 minutos", "45 minutos", "60 minutos"],
      correctAnswer: "30 minutos",
      explanation:
        "Durante su jornada laboral, el afanador deberá permanecer en el servicio asignado, teniendo 30 minutos como máximo para tomar sus alimentos.",
      reference: "Página 7 - Normas y Políticas Generales",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Qué NOM regula los residuos peligrosos biológico-infecciosos?",
      options: ["NOM-045-SSA2-2005", "NOM-087-ECOL-SSA1-2002", "NOM-056-SSAI-1993", "NOM-025-SSA2-1994"],
      correctAnswer: "NOM-087-ECOL-SSA1-2002",
      explanation:
        "La NOM-087-ECOL-SSA1-2002 regula la protección ambiental, salud ambiental y residuos peligrosos biológico-infecciosos.",
      reference: "Página 6 - Marco Normativo",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Cuántos recorridos mínimos debe realizar el supervisor durante su jornada laboral?",
      options: ["1 recorrido", "2 recorridos", "3 recorridos", "4 recorridos"],
      correctAnswer: "2 recorridos",
      explanation:
        "El supervisor deberá realizar cuando menos 2 recorridos durante su jornada laboral por las áreas de servicio asignadas.",
      reference: "Página 7 - Normas y Políticas Generales",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Cada cuántas horas deben ser desinfectadas las camas ocupadas o sin pacientes?",
      options: ["24 horas", "48 horas", "72 horas", "96 horas"],
      correctAnswer: "72 horas",
      explanation: "Cuando estén ocupadas las camas, o sin pacientes deberán ser desinfectadas cada 72 horas.",
      reference: "Página 8 - Recomendaciones del Comité de Infecciones Nosocomiales",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Qué se debe evitar al usar mechudos, mops y franelas?",
      options: ["Lavarlos diariamente", "Secarlos al sol", "Remojos de 24 hrs o más", "Usar solución clorada"],
      correctAnswer: "Remojos de 24 hrs o más",
      explanation:
        "El mechudo, mops y franelas se lavarán con solución clorada y secado al sol, evitando remojos de 24 hrs o más.",
      reference: "Página 7 - Normas y Políticas Generales",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Cuántas limpiezas exhaustivas se deben cumplir al finalizar el año?",
      options: ["26 limpiezas", "52 limpiezas", "78 limpiezas", "104 limpiezas"],
      correctAnswer: "52 limpiezas",
      explanation:
        "La limpieza exhaustiva se debe realizar una vez por semana en cada servicio, debiendo cumplir con 52 limpiezas al finalizar el año.",
      reference: "Página 8 - Recomendaciones del Comité de Infecciones Nosocomiales",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Qué tipo de agua se debe usar en laboratorio para preparar solución clorada?",
      options: ["Agua potable", "Agua destilada", "Agua filtrada", "Agua hervida"],
      correctAnswer: "Agua destilada",
      explanation: "En laboratorio se usará agua destilada para preparar la solución clorada al 10%.",
      reference: "Página 8 - Recomendaciones del Comité de Infecciones Nosocomiales",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Qué debe portar obligatoriamente el personal afanador?",
      options: [
        "Solo uniforme reglamentario",
        "Solo gafete de identificación",
        "Uniforme, gafete vigente y zapatos cerrados",
        "Solo zapatos cerrados",
      ],
      correctAnswer: "Uniforme, gafete vigente y zapatos cerrados",
      explanation:
        "Todo el personal afanador deberá utilizar el uniforme reglamentario del hospital, portar gafete de identificación vigente, zapatos cerrados y acudir al servicio con material y equipo de trabajo.",
      reference: "Página 7 - Normas y Políticas Generales",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Qué está prohibido usar dentro del hospital para limpieza?",
      options: ["Mops", "Escobas", "Franelas", "Cubetas"],
      correctAnswer: "Escobas",
      explanation:
        "No se debe hacer uso de escobas dentro del hospital, solo serán permitidas en baños y áreas externas (estacionamiento, terraza, patios).",
      reference: "Página 8 - Recomendaciones del Comité de Infecciones Nosocomiales",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Cuál es la dilución del Extran para laboratorios?",
      options: [
        "50 ml en 3 ltr de agua",
        "100 ml en 3 ltr de agua",
        "150 ml en 3 ltr de agua",
        "200 ml en 3 ltr de agua",
      ],
      correctAnswer: "100 ml en 3 ltr de agua",
      explanation:
        "El Extran, detergente universal alcalino suave, se diluye 100 ml en 3 litros de agua para laboratorios.",
      reference: "Página 10 - Tabla de Diluciones",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Cuándo se debe realizar limpieza y desinfección de camas o cunas?",
      options: [
        "Solo cuando se da de alta al paciente",
        "Solo cuando se traslada a otro servicio",
        "Cada vez que se desocupe una cama o cuna",
        "Una vez por semana",
      ],
      correctAnswer: "Cada vez que se desocupe una cama o cuna",
      explanation:
        "Cada vez que se desocupe una cama o cuna se deberá realizar limpieza y desinfección de ella, de acuerdo a su manual de procedimientos.",
      reference: "Página 9 - Recomendaciones del Comité de Infecciones Nosocomiales",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Qué debe hacer el afanador al llegar al servicio asignado?",
      options: [
        "Comenzar inmediatamente la limpieza",
        "Reportarse con la enfermera jefe de servicio",
        "Revisar el material de limpieza",
        "Leer las bitácoras",
      ],
      correctAnswer: "Reportarse con la enfermera jefe de servicio",
      explanation:
        "Al llegar al servicio asignado el personal deberá reportarse con la enfermera jefe de servicio o la enfermera encargada, así mismo informar a este cuando se ausente del lugar.",
      reference: "Página 7 - Normas y Políticas Generales",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Cuál es la cantidad de líquido para mops que se aplica directamente?",
      options: ["10 ml", "15 ml", "20 ml", "25 ml"],
      correctAnswer: "20 ml",
      explanation:
        "El líquido para mops se aplica 20 ml de aplicación directa como limpiador ideal para complementar la limpieza.",
      reference: "Página 10 - Tabla de Diluciones",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Qué debe usar el afanador para realizar cualquier técnica de limpieza?",
      options: ["Guantes de látex", "Guantes de hule de ¾ de largo", "Guantes desechables", "Guantes de nitrilo"],
      correctAnswer: "Guantes de hule de ¾ de largo",
      explanation: "El afanador debe usar guantes de hule de ¾ de largo para realizar cualquier técnica de limpieza.",
      reference: "Página 8 - Recomendaciones del Comité de Infecciones Nosocomiales",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Cuándo se debe realizar el lavado de manos?",
      options: [
        "Solo antes de cualquier procedimiento",
        "Solo después de cualquier procedimiento",
        "Antes y después de cualquier procedimiento de limpieza",
        "Solo después de quitarse los guantes",
      ],
      correctAnswer: "Antes y después de cualquier procedimiento de limpieza",
      explanation:
        "Se debe realizar lavado de manos antes y después de cualquier procedimiento de limpieza, después de quitarse los guantes.",
      reference: "Página 8 - Recomendaciones del Comité de Infecciones Nosocomiales",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Qué no se recomienda realizar de manera rutinaria según la NOM-045-SSA2-10.6.7.5?",
      options: [
        "Limpieza diaria",
        "Desinfección de superficies",
        "Clausuras de salas y fumigaciones",
        "Lavado de material",
      ],
      correctAnswer: "Clausuras de salas y fumigaciones",
      explanation:
        "No se recomienda realizar clausuras de salas, ni fumigaciones de manera rutinaria según la NOM-045-SSA2-10.6.7.5.",
      reference: "Página 9 - Recomendaciones del Comité de Infecciones Nosocomiales",
      topic: "Fundamentos y Normatividad",
    },
    {
      question: "¿Cuál es la dilución del desengrasante para cocina y mantenimiento?",
      options: ["10 ml en 1 ltr de agua", "20 ml en 1 ltr de agua", "30 ml en 1 ltr de agua", "40 ml en 1 ltr de agua"],
      correctAnswer: "20 ml en 1 ltr de agua",
      explanation: "El desengrasante líquido limpiador se diluye 20 ml en 1 litro de agua para cocina y mantenimiento.",
      reference: "Página 10 - Tabla de Diluciones",
      topic: "Fundamentos y Normatividad",
    },
  ],
  2: [
    // Clasificación de Áreas Hospitalarias
    {
      question: "¿Cuáles son las características de las áreas NO CRÍTICAS?",
      options: [
        "Tienen alto riesgo de contaminación",
        "Son áreas administrativas y externas sin el mismo riesgo de contaminación",
        "Requieren técnicas especiales de limpieza",
        "Solo incluyen quirófanos",
      ],
      correctAnswer: "Son áreas administrativas y externas sin el mismo riesgo de contaminación",
      explanation:
        "Las áreas no críticas son aquellas que por ser áreas administrativas y áreas externas no tienen el mismo riesgo de contaminación.",
      reference: "Página 11 - Clasificación de las Áreas Hospitalarias",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Cuál de las siguientes NO es un área semi crítica?",
      options: ["Medicina Interna", "Consulta externa", "CEYE", "Cocina"],
      correctAnswer: "CEYE",
      explanation:
        "CEYE es un área crítica, no semi crítica. Las áreas semi críticas incluyen Medicina Interna, Cirugía, Urgencias, Consulta externa, etc.",
      reference: "Página 14 y 18 - Clasificación de Áreas",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Qué áreas se consideran CRÍTICAS?",
      options: [
        "Entrada, escaleras, estacionamiento",
        "Medicina Interna, Cirugía, Urgencias",
        "CEYE, Hemodiálisis, UCIN, Quirófanos",
        "Oficinas administrativas, biblioteca",
      ],
      correctAnswer: "CEYE, Hemodiálisis, UCIN, Quirófanos",
      explanation:
        "Las áreas críticas incluyen CEYE, Hemodiálisis, UCIN, UCIP, Terapia intensiva, Quirófanos, Laboratorio clínico, Oncología, etc.",
      reference: "Página 18 - Clasificación de Áreas Críticas",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Por qué las áreas críticas requieren mayor cuidado?",
      options: [
        "Por su ubicación en el hospital",
        "Por su impacto de infección mediante técnica debidamente aplicada",
        "Por el número de pacientes",
        "Por el tipo de mobiliario",
      ],
      correctAnswer: "Por su impacto de infección mediante técnica debidamente aplicada",
      explanation:
        "Las áreas críticas son aquellas que por su impacto de infección debe de tener mayor cuidado en cuanto a limpieza se refiere mediante técnica debidamente aplicada.",
      reference: "Página 18 - Clasificación de Áreas Críticas",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Cuál es la característica principal de las áreas SEMI CRÍTICAS?",
      options: [
        "Tienen el mayor riesgo de infección",
        "No requieren limpieza especial",
        "Aunque están en zona de hospitalización tienen menor impacto de infección intrahospitalaria",
        "Solo incluyen áreas externas",
      ],
      correctAnswer: "Aunque están en zona de hospitalización tienen menor impacto de infección intrahospitalaria",
      explanation:
        "Las áreas semi críticas son aquellas que aunque están en zona de hospitalización tienen menor impacto de infección intrahospitalaria.",
      reference: "Página 14 - Clasificación de Áreas Semi Críticas",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Cuál de las siguientes es un área NO CRÍTICA?",
      options: ["Urgencias", "Hemodiálisis", "Biblioteca", "UCIN"],
      correctAnswer: "Biblioteca",
      explanation:
        "La biblioteca es un área no crítica junto con entrada, escaleras, estacionamiento, pasillos, sala de espera, oficinas administrativas, etc.",
      reference: "Página 11 - Áreas No Críticas",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Qué incluye el área de Oncología según la clasificación?",
      options: [
        "Solo consultorios (semi crítica)",
        "Solo hospitalización (crítica)",
        "Consultorios (semi crítica) y hospitalización (crítica)",
        "No se menciona Oncología",
      ],
      correctAnswer: "Consultorios (semi crítica) y hospitalización (crítica)",
      explanation: "Oncología aparece en consultorios como área semi crítica y en hospitalización como área crítica.",
      reference: "Página 14 y 18 - Clasificación de Áreas",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Cuál de las siguientes áreas requiere el uso de escobas?",
      options: ["Pasillos internos", "Consultorios", "Estacionamiento", "Salas de hospitalización"],
      correctAnswer: "Estacionamiento",
      explanation:
        "Las escobas solo serán permitidas en baños y áreas externas (estacionamiento, terraza, patios), no dentro del hospital.",
      reference: "Página 8 - Recomendaciones del Comité de Infecciones Nosocomiales",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Qué área incluye el Banco de leche?",
      options: ["Área crítica", "Área semi crítica", "Área no crítica", "No se especifica"],
      correctAnswer: "Área semi crítica",
      explanation: "El Banco de leche se encuentra clasificado como área semi crítica junto con cocina y otras áreas.",
      reference: "Página 14 - Áreas Semi Críticas",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Cuál es la diferencia principal entre áreas críticas y no críticas?",
      options: [
        "El tamaño del área",
        "El riesgo de contaminación e impacto de infección",
        "El número de trabajadores",
        "El horario de funcionamiento",
      ],
      correctAnswer: "El riesgo de contaminación e impacto de infección",
      explanation:
        "Las áreas no críticas no tienen el mismo riesgo de contaminación, mientras que las críticas tienen mayor impacto de infección.",
      reference: "Página 11 y 18 - Clasificación de Áreas",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Qué áreas incluyen las residencias médicas?",
      options: ["Área crítica", "Área semi crítica", "Área no crítica", "Área especial"],
      correctAnswer: "Área no crítica",
      explanation:
        "Las residencias médicas se clasifican como área no crítica junto con aulas de enseñanza, oficinas administrativas, etc.",
      reference: "Página 11 - Áreas No Críticas",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Cuál de las siguientes es un área semi crítica?",
      options: ["Laboratorio clínico", "Consulta de especialidades", "UCIP", "Depósito de cadáveres"],
      correctAnswer: "Consulta de especialidades",
      explanation:
        "La consulta de especialidades es un área semi crítica, mientras que las otras opciones son áreas críticas.",
      reference: "Página 14 - Áreas Semi Críticas",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Qué incluye el servicio de Inhaloterapia?",
      options: ["Área no crítica", "Área semi crítica", "Área crítica", "No se menciona"],
      correctAnswer: "Área crítica",
      explanation: "Inhaloterapia se encuentra clasificada como área crítica junto con CEYE, Hemodiálisis, UCIN, etc.",
      reference: "Página 18 - Áreas Críticas",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Cuáles son las aulas de enseñanza según la clasificación?",
      options: ["Área crítica", "Área semi crítica y no crítica", "Solo área no crítica", "Solo área semi crítica"],
      correctAnswer: "Área semi crítica y no crítica",
      explanation:
        "Las aulas de enseñanza aparecen tanto en áreas no críticas como en áreas semi críticas (Aprendiendo).",
      reference: "Página 11 y 14 - Clasificación de Áreas",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Qué caracteriza a las salas de espera?",
      options: [
        "Son áreas críticas por el contacto con pacientes",
        "Son áreas semi críticas por estar en hospitalización",
        "Son áreas no críticas por ser administrativas",
        "Requieren técnicas especiales de limpieza",
      ],
      correctAnswer: "Son áreas no críticas por ser administrativas",
      explanation:
        "Las salas de espera se clasifican como áreas no críticas por ser áreas administrativas y externas sin el mismo riesgo de contaminación.",
      reference: "Página 11 - Áreas No Críticas",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Cuál es el área que incluye el Depósito de cadáveres?",
      options: ["Área no crítica", "Área semi crítica", "Área crítica", "Área especial"],
      correctAnswer: "Área crítica",
      explanation: "El Depósito de cadáveres se clasifica como área crítica debido al alto riesgo de contaminación.",
      reference: "Página 18 - Áreas Críticas",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Qué incluyen los pasillos según la clasificación?",
      options: [
        "Solo área crítica",
        "Solo área no crítica",
        "Área no crítica y pueden ser parte de zona limpia/sucia en quirófanos",
        "Solo área semi crítica",
      ],
      correctAnswer: "Área no crítica y pueden ser parte de zona limpia/sucia en quirófanos",
      explanation:
        "Los pasillos generalmente son área no crítica, pero en quirófanos se clasifican como pasillos limpios (zona limpia) y pasillos sucios (zona sucia).",
      reference: "Página 11 y 26 - Clasificación y Quirófanos",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Cuál de las siguientes áreas tiene menor impacto de infección intrahospitalaria?",
      options: ["CEYE", "Medicina Interna", "Quirófanos", "UCIN"],
      correctAnswer: "Medicina Interna",
      explanation:
        "Medicina Interna es un área semi crítica que aunque está en zona de hospitalización tiene menor impacto de infección intrahospitalaria.",
      reference: "Página 14 - Áreas Semi Críticas",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Qué tipo de limpieza requieren las áreas críticas?",
      options: [
        "Limpieza básica con agua y jabón",
        "Limpieza con técnica debidamente aplicada por su impacto de infección",
        "Solo barrido diario",
        "Limpieza semanal",
      ],
      correctAnswer: "Limpieza con técnica debidamente aplicada por su impacto de infección",
      explanation:
        "Las áreas críticas requieren mayor cuidado en cuanto a limpieza se refiere mediante técnica debidamente aplicada por su impacto de infección.",
      reference: "Página 18 - Áreas Críticas",
      topic: "Clasificación de Áreas Hospitalarias",
    },
    {
      question: "¿Cuál es la clasificación del Archivo clínico?",
      options: ["Área crítica", "Área semi crítica", "Área no crítica", "Área administrativa especial"],
      correctAnswer: "Área no crítica",
      explanation:
        "El Archivo clínico se clasifica como área no crítica por ser área administrativa sin el mismo riesgo de contaminación.",
      reference: "Página 11 - Áreas No Críticas",
      topic: "Clasificación de Áreas Hospitalarias",
    },
  ],
  3: [
    // Técnicas de Limpieza y Desinfección
    {
      question: "¿Cuál es la técnica correcta para limpiar mobiliario?",
      options: [
        "De abajo hacia arriba, de afuera hacia adentro",
        "De arriba hacia abajo, de adentro hacia fuera",
        "En movimientos circulares",
        "Solo con movimientos horizontales",
      ],
      correctAnswer: "De arriba hacia abajo, de adentro hacia fuera",
      explanation:
        "La técnica correcta es limpiar de arriba hacia abajo, de adentro hacia fuera, sin regresar por la superficie ya limpiada.",
      reference: "Página 12 y 16 - Técnicas de Limpieza",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿En cuántas partes se debe doblar la franela para limpieza?",
      options: ["3 partes", "4 partes", "5 partes", "6 partes"],
      correctAnswer: "5 partes",
      explanation:
        "Se debe humedecer con agua y doblar la franela en 5 partes para realizar la limpieza de mobiliario.",
      reference: "Página 12 y 16 - Aplicación de la técnica",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Cuál es la forma correcta de movimiento al trapear?",
      options: [
        "Movimientos en línea recta",
        "Movimientos circulares",
        "Movimientos en forma de 'S'",
        "Movimientos en zigzag",
      ],
      correctAnswer: "Movimientos en forma de 'S'",
      explanation: "Se debe trapear el piso con movimiento en forma de 'S' para una limpieza efectiva.",
      reference: "Página 16 y 22 - Técnicas de limpieza",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Cuál es la técnica de limpieza para cristales?",
      options: [
        "Movimientos circulares con solución clorada",
        "Movimientos de 'S' de arriba hacia abajo con solución jabonosa",
        "Solo con agua limpia",
        "Movimientos horizontales únicamente",
      ],
      correctAnswer: "Movimientos de 'S' de arriba hacia abajo con solución jabonosa",
      explanation:
        "Los cristales se limpian con solución jabonosa, humedeciendo la franela y limpiando de arriba hacia abajo con movimiento de 'S'.",
      reference: "Página 20 y 25 - Limpieza en áreas críticas",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Cuántas cubetas se utilizan en la técnica de limpieza a tres cubetas?",
      options: ["2 cubetas", "3 cubetas", "4 cubetas", "5 cubetas"],
      correctAnswer: "3 cubetas",
      explanation:
        "La técnica utiliza 3 cubetas: cubeta 1 con solución desinfectante, cubeta 2 con agua limpia, cubeta 3 con solución jabonosa.",
      reference: "Página 21 - Técnica de limpieza a tres cubetas",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Cuál es el contenido de la cubeta 1 en la técnica de tres cubetas?",
      options: ["Agua limpia", "Solución jabonosa", "Solución clorada al 10% o desinfectante", "Solo agua"],
      correctAnswer: "Solución clorada al 10% o desinfectante",
      explanation: "En la cubeta 1 se vacía la solución clorada al 10% o desinfectante según sea el caso.",
      reference: "Página 21 - Técnica de limpieza a tres cubetas",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Cuántos ml de líquido para mops se aplican en el piso?",
      options: ["10 ml", "15 ml", "20 ml", "25 ml"],
      correctAnswer: "20 ml",
      explanation:
        "Se aplican 20 ml de líquido para mops de forma vertical en un espacio de 60 cm junto con el aserrín.",
      reference: "Página 23 - Manejo y limpieza de mops",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Cuál es la forma correcta de movimiento con el mops?",
      options: [
        "Movimientos en línea recta",
        "Movimientos en forma de 'S'",
        "Movimientos en forma de '8'",
        "Movimientos circulares",
      ],
      correctAnswer: "Movimientos en forma de '8'",
      explanation:
        "Se debe limpiar la superficie haciendo movimientos en forma de '8' de arriba hacia abajo, sacudiéndolo y arrastrando el polvo poco a poco.",
      reference: "Página 23 - Manejo y limpieza de mops",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Cómo se debe limpiar debajo del mobiliario con mops?",
      options: [
        "De afuera hacia adentro",
        "De adentro hacia afuera",
        "En movimientos circulares",
        "Solo por los bordes",
      ],
      correctAnswer: "De adentro hacia afuera",
      explanation:
        "Cuando se utilice para limpiar debajo de algún mobiliario se deben hacer movimientos de adentro hacia afuera.",
      reference: "Página 23 - Manejo y limpieza de mops",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Con qué frecuencia se debe lavar el mops?",
      options: ["Cada semana", "Cada 3 días", "Diariamente", "Cada mes"],
      correctAnswer: "Diariamente",
      explanation:
        "Al término de la jornada deberá lavarlo diariamente con solución clorada, exprimir y dejar secando.",
      reference: "Página 23 - Manejo y limpieza de mops",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Qué se debe hacer con las persianas horizontales?",
      options: [
        "Limpiar de izquierda a derecha",
        "Limpiar de derecha a izquierda",
        "Presionar de arriba hacia abajo",
        "Solo sacudir el polvo",
      ],
      correctAnswer: "Presionar de arriba hacia abajo",
      explanation:
        "Si la persiana es horizontal se debe presionar de arriba hacia abajo, si es vertical se presiona de derecha a izquierda.",
      reference: "Página 13 - Limpieza de áreas no críticas",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Cómo se deben limpiar las patas de la mesa puente?",
      options: [
        "De abajo hacia arriba",
        "De arriba hacia abajo",
        "En movimientos circulares",
        "Solo la parte superior",
      ],
      correctAnswer: "De arriba hacia abajo",
      explanation:
        "Las patas de la mesa puente se limpian de arriba hacia abajo con franela húmeda con solución clorada al 10%.",
      reference: "Página 17 - Áreas semi críticas",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Qué se debe usar para manchas difíciles?",
      options: ["Solo agua", "Fibra verde y solución jabonosa", "Solo cloro", "Detergente común"],
      correctAnswer: "Fibra verde y solución jabonosa",
      explanation:
        "En manchas difíciles se debe utilizar fibra verde y solución jabonosa, cambiando el agua cada vez que se comience con otro mueble.",
      reference: "Página 17 - Recomendación importante",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Cuándo se debe cambiar el agua durante la limpieza?",
      options: [
        "Al final del día",
        "Cada 2 horas",
        "Cada vez que se comience con otro mueble o superficie",
        "Solo cuando esté muy sucia",
      ],
      correctAnswer: "Cada vez que se comience con otro mueble o superficie",
      explanation:
        "Se debe cambiar el agua cada vez que se comience con otro mueble o superficie para mantener la efectividad de la limpieza.",
      reference: "Página 17 - Recomendación importante",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Cómo se debe limpiar la mesa de exploración?",
      options: [
        "Solo con agua",
        "Primero con solución jabonosa, luego con solución clorada",
        "Solo con solución clorada",
        "Solo con desinfectante",
      ],
      correctAnswer: "Primero con solución jabonosa, luego con solución clorada",
      explanation:
        "Se lava con solución jabonosa y cepillo de cerda suave, luego se elimina el jabón con franela húmeda en solución clorada al 10%.",
      reference: "Página 16 - Mesa de exploración",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Cuál es el espacio recomendado para aplicar líquido de mops?",
      options: ["30 cm", "45 cm", "60 cm", "90 cm"],
      correctAnswer: "60 cm",
      explanation: "Se aplica líquido para mops de forma vertical en un espacio de 60 cm junto con el aserrín.",
      reference: "Página 23 - Manejo y limpieza de mops",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Qué se debe hacer con el aserrín después de usar el mops?",
      options: [
        "Reutilizarlo",
        "Guardarlo para el día siguiente",
        "Desecharlo en la basura municipal",
        "Lavarlo y secarlo",
      ],
      correctAnswer: "Desecharlo en la basura municipal",
      explanation: "Se debe desechar el aserrín y basura acumulada en la basura municipal después de su uso.",
      reference: "Página 23 - Manejo y limpieza de mops",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Cómo se debe limpiar el área de preparación de medicamentos?",
      options: [
        "Solo cuando esté vacía",
        "En cada turno y cuando no se esté preparando medicamentos",
        "Una vez por semana",
        "Solo por las noches",
      ],
      correctAnswer: "En cada turno y cuando no se esté preparando medicamentos",
      explanation:
        "La limpieza se debe realizar en cada turno y cuando no se esté preparando medicamentos en coordinación con la enfermera encargada.",
      reference: "Página 17 - Área de preparación medicamentos",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Qué precaución se debe tener al limpiar tripees con suero?",
      options: [
        "No limpiarlos",
        "Solo limpiar las patas",
        "Tener cuidado cuando tengan suero colocado",
        "Desconectar el suero primero",
      ],
      correctAnswer: "Tener cuidado cuando tengan suero colocado",
      explanation:
        "Se debe tener cuidado cuando tengan suero colocado al limpiar los tripees con franela húmeda con solución clorada al 10%.",
      reference: "Página 17 - Tripees",
      topic: "Técnicas de Limpieza y Desinfección",
    },
    {
      question: "¿Cuál es la técnica para limpiar puertas?",
      options: [
        "Solo la superficie principal",
        "Limpiar chapas, topes y marcos, fijando con cuñas",
        "Solo los marcos",
        "Solo las chapas",
      ],
      correctAnswer: "Limpiar chapas, topes y marcos, fijando con cuñas",
      explanation:
        "Se debe limpiar chapas, topes y marcos, fijando con cuñas la puerta para evitar accidentes, usando escalera de tijera si es necesario.",
      reference: "Página 13 - Limpieza de puertas",
      topic: "Técnicas de Limpieza y Desinfección",
    },
  ],
  4: [
    // Equipos y Materiales Especializados
    {
      question: "¿Cuál es el primer paso para limpiar cómodos u orinales?",
      options: [
        "Lavarlos con jabón",
        "Introducirlos en el aparato lava cómoda y ponerlo a funcionar",
        "Aplicar cloro directamente",
        "Enjuagarlos con agua",
      ],
      correctAnswer: "Introducirlos en el aparato lava cómoda y ponerlo a funcionar",
      explanation: "El primer paso es introducir el cómodo u orinal en el aparato lava cómoda y ponerlo a funcionar.",
      reference: "Página 33 - Procedimiento para limpieza de cómodos u orinales",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Qué se debe usar para lavar cómodos después del lava cómoda?",
      options: ["Fibra verde", "Franela", "Escobillón", "Cepillo de dientes"],
      correctAnswer: "Escobillón",
      explanation:
        "Se debe lavar el cómodo con agua y jabón utilizando el escobillón hasta retirar completamente la suciedad.",
      reference: "Página 33 - Procedimiento para limpieza de cómodos",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Cómo se debe aplicar el cloro en cómodos y orinales?",
      options: [
        "Con franela húmeda",
        "Con atomizador cubriendo perfectamente todas las partes",
        "Sumergiéndolos en cloro",
        "Solo en la parte interior",
      ],
      correctAnswer: "Con atomizador cubriendo perfectamente todas las partes",
      explanation:
        "Se debe aplicar la preparación de cloro con el atomizador cubriendo perfectamente todas las partes del cómodo.",
      reference: "Página 33 - Procedimiento para limpieza de cómodos",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Se debe enjuagar el cómodo después de aplicar cloro?",
      options: [
        "Sí, siempre",
        "No, se coloca en la porta cómoda sin enjuagar",
        "Solo si está muy sucio",
        "Depende del tipo de cloro",
      ],
      correctAnswer: "No, se coloca en la porta cómoda sin enjuagar",
      explanation: "Se coloca el cómodo en la porta cómoda sin enjuagar para asegurar su desinfección.",
      reference: "Página 33 - Procedimiento para limpieza de cómodos",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Dónde se debe desechar el contenido de los riñones?",
      options: ["En cualquier lavabo", "En el lava cómodos", "En la tarja común", "En el drenaje directo"],
      correctAnswer: "En el lava cómodos",
      explanation:
        "Se debe desechar el contenido (ej. contenido gástrico) en el lava cómodos antes de proceder con la limpieza.",
      reference: "Página 34 - Procedimiento para limpieza de riñones",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Qué se debe usar para lavar riñones?",
      options: ["Escobillón", "Franela", "Fibra", "Cepillo de cerdas"],
      correctAnswer: "Fibra",
      explanation: "Se debe lavar el recipiente con agua y jabón utilizando una fibra para la limpieza de riñones.",
      reference: "Página 34 - Procedimiento para limpieza de riñones",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Para qué NO se debe utilizar el recipiente con forma de riñón?",
      options: [
        "Para contenido gástrico",
        "Para drenar las bolsas de los estomas",
        "Para medicamentos líquidos",
        "Para soluciones de limpieza",
      ],
      correctAnswer: "Para drenar las bolsas de los estomas",
      explanation: "Nunca se debe utilizar el recipiente con forma de riñón para drenar las bolsas de los estomas.",
      reference: "Página 34 - Procedimiento para limpieza de riñones",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Dónde se debe desechar el agua de los lebrillos?",
      options: ["En cualquier lavabo", "En la tarja del séptico", "En el lava cómodos", "En el drenaje común"],
      correctAnswer: "En la tarja del séptico",
      explanation: "Se debe desechar siempre el agua de los lebrillos en la tarja del séptico.",
      reference: "Página 34 - Procedimiento para limpieza de lebrillos",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Qué equipo de protección se debe usar siempre para limpiar cómodos, orinales y riñones?",
      options: ["Solo guantes", "Solo mascarilla", "Gafas para evitar salpicaduras en la cara", "Solo bata"],
      correctAnswer: "Gafas para evitar salpicaduras en la cara",
      explanation: "Para la limpieza de este equipo siempre se deben usar gafas para evitar salpicaduras en la cara.",
      reference: "Página 33 - Procedimiento para limpieza de cómodos",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Cuál es la preparación correcta de cloro líquido para 4 litros de agua?",
      options: ["20 ml de cloro", "30 ml de cloro", "40 ml de cloro", "50 ml de cloro"],
      correctAnswer: "40 ml de cloro",
      explanation:
        "En un recipiente limpio se ponen 4 litros de agua potable y se toman 40 ml de cloro líquido (10 ml por cada litro).",
      reference: "Página 31 - Preparación con cloro líquido",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Qué tipo de guantes se debe usar para preparar cloro?",
      options: ["Guantes rojos", "Guantes blancos", "Guantes desechables", "Guantes de nitrilo"],
      correctAnswer: "Guantes blancos",
      explanation: "Se deben utilizar guantes blancos antes y durante la preparación de cloro.",
      reference: "Página 31 - Preparación con cloro líquido",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿En qué orden se debe limpiar el mobiliario de pacientes con precauciones de contacto?",
      options: [
        "Primero las más contaminadas, luego las menos contaminadas",
        "Primero las menos contaminadas, luego las más contaminadas",
        "No importa el orden",
        "Solo las superficies visibles",
      ],
      correctAnswer: "Primero las menos contaminadas, luego las más contaminadas",
      explanation:
        "Se debe limpiar primero las superficies menos contaminadas (equipos, mesas, buro, biombo, gavetas) y después las más contaminadas (cama y pared).",
      reference: "Página 32 - Procedimiento para limpieza de cubículos",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Por qué no se debe mezclar detergente con cloro?",
      options: [
        "Porque es tóxico",
        "Porque el cloro pierde su efecto desinfectante",
        "Porque mancha las superficies",
        "Porque es más caro",
      ],
      correctAnswer: "Porque el cloro pierde su efecto desinfectante",
      explanation:
        "Por ningún motivo se debe mezclar detergente con cloro debido a que el cloro pierde su efecto desinfectante.",
      reference: "Página 32 - Nota importante",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Dónde se debe desechar el agua, jabón y desinfectante usado?",
      options: ["En cualquier lavabo", "En la tarja del séptico", "En el drenaje común", "En el lava cómodos"],
      correctAnswer: "En la tarja del séptico",
      explanation: "Se debe desechar el agua, jabón y desinfectante en la tarja del séptico después de la limpieza.",
      reference: "Página 32 - Procedimiento para limpieza de cubículos",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Cuándo se debe aplicar desinfectante con atomizador en cubículos?",
      options: [
        "Siempre que haya pacientes",
        "Solo por las noches",
        "Cuando el cubículo se encuentre desocupado",
        "Una vez por semana",
      ],
      correctAnswer: "Cuando el cubículo se encuentre desocupado",
      explanation:
        "Se debe aplicar desinfectante a base de cloro con atomizador cuando el cubículo se encuentre desocupado y dejar que actúe el efecto secando solo.",
      reference: "Página 32 - Procedimiento para limpieza de cubículos",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Qué se debe hacer con el equipo de limpieza antes de utilizarlo en otras áreas?",
      options: ["Solo guardarlo", "Lavarlo y desinfectarlo", "Cambiarlo por uno nuevo", "Solo secarlo"],
      correctAnswer: "Lavarlo y desinfectarlo",
      explanation:
        "Se debe lavar y desinfectar el equipo de uso para la limpieza antes de utilizarlo para otras áreas.",
      reference: "Página 32 - Procedimiento para limpieza de cubículos",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Hasta qué altura de la pared se debe limpiar primero en cubículos?",
      options: ["Hasta la rodilla", "Hasta la cintura hacia arriba", "Hasta el hombro", "Toda la pared de una vez"],
      correctAnswer: "Hasta la cintura hacia arriba",
      explanation:
        "Se debe limpiar la pared a la altura de la cintura hacia arriba primero, luego continuar con la parte de abajo de la cintura y el piso.",
      reference: "Página 32 - Procedimiento para limpieza de cubículos",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Qué tipo de guantes se debe usar para limpiar el piso en cubículos?",
      options: ["Guantes blancos", "Guantes rojos", "Guantes desechables", "Guantes de nitrilo"],
      correctAnswer: "Guantes rojos",
      explanation:
        "Para la limpieza del piso se deben utilizar guantes rojos, diferentes a los guantes blancos usados para otras superficies.",
      reference: "Página 32 - Procedimiento para limpieza de cubículos",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Cómo se debe secar el desinfectante aplicado con atomizador?",
      options: ["Con franela seca", "Con papel absorbente", "Dejar que seque solo", "Con aire comprimido"],
      correctAnswer: "Dejar que seque solo",
      explanation:
        "Se debe aplicar desinfectante con atomizador y permitir que seque solo para asegurar su efectividad.",
      reference: "Página 32 - Procedimiento para limpieza de cubículos",
      topic: "Equipos y Materiales Especializados",
    },
    {
      question: "¿Cuál es la proporción correcta de cloro por litro de agua?",
      options: ["5 ml por litro", "10 ml por litro", "15 ml por litro", "20 ml por litro"],
      correctAnswer: "10 ml por litro",
      explanation:
        "La proporción correcta es 10 ml de cloro por cada litro de agua para mantener la concentración al 10%.",
      reference: "Página 31 - Preparación con cloro líquido",
      topic: "Equipos y Materiales Especializados",
    },
  ],
  5: [
    // Procedimientos Críticos y Control
    {
      question: "¿Cuáles son las dos zonas en el área quirúrgica?",
      options: [
        "Zona estéril y zona contaminada",
        "Zona limpia y zona sucia",
        "Zona crítica y zona no crítica",
        "Zona interna y zona externa",
      ],
      correctAnswer: "Zona limpia y zona sucia",
      explanation:
        "En el área quirúrgica la limpieza se clasifica en zona limpia (salas de recuperación, áreas de lavado quirúrgico y pasillos limpios) y zona sucia (transfer y pasillos sucios).",
      reference: "Página 26 - Limpieza en áreas críticas-quirófanos",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Qué incluye la zona limpia en quirófanos?",
      options: [
        "Transfer y pasillos sucios",
        "Salas de recuperación, áreas de lavado quirúrgico y pasillos limpios",
        "Solo las salas de operación",
        "Vestidores y baños",
      ],
      correctAnswer: "Salas de recuperación, áreas de lavado quirúrgico y pasillos limpios",
      explanation: "La zona limpia incluye salas de recuperación, áreas de lavado quirúrgico y pasillos limpios.",
      reference: "Página 26 - Limpieza en áreas críticas-quirófanos",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Cuándo se realiza la limpieza terminal?",
      options: [
        "Una vez por semana",
        "Cuando se da de alta al paciente o se traslada a otro servicio",
        "Solo por las noches",
        "Cada 72 horas",
      ],
      correctAnswer: "Cuando se da de alta al paciente o se traslada a otro servicio",
      explanation:
        "La limpieza terminal se realiza cuando se da de alta al paciente o se traslada a otro servicio, previo al ingreso de otro paciente.",
      reference: "Página 26 - Limpieza terminal",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Cuál es el objetivo de la limpieza terminal?",
      options: [
        "Ahorrar tiempo de limpieza",
        "Desinfectar áreas de estancia del paciente para prevenir riesgos de infección",
        "Mantener el orden en el hospital",
        "Cumplir con las normas administrativas",
      ],
      correctAnswer: "Desinfectar áreas de estancia del paciente para prevenir riesgos de infección",
      explanation:
        "El objetivo es desinfectar áreas de estancia del paciente para prevenir riesgos de infección con periodicidad.",
      reference: "Página 26 - Limpieza terminal",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Qué incluye la limpieza profunda?",
      options: [
        "Solo pisos y paredes",
        "Pisos, paredes, muebles, techos y utensilios",
        "Solo el mobiliario",
        "Solo las superficies visibles",
      ],
      correctAnswer: "Pisos, paredes, muebles, techos y utensilios",
      explanation:
        "La limpieza profunda abarca pisos, paredes, muebles, techos y utensilios de manera programada y seccionada.",
      reference: "Página 28 - Limpieza profunda",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Cómo se debe limpiar el techo en limpieza profunda?",
      options: [
        "Con escoba seca",
        "Con franela humedecida con solución clorada al 10%",
        "Solo con agua",
        "Con aspiradora",
      ],
      correctAnswer: "Con franela humedecida con solución clorada al 10%",
      explanation:
        "Se debe sacudir el techo para eliminar el polvo y telarañas usando una franela humedecida con solución clorada al 10%.",
      reference: "Página 28 - Limpieza profunda",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Qué se debe usar para lavar canceles en limpieza profunda?",
      options: ["Solo agua", "Cepillo de cerdas y solución jabonosa", "Solo franela húmeda", "Manguera a presión"],
      correctAnswer: "Cepillo de cerdas y solución jabonosa",
      explanation:
        "Con el cepillo de cerdas y solución jabonosa se lavan los canceles, y cuando estén manchados deberán ser tallados con fibra verde.",
      reference: "Página 28 - Limpieza profunda",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Cuál es el diámetro aproximado que se debe cubrir al lavar paredes?",
      options: ["20 cm", "30 cm", "40 cm", "50 cm"],
      correctAnswer: "40 cm",
      explanation:
        "Se debe frotar las paredes de arriba hacia abajo y de derecha a izquierda cubriendo un diámetro de 40 cm aproximadamente.",
      reference: "Página 29 - Limpieza profunda",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Qué se debe hacer al final de la limpieza profunda en áreas críticas?",
      options: [
        "Solo trapear con agua",
        "Aplicar soluciones de alta desinfección",
        "Dejar secar al aire",
        "Solo barrer",
      ],
      correctAnswer: "Aplicar soluciones de alta desinfección",
      explanation:
        "Al finalizar se debe aplicar soluciones de alta desinfección con una franela húmeda en el equipo médico y posteriormente en el trapeado como desagüe final.",
      reference: "Página 29 - Limpieza profunda",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Qué se debe hacer en caso de brote epidemiológico?",
      options: [
        "Solo limpiar más frecuentemente",
        "Coordinar con Epidemiología, Coord. Médica, Enfermería y Mantenimiento",
        "Cerrar el área indefinidamente",
        "Solo aplicar más desinfectante",
      ],
      correctAnswer: "Coordinar con Epidemiología, Coord. Médica, Enfermería y Mantenimiento",
      explanation:
        "Se debe considerar la coordinación con el área de Epidemiología, Coord. Médica, Enfermería y Mantenimiento para establecer los tiempos adecuados.",
      reference: "Página 29 - Nota sobre brote epidemiológico",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Quién se encarga de retirar, lavar y colocar los plafones?",
      options: [
        "El personal de intendencia",
        "El departamento de mantenimiento",
        "El personal de enfermería",
        "Los médicos",
      ],
      correctAnswer: "El departamento de mantenimiento",
      explanation:
        "El departamento de mantenimiento se encargará de retirar, lavar y colocar los plafones durante la limpieza profunda.",
      reference: "Página 29 - Nota sobre brote epidemiológico",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Cómo se limpian los aspiradores en quirófanos?",
      options: [
        "Solo por fuera",
        "Abriendo el pase del aspirador e introduciendo la manguera en solución clorada",
        "Solo con franela seca",
        "No se limpian",
      ],
      correctAnswer: "Abriendo el pase del aspirador e introduciendo la manguera en solución clorada",
      explanation:
        "Se limpian los aspiradores abriendo el pase del aspirador, se introducen en la solución clorada al 10% para limpiar la manguera, después se retira el frasco y se lava por separado.",
      reference: "Página 26 - Limpieza en quirófanos",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Qué se debe desechar en quirófanos excepto batas y botas de hule?",
      options: ["Todo el material de limpieza", "El equipo de seguridad", "Solo los guantes", "Solo las mascarillas"],
      correctAnswer: "El equipo de seguridad",
      explanation:
        "Se debe desechar el equipo de seguridad (excepto batas y botas de hule) después de la limpieza en quirófanos.",
      reference: "Página 26 - Nota sobre quirófanos",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Qué debe incluir la limpieza terminal?",
      options: [
        "Solo la cama del paciente",
        "Lavado de paredes y canceles que hayan estado en contacto con el espacio del paciente",
        "Solo el piso",
        "Solo el mobiliario visible",
      ],
      correctAnswer: "Lavado de paredes y canceles que hayan estado en contacto con el espacio del paciente",
      explanation:
        "Se debe incluir el lavado de paredes y canceles que hayan estado en contacto con el espacio del paciente durante su hospitalización.",
      reference: "Página 28 - Limpieza profunda",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Cuál es la responsabilidad del afanador al terminar de lavar superficies?",
      options: [
        "Solo guardar el material",
        "Verificar que se encuentre perfectamente seca y libre de residuos de jabón",
        "Solo reportar que terminó",
        "Pasar al siguiente paciente",
      ],
      correctAnswer: "Verificar que se encuentre perfectamente seca y libre de residuos de jabón",
      explanation:
        "Es responsabilidad del afanador al terminar de lavar cualquier superficie, verificar que se encuentre perfectamente seca y libre de residuos de jabón.",
      reference: "Página 28 - Limpieza profunda",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Qué se debe hacer para eliminar la solución jabonosa de las paredes?",
      options: [
        "Dejar que se seque sola",
        "Eliminar con agua limpia utilizando el escurridor y/o escoba y secar con mechudo limpio",
        "Solo pasar franela seca",
        "Aplicar más jabón",
      ],
      correctAnswer: "Eliminar con agua limpia utilizando el escurridor y/o escoba y secar con mechudo limpio",
      explanation:
        "Se debe eliminar la solución jabonosa con agua limpia utilizando el escurridor y/o escoba y secarlo con un mechudo limpio, hasta que esté completamente seco.",
      reference: "Página 29 - Limpieza profunda",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Qué colores se usan en las bitácoras de control?",
      options: [
        "Negro para programado, azul para realizado",
        "Rojo para programado, azul para realizado",
        "Verde para programado, rojo para realizado",
        "Azul para programado, rojo para realizado",
      ],
      correctAnswer: "Rojo para programado, azul para realizado",
      explanation:
        "El color rojo indica programación de cada actividad y el azul realizado en las bitácoras de control.",
      reference: "Página 35 - Bitácoras de control de limpiezas",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Cada cuánto tiempo se debe realizar limpieza de camas con o sin paciente?",
      options: ["24 horas", "48 horas", "72 horas", "96 horas"],
      correctAnswer: "72 horas",
      explanation:
        "Las camas así como el contorno se debe realizar cada 72 hrs con o sin paciente para asegurar el saneamiento del área.",
      reference: "Página 35 - Nota importante",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Qué se debe etiquetar en los contenedores de punzo cortantes?",
      options: ["Solo el tipo de residuo", "Fecha de instalación y retiro", "Solo el responsable", "Solo la ubicación"],
      correctAnswer: "Fecha de instalación y retiro",
      explanation: "Se deben etiquetar los contenedores de punzo cortantes con fecha de instalación y retiro.",
      reference: "Página 35 - Nota de RPBI",
      topic: "Procedimientos Críticos y Control",
    },
    {
      question: "¿Qué se supervisa en las bitácoras de servicios generales?",
      options: [
        "Solo la limpieza básica",
        "Limpieza, lavado de tarjas, levantamiento de basura, limpieza de camas, cristales, lava cómodos y limpiezas profundas",
        "Solo el personal presente",
        "Solo los materiales utilizados",
      ],
      correctAnswer:
        "Limpieza, lavado de tarjas, levantamiento de basura, limpieza de camas, cristales, lava cómodos y limpiezas profundas",
      explanation:
        "Se supervisa limpieza, lavado de tarjas, levantamiento de basura, limpieza de camas, limpieza de vidrios, lava cómodos, y limpiezas profundas.",
      reference: "Página 35 - Bitácoras de servicios generales",
      topic: "Procedimientos Críticos y Control",
    },
  ],
}

export function getQuestionsForExam(examId: number): Question[] {
  return questionsBank[examId] || []
}
