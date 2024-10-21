const translation = {
  common: {
    undo: '元に戻す',
    redo: 'やり直し',
    editing: '編集中',
    autoSaved: '自動保存済み',
    unpublished: '未公開',
    published: '公開済み',
    publish: '公開する',
    update: '更新',
    run: '実行',
    running: '実行中',
    inRunMode: '実行モード中',
    inPreview: 'プレビュー中',
    inPreviewMode: 'プレビューモード中',
    preview: 'プレビュー',
    viewRunHistory: '実行履歴を表示',
    runHistory: '実行履歴',
    goBackToEdit: '編集に戻る',
    conversationLog: '会話ログ',
    features: '機能',
    debugAndPreview: 'プレビュー',
    restart: '再起動',
    currentDraft: '現在の下書き',
    currentDraftUnpublished: '現在の下書き（未公開）',
    latestPublished: '最新の公開済み',
    publishedAt: '公開日時',
    restore: '復元',
    runApp: 'アプリを実行',
    batchRunApp: 'バッチでアプリを実行',
    accessAPIReference: 'APIリファレンスにアクセス',
    embedIntoSite: 'サイトに埋め込む',
    addTitle: 'タイトルを追加...',
    addDescription: '説明を追加...',
    noVar: '変数なし',
    searchVar: '変数を検索',
    variableNamePlaceholder: '変数名',
    setVarValuePlaceholder: '変数を設定',
    needConnectTip: 'このステップは何にも接続されていません',
    maxTreeDepth: 'ブランチごとの最大制限は{{depth}}ノードです',
    needEndNode: '終了ブロックを追加する必要があります',
    needAnswerNode: '回答ブロックを追加する必要があります',
    workflowProcess: 'ワークフロー処理',
    notRunning: 'まだ実行されていません',
    previewPlaceholder: 'チャットボットのデバッグを開始するには、以下のボックスにコンテンツを入力してください',
    effectVarConfirm: {
      title: '変数を削除',
      content: '他のノードで変数が使用されています。それでも削除しますか？',
    },
    insertVarTip: 'クイック挿入のために\'/\'キーを押します',
    processData: 'データ処理',
    input: '入力',
    output: '出力',
    jinjaEditorPlaceholder: '変数を挿入するには「/」または「{」を入力してください',
    viewOnly: '表示のみ',
    showRunHistory: '実行履歴を表示',
    enableJinja: 'Jinjaテンプレートのサポートを有効にする',
    learnMore: '詳細を学ぶ',
    copy: 'コピー',
    duplicate: '複製',
    addBlock: 'ブロックを追加',
    pasteHere: 'ここに貼り付け',
    pointerMode: 'ポインターモード',
    handMode: 'ハンドモード',
    model: 'モデル',
    workflowAsTool: 'ツールとしてのワークフロー',
    configureRequired: '設定が必要',
    configure: '設定',
    manageInTools: 'ツールで管理',
    workflowAsToolTip: 'ワークフローの更新後、ツールの再設定が必要です。',
    viewDetailInTracingPanel: '詳細を表示',
    syncingData: 'データを同期中，数秒程度で終わります。',
    importDSL: 'DSLをインポート',
    importDSLTip: '現在のドラフトは上書きされますので、インポートする際は、事前にワークフローをバックアップとしてエクスポートいただきますよう、お願い申し上げます。',
    backupCurrentDraft: '現在のドラフトをバックアップ',
    chooseDSL: 'DSL(yml)ファイルを選択',
    overwriteAndImport: 'オーバライトとインポート',
    importFailure: 'インポート失敗',
    importSuccess: 'インポート成功',
    parallelTip: {
      click: {
        title: 'クリック',
        desc: '追加する',
      },
      drag: {
        title: 'ドラッグ',
        desc: '接続するには',
      },
      limit: '並列処理は {{num}} ブランチに制限されています。',
      depthLimit: '{{num}}レイヤーの平行ネストレイヤーの制限',
    },
    parallelRun: 'パラレルラン',
    disconnect: '切る',
    jumpToNode: 'このノードにジャンプします',
    addParallelNode: '並列ノードを追加',
    parallel: '並列',
    branch: 'ブランチ',
    fileUploadTip: '画像のアップロード機能がファイルのアップロードにアップグレードされました。',
    featuresDocLink: '詳細情報',
    ImageUploadLegacyTip: 'これで、開始フォームでファイルタイプ変数を作成できるようになりました。今後、画像のアップロード機能のサポートは終了いたします。',
    featuresDescription: 'Webアプリのユーザーエクスペリエンスを強化',
  },
  env: {
    envPanelTitle: '環境変数',
    envDescription: '環境変数は、個人情報や認証情報を格納するために使用することができます。これらは読み取り専用であり、DSLファイルからエクスポートする際には分離されます。',
    envPanelButton: '環境変数を追加',
    modal: {
      title: '環境変数を追加',
      editTitle: '環境変数を編集',
      type: 'タイプ',
      name: '名前',
      namePlaceholder: '変数名',
      value: '値',
      valuePlaceholder: '変数値',
      secretTip: 'このような機密情報やデータは、定義に使用され、DSLの設定は情報漏洩を防ぐために特別に構成されています。',
    },
    export: {
      title: 'シークレット環境変数をエクスポートしますか？',
      checkbox: 'シークレット値をエクスポート',
      ignore: 'DSLをエクスポート',
      export: 'シークレット値を含むDSLをエクスポート',
    },
  },
  chatVariable: {
    panelTitle: '会話変数',
    panelDescription: '会話変数は、LLMが記憶すべき対話情報を保存するために使用されます。この情報には、対話の履歴、アップロードされたファイル、ユーザーの好みなどが含まれます。読み書きが可能です。',
    docLink: '詳しくはドキュメントをご覧ください。',
    button: '変数を追加',
    modal: {
      title: '会話変数を追加',
      editTitle: '会話変数を編集',
      name: '名前',
      namePlaceholder: '変数名前',
      type: 'タイプ',
      value: 'デフォルト値',
      valuePlaceholder: 'デフォルト値、設定しない場合は空白にしでください',
      description: '説明',
      descriptionPlaceholder: '変数の説明',
      editInJSON: 'JSONで編集する',
      oneByOne: '次々に追加する',
      editInForm: 'フォームで編集',
      arrayValue: '値',
      addArrayValue: '値を追加',
      objectKey: 'キー',
      objectType: 'タイプ',
      objectValue: 'デフォルト値',
    },
    storedContent: '保存されたコンテンツ',
    updatedAt: '更新日は',
  },
  changeHistory: {
    title: '変更履歴',
    placeholder: 'まだ何も変更していません',
    clearHistory: '履歴をクリア',
    hint: 'ヒント',
    hintText: '編集アクションは変更履歴に記録され、このセッションの間にデバイスに保存されます。エディターを終了すると、この履歴は消去されます。',
    stepBackward_one: '{{count}} ステップ後退',
    stepBackward_other: '{{count}} ステップ後退',
    stepForward_one: '{{count}} ステップ前進',
    stepForward_other: '{{count}} ステップ前進',
    sessionStart: 'セッション開始',
    currentState: '現在の状態',
    nodeTitleChange: 'ブロックのタイトルが変更されました',
    nodeDescriptionChange: 'ブロックの説明が変更されました',
    nodeDragStop: 'ブロックが移動されました',
    nodeChange: 'ブロックが変更されました',
    nodeConnect: 'ブロックが接続されました',
    nodePaste: 'ブロックが貼り付けられました',
    nodeDelete: 'ブロックが削除されました',
    nodeAdd: 'ブロックが追加されました',
    nodeResize: 'ブロックがリサイズされました',
    noteAdd: 'ノートが追加されました',
    noteChange: 'ノートが変更されました',
    noteDelete: 'ノートが削除されました',
    edgeDelete: 'ブロックが切断されました',
  },
  errorMsg: {
    fieldRequired: '{{field}}は必須です',
    authRequired: '認証が必要です',
    invalidJson: '{{field}}は無効です',
    fields: {
      variable: '変数名',
      variableValue: '変数値',
      code: 'コード',
      model: 'モデル',
      rerankModel: 'Rerankモデル',
      visionVariable: 'ビジョン変数',
    },
    invalidVariable: '無効な変数',
    rerankModelRequired: 'モデルの再ランク付けをオンにする前に、モデルが設定で正常に構成されていることを確認してください。',
  },
  singleRun: {
    testRun: 'テスト実行',
    startRun: '実行を開始',
    running: '実行中',
    testRunIteration: 'テスト実行イテレーション',
    back: '戻る',
    iteration: 'イテレーション',
  },
  tabs: {
    'searchBlock': 'ブロックを検索',
    'blocks': 'ブロック',
    'searchTool': '検索ツール',
    'tools': 'ツール',
    'allTool': 'すべて',
    'workflowTool': 'ワークフロー',
    'builtInTool': '組み込み',
    'customTool': 'カスタム',
    'question-understand': '質問の理解',
    'logic': 'ロジック',
    'transform': '変換',
    'utilities': 'ユーティリティ',
    'noResult': '一致するものが見つかりませんでした',
  },
  blocks: {
    'start': '開始',
    'end': '終了',
    'answer': '回答',
    'llm': 'LLM',
    'knowledge-retrieval': '知識取得',
    'question-classifier': '質問分類器',
    'if-else': 'IF/ELSE',
    'code': 'コード',
    'template-transform': 'テンプレート',
    'http-request': 'HTTPリクエスト',
    'variable-assigner': '変数代入器',
    'variable-aggregator': '変数集約器',
    'assigner': '変数代入',
    'iteration-start': 'イテレーション開始',
    'iteration': 'イテレーション',
    'parameter-extractor': 'パラメーター抽出',
    'document-extractor': 'ドキュメントエクストラクター',
    'list-operator': 'リスト演算子',
  },
  blocksAbout: {
    'start': 'ワークフローの開始に必要なパラメータを定義します',
    'end': 'ワークフローの終了と結果のタイプを定義します',
    'answer': 'チャット会話の応答内容を定義します',
    'llm': '大規模言語モデルを呼び出して質問に回答したり、自然言語を処理したりします',
    'knowledge-retrieval': 'ユーザーの質問に関連するテキストコンテンツを知識からクエリできるようにします',
    'question-classifier': 'ユーザーの質問の分類条件を定義し、LLMは分類記述に基づいて会話がどのように進行するかを定義できます',
    'if-else': 'IF/ELSE条件に基づいてワークフローを2つのブランチに分割できます',
    'code': 'カスタムロジックを実装するためにPythonまたはNodeJSコードを実行します',
    'template-transform': 'Jinjaテンプレート構文を使用してデータを文字列に変換します',
    'http-request': 'HTTPプロトコル経由でサーバーリクエストを送信できます',
    'variable-assigner': '複数のブランチの変数を1つの変数に集約し、下流のノードに対して統一された設定を行います。',
    'assigner': '変数代入ノードは、書き込み可能な変数（例えば、会話変数）に値を割り当てるために使用されます。',
    'variable-aggregator': '複数のブランチの変数を1つの変数に集約し、下流のノードに対して統一された設定を行います。',
    'iteration': 'リストオブジェクトに対して複数のステップを実行し、すべての結果が出力されるまで繰り返します。',
    'parameter-extractor': '自然言語からツールの呼び出しやHTTPリクエストのための構造化されたパラメーターを抽出するためにLLMを使用します。',
    'document-extractor': 'アップロードされたドキュメントを LLM で簡単に理解できるテキスト コンテンツに解析するために使用されます。',
    'list-operator': '配列のコンテンツをフィルタリングまたはソートするために使用されます。',
  },
  operator: {
    zoomIn: '拡大',
    zoomOut: '縮小',
    zoomTo50: '50％にズーム',
    zoomTo100: '100％にズーム',
    zoomToFit: 'フィットにズーム',
  },
  panel: {
    userInputField: 'ユーザー入力フィールド',
    changeBlock: 'ブロックを変更',
    helpLink: 'ヘルプリンク',
    about: '情報',
    createdBy: '作成者 ',
    nextStep: '次のステップ',
    addNextStep: 'このワークフローで次のブロックを追加',
    selectNextStep: '次のブロックを選択',
    runThisStep: 'このステップを実行',
    checklist: 'チェックリスト',
    checklistTip: '公開する前にすべての問題が解決されていることを確認してください',
    checklistResolved: 'すべての問題が解決されました',
    organizeBlocks: 'ブロックを整理',
    change: '変更',
    optional: '(オプション)',
  },
  nodes: {
    common: {
      outputVars: '出力変数',
      insertVarTip: '変数を挿入',
      memory: {
        memory: 'メモリ',
        memoryTip: 'チャットメモリ設定',
        windowSize: 'ウィンドウサイズ',
        conversationRoleName: '会話ロール名',
        user: 'ユーザー接頭辞',
        assistant: 'アシスタント接頭辞',
      },
      memories: {
        title: 'メモリ',
        tip: 'チャットメモリ',
        builtIn: '組み込み',
      },
    },
    start: {
      required: '必須',
      inputField: '入力フィールド',
      builtInVar: '組み込み変数',
      outputVars: {
        query: 'ユーザー入力',
        memories: {
          des: '会話履歴',
          type: 'メッセージタイプ',
          content: 'メッセージ内容',
        },
        files: 'ファイルリスト',
      },
      noVarTip: 'ワークフローで使用できる入力を設定します',
    },
    end: {
      outputs: '出力',
      output: {
        type: '出力タイプ',
        variable: '出力変数',
      },
      type: {
        'none': 'なし',
        'plain-text': 'プレーンテキスト',
        'structured': '構造化',
      },
    },
    answer: {
      answer: '回答',
      outputVars: '出力変数',
    },
    llm: {
      model: 'モデル',
      variables: '変数',
      context: 'コンテキスト',
      contextTooltip: 'コンテキストとして知識をインポートできます',
      notSetContextInPromptTip: 'コンテキスト機能を有効にするには、PROMPTにコンテキスト変数を記入してください。',
      prompt: 'プロンプト',
      roleDescription: {
        system: '会話の高レベルな命令を与えます',
        user: 'モデルへの指示、クエリ、またはテキストベースの入力を提供します',
        assistant: 'ユーザーメッセージに基づいてモデルの応答',
      },
      addMessage: 'メッセージを追加',
      vision: 'ビジョン',
      files: 'ファイル',
      resolution: {
        name: '解像度',
        high: '高い',
        low: '低い',
      },
      outputVars: {
        output: 'コンテンツを生成',
        usage: 'モデルの使用情報',
      },
      singleRun: {
        variable: '変数',
      },
      sysQueryInUser: 'ユーザーメッセージにsys.queryが必要です',
    },
    knowledgeRetrieval: {
      queryVariable: 'クエリ変数',
      knowledge: 'ナレッジ',
      outputVars: {
        output: '検索されたセグメント化されたデータ',
        content: 'セグメント化されたコンテンツ',
        title: 'セグメント化されたタイトル',
        icon: 'セグメント化されたアイコン',
        url: 'セグメント化されたURL',
        metadata: 'その他のメタデータ',
      },
    },
    http: {
      inputVars: '入力変数',
      api: 'API',
      apiPlaceholder: 'URLを入力、「/」を入力して変数を挿入',
      notStartWithHttp: 'APIはhttp://またはhttps://で始まる必要があります',
      key: 'キー',
      value: '値',
      bulkEdit: '一括編集',
      keyValueEdit: 'キー-値の編集',
      headers: 'ヘッダー',
      params: 'パラメータ',
      body: 'ボディ',
      outputVars: {
        body: 'レスポンスコンテンツ',
        statusCode: 'レスポンスステータスコード',
        headers: 'レスポンスヘッダーリストJSON',
        files: 'ファイルリスト',
      },
      authorization: {
        'authorization': '認証',
        'authorizationType': '認証タイプ',
        'no-auth': 'なし',
        'api-key': 'APIキー',
        'auth-type': '認証タイプ',
        'basic': '基本',
        'bearer': 'Bearer',
        'custom': 'カスタム',
        'api-key-title': 'APIキー',
        'header': 'ヘッダー',
      },
      insertVarPlaceholder: '変数を挿入するには\'/\'を入力してください',
      timeout: {
        title: 'タイムアウト',
        connectLabel: '接続タイムアウト',
        connectPlaceholder: '接続タイムアウトを秒で入力',
        readLabel: '読み取りタイムアウト',
        readPlaceholder: '読み取りタイムアウトを秒で入力',
        writeLabel: '書き込みタイムアウト',
        writePlaceholder: '書き込みタイムアウトを秒で入力',
      },
      type: '種類',
      binaryFileVariable: 'バイナリファイル変数',
    },
    code: {
      inputVars: '入力変数',
      outputVars: '出力変数',
      advancedDependencies: '高度な依存関係',
      advancedDependenciesTip: '消費に時間がかかる、またはデフォルトで組み込まれていない事前ロードされた依存関係を追加します',
      searchDependencies: '依存関係を検索',
    },
    templateTransform: {
      inputVars: '入力変数',
      code: 'コード',
      codeSupportTip: 'Jinja2のみをサポートしています',
      outputVars: {
        output: '変換されたコンテンツ',
      },
    },
    ifElse: {
      if: 'もし',
      else: 'それ以外',
      elseDescription: 'IF条件が満たされない場合に実行するロジックを定義します。',
      and: 'かつ',
      or: 'または',
      operator: '演算子',
      notSetVariable: 'まず変数を設定してください',
      comparisonOperator: {
        'contains': '含む',
        'not contains': '含まない',
        'start with': 'で始まる',
        'end with': 'で終わる',
        'is': 'である',
        'is not': 'でない',
        'empty': '空',
        'not empty': '空でない',
        'null': 'null',
        'not null': 'nullでない',
        'regex match': '正規表現マッチ',
        'in': 'で',
        'not exists': '存在しません',
        'exists': '存在',
        'not in': '含まれていない',
        'all of': 'すべての',
      },
      enterValue: '値を入力',
      addCondition: '条件を追加',
      conditionNotSetup: '条件が設定されていません',
      selectVariable: '変数を選択...',
      optionName: {
        audio: 'オーディオ',
        localUpload: 'ローカルアップロード',
        image: '画像',
        video: 'ビデオ',
        doc: 'ドキュメント',
        url: 'URL',
      },
      select: '選ぶ',
      addSubVariable: 'サブ変数',
    },
    variableAssigner: {
      title: '変数を代入する',
      outputType: '出力タイプ',
      outputVarType: '出力変数のタイプ',
      varNotSet: '変数が設定されていません',
      noVarTip: '代入された変数を追加してください',
      type: {
        string: '文字列',
        number: '数値',
        object: 'オブジェクト',
        array: '配列',
      },
      aggregationGroup: 'グループ',
      aggregationGroupTip: 'この機能を有効にすると、変数集約器は複数のセットの変数を集約できます。',
      addGroup: 'グループを追加',
      outputVars: {
        varDescribe: '{{groupName}} 出力',
      },
      setAssignVariable: '代入された変数を設定',
    },
    assigner: {
      'assignedVariable': '代入された変数',
      'writeMode': '書き込みモード',
      'writeModeTip': '代入された変数が配列の場合, 末尾に追記モードを追加する。',
      'over-write': '上書き',
      'append': '追記',
      'plus': 'プラス',
      'clear': 'クリア',
      'setVariable': '変数を設定する',
      'variable': '変数',
    },
    tool: {
      toAuthorize: '承認するには',
      inputVars: '入力変数',
      outputVars: {
        text: 'ツールが生成したコンテンツ',
        files: {
          title: 'ツールが生成したファイル',
          type: 'サポートタイプ。現在は画像のみサポートされています',
          transfer_method: '転送方法。値はremote_urlまたはlocal_fileです',
          url: '画像URL',
          upload_file_id: 'アップロードファイルID',
        },
        json: 'ツールで生成されたJSON',
      },
    },
    questionClassifiers: {
      model: 'モデル',
      inputVars: '入力変数',
      outputVars: {
        className: 'クラス名',
      },
      class: 'クラス',
      classNamePlaceholder: 'クラス名を入力してください',
      advancedSetting: '高度な設定',
      topicName: 'トピック名',
      topicPlaceholder: 'トピック名を入力してください',
      addClass: 'クラスを追加',
      instruction: '指示',
      instructionTip: '質問分類器が質問をどのように分類するかをよりよく理解するための追加の指示を入力します。',
      instructionPlaceholder: '指示を入力してください',
    },
    parameterExtractor: {
      inputVar: '入力変数',
      extractParameters: 'パラメーターを抽出',
      importFromTool: 'ツールからインポート',
      addExtractParameter: '抽出パラメーターを追加',
      addExtractParameterContent: {
        name: '名前',
        namePlaceholder: '抽出パラメーター名',
        type: 'タイプ',
        typePlaceholder: '抽出パラメータータイプ',
        description: '説明',
        descriptionPlaceholder: '抽出パラメーターの説明',
        required: '必須',
        requiredContent: '必須はモデル推論の参考としてのみ使用され、パラメーター出力の必須検証には使用されません。',
      },
      extractParametersNotSet: '抽出パラメーターが設定されていません',
      instruction: '指示',
      instructionTip: 'パラメーター抽出器がパラメーターを抽出する方法を理解するのに役立つ追加の指示を入力します。',
      advancedSetting: '高度な設定',
      reasoningMode: '推論モード',
      reasoningModeTip: '関数呼び出しやプロンプトの指示に応答するモデルの能力に基づいて、適切な推論モードを選択できます。',
      isSuccess: '成功。成功した場合の値は1、失敗した場合の値は0です。',
      errorReason: 'エラーの理由',
    },
    iteration: {
      deleteTitle: 'イテレーションノードを削除しますか？',
      deleteDesc: 'イテレーションノードを削除すると、すべての子ノードが削除されます',
      input: '入力',
      output: '出力変数',
      iteration_one: '{{count}} イテレーション',
      iteration_other: '{{count}} イテレーション',
      currentIteration: '現在のイテレーション',
    },
    note: {
      addNote: 'コメントを追加',
      editor: {
        placeholder: 'メモを書く...',
        small: '小',
        medium: '中',
        large: '大',
        bold: '太字',
        italic: '斜体',
        strikethrough: '打ち消し線',
        link: 'リンク',
        openLink: '開く',
        unlink: 'リンクをキャンセル',
        enterUrl: 'リンク入力中...',
        invalidUrl: 'リンク無効',
        bulletList: 'リスト',
        showAuthor: '著者を表示する',
      },
    },
    docExtractor: {
      outputVars: {
        text: '抽出されたテキスト',
      },
      inputVar: '入力変数',
      learnMore: '詳細情報',
      supportFileTypes: 'サポートするファイルタイプ: {{types}}。',
    },
    listFilter: {
      outputVars: {
        last_record: '最後のレコード',
        first_record: '最初のレコード',
        result: 'フィルター結果',
      },
      limit: 'トップN',
      asc: 'ASCの',
      filterCondition: 'フィルター条件',
      filterConditionKey: 'フィルター条件キー',
      orderBy: '注文順',
      filterConditionComparisonValue: 'フィルター条件の値',
      selectVariableKeyPlaceholder: 'サブ変数キーの選択',
      filterConditionComparisonOperator: 'フィルター条件比較演算子',
      inputVar: '入力変数',
      desc: 'DESC',
    },
  },
  tracing: {
    stopBy: '{{user}}によって停止',
  },
}

export default translation
