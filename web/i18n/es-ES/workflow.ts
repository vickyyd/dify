const translation = {
  common: {
    undo: 'Deshacer',
    redo: 'Rehacer',
    editing: 'Editando',
    autoSaved: 'Guardado automático',
    unpublished: 'No publicado',
    published: 'Publicado',
    publish: 'Publicar',
    update: 'Actualizar',
    run: 'Ejecutar',
    running: 'Ejecutando',
    inRunMode: 'En modo de ejecución',
    inPreview: 'En vista previa',
    inPreviewMode: 'En modo de vista previa',
    preview: 'Vista previa',
    viewRunHistory: 'Ver historial de ejecución',
    runHistory: 'Historial de ejecución',
    goBackToEdit: 'Volver al editor',
    conversationLog: 'Registro de conversación',
    features: 'Funcionalidades',
    debugAndPreview: 'Vista previa',
    restart: 'Reiniciar',
    currentDraft: 'Borrador actual',
    currentDraftUnpublished: 'Borrador actual no publicado',
    latestPublished: 'Último publicado',
    publishedAt: 'Publicado el',
    restore: 'Restaurar',
    runApp: 'Ejecutar aplicación',
    batchRunApp: 'Ejecutar aplicación en lote',
    accessAPIReference: 'Acceder a la referencia de la API',
    embedIntoSite: 'Insertar en el sitio',
    addTitle: 'Agregar título...',
    addDescription: 'Agregar descripción...',
    noVar: 'Sin variable',
    searchVar: 'Buscar variable',
    variableNamePlaceholder: 'Nombre de la variable',
    setVarValuePlaceholder: 'Establecer variable',
    needConnectTip: 'Este paso no está conectado a nada',
    maxTreeDepth: 'Límite máximo de {{depth}} nodos por rama',
    needEndNode: 'Debe agregarse el bloque de Fin',
    needAnswerNode: 'Debe agregarse el bloque de Respuesta',
    workflowProcess: 'Proceso de flujo de trabajo',
    notRunning: 'Aún no se está ejecutando',
    previewPlaceholder: 'Ingrese contenido en el cuadro de abajo para comenzar a depurar el Chatbot',
    effectVarConfirm: {
      title: 'Eliminar variable',
      content: 'La variable se utiliza en otros nodos. ¿Aún quieres eliminarla?',
    },
    insertVarTip: 'Presiona la tecla \'/\' para insertar rápidamente',
    processData: 'Procesar datos',
    input: 'Entrada',
    output: 'Salida',
    jinjaEditorPlaceholder: 'Escribe \'/\' o \'{\' para insertar una variable',
    viewOnly: 'Solo vista',
    showRunHistory: 'Mostrar historial de ejecución',
    enableJinja: 'Habilitar soporte de plantillas Jinja',
    learnMore: 'Más información',
    copy: 'Copiar',
    duplicate: 'Duplicar',
    addBlock: 'Agregar bloque',
    pasteHere: 'Pegar aquí',
    pointerMode: 'Modo puntero',
    handMode: 'Modo mano',
    model: 'Modelo',
    workflowAsTool: 'Flujo de trabajo como herramienta',
    configureRequired: 'Configuración requerida',
    configure: 'Configurar',
    manageInTools: 'Administrar en Herramientas',
    workflowAsToolTip: 'Se requiere la reconfiguración de la herramienta después de la actualización del flujo de trabajo.',
    viewDetailInTracingPanel: 'Ver detalles',
    syncingData: 'Sincronizando datos, solo unos segundos.',
    importDSL: 'Importar DSL',
    importDSLTip: 'El borrador actual se sobrescribirá. Exporta el flujo de trabajo como respaldo antes de importar.',
    backupCurrentDraft: 'Respaldar borrador actual',
    chooseDSL: 'Elegir archivo DSL (yml)',
    overwriteAndImport: 'Sobrescribir e importar',
    importFailure: 'Error al importar',
    importSuccess: 'Importación exitosa',
    parallelTip: {
      click: {
        title: 'Clic',
        desc: 'Para agregar',
      },
      drag: {
        title: 'Arrastrar',
        desc: 'Para conectarse',
      },
      limit: 'El paralelismo se limita a {{num}} ramas.',
      depthLimit: 'Límite de capa de anidamiento paralelo de capas {{num}}',
    },
    parallelRun: 'Ejecución paralela',
    disconnect: 'Desconectar',
    jumpToNode: 'Saltar a este nodo',
    addParallelNode: 'Agregar nodo paralelo',
    parallel: 'PARALELO',
    branch: 'RAMA',
    fileUploadTip: 'Las funciones de carga de imágenes se han actualizado a la carga de archivos.',
    ImageUploadLegacyTip: 'Ahora puede crear variables de tipo de archivo en el formulario de inicio. Ya no admitiremos la función de carga de imágenes en el futuro.',
    featuresDescription: 'Mejorar la experiencia del usuario de la aplicación web',
    featuresDocLink: 'Aprende más',
  },
  env: {
    envPanelTitle: 'Variables de Entorno',
    envDescription: 'Las variables de entorno se pueden utilizar para almacenar información privada y credenciales. Son de solo lectura y se pueden separar del archivo DSL durante la exportación.',
    envPanelButton: 'Añadir Variable',
    modal: {
      title: 'Añadir Variable de Entorno',
      editTitle: 'Editar Variable de Entorno',
      type: 'Tipo',
      name: 'Nombre',
      namePlaceholder: 'nombre de env',
      value: 'Valor',
      valuePlaceholder: 'valor de env',
      secretTip: 'Se utiliza para definir información o datos sensibles, con configuraciones DSL configuradas para prevenir fugas.',
    },
    export: {
      title: '¿Exportar variables de entorno secretas?',
      checkbox: 'Exportar valores secretos',
      ignore: 'Exportar DSL',
      export: 'Exportar DSL con valores secretos',
    },
  },
  chatVariable: {
    panelTitle: 'Variables de Conversación',
    panelDescription: 'Las Variables de Conversación se utilizan para almacenar información interactiva que el LLM necesita recordar, incluyendo el historial de conversación, archivos subidos y preferencias del usuario. Son de lectura y escritura.',
    docLink: 'Visite nuestra documentación para más información.',
    button: 'Añadir Variable',
    modal: {
      title: 'Añadir Variable de Conversación',
      editTitle: 'Editar Variable de Conversación',
      name: 'Nombre',
      namePlaceholder: 'Nombre de la variable',
      type: 'Tipo',
      value: 'Valor Predeterminado',
      valuePlaceholder: 'Valor predeterminado, dejar en blanco para no establecer',
      description: 'Descripción',
      descriptionPlaceholder: 'Describa la variable',
      editInJSON: 'Editar en JSON',
      oneByOne: 'Añadir uno por uno',
      editInForm: 'Editar en Formulario',
      arrayValue: 'Valor',
      addArrayValue: 'Añadir Valor',
      objectKey: 'Clave',
      objectType: 'Tipo',
      objectValue: 'Valor Predeterminado',
    },
    storedContent: 'Contenido almacenado',
    updatedAt: 'Actualizado el ',
  },
  changeHistory: {
    title: 'Historial de cambios',
    placeholder: 'Aún no has realizado cambios',
    clearHistory: 'Borrar historial',
    hint: 'Sugerencia',
    hintText: 'Tus acciones de edición se registran en un historial de cambios, que se almacena en tu dispositivo durante esta sesión. Este historial se borrará cuando salgas del editor.',
    stepBackward_one: '{{count}} paso hacia atrás',
    stepBackward_other: '{{count}} pasos hacia atrás',
    stepForward_one: '{{count}} paso hacia adelante',
    stepForward_other: '{{count}} pasos hacia adelante',
    sessionStart: 'Inicio de sesión',
    currentState: 'Estado actual',
    nodeTitleChange: 'Se cambió el título del bloque',
    nodeDescriptionChange: 'Se cambió la descripción del bloque',
    nodeDragStop: 'Bloque movido',
    nodeChange: 'Bloque cambiado',
    nodeConnect: 'Bloque conectado',
    nodePaste: 'Bloque pegado',
    nodeDelete: 'Bloque eliminado',
    nodeAdd: 'Bloque agregado',
    nodeResize: 'Bloque redimensionado',
    noteAdd: 'Nota agregada',
    noteChange: 'Nota cambiada',
    noteDelete: 'Nota eliminada',
    edgeDelete: 'Bloque desconectado',
  },
  errorMsg: {
    fieldRequired: 'Se requiere {{field}}',
    authRequired: 'Se requiere autorización',
    invalidJson: '{{field}} no es un JSON válido',
    fields: {
      variable: 'Nombre de la variable',
      variableValue: 'Valor de la variable',
      code: 'Código',
      model: 'Modelo',
      rerankModel: 'Modelo de reordenamiento',
      visionVariable: 'Variable de visión',
    },
    invalidVariable: 'Variable no válida',
    rerankModelRequired: 'Antes de activar el modelo de reclasificación, confirme que el modelo se ha configurado correctamente en la configuración.',
  },
  singleRun: {
    testRun: 'Ejecución de prueba',
    startRun: 'Iniciar ejecución',
    running: 'Ejecutando',
    testRunIteration: 'Iteración de ejecución de prueba',
    back: 'Atrás',
    iteration: 'Iteración',
  },
  tabs: {
    'searchBlock': 'Buscar bloque',
    'blocks': 'Bloques',
    'tools': 'Herramientas',
    'allTool': 'Todos',
    'builtInTool': 'Incorporadas',
    'customTool': 'Personalizadas',
    'workflowTool': 'Flujo de trabajo',
    'question-understand': 'Entender pregunta',
    'logic': 'Lógica',
    'transform': 'Transformar',
    'utilities': 'Utilidades',
    'noResult': 'No se encontraron coincidencias',
    'searchTool': 'Herramienta de búsqueda',
  },
  blocks: {
    'start': 'Inicio',
    'end': 'Fin',
    'answer': 'Respuesta',
    'llm': 'LLM',
    'knowledge-retrieval': 'Recuperación de conocimiento',
    'question-classifier': 'Clasificador de preguntas',
    'if-else': 'SI/SINO',
    'code': 'Código',
    'template-transform': 'Plantilla',
    'http-request': 'Solicitud HTTP',
    'variable-assigner': 'Asignador de variables',
    'variable-aggregator': 'Agregador de variables',
    'assigner': 'Asignador de Variables',
    'iteration-start': 'Inicio de iteración',
    'iteration': 'Iteración',
    'parameter-extractor': 'Extractor de parámetros',
    'document-extractor': 'Extractor de documentos',
    'list-operator': 'Operador de lista',
  },
  blocksAbout: {
    'start': 'Define los parámetros iniciales para iniciar un flujo de trabajo',
    'end': 'Define el final y el tipo de resultado de un flujo de trabajo',
    'answer': 'Define el contenido de respuesta de una conversación de chat',
    'llm': 'Invoca modelos de lenguaje grandes para responder preguntas o procesar lenguaje natural',
    'knowledge-retrieval': 'Te permite consultar contenido de texto relacionado con las preguntas de los usuarios desde el conocimiento',
    'question-classifier': 'Define las condiciones de clasificación de las preguntas de los usuarios, LLM puede definir cómo progresa la conversación en función de la descripción de clasificación',
    'if-else': 'Te permite dividir el flujo de trabajo en dos ramas basadas en condiciones SI/SINO',
    'code': 'Ejecuta un fragmento de código Python o NodeJS para implementar lógica personalizada',
    'template-transform': 'Convierte datos en una cadena utilizando la sintaxis de plantillas Jinja',
    'http-request': 'Permite enviar solicitudes al servidor a través del protocolo HTTP',
    'variable-assigner': 'Agrega variables de múltiples ramas en una sola variable para configurar de manera unificada los nodos descendentes.',
    'assigner': 'El nodo de asignación de variables se utiliza para asignar valores a variables escribibles (como variables de conversación).',
    'variable-aggregator': 'Agrega variables de múltiples ramas en una sola variable para configurar de manera unificada los nodos descendentes.',
    'iteration': 'Realiza múltiples pasos en un objeto de lista hasta que se generen todos los resultados.',
    'parameter-extractor': 'Utiliza LLM para extraer parámetros estructurados del lenguaje natural para invocaciones de herramientas o solicitudes HTTP.',
    'list-operator': 'Se utiliza para filtrar u ordenar el contenido de la matriz.',
    'document-extractor': 'Se utiliza para analizar documentos cargados en contenido de texto que es fácilmente comprensible por LLM.',
  },
  operator: {
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    zoomTo50: 'Zoom al 50%',
    zoomTo100: 'Zoom al 100%',
    zoomToFit: 'Ajustar al tamaño',
  },
  panel: {
    userInputField: 'Campo de entrada del usuario',
    changeBlock: 'Cambiar bloque',
    helpLink: 'Enlace de ayuda',
    about: 'Acerca de',
    createdBy: 'Creado por ',
    nextStep: 'Siguiente paso',
    addNextStep: 'Agregar el siguiente bloque en este flujo de trabajo',
    selectNextStep: 'Seleccionar siguiente bloque',
    runThisStep: 'Ejecutar este paso',
    checklist: 'Lista de verificación',
    checklistTip: 'Asegúrate de resolver todos los problemas antes de publicar',
    checklistResolved: 'Se resolvieron todos los problemas',
    organizeBlocks: 'Organizar bloques',
    change: 'Cambiar',
    optional: '(opcional)',
  },
  nodes: {
    common: {
      outputVars: 'Variables de salida',
      insertVarTip: 'Insertar variable',
      memory: {
        memory: 'Memoria',
        memoryTip: 'Configuración de memoria de chat',
        windowSize: 'Tamaño de ventana',
        conversationRoleName: 'Nombre del rol de conversación',
        user: 'Prefijo de usuario',
        assistant: 'Prefijo de asistente',
      },
      memories: {
        title: 'Memorias',
        tip: 'Memoria de chat',
        builtIn: 'Incorporada',
      },
    },
    start: {
      required: 'requerido',
      inputField: 'Campo de entrada',
      builtInVar: 'Variables incorporadas',
      outputVars: {
        query: 'Entrada del usuario',
        memories: {
          des: 'Historial de conversación',
          type: 'tipo de mensaje',
          content: 'contenido del mensaje',
        },
        files: 'Lista de archivos',
      },
      noVarTip: 'Establece las entradas que se pueden utilizar en el flujo de trabajo',
    },
    end: {
      outputs: 'Salidas',
      output: {
        type: 'tipo de salida',
        variable: 'variable de salida',
      },
      type: {
        'none': 'Ninguno',
        'plain-text': 'Texto sin formato',
        'structured': 'Estructurado',
      },
    },
    answer: {
      answer: 'Respuesta',
      outputVars: 'Variables de salida',
    },
    llm: {
      model: 'modelo',
      variables: 'variables',
      context: 'contexto',
      contextTooltip: 'Puedes importar el conocimiento como contexto',
      notSetContextInPromptTip: 'Para habilitar la función de contexto, completa la variable de contexto en PROMPT.',
      prompt: 'indicación',
      roleDescription: {
        system: 'Proporciona instrucciones generales para la conversación',
        user: 'Proporciona instrucciones, consultas o cualquier entrada basada en texto al modelo',
        assistant: 'Las respuestas del modelo basadas en los mensajes del usuario',
      },
      addMessage: 'Agregar mensaje',
      vision: 'visión',
      files: 'Archivos',
      resolution: {
        name: 'Resolución',
        high: 'Alta',
        low: 'Baja',
      },
      outputVars: {
        output: 'Generar contenido',
        usage: 'Información de uso del modelo',
      },
      singleRun: {
        variable: 'Variable',
      },
      sysQueryInUser: 'se requiere sys.query en el mensaje del usuario',
    },
    knowledgeRetrieval: {
      queryVariable: 'Variable de consulta',
      knowledge: 'Conocimiento',
      outputVars: {
        output: 'Datos segmentados de recuperación',
        content: 'Contenido segmentado',
        title: 'Título segmentado',
        icon: 'Ícono segmentado',
        url: 'URL segmentada',
        metadata: 'Metadatos adicionales',
      },
    },
    http: {
      inputVars: 'Variables de entrada',
      api: 'API',
      apiPlaceholder: 'Ingresa la URL, escribe \'/\' para insertar una variable',
      notStartWithHttp: 'La API debe comenzar con http:// o https://',
      key: 'Clave',
      value: 'Valor',
      bulkEdit: 'Edición masiva',
      keyValueEdit: 'Edición clave-valor',
      headers: 'Encabezados',
      params: 'Parámetros',
      body: 'Cuerpo',
      outputVars: {
        body: 'Contenido de la respuesta',
        statusCode: 'Código de estado de la respuesta',
        headers: 'Lista de encabezados de respuesta en formato JSON',
        files: 'Lista de archivos',
      },
      authorization: {
        'authorization': 'Autorización',
        'authorizationType': 'Tipo de autorización',
        'no-auth': 'Ninguna',
        'api-key': 'Clave de API',
        'auth-type': 'Tipo de autenticación',
        'basic': 'Básica',
        'bearer': 'Bearer',
        'custom': 'Personalizada',
        'api-key-title': 'Clave de API',
        'header': 'Encabezado',
      },
      insertVarPlaceholder: 'escribe \'/\' para insertar una variable',
      timeout: {
        title: 'Tiempo de espera',
        connectLabel: 'Tiempo de espera de conexión',
        connectPlaceholder: 'Ingresa el tiempo de espera de conexión en segundos',
        readLabel: 'Tiempo de espera de lectura',
        readPlaceholder: 'Ingresa el tiempo de espera de lectura en segundos',
        writeLabel: 'Tiempo de espera de escritura',
        writePlaceholder: 'Ingresa el tiempo de espera de escritura en segundos',
      },
      type: 'Tipo',
      binaryFileVariable: 'Variable de archivo binario',
    },
    code: {
      inputVars: 'Variables de entrada',
      outputVars: 'Variables de salida',
      advancedDependencies: 'Dependencias avanzadas',
      advancedDependenciesTip: 'Agrega algunas dependencias precargadas que consumen más tiempo o no son incorporadas por defecto aquí',
      searchDependencies: 'Buscar dependencias',
    },
    templateTransform: {
      inputVars: 'Variables de entrada',
      code: 'Código',
      codeSupportTip: 'Solo admite Jinja2',
      outputVars: {
        output: 'Contenido transformado',
      },
    },
    ifElse: {
      if: 'Si',
      else: 'Sino',
      elseDescription: 'Se utiliza para definir la lógica que se debe ejecutar cuando no se cumple la condición del si.',
      and: 'y',
      or: 'o',
      operator: 'Operador',
      notSetVariable: 'Por favor, establece primero la variable',
      comparisonOperator: {
        'contains': 'contiene',
        'not contains': 'no contiene',
        'start with': 'comienza con',
        'end with': 'termina con',
        'is': 'es',
        'is not': 'no es',
        'empty': 'está vacío',
        'not empty': 'no está vacío',
        'null': 'es nulo',
        'not null': 'no es nulo',
        'regex match': 'Coincidencia de expresiones regulares',
        'not in': 'no en',
        'in': 'en',
        'exists': 'Existe',
        'all of': 'Todos los',
        'not exists': 'no existe',
      },
      enterValue: 'Ingresa un valor',
      addCondition: 'Agregar condición',
      conditionNotSetup: 'Condición NO configurada',
      selectVariable: 'Seleccionar variable...',
      optionName: {
        audio: 'Audio',
        image: 'Imagen',
        doc: 'Doc',
        localUpload: 'Carga local',
        video: 'Vídeo',
        url: 'URL',
      },
      select: 'Escoger',
      addSubVariable: 'Sub Variable',
    },
    variableAssigner: {
      title: 'Asignar variables',
      outputType: 'Tipo de salida',
      varNotSet: 'Variable no establecida',
      noVarTip: 'Agrega las variables que se asignarán',
      type: {
        string: 'Cadena',
        number: 'Número',
        object: 'Objeto',
        array: 'Arreglo',
      },
      aggregationGroup: 'Grupo de agregación',
      aggregationGroupTip: 'Al habilitar esta función, el agregador de variables puede agregar múltiples conjuntos de variables.',
      addGroup: 'Agregar grupo',
      outputVars: {
        varDescribe: 'Salida de {{groupName}}',
      },
      setAssignVariable: 'Establecer variable asignada',
    },
    assigner: {
      'assignedVariable': 'Variable Asignada',
      'writeMode': 'Modo de Escritura',
      'writeModeTip': 'Cuando la VARIABLE ASIGNADA es un array, el modo de anexar agrega al final.',
      'over-write': 'Sobrescribir',
      'append': 'Anexar',
      'plus': 'Más',
      'clear': 'Limpiar',
      'setVariable': 'Establecer Variable',
      'variable': 'Variable',
    },
    tool: {
      toAuthorize: 'Para autorizar',
      inputVars: 'Variables de entrada',
      outputVars: {
        text: 'Contenido generado por la herramienta',
        files: {
          title: 'Archivos generados por la herramienta',
          type: 'Tipo de soporte. Ahora solo admite imágenes',
          transfer_method: 'Método de transferencia. El valor es remote_url o local_file',
          url: 'URL de la imagen',
          upload_file_id: 'ID de archivo cargado',
        },
        json: 'JSON generado por la herramienta',
      },
    },
    questionClassifiers: {
      model: 'modelo',
      inputVars: 'Variables de entrada',
      outputVars: {
        className: 'Nombre de la clase',
      },
      class: 'Clase',
      classNamePlaceholder: 'Escribe el nombre de tu clase',
      advancedSetting: 'Configuración avanzada',
      topicName: 'Nombre del tema',
      topicPlaceholder: 'Escribe el nombre de tu tema',
      addClass: 'Agregar clase',
      instruction: 'Instrucción',
      instructionTip: 'Input additional instructions to help the question classifier better understand how to categorize questions.',
      instructionPlaceholder: 'Write your instruction',
    },
    parameterExtractor: {
      inputVar: 'Variable de entrada',
      extractParameters: 'Extraer parámetros',
      importFromTool: 'Importar desde herramientas',
      addExtractParameter: 'Agregar parámetro de extracción',
      addExtractParameterContent: {
        name: 'Nombre',
        namePlaceholder: 'Nombre del parámetro de extracción',
        type: 'Tipo',
        typePlaceholder: 'Tipo de parámetro de extracción',
        description: 'Descripción',
        descriptionPlaceholder: 'Descripción del parámetro de extracción',
        required: 'Requerido',
        requiredContent: 'El campo requerido se utiliza solo como referencia para la inferencia del modelo, y no para la validación obligatoria de la salida del parámetro.',
      },
      extractParametersNotSet: 'Parámetros de extracción no configurados',
      instruction: 'Instrucción',
      instructionTip: 'Ingrese instrucciones adicionales para ayudar al extractor de parámetros a entender cómo extraer parámetros.',
      advancedSetting: 'Configuración avanzada',
      reasoningMode: 'Modo de razonamiento',
      reasoningModeTip: 'Puede elegir el modo de razonamiento apropiado basado en la capacidad del modelo para responder a instrucciones para llamadas de funciones o indicaciones.',
      isSuccess: 'Es éxito. En caso de éxito el valor es 1, en caso de fallo el valor es 0.',
      errorReason: 'Motivo del error',
    },
    iteration: {
      deleteTitle: '¿Eliminar nodo de iteración?',
      deleteDesc: 'Eliminar el nodo de iteración eliminará todos los nodos secundarios',
      input: 'Entrada',
      output: 'Variables de salida',
      iteration_one: '{{count}} Iteración',
      iteration_other: '{{count}} Iteraciones',
      currentIteration: 'Iteración actual',
    },
    note: {
      addNote: 'Agregar nota',
      editor: {
        placeholder: 'Escribe tu nota...',
        small: 'Pequeño',
        medium: 'Mediano',
        large: 'Grande',
        bold: 'Negrita',
        italic: 'Itálica',
        strikethrough: 'Tachado',
        link: 'Enlace',
        openLink: 'Abrir',
        unlink: 'Quitar enlace',
        enterUrl: 'Introducir URL...',
        invalidUrl: 'URL inválida',
        bulletList: 'Lista de viñetas',
        showAuthor: 'Mostrar autor',
      },
    },
    tracing: {
      stopBy: 'Detenido por {{user}}',
    },
    docExtractor: {
      outputVars: {
        text: 'Texto extraído',
      },
      learnMore: 'Aprende más',
      supportFileTypes: 'Tipos de archivos de soporte: {{tipos}}.',
      inputVar: 'Variable de entrada',
    },
    listFilter: {
      outputVars: {
        first_record: 'Primer registro',
        last_record: 'Último registro',
        result: 'Filtrar resultado',
      },
      filterCondition: 'Condición del filtro',
      filterConditionComparisonValue: 'Valor de la condición de filtro',
      inputVar: 'Variable de entrada',
      desc: 'DESC',
      limit: 'Arriba N',
      filterConditionKey: 'Clave de condición de filtro',
      orderBy: 'Ordenar por',
      filterConditionComparisonOperator: 'Operador de comparación de condiciones de filtro',
      asc: 'ASC',
      selectVariableKeyPlaceholder: 'Seleccione la clave de subvariable',
    },
  },
  tracing: {
    stopBy: 'Pásate por {{usuario}}',
  },
}

export default translation
