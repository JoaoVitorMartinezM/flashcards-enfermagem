export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  theme: string
  explanation?: string
  difficulty: 'easy' | 'medium' | 'hard'
  references?: string[]
}

export const questions: Question[] = [
  {
    id: 1,
    question: "De acordo com a Lei nº 7.498/1986, que regulamenta o exercício profissional da enfermagem, é correto afirmar sobre o exercício da profissão:",
    options: [
      "É permitido o exercício da enfermagem a qualquer pessoa com curso técnico na área da saúde, independente de registro no COREN.",
      "O exercício da atividade de enfermagem é privativo do Enfermeiro, Técnico de Enfermagem, Auxiliar de Enfermagem e Parteira, respeitados os respectivos graus de habilitação e desde que inscritos no Conselho Regional de Enfermagem.",
      "Somente o Enfermeiro precisa estar inscrito no COREN para exercer suas atividades profissionais.",
      "A inscrição no COREN é opcional para Técnicos e Auxiliares de Enfermagem que atuam em instituições públicas.",
      "O exercício da enfermagem pode ser realizado por estudantes regularmente matriculados em cursos de enfermagem sem necessidade de registro."
    ],
    correctAnswer: 1,
    theme: "Lei 7.498/1986",
    explanation: "A Lei 7.498/1986 estabelece que todas as categorias profissionais (Enfermeiro, Técnico, Auxiliar e Parteira) devem estar inscritas no COREN de sua jurisdição para exercer legalmente a profissão.",
    difficulty: 'medium',
    references: ["Lei nº 7.498/1986, Art. 1º e 2º"]
  },
  {
    id: 2,
    question: "Analise as atividades descritas abaixo:\n\n1. Planejamento, organização, coordenação, execução e avaliação dos serviços da assistência de enfermagem.\n2. Consulta de enfermagem.\n3. Prescrição da assistência de enfermagem.\n4. Cuidados diretos de enfermagem a pacientes graves com risco de vida.\n5. Cuidados de enfermagem de maior complexidade técnica.\n\nSegundo o Decreto 94.406/1987, são atividades PRIVATIVAS do Enfermeiro:",
    options: [
      "Apenas as atividades 1, 2 e 3.",
      "Apenas as atividades 2, 3 e 4.",
      "Todas as atividades: 1, 2, 3, 4 e 5.",
      "Apenas as atividades 1, 3 e 5.",
      "Apenas as atividades 2, 4 e 5."
    ],
    correctAnswer: 2,
    theme: "Decreto 94.406/1987",
    explanation: "Todas essas atividades são privativas do Enfermeiro conforme Art. 8º do Decreto 94.406/1987. O Técnico em Enfermagem atua sob supervisão do Enfermeiro.",
    difficulty: 'hard',
    references: ["Decreto nº 94.406/1987, Art. 8º"]
  },
  {
    id: 3,
    question: "Em relação às atribuições do Técnico em Enfermagem, estabelecidas pelo Decreto 94.406/1987, assinale a alternativa CORRETA:",
    options: [
      "Cabe ao Técnico em Enfermagem realizar a consulta de enfermagem e prescrever medicações de rotina.",
      "O Técnico em Enfermagem pode prestar cuidados diretos a pacientes graves com risco de vida, desde que possua experiência comprovada.",
      "São atribuições do Técnico em Enfermagem: assistir ao Enfermeiro no planejamento e supervisão das atividades de assistência, executar ações assistenciais de enfermagem exceto as privativas do Enfermeiro, e participar da programação da assistência de enfermagem.",
      "O Técnico em Enfermagem tem autonomia para tomar decisões sobre cuidados de maior complexidade técnica sem supervisão do Enfermeiro.",
      "Compete ao Técnico em Enfermagem a avaliação completa do paciente e a elaboração do diagnóstico de enfermagem."
    ],
    correctAnswer: 2,
    theme: "Decreto 94.406/1987",
    explanation: "O Art. 10 do Decreto 94.406/1987 estabelece que o Técnico atua sob supervisão do Enfermeiro, executando atividades auxiliares de nível médio técnico.",
    difficulty: 'medium',
    references: ["Decreto nº 94.406/1987, Art. 10"]
  },
  {
    id: 4,
    question: "Segundo o Decreto nº 94.406/1987, são atribuições do Técnico em Enfermagem, EXCETO:",
    options: [
      "Participar da programação da assistência de enfermagem.",
      "Executar ações de tratamento simples.",
      "Participar dos programas de treinamento e aprimoramento de pessoal de saúde, particularmente nos programas de educação continuada.",
      "Prescrever a assistência de enfermagem de acordo com o plano terapêutico.",
      "Preparar o paciente para exames e tratamentos."
    ],
    correctAnswer: 3,
    theme: "Decreto 94.406/1987",
    explanation: "A prescrição da assistência de enfermagem é atividade privativa do Enfermeiro, conforme Art. 8º, alínea c do Decreto 94.406/1987.",
    difficulty: 'medium',
    references: ["Decreto nº 94.406/1987, Art. 8º e 10"]
  },
  {
    id: 5,
    question: "De acordo com a Resolução COFEN nº 564/2017 (Código de Ética dos Profissionais de Enfermagem), constitui DIREITO do profissional:",
    options: [
      "Executar prescrições de qualquer natureza, que comprometam a segurança da pessoa.",
      "Recusar-se a executar atividades que não sejam de sua competência técnica, científica, ética e legal.",
      "Realizar procedimentos sem o conhecimento e consentimento da pessoa, exceto em iminente risco de morte.",
      "Divulgar informações sobre atendimentos em redes sociais.",
      "Praticar ou ser conivente com crime, contravenção penal ou ato infringente à ética profissional."
    ],
    correctAnswer: 1,
    theme: "Código de Ética",
    explanation: "O Art. 8º da Resolução COFEN 564/2017 garante ao profissional o direito de recusar-se a executar atividades que não sejam de sua competência.",
    difficulty: 'medium',
    references: ["Resolução COFEN nº 564/2017, Art. 8º"]
  },
  {
    id: 6,
    question: "Considerando os princípios fundamentais do Código de Ética dos Profissionais de Enfermagem (Resolução COFEN 564/2017), analise as assertivas:\n\n1. A enfermagem é uma profissão comprometida com a saúde e qualidade de vida da pessoa, família e coletividade.\n2. O profissional de enfermagem deve atuar com autonomia e em consonância com os preceitos éticos e legais.\n3. O profissional de enfermagem deve respeitar a vida, a dignidade e os direitos humanos, em todas as suas dimensões.\n4. O profissional de enfermagem pode exercer suas atividades livre de discriminação apenas em relação a raça e gênero.\n\nEstão CORRETAS:",
    options: [
      "Apenas as assertivas 1 e 2.",
      "Apenas as assertivas 1, 2 e 3.",
      "Apenas as assertivas 2, 3 e 4.",
      "Apenas as assertivas 1, 3 e 4.",
      "Todas as assertivas."
    ],
    correctAnswer: 1,
    theme: "Código de Ética",
    explanation: "As assertivas 1, 2 e 3 estão corretas. A assertiva 4 está incorreta pois o profissional deve exercer suas atividades livre de qualquer tipo de discriminação (social, econômica, religiosa, política, etária, de gênero, orientação sexual, etc.), não apenas raça e gênero.",
    difficulty: 'hard',
    references: ["Resolução COFEN nº 564/2017, Princípios Fundamentais"]
  },
  {
    id: 7,
    question: "Segundo a Resolução COFEN 564/2017, são deveres do profissional de enfermagem, EXCETO:",
    options: [
      "Prestar assistência de enfermagem sem discriminação de qualquer natureza.",
      "Respeitar o pudor, a privacidade e a intimidade do ser humano, em todo seu ciclo vital.",
      "Registrar no prontuário e em outros documentos as informações inerentes e indispensáveis ao processo de cuidar.",
      "Executar prescrições medicamentosas mesmo sem certificar-se da natureza das drogas prescritas, respeitando os direitos do paciente.",
      "Comunicar formalmente ao Conselho Regional de Enfermagem e aos órgãos competentes fatos que infrinjam dispositivos legais."
    ],
    correctAnswer: 3,
    theme: "Código de Ética",
    explanation: "É PROIBIDO administrar medicamentos sem certificar-se da natureza das drogas prescritas e da existência de risco para o cliente (Art. 37 das Proibições). O item descrito é uma proibição, não um dever.",
    difficulty: 'medium',
    references: ["Resolução COFEN nº 564/2017, Art. 37"]
  },
  {
    id: 8,
    question: "Um Técnico em Enfermagem, durante seu plantão na Unidade de Terapia Intensiva, recebe uma prescrição médica para administrar um medicamento que ele desconhece. Considerando o Código de Ética dos Profissionais de Enfermagem, a conduta CORRETA do profissional é:",
    options: [
      "Administrar o medicamento conforme prescrito, pois é de responsabilidade do médico prescritor.",
      "Recusar-se a administrar o medicamento e solicitar que outro profissional o faça.",
      "Certificar-se da natureza do medicamento, da sua finalidade, dos riscos e efeitos antes de administrá-lo, consultando fontes confiáveis ou o prescritor.",
      "Administrar o medicamento e depois pesquisar sobre ele para aprender.",
      "Solicitar ao paciente que pesquise sobre o medicamento na internet antes da administração."
    ],
    correctAnswer: 2,
    theme: "Código de Ética",
    explanation: "Conforme o Art. 37 da Resolução COFEN 564/2017, é proibido administrar medicamentos sem conhecer a ação da droga e sem certificar-se da possibilidade de riscos. O profissional deve buscar informações antes de administrar.",
    difficulty: 'medium',
    references: ["Resolução COFEN nº 564/2017, Art. 37"]
  },
  {
    id: 9,
    question: "Em relação às infrações e penalidades previstas no Código de Ética dos Profissionais de Enfermagem (Resolução COFEN 564/2017), considere as seguintes afirmativas:\n\n1. A gravidade da infração é caracterizada por meio da análise da ação do profissional.\n2. As penalidades previstas são: advertência verbal, multa, censura, suspensão do exercício profissional e cassação do direito ao exercício profissional.\n3. A penalidade de cassação consiste na perda do direito ao exercício da enfermagem e é aplicada somente em casos de extrema gravidade.\n4. A reincidência em infração ética não agrava a penalidade aplicada.\n\nEstão CORRETAS as afirmativas:",
    options: [
      "1, 2 e 3, apenas.",
      "1, 2 e 4, apenas.",
      "2, 3 e 4, apenas.",
      "1, 3 e 4, apenas.",
      "Todas as afirmativas."
    ],
    correctAnswer: 0,
    theme: "Código de Ética",
    explanation: "As afirmativas 1, 2 e 3 estão corretas. A afirmativa 4 está incorreta, pois a reincidência em infração ética é considerada agravante da penalidade.",
    difficulty: 'hard',
    references: ["Resolução COFEN nº 564/2017, Art. 118 a 122"]
  },
  {
    id: 10,
    question: "Um paciente internado em uma Unidade de Pronto Atendimento solicita ao Técnico em Enfermagem uma cópia de seu prontuário. De acordo com os princípios éticos e legais, o profissional deve:",
    options: [
      "Negar o acesso ao prontuário, pois o paciente não tem direito de visualizá-lo durante a internação.",
      "Entregar o prontuário original ao paciente para que ele faça cópias.",
      "Informar ao paciente que ele tem direito de acesso às informações contidas em seu prontuário e orientá-lo sobre os procedimentos institucionais para obtenção de cópia.",
      "Fornecer as informações verbalmente, mas negar o acesso físico ao prontuário.",
      "Solicitar autorização judicial antes de permitir qualquer acesso do paciente ao seu prontuário."
    ],
    correctAnswer: 2,
    theme: "Código de Ética",
    explanation: "O paciente tem direito de acesso às informações sobre sua saúde. O profissional deve orientá-lo sobre os procedimentos corretos, geralmente através do SAME ou setor responsável.",
    difficulty: 'medium',
    references: ["Resolução COFEN nº 564/2017", "Lei nº 13.787/2018"]
  },
  {
    id: 11,
    question: "A Política Nacional de Atenção Básica (PNAB), estabelecida pela Portaria nº 2.436/2017, define a Atenção Básica como prioritária na Rede de Atenção à Saúde (RAS). Sobre as características da Atenção Básica, assinale a alternativa CORRETA:",
    options: [
      "É desenvolvida exclusivamente em Unidades Básicas de Saúde (UBS) com estrutura física padronizada.",
      "Caracteriza-se por um conjunto de ações de saúde, no âmbito individual e coletivo, que abrange promoção, prevenção, proteção, diagnóstico, tratamento, reabilitação, redução de danos e manutenção da saúde.",
      "Restringe-se a ações de promoção e prevenção, não realizando procedimentos curativos.",
      "É destinada exclusivamente ao atendimento de urgências e emergências de baixa complexidade.",
      "Realiza apenas encaminhamentos para serviços especializados, sem resolutividade própria."
    ],
    correctAnswer: 1,
    theme: "Atenção Básica",
    explanation: "A PNAB 2017 define a AB como desenvolvida com práticas de cuidado integrado e gestão qualificada, abrangendo promoção, prevenção, diagnóstico, tratamento, reabilitação e redução de danos.",
    difficulty: 'medium',
    references: ["Portaria GM/MS nº 2.436/2017"]
  },
  {
    id: 12,
    question: "Na Estratégia Saúde da Família (ESF), o Técnico em Enfermagem desenvolve ações específicas. Identifique a atribuição que NÃO compete ao Técnico em Enfermagem na ESF:",
    options: [
      "Realizar procedimentos de enfermagem dentro das suas competências técnicas.",
      "Realizar consulta de enfermagem e solicitação de exames complementares.",
      "Executar ações de educação em saúde à população adscrita.",
      "Realizar curativos, administração de medicamentos por via oral, tópica, intramuscular e endovenosa.",
      "Participar do gerenciamento dos insumos necessários para o adequado funcionamento da UBS."
    ],
    correctAnswer: 1,
    theme: "Atenção Básica",
    explanation: "A consulta de enfermagem e solicitação de exames complementares são atividades privativas do Enfermeiro, conforme Decreto 94.406/1987.",
    difficulty: 'easy',
    references: ["Portaria GM/MS nº 2.436/2017", "Decreto nº 94.406/1987"]
  },
  {
    id: 13,
    question: "O Programa Nacional de Imunização (PNI) é uma das principais ações desenvolvidas na Atenção Básica. Em relação à atuação do Técnico em Enfermagem na sala de vacinação, analise as assertivas:\n\n1. O Técnico pode administrar vacinas de acordo com o calendário vacinal, sob supervisão do Enfermeiro.\n2. Compete ao Técnico realizar a notificação de eventos adversos pós-vacinação.\n3. O Técnico tem autonomia para definir esquemas vacinais especiais sem consultar o Enfermeiro.\n4. O Técnico deve orientar os usuários sobre as vacinas, reações esperadas e cuidados.\n\nEstão CORRETAS:",
    options: [
      "1, 2 e 4, apenas.",
      "1, 2 e 3, apenas.",
      "2, 3 e 4, apenas.",
      "1, 3 e 4, apenas.",
      "Todas as assertivas."
    ],
    correctAnswer: 0,
    theme: "Atenção Básica",
    explanation: "As assertivas 1, 2 e 4 estão corretas. A assertiva 3 está incorreta pois esquemas especiais devem ser avaliados pelo Enfermeiro ou médico responsável.",
    difficulty: 'hard',
    references: ["Manual de Normas e Procedimentos para Vacinação - MS"]
  },
  {
    id: 14,
    question: "Um Técnico em Enfermagem atua em uma UPA 24h (Unidade de Pronto Atendimento), serviço de média complexidade. Durante o atendimento de um paciente com quadro de dor torácica, qual deve ser a conduta PRIORITÁRIA do profissional?",
    options: [
      "Solicitar que o paciente aguarde na sala de espera até que um médico esteja disponível.",
      "Comunicar imediatamente o Enfermeiro e/ou médico sobre o caso, manter o paciente em repouso, verificar sinais vitais e monitorar continuamente.",
      "Administrar analgésicos de rotina para aliviar a dor antes de comunicar ao médico.",
      "Orientar o paciente a procurar um cardiologista em consulta ambulatorial posterior.",
      "Realizar apenas o registro dos sinais vitais e aguardar orientação para outras condutas."
    ],
    correctAnswer: 1,
    theme: "Média Complexidade",
    explanation: "Dor torácica é sinal de alerta para emergências cardiovasculares. A comunicação imediata, repouso e monitorização são fundamentais enquanto se aguarda avaliação médica.",
    difficulty: 'medium',
    references: ["Protocolos de Urgência e Emergência"]
  },
  {
    id: 15,
    question: "Sobre a Central de Material e Esterilização (CME), serviço de apoio à média e alta complexidade, é CORRETO afirmar que compete ao Técnico em Enfermagem:",
    options: [
      "Realizar apenas a limpeza dos artigos, sendo a esterilização privativa do Enfermeiro.",
      "Executar o processamento de produtos para saúde, incluindo limpeza, desinfecção, preparo, esterilização e armazenamento, sob supervisão do Enfermeiro.",
      "Supervisionar e coordenar todas as etapas do processamento de materiais sem necessidade de supervisão.",
      "Atuar exclusivamente na distribuição de materiais estéreis às unidades.",
      "Realizar testes biológicos e liberar cargas de esterilização sem supervisão do Enfermeiro."
    ],
    correctAnswer: 1,
    theme: "Média Complexidade",
    explanation: "O Técnico executa as atividades de processamento de materiais sob supervisão do Enfermeiro, que é responsável técnico pela CME.",
    difficulty: 'medium',
    references: ["RDC ANVISA nº 15/2012"]
  },
  {
    id: 16,
    question: "Em relação à atuação do Técnico em Enfermagem no Centro Cirúrgico, identifique a assertiva INCORRETA:",
    options: [
      "Compete ao Técnico preparar a sala cirúrgica, verificando o funcionamento de equipamentos e disponibilidade de materiais.",
      "O Técnico pode atuar como circulante de sala, auxiliando a equipe cirúrgica durante o procedimento.",
      "É atribuição do Técnico realizar o registro de enfermagem no transoperatório.",
      "O Técnico tem autonomia para realizar a visita pré-operatória e planejamento da assistência de enfermagem perioperatória.",
      "O Técnico participa dos cuidados pós-operatórios imediatos, realizando monitorização de sinais vitais."
    ],
    correctAnswer: 3,
    theme: "Média Complexidade",
    explanation: "A visita pré-operatória e planejamento da assistência perioperatória são atividades privativas do Enfermeiro, conforme Resolução COFEN 543/2017.",
    difficulty: 'medium',
    references: ["Resolução COFEN nº 543/2017"]
  },
  {
    id: 17,
    question: "Na Unidade de Terapia Intensiva (UTI), serviço de alta complexidade, o Técnico em Enfermagem deve atuar sob supervisão direta e contínua do Enfermeiro. Sobre a atuação do Técnico na UTI, é CORRETO afirmar:",
    options: [
      "O Técnico pode avaliar e tomar decisões sobre alterações hemodinâmicas graves sem comunicar imediatamente ao Enfermeiro.",
      "Compete ao Técnico realizar a monitorização de parâmetros vitais, administrar medicações prescritas e comunicar prontamente alterações ao Enfermeiro.",
      "O Técnico tem autonomia para ajustar parâmetros ventilatórios de acordo com gasometrias arteriais.",
      "Cabe ao Técnico realizar a passagem de cateter venoso central e cateter de Swan-Ganz.",
      "O Técnico é responsável pela prescrição de cuidados de enfermagem aos pacientes críticos."
    ],
    correctAnswer: 1,
    theme: "Alta Complexidade",
    explanation: "Na UTI, o Técnico executa cuidados sob supervisão contínua do Enfermeiro, realizando monitorização e administração de medicações, mas sempre comunicando alterações para decisões do Enfermeiro.",
    difficulty: 'medium',
    references: ["RDC ANVISA nº 7/2010", "Decreto nº 94.406/1987"]
  },
  {
    id: 18,
    question: "Um paciente em pós-operatório imediato de cirurgia cardíaca encontra-se na UTI com diversos dispositivos: ventilação mecânica, cateter venoso central, dreno de tórax, sonda vesical de demora e monitorização hemodinâmica invasiva. Considerando as atribuições do Técnico em Enfermagem neste cenário de alta complexidade, analise as afirmativas:\n\n1. O Técnico deve verificar e registrar os sinais vitais e débito urinário em intervalos regulares.\n2. Compete ao Técnico avaliar o nível de consciência e realizar aspiração de vias aéreas quando necessário.\n3. O Técnico pode, de forma autônoma, decidir sobre o desmame da ventilação mecânica.\n4. Cabe ao Técnico comunicar imediatamente ao Enfermeiro qualquer alteração no quadro clínico do paciente.\n\nEstão CORRETAS:",
    options: [
      "1 e 4, apenas.",
      "1, 2 e 4, apenas.",
      "2, 3 e 4, apenas.",
      "1, 2 e 3, apenas.",
      "Todas as afirmativas."
    ],
    correctAnswer: 1,
    theme: "Alta Complexidade",
    explanation: "As afirmativas 1, 2 e 4 estão corretas. A afirmativa 3 está incorreta pois o desmame ventilatório é decisão do Enfermeiro e do médico, não sendo atribuição autônoma do Técnico.",
    difficulty: 'hard',
    references: ["RDC ANVISA nº 7/2010"]
  },
  {
    id: 19,
    question: "Em serviços de hemodiálise, considerado de alta complexidade, o Técnico em Enfermagem realiza atividades específicas. Assinale a alternativa que apresenta uma atribuição que NÃO compete ao Técnico em Enfermagem na hemodiálise:",
    options: [
      "Realizar a monitorização dos sinais vitais durante a sessão de hemodiálise.",
      "Puncionar acesso vascular (fístula arteriovenosa) após treinamento específico e sob supervisão.",
      "Prescrever o peso seco do paciente e os parâmetros da diálise (fluxo de sangue, tempo de sessão).",
      "Auxiliar o Enfermeiro na avaliação das condições do acesso vascular.",
      "Detectar e comunicar intercorrências durante a sessão dialítica."
    ],
    correctAnswer: 2,
    theme: "Alta Complexidade",
    explanation: "A prescrição de peso seco e parâmetros dialíticos são atribuições privativas do Enfermeiro e do médico nefrologista, não do Técnico em Enfermagem.",
    difficulty: 'medium',
    references: ["RDC ANVISA nº 11/2014", "Resolução COFEN nº 515/2016"]
  },
  {
    id: 20,
    question: "Considerando os princípios do Sistema Único de Saúde (SUS) e os níveis de atenção à saúde, avalie as seguintes afirmações sobre a atuação do Técnico em Enfermagem:\n\n1. Na Atenção Básica, o Técnico atua com foco em ações de promoção, prevenção e cuidados de menor densidade tecnológica.\n2. Na Média Complexidade, o Técnico realiza procedimentos especializados sob supervisão do Enfermeiro.\n3. Na Alta Complexidade, o Técnico pode prestar cuidados diretos a pacientes críticos, mas sempre sob supervisão direta e contínua do Enfermeiro.\n4. Em todos os níveis de atenção, o Técnico tem autonomia para realizar consulta de enfermagem e prescrever cuidados.\n\nEstão CORRETAS:",
    options: [
      "1, 2 e 3, apenas.",
      "1, 2 e 4, apenas.",
      "2, 3 e 4, apenas.",
      "1, 3 e 4, apenas.",
      "Todas as afirmações."
    ],
    correctAnswer: 0,
    theme: "Atuação no SUS",
    explanation: "As afirmações 1, 2 e 3 estão corretas. A afirmação 4 está incorreta pois consulta de enfermagem e prescrição de cuidados são privativas do Enfermeiro em todos os níveis de atenção.",
    difficulty: 'hard',
    references: ["Lei nº 7.498/1986", "Decreto nº 94.406/1987", "Portaria GM/MS nº 2.436/2017"]
  }
]
