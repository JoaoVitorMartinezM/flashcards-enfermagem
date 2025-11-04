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
  },
  {
    id: 21,
    question: "De acordo com a Lei nº 8.080/1990 (Lei Orgânica da Saúde), são princípios do Sistema Único de Saúde (SUS):",
    options: [
      "Centralização, hierarquização e regionalização.",
      "Universalidade de acesso, integralidade de assistência e equidade.",
      "Atendimento prioritário a pacientes particulares e conveniados.",
      "Descentralização apenas administrativa, mantendo centralização dos recursos.",
      "Participação exclusiva do governo federal na gestão da saúde."
    ],
    correctAnswer: 1,
    theme: "Lei 8.080/1990",
    explanation: "A Lei 8.080/1990 estabelece como princípios fundamentais do SUS a universalidade (acesso para todos), integralidade (atenção em todos os níveis) e equidade (atenção conforme necessidades).",
    difficulty: 'medium',
    references: ["Lei nº 8.080/1990, Art. 7º"]
  },
  {
    id: 22,
    question: "A Lei nº 8.142/1990 dispõe sobre a participação da comunidade na gestão do SUS. Sobre as instâncias de controle social, assinale a alternativa CORRETA:",
    options: [
      "Os Conselhos de Saúde têm caráter apenas consultivo, sem poder deliberativo.",
      "A Conferência de Saúde deve se reunir semanalmente para avaliar a situação de saúde.",
      "O Conselho de Saúde tem caráter permanente e deliberativo, com representação paritária de usuários em relação aos demais segmentos.",
      "Apenas profissionais de saúde podem participar dos Conselhos de Saúde.",
      "As decisões do Conselho de Saúde dependem de homologação do Poder Judiciário."
    ],
    correctAnswer: 2,
    theme: "Lei 8.142/1990",
    explanation: "A Lei 8.142/1990 estabelece que os Conselhos de Saúde têm caráter permanente e deliberativo, com 50% de representação de usuários e 50% dos demais segmentos (governo, profissionais e prestadores).",
    difficulty: 'medium',
    references: ["Lei nº 8.142/1990, Art. 1º"]
  },
  {
    id: 23,
    question: "Sobre a vigilância epidemiológica, conforme definida pela Lei nº 8.080/1990, analise as assertivas:\n\n1. É um conjunto de ações que proporcionam o conhecimento e a detecção de mudanças nos fatores determinantes da saúde individual e coletiva.\n2. Suas ações incluem coleta, processamento, análise e interpretação de dados.\n3. Visa recomendar e adotar medidas de prevenção e controle de doenças.\n4. Restringe-se apenas ao controle de doenças infecciosas.\n\nEstão CORRETAS:",
    options: [
      "1, 2 e 3, apenas.",
      "1, 2 e 4, apenas.",
      "2, 3 e 4, apenas.",
      "1, 3 e 4, apenas.",
      "Todas as assertivas."
    ],
    correctAnswer: 0,
    theme: "Vigilância em Saúde",
    explanation: "As assertivas 1, 2 e 3 estão corretas. A assertiva 4 está incorreta pois a vigilância epidemiológica não se restringe apenas a doenças infecciosas, incluindo também doenças crônicas e agravos.",
    difficulty: 'hard',
    references: ["Lei nº 8.080/1990, Art. 6º, § 2º"]
  },
  {
    id: 24,
    question: "Em relação aos Equipamentos de Proteção Individual (EPIs) utilizados por profissionais de enfermagem, é CORRETO afirmar:",
    options: [
      "O uso de EPIs é opcional, dependendo da preferência do profissional.",
      "Luvas de procedimento dispensam a lavagem das mãos antes e após seu uso.",
      "Os EPIs devem ser fornecidos gratuitamente pelo empregador e utilizados conforme os riscos da atividade.",
      "Máscaras cirúrgicas podem ser reutilizadas se lavadas adequadamente.",
      "Óculos de proteção são necessários apenas em cirurgias de grande porte."
    ],
    correctAnswer: 2,
    theme: "Segurança no Trabalho",
    explanation: "A NR-32 estabelece que os EPIs devem ser fornecidos gratuitamente pelo empregador e utilizados conforme os riscos, sendo obrigatório seu uso para proteção do profissional.",
    difficulty: 'easy',
    references: ["NR-32", "Lei nº 8.080/1990"]
  },
  {
    id: 25,
    question: "Um Técnico em Enfermagem verifica os sinais vitais de um paciente adulto e obtém os seguintes valores: PA: 180x110 mmHg, FC: 110 bpm, FR: 24 irpm, Tax: 37,2°C. Sobre estes valores, é CORRETO afirmar:",
    options: [
      "Todos os valores estão dentro da normalidade para um adulto.",
      "Apenas a pressão arterial está alterada, indicando hipertensão arterial.",
      "A pressão arterial, frequência cardíaca e frequência respiratória estão alteradas, indicando urgência hipertensiva.",
      "Apenas a temperatura está alterada, indicando processo infeccioso grave.",
      "Os valores indicam hipotensão e bradicardia."
    ],
    correctAnswer: 2,
    theme: "Fundamentos de Enfermagem",
    explanation: "PA normal: até 120x80 mmHg (alterada); FC normal: 60-100 bpm (alterada - taquicardia); FR normal: 12-20 irpm (alterada - taquipneia); Tax normal: 36-37,5°C (normal). O quadro sugere urgência hipertensiva.",
    difficulty: 'medium',
    references: ["Protocolo de Urgência e Emergência"]
  },
  {
    id: 26,
    question: "Em relação à administração de medicamentos por via intramuscular (IM), assinale a alternativa que apresenta a técnica CORRETA:",
    options: [
      "A região dorsoglútea é a mais indicada para crianças menores de 2 anos.",
      "A agulha deve ser introduzida em ângulo de 45 graus em relação à pele.",
      "Após introduzir a agulha, deve-se aspirar para verificar se atingiu vaso sanguíneo antes de injetar o medicamento.",
      "O volume máximo recomendado para a região ventroglútea é de 10 mL.",
      "Não é necessário realizar antissepsia da pele antes da administração."
    ],
    correctAnswer: 2,
    theme: "Fundamentos de Enfermagem",
    explanation: "A técnica correta de administração IM inclui aspiração para verificar retorno venoso. A agulha deve ser introduzida em 90 graus, e o volume máximo na região ventroglútea é de 5 mL.",
    difficulty: 'medium',
    references: ["Manual de Administração de Medicamentos - MS"]
  },
  {
    id: 27,
    question: "Sobre os cuidados com feridas e curativos, considere as seguintes afirmativas:\n\n1. A limpeza da ferida deve ser realizada do centro para as bordas, do local menos contaminado para o mais contaminado.\n2. Soro fisiológico 0,9% é a solução de escolha para limpeza de feridas.\n3. Curativos oclusivos devem ser trocados apenas quando saturados, independentemente do tempo.\n4. Feridas infectadas devem ser cobertas com curativo úmido para favorecer a cicatrização.\n\nEstão CORRETAS:",
    options: [
      "1 e 2, apenas.",
      "1, 2 e 4, apenas.",
      "2, 3 e 4, apenas.",
      "1, 2 e 3, apenas.",
      "Todas as afirmativas."
    ],
    correctAnswer: 0,
    theme: "Fundamentos de Enfermagem",
    explanation: "As afirmativas 1 e 2 estão corretas. A afirmativa 3 está incorreta pois curativos devem ser trocados conforme protocolo, geralmente a cada 24-48h. A afirmativa 4 está incorreta pois feridas infectadas requerem avaliação para tipo de curativo apropriado.",
    difficulty: 'hard',
    references: ["Protocolo de Tratamento de Feridas - MS"]
  },
  {
    id: 28,
    question: "Em uma situação de parada cardiorrespiratória (PCR) em adulto, qual é a sequência CORRETA de atendimento conforme as diretrizes de Suporte Básico de Vida?",
    options: [
      "Verificar consciência, acionar emergência, iniciar ventilações de resgate.",
      "Verificar consciência, acionar emergência, iniciar compressões torácicas na frequência de 100-120/min com profundidade de 5-6 cm.",
      "Iniciar compressões torácicas, verificar pulso carotídeo, acionar emergência.",
      "Realizar ventilações de resgate, depois compressões torácicas na proporção 2:30.",
      "Aguardar a chegada da equipe médica para iniciar qualquer procedimento."
    ],
    correctAnswer: 1,
    theme: "Urgência e Emergência",
    explanation: "Conforme as diretrizes AHA, a sequência é: verificar consciência e respiração, acionar emergência (192/193/SAMU), iniciar RCP com compressões de qualidade (100-120/min, 5-6 cm de profundidade).",
    difficulty: 'medium',
    references: ["Diretrizes AHA 2020"]
  },
  {
    id: 29,
    question: "Sobre as doenças de notificação compulsória e medidas de prevenção, analise as assertivas:\n\n1. Tuberculose, hanseníase e dengue são doenças de notificação compulsória.\n2. A notificação compulsória deve ser realizada apenas pelo médico responsável pelo caso.\n3. Casos de sarampo devem ser notificados imediatamente (em até 24 horas).\n4. A vigilância epidemiológica investiga os casos notificados para adotar medidas de controle.\n\nEstão CORRETAS:",
    options: [
      "1, 3 e 4, apenas.",
      "1, 2 e 3, apenas.",
      "2, 3 e 4, apenas.",
      "1, 2 e 4, apenas.",
      "Todas as assertivas."
    ],
    correctAnswer: 0,
    theme: "Vigilância em Saúde",
    explanation: "As assertivas 1, 3 e 4 estão corretas. A assertiva 2 está incorreta pois a notificação compulsória é dever de todos os profissionais de saúde que prestam assistência ao paciente.",
    difficulty: 'hard',
    references: ["Portaria GM/MS nº 204/2016", "Lei nº 6.259/1975"]
  },
  {
    id: 30,
    question: "Em relação ao preparo de material para esterilização, é CORRETO afirmar:",
    options: [
      "A limpeza do material é opcional, sendo a esterilização suficiente para eliminar todos os microrganismos.",
      "Materiais termorresistentes devem ser preferencialmente esterilizados em autoclave a vapor saturado sob pressão.",
      "A esterilização química com glutaraldeído pode ser realizada em qualquer ambiente sem ventilação específica.",
      "Materiais esterilizados têm validade indeterminada se mantidos em local fechado.",
      "A embalagem dos materiais não interfere no processo de esterilização."
    ],
    correctAnswer: 1,
    theme: "Procedimentos de Enfermagem",
    explanation: "Materiais termorresistentes devem ser esterilizados em autoclave (121°C por 15-30 min ou 134°C por 3-4 min). A limpeza prévia é essencial, e a validade depende da embalagem e armazenamento.",
    difficulty: 'medium',
    references: ["RDC ANVISA nº 15/2012"]
  },
  {
    id: 31,
    question: "Sobre a coleta de exames laboratoriais, identifique a alternativa INCORRETA:",
    options: [
      "A coleta de sangue para hemograma deve ser realizada preferencialmente pela manhã, em jejum de 8 horas.",
      "Para coleta de urina tipo I, deve-se desprezar o primeiro jato e coletar o jato médio em frasco estéril.",
      "A coleta de fezes para parasitológico dispensa cuidados especiais de higiene e pode incluir urina na amostra.",
      "A coleta de sangue venoso deve ser realizada com garrote, mas este deve ser removido antes da aspiração do sangue.",
      "Amostras biológicas devem ser identificadas no momento da coleta com nome completo do paciente e data."
    ],
    correctAnswer: 2,
    theme: "Procedimentos de Enfermagem",
    explanation: "A coleta de fezes deve seguir técnica asséptica, não deve conter urina, e o paciente deve ser orientado sobre higiene íntima antes da coleta. A alternativa 3 está incorreta.",
    difficulty: 'easy',
    references: ["Manual de Coleta de Exames Laboratoriais"]
  },
  {
    id: 32,
    question: "Um Técnico em Enfermagem atua na atenção básica e realiza puericultura (acompanhamento de crescimento e desenvolvimento infantil). Em relação aos cuidados de enfermagem na infância, assinale a alternativa CORRETA:",
    options: [
      "O aleitamento materno exclusivo é recomendado até os 12 meses de vida.",
      "A primeira dose da vacina BCG deve ser administrada ao nascer, preferencialmente ainda na maternidade.",
      "Crianças em aleitamento materno exclusivo devem receber água e chás nos intervalos das mamadas.",
      "O teste do pezinho deve ser realizado apenas se houver suspeita de alterações metabólicas.",
      "A caderneta de saúde da criança não é obrigatória para acompanhamento do crescimento."
    ],
    correctAnswer: 1,
    theme: "Procedimentos de Enfermagem",
    explanation: "A vacina BCG é recomendada ao nascer. O aleitamento materno exclusivo é até 6 meses (não 12). Não é necessário oferecer água/chás. O teste do pezinho é de triagem universal.",
    difficulty: 'medium',
    references: ["Manual de Puericultura - MS", "Calendário Nacional de Vacinação"]
  },
  {
    id: 33,
    question: "Considerando os princípios de ética e humanização na atenção à saúde, analise as situações:\n\n1. Um paciente solicita acesso ao seu prontuário médico e o profissional deve orientá-lo sobre seus direitos e procedimentos institucionais.\n2. Profissionais de saúde podem discutir casos clínicos de pacientes em redes sociais, desde que não identifiquem o nome do paciente.\n3. O paciente tem direito de recusar tratamento após ser devidamente informado sobre riscos e benefícios.\n4. A humanização na saúde inclui respeito à autonomia, acolhimento e vínculo entre profissional e usuário.\n\nEstão CORRETAS:",
    options: [
      "1, 3 e 4, apenas.",
      "1, 2 e 3, apenas.",
      "2, 3 e 4, apenas.",
      "1, 2 e 4, apenas.",
      "Todas as situações."
    ],
    correctAnswer: 0,
    theme: "Ética e Humanização",
    explanation: "As situações 1, 3 e 4 estão corretas. A situação 2 está incorreta pois é vedado discutir casos de pacientes em redes sociais, mesmo sem identificação, pois viola o sigilo profissional.",
    difficulty: 'medium',
    references: ["Resolução COFEN nº 564/2017", "Política Nacional de Humanização"]
  },
  {
    id: 34,
    question: "A Política Nacional de Humanização (PNH) estabelece diretrizes para o SUS. Sobre a PNH, é CORRETO afirmar:",
    options: [
      "Acolhimento com classificação de risco deve priorizar pacientes por ordem de chegada.",
      "A ambiência hospitalar não tem relação com a humanização do atendimento.",
      "Cogestão é a diretriz que propõe a inclusão de trabalhadores e usuários nos processos de gestão.",
      "Clínica ampliada restringe-se à abordagem biomédica da doença.",
      "O direito a acompanhante é restrito apenas a crianças e idosos."
    ],
    correctAnswer: 2,
    theme: "Ética e Humanização",
    explanation: "A PNH estabelece a cogestão como princípio de gestão compartilhada. Acolhimento com classificação de risco prioriza pela gravidade, não por ordem de chegada.",
    difficulty: 'medium',
    references: ["Política Nacional de Humanização - MS"]
  },
  {
    id: 35,
    question: "Sobre a organização da Rede de Atenção à Saúde (RAS) no SUS, assinale a alternativa CORRETA:",
    options: [
      "A Atenção Básica não é considerada ordenadora da rede e centro de comunicação da RAS.",
      "A RAS é organizada de forma hierarquizada e regionalizada, com diferentes densidades tecnológicas.",
      "Serviços de urgência e emergência não fazem parte da Atenção Básica, pertencendo exclusivamente à alta complexidade.",
      "A integração entre níveis de atenção não é necessária para o funcionamento adequado da RAS.",
      "Hospitais de pequeno porte não podem fazer parte da RAS."
    ],
    correctAnswer: 1,
    theme: "Organização do SUS",
    explanation: "A RAS é organizada de forma hierarquizada (níveis de complexidade) e regionalizada (territórios), com a Atenção Básica como ordenadora e centro de comunicação.",
    difficulty: 'medium',
    references: ["Portaria GM/MS nº 4.279/2010"]
  },
  {
    id: 36,
    question: "Um paciente diabético em uso de insulina apresenta os seguintes sintomas: sudorese fria, tremores, taquicardia, confusão mental e glicemia capilar de 45 mg/dL. Qual a conduta IMEDIATA do Técnico em Enfermagem?",
    options: [
      "Administrar insulina regular conforme prescrição de rotina.",
      "Comunicar imediatamente ao enfermeiro/médico e oferecer carboidrato de absorção rápida se o paciente estiver consciente.",
      "Aguardar 30 minutos e verificar nova glicemia capilar.",
      "Administrar glucagon por via intramuscular sem comunicar à equipe.",
      "Orientar o paciente a realizar atividade física leve para normalizar a glicemia."
    ],
    correctAnswer: 1,
    theme: "Urgência e Emergência",
    explanation: "O quadro indica hipoglicemia (glicemia < 70 mg/dL). A conduta imediata é comunicar à equipe e, se consciente, oferecer carboidrato de absorção rápida (suco, mel). Se inconsciente, administrar glucagon ou glicose endovenosa.",
    difficulty: 'medium',
    references: ["Protocolo de Atendimento ao Diabetes"]
  },
  {
    id: 37,
    question: "Sobre as precauções-padrão e específicas no controle de infecções, analise:\n\n1. Precauções-padrão devem ser aplicadas a todos os pacientes, independente do diagnóstico.\n2. Precaução de contato é indicada para pacientes com diarreia infecciosa por Clostridium difficile.\n3. Precaução de gotículas é suficiente para pacientes com tuberculose pulmonar.\n4. Higienização das mãos é a medida mais importante para prevenir infecções relacionadas à assistência.\n\nEstão CORRETAS:",
    options: [
      "1, 2 e 4, apenas.",
      "1, 2 e 3, apenas.",
      "2, 3 e 4, apenas.",
      "1, 3 e 4, apenas.",
      "Todas as assertivas."
    ],
    correctAnswer: 0,
    theme: "Segurança no Trabalho",
    explanation: "As assertivas 1, 2 e 4 estão corretas. A assertiva 3 está incorreta pois tuberculose pulmonar requer precaução de aerossóis (precaução aérea), não apenas gotículas.",
    difficulty: 'hard',
    references: ["Manual de Controle de Infecção - ANVISA"]
  },
  {
    id: 38,
    question: "Em relação à cadeia de transmissão de doenças infecciosas, é CORRETO afirmar:",
    options: [
      "O período de incubação é o intervalo entre a exposição ao agente e o aparecimento dos primeiros sintomas.",
      "Reservatório é sempre um ser humano doente que transmite a infecção.",
      "Doenças transmitidas por vetores dispensam medidas de saneamento básico.",
      "O agente etiológico não influencia na gravidade da doença.",
      "A susceptibilidade do hospedeiro independe de fatores como imunização e estado nutricional."
    ],
    correctAnswer: 0,
    theme: "Vigilância em Saúde",
    explanation: "Período de incubação é o tempo entre a exposição e os primeiros sintomas. Reservatório pode ser humano, animal ou ambiente. A susceptibilidade depende de imunidade, nutrição, entre outros.",
    difficulty: 'easy',
    references: ["Epidemiologia Básica - MS"]
  },
  {
    id: 39,
    question: "Sobre a Sistematização da Assistência de Enfermagem (SAE), conforme Resolução COFEN nº 358/2009, é CORRETO afirmar:",
    options: [
      "A implementação da SAE é opcional nas instituições de saúde.",
      "A SAE é composta por cinco etapas: coleta de dados, diagnóstico de enfermagem, planejamento, implementação e avaliação.",
      "Apenas o enfermeiro pode realizar a coleta de dados de enfermagem.",
      "O diagnóstico de enfermagem pode ser realizado pelo técnico em enfermagem com experiência.",
      "A avaliação de enfermagem é realizada apenas no momento da alta hospitalar."
    ],
    correctAnswer: 1,
    theme: "Legislação Profissional",
    explanation: "A SAE é obrigatória e composta por 5 etapas (Processo de Enfermagem). A coleta de dados e implementação podem ser realizadas pelo técnico sob supervisão, mas diagnóstico, planejamento e avaliação são privativos do enfermeiro.",
    difficulty: 'medium',
    references: ["Resolução COFEN nº 358/2009"]
  },
  {
    id: 40,
    question: "Um servidor público municipal, regido pelo Estatuto do Servidor Público, tem direitos e deveres estabelecidos em lei. Sobre o regime jurídico dos servidores públicos, assinale a alternativa CORRETA:",
    options: [
      "O servidor público pode exercer livremente atividade comercial durante seu horário de expediente.",
      "Estabilidade é adquirida após 3 anos de efetivo exercício, mediante avaliação de desempenho.",
      "Faltas injustificadas não geram consequências para o servidor estável.",
      "O servidor pode recusar-se a cumprir ordens legais de seus superiores sem justificativa.",
      "Aposentadoria compulsória ocorre quando o servidor completar 80 anos de idade."
    ],
    correctAnswer: 1,
    theme: "Legislação Municipal",
    explanation: "A estabilidade no serviço público é adquirida após 3 anos de efetivo exercício e aprovação em avaliação de desempenho, conforme CF/88 Art. 41.",
    difficulty: 'medium',
    references: ["Constituição Federal/1988, Art. 41"]
  },
  // LÍNGUA PORTUGUESA
  {
    id: 41,
    question: "Leia o texto abaixo:\n\n\"A enfermeira estava muito cansada após o plantão noturno. Ela havia atendido diversos pacientes e realizado inúmeros procedimentos. Mesmo exausta, sentia-se realizada com seu trabalho.\"\n\nSobre o texto, é CORRETO afirmar:",
    options: [
      "O texto apresenta apenas linguagem conotativa (figurada).",
      "Trata-se de um texto narrativo que relata fatos em sequência temporal.",
      "O pronome 'Ela' retoma o substantivo 'plantão'.",
      "A palavra 'exausta' é sinônimo de 'realizada'.",
      "O texto é predominantemente argumentativo e persuasivo."
    ],
    correctAnswer: 1,
    theme: "Língua Portuguesa",
    explanation: "O texto é narrativo, pois relata acontecimentos em ordem cronológica. O pronome 'Ela' retoma 'enfermeira', 'exausta' significa muito cansada (não é sinônimo de realizada), e a linguagem é predominantemente denotativa.",
    difficulty: 'easy',
    references: ["Tipologia Textual - Narração"]
  },
  {
    id: 42,
    question: "Analise as palavras quanto à separação silábica e tonicidade:\n\nI. am-bu-la-tó-rio (paroxítona)\nII. en-fer-ma-gem (oxítona)\nIII. trans-plan-te (paroxítona)\nIV. saú-de (paroxítona)\n\nEstão CORRETAS:",
    options: [
      "Apenas I e II.",
      "Apenas II e III.",
      "Apenas I, II e III.",
      "Apenas II, III e IV.",
      "I, II, III e IV."
    ],
    correctAnswer: 1,
    theme: "Língua Portuguesa",
    explanation: "I - INCORRETA: 'ambulatório' é proparoxítona (to-RI-o). II - CORRETA: enfermagem (en-fer-ma-GEM). III - CORRETA: transplante (trans-PLAN-te). IV - INCORRETA: 'saúde' é paroxítona, mas a separação correta é sa-ú-de.",
    difficulty: 'medium',
    references: ["Sílabas e Tonicidade"]
  },
  {
    id: 43,
    question: "Assinale a alternativa em que todas as palavras estão grafadas CORRETAMENTE quanto à acentuação:",
    options: [
      "Técnico, ambulância, cirurgia, heroí",
      "Saúde, indispensável, anestesia, protótipo",
      "Enfermagem, farmácia, diagnóstico, vacína",
      "Médico, procedimento, esteril, análise",
      "Exame, história, sintoma, prótese"
    ],
    correctAnswer: 1,
    theme: "Língua Portuguesa",
    explanation: "Alternativa B está correta. Erros: A) heroí (herói); C) vacína (vacina); D) esteril (estéril); E) história (sem acento - história com acento significa 'relato', mas aqui deveria ser 'histórico').",
    difficulty: 'medium',
    references: ["Acentuação Gráfica"]
  },
  {
    id: 44,
    question: "\"A médica _____ se dedicar _____ pesquisa, por isso foi _____ Alemanha estudar.\"\n\nA sequência que completa CORRETAMENTE as lacunas é:",
    options: [
      "quiz - à - a",
      "quis - a - à",
      "quiz - a - à",
      "quis - à - à",
      "quis - à - a"
    ],
    correctAnswer: 3,
    theme: "Língua Portuguesa",
    explanation: "QUIS (verbo querer no passado), À (crase - dedicar-se a + a pesquisa), À (crase - ir a + a Alemanha - palavra feminina que aceita artigo). A regra da crase: A + A = À.",
    difficulty: 'hard',
    references: ["Verbos, Crase"]
  },
  {
    id: 45,
    question: "Em qual alternativa o uso da vírgula está CORRETO?",
    options: [
      "O enfermeiro, verificou os sinais vitais do paciente.",
      "Maria, a enfermeira mais experiente da equipe, assumiu o caso.",
      "O médico receitou, antibiótico e analgésico.",
      "Os pacientes, que estavam na sala de espera aguardavam, o atendimento.",
      "Precisamos de, luvas máscaras e aventais."
    ],
    correctAnswer: 1,
    theme: "Língua Portuguesa",
    explanation: "A vírgula está correta em B, pois isola o aposto explicativo 'a enfermeira mais experiente da equipe'. Erros: A) separa sujeito do verbo; C) separa verbo do complemento; D) vírgulas mal posicionadas; E) vírgula após preposição.",
    difficulty: 'medium',
    references: ["Pontuação"]
  },
  {
    id: 46,
    question: "Analise as frases:\n\nI. \"Não sei _____ ela faltou ao trabalho.\"\nII. \"_____ motivo ela faltou?\"\nIII. \"Ela faltou _____ estava doente.\"\nIV. \"Esse é o hospital _____ trabalho.\"\n\nA sequência CORRETA dos 'porquês' é:",
    options: [
      "por que - Por que - porque - por que",
      "porque - Porque - por que - porque",
      "por quê - Por quê - porque - onde",
      "porque - Por que - porque - aonde",
      "por que - Porque - por quê - onde"
    ],
    correctAnswer: 0,
    theme: "Língua Portuguesa",
    explanation: "I) por que (= por qual motivo); II) Por que (início de frase, interrogativo); III) porque (= pois, explicação); IV) por que (preposição por + pronome relativo que = no qual). Não é 'onde/aonde' pois 'hospital' não indica o verbo trabalhar com sentido de lugar estático.",
    difficulty: 'hard',
    references: ["Uso dos Porquês"]
  },
  {
    id: 47,
    question: "Sobre concordância verbal e nominal, assinale a alternativa CORRETA:",
    options: [
      "Fazem dois anos que ela trabalha neste hospital.",
      "Haviam muitos pacientes na sala de espera.",
      "A maioria dos enfermeiros aprovaram a proposta.",
      "É necessário paciência no atendimento aos pacientes.",
      "Segue anexo as cópias dos exames solicitados."
    ],
    correctAnswer: 2,
    theme: "Língua Portuguesa",
    explanation: "C está correta: com 'maioria de', o verbo pode concordar no singular (maioria) ou plural (enfermeiros). Erros: A) Faz (impessoal); B) Havia (impessoal); D) É necessária paciência (concorda com 'paciência'); E) Seguem anexas.",
    difficulty: 'hard',
    references: ["Concordância Verbal e Nominal"]
  },
  {
    id: 48,
    question: "\"O coração é uma bomba incansável que trabalha dia e noite para manter nosso corpo vivo.\"\n\nA figura de linguagem presente na frase é:",
    options: [
      "Metáfora",
      "Metonímia",
      "Hipérbole",
      "Eufemismo",
      "Antítese"
    ],
    correctAnswer: 0,
    theme: "Língua Portuguesa",
    explanation: "Metáfora é a comparação implícita. O coração é comparado a uma bomba, mas sem usar 'como'. Se fosse 'O coração é COMO uma bomba' seria comparação. A metáfora atribui características de um elemento a outro.",
    difficulty: 'easy',
    references: ["Figuras de Linguagem"]
  },
  {
    id: 49,
    question: "Identifique a alternativa que apresenta um par de palavras PARÔNIMAS:",
    options: [
      "Descrição / Discrição",
      "Cela / Sela",
      "Manga (fruta) / Manga (roupa)",
      "São (santo) / São (verbo ser)",
      "Acento / Assento"
    ],
    correctAnswer: 0,
    theme: "Língua Portuguesa",
    explanation: "Parônimos: palavras com grafia e pronúncia semelhantes, mas significados diferentes (Descrição = ato de descrever / Discrição = qualidade de discreto). B e E são HOMÔNIMOS. C e D são polissemia.",
    difficulty: 'easy',
    references: ["Homônimos e Parônimos"]
  },
  {
    id: 50,
    question: "Analise sintaticamente: \"Os pacientes aguardavam o resultado dos exames.\"\n\nClassifique os termos:\n\nI. 'Os pacientes' = Sujeito simples\nII. 'aguardavam' = Verbo transitivo direto\nIII. 'o resultado dos exames' = Objeto direto\nIV. 'dos exames' = Complemento nominal\n\nEstão CORRETAS:",
    options: [
      "Apenas I e II.",
      "Apenas I, II e III.",
      "Apenas II, III e IV.",
      "Apenas I, III e IV.",
      "I, II, III e IV."
    ],
    correctAnswer: 1,
    theme: "Língua Portuguesa",
    explanation: "I, II e III corretas. IV incorreta: 'dos exames' é ADJUNTO ADNOMINAL (especifica 'resultado'), não complemento nominal. Complemento nominal completa sentido de substantivo abstrato, adjetivo ou advérbio, geralmente com sentido passivo.",
    difficulty: 'hard',
    references: ["Análise Sintática"]
  },
  // TEMAS DA ATUALIDADE
  {
    id: 51,
    question: "As mudanças climáticas são um dos principais desafios globais da atualidade. Sobre este tema, analise as assertivas:\n\nI. O Acordo de Paris (2015) estabelece metas para limitar o aquecimento global a bem abaixo de 2°C.\nII. O desmatamento da Amazônia não tem relação com as mudanças climáticas globais.\nIII. Eventos climáticos extremos (secas, enchentes, ondas de calor) têm se intensificado.\nIV. A transição energética busca substituir combustíveis fósseis por fontes renováveis.\n\nEstão CORRETAS:",
    options: [
      "Apenas I e III.",
      "Apenas I, III e IV.",
      "Apenas II e IV.",
      "Apenas I, II e III.",
      "I, II, III e IV."
    ],
    correctAnswer: 1,
    theme: "Atualidades",
    explanation: "I, III e IV corretas. II INCORRETA: o desmatamento da Amazônia contribui significativamente para as mudanças climáticas, liberando CO2 e reduzindo a capacidade de absorção de carbono.",
    difficulty: 'medium',
    references: ["Meio Ambiente e Mudanças Climáticas"]
  },
  {
    id: 52,
    question: "Sobre as principais organizações internacionais, assinale a alternativa CORRETA:",
    options: [
      "O BRICS é formado por Brasil, Rússia, Índia, China e Espanha.",
      "O MERCOSUL é um bloco econômico que tem como membros plenos Brasil, Argentina, Uruguai e Paraguai.",
      "O G7 é composto pelos sete países mais populosos do mundo.",
      "A ONU foi criada após a Primeira Guerra Mundial para promover a paz.",
      "O G20 reúne apenas países desenvolvidos da Europa e América do Norte."
    ],
    correctAnswer: 1,
    theme: "Atualidades",
    explanation: "MERCOSUL correto (Venezuela suspensa desde 2016). Erros: A) BRICS = Brasil, Rússia, Índia, China, África do Sul (+ novos membros 2024); C) G7 = economias mais desenvolvidas; D) ONU = após 2ª Guerra (1945); E) G20 = economias desenvolvidas E emergentes.",
    difficulty: 'medium',
    references: ["Organizações Internacionais"]
  },
  {
    id: 53,
    question: "Sobre aspectos geográficos e demográficos do Brasil, analise:\n\nI. A região Sul é a menor região brasileira em extensão territorial.\nII. O bioma Pantanal é o maior bioma brasileiro em área.\nIII. A população brasileira está concentrada principalmente na faixa litorânea.\nIV. O agronegócio é um dos principais setores da economia brasileira.\n\nEstão CORRETAS:",
    options: [
      "Apenas I e IV.",
      "Apenas I, III e IV.",
      "Apenas II e III.",
      "Apenas II, III e IV.",
      "I, II, III e IV."
    ],
    correctAnswer: 1,
    theme: "Atualidades",
    explanation: "I, III e IV corretas. II INCORRETA: o MAIOR bioma é a Amazônia (49% do território). O Pantanal é o MENOR bioma brasileiro continental (1,76%). Outros: Cerrado (24%), Mata Atlântica (13%), Caatinga (10%).",
    difficulty: 'medium',
    references: ["Geografia do Brasil"]
  },
  {
    id: 54,
    question: "Santa Catarina destaca-se nacionalmente em diversos aspectos. Sobre o estado, é CORRETO afirmar:",
    options: [
      "A capital Florianópolis está localizada totalmente no continente.",
      "O estado é dividido em seis mesorregiões geográficas.",
      "Santa Catarina não possui fronteira com nenhum país sul-americano.",
      "A economia catarinense baseia-se exclusivamente no turismo litorâneo.",
      "O estado possui o menor IDH (Índice de Desenvolvimento Humano) da região Sul."
    ],
    correctAnswer: 1,
    theme: "Atualidades",
    explanation: "SC possui 6 mesorregiões: Grande Florianópolis, Vale do Itajaí, Norte, Serrana, Oeste e Sul. Erros: A) parte insular; C) faz fronteira com Argentina; D) economia diversificada (indústria, agronegócio, tecnologia); E) tem um dos MAIORES IDH do Brasil.",
    difficulty: 'medium',
    references: ["Geografia de Santa Catarina"]
  },
  {
    id: 55,
    question: "O município de São José, na Grande Florianópolis, apresenta características importantes. Sobre o município, é CORRETO afirmar:",
    options: [
      "São José é o município mais populoso de Santa Catarina.",
      "O município é conhecido por seu parque industrial diversificado e pelo comércio.",
      "São José foi fundado após a capital Florianópolis.",
      "O município não faz parte da região metropolitana da Grande Florianópolis.",
      "A economia de São José depende exclusivamente da pesca artesanal."
    ],
    correctAnswer: 1,
    theme: "Atualidades",
    explanation: "São José tem forte parque industrial (tecnologia, vestuário, alimentos) e comércio desenvolvido. Erros: A) mais populoso é Joinville; C) fundado em 1750 (antes de Florianópolis virar capital); D) é núcleo da região metropolitana; E) economia diversificada.",
    difficulty: 'easy',
    references: ["Município de São José/SC"]
  },
  {
    id: 56,
    question: "Sobre eventos recentes de relevância nacional e internacional (2024-2025), analise:\n\nI. O Brasil sediou a Cúpula do G20 em 2024.\nII. A inteligência artificial tem sido tema central de debates sobre regulamentação e ética.\nIII. As eleições municipais brasileiras ocorrem a cada cinco anos.\nIV. A polarização política tem sido uma característica marcante no cenário nacional.\n\nEstão CORRETAS:",
    options: [
      "Apenas I e II.",
      "Apenas I, II e IV.",
      "Apenas II e III.",
      "Apenas I, III e IV.",
      "I, II, III e IV."
    ],
    correctAnswer: 1,
    theme: "Atualidades",
    explanation: "I, II e IV corretas. III INCORRETA: eleições municipais ocorrem a cada QUATRO anos (últimas em 2024, próximas em 2028). O Brasil presidiu o G20 em 2024, e a IA tem sido amplamente debatida com a aprovação de marcos regulatórios.",
    difficulty: 'easy',
    references: ["Atualidades Recentes Brasil"]
  },
  {
    id: 57,
    question: "Em relação aos desafios ambientais brasileiros recentes, é CORRETO afirmar:",
    options: [
      "A preservação ambiental não tem relação com a saúde pública.",
      "Os biomas brasileiros estão completamente protegidos de ações antrópicas.",
      "Eventos climáticos extremos, como secas no Norte e enchentes no Sul, têm exigido políticas públicas emergenciais.",
      "O Brasil atingiu a meta de desmatamento zero em todos os biomas.",
      "As queimadas florestais são fenômenos exclusivamente naturais, sem interferência humana."
    ],
    correctAnswer: 2,
    theme: "Atualidades",
    explanation: "Eventos climáticos extremos têm afetado o Brasil (secas na Amazônia, enchentes no RS 2024, ondas de calor). Há forte relação entre ambiente e saúde (doenças respiratórias, vetoriais). Queimadas têm forte componente humano, e desmatamento ainda é desafio.",
    difficulty: 'easy',
    references: ["Meio Ambiente e Saúde Pública"]
  },
  {
    id: 58,
    question: "Sobre aspectos econômicos e sociais do Brasil contemporâneo, assinale a CORRETA:",
    options: [
      "O salário mínimo nacional é definido livremente por cada estado da federação.",
      "O Sistema Único de Saúde (SUS) atende exclusivamente a população de baixa renda.",
      "Programas de transferência de renda têm impacto na redução da pobreza extrema.",
      "A taxa de desemprego no Brasil não é afetada por crises econômicas internacionais.",
      "O Brasil não possui desigualdade regional significativa."
    ],
    correctAnswer: 2,
    theme: "Atualidades",
    explanation: "Programas como Bolsa Família têm comprovado impacto na redução da pobreza e da fome. Erros: A) salário mínimo é nacional; B) SUS é universal; D) economia globalizada afeta desemprego; E) desigualdades regionais são históricas e marcantes.",
    difficulty: 'easy',
    references: ["Economia e Políticas Sociais Brasil"]
  },
  // NOÇÕES DE INFORMÁTICA
  {
    id: 59,
    question: "No sistema operacional Windows, para desligar corretamente o computador, o procedimento adequado é:",
    options: [
      "Pressionar diretamente o botão de energia do gabinete por 10 segundos.",
      "Desconectar o cabo de energia da tomada imediatamente.",
      "Clicar no botão Iniciar, escolher a opção 'Desligar' e aguardar o desligamento completo.",
      "Fechar a tampa do notebook sem encerrar os programas.",
      "Remover a bateria do equipamento enquanto está ligado."
    ],
    correctAnswer: 2,
    theme: "Informática",
    explanation: "O desligamento correto no Windows deve ser feito pelo menu Iniciar > Desligar, permitindo que o sistema encerre os programas adequadamente e salve configurações. Desligar incorretamente pode causar perda de dados e corrupção de arquivos.",
    difficulty: 'easy',
    references: ["Windows - Operações Básicas"]
  },
  {
    id: 60,
    question: "No Windows, a área de trabalho (Desktop) é:",
    options: [
      "O espaço físico onde o computador está posicionado.",
      "A tela inicial do sistema onde ficam ícones, atalhos e a barra de tarefas.",
      "Uma pasta exclusiva para documentos de trabalho.",
      "O programa usado para navegar na internet.",
      "O dispositivo de armazenamento externo (pen drive)."
    ],
    correctAnswer: 1,
    theme: "Informática",
    explanation: "A área de trabalho (Desktop) é a tela principal do Windows onde aparecem ícones de programas, pastas, arquivos e a barra de tarefas. É o ambiente inicial após o login no sistema.",
    difficulty: 'easy',
    references: ["Windows - Área de Trabalho"]
  },
  {
    id: 61,
    question: "No Microsoft Word, para deixar um texto em negrito, itálico e sublinhado, as teclas de atalho correspondentes são:",
    options: [
      "Ctrl+N, Ctrl+T e Ctrl+U",
      "Ctrl+B, Ctrl+I e Ctrl+U",
      "Ctrl+G, Ctrl+I e Ctrl+S",
      "Alt+N, Alt+I e Alt+S",
      "Shift+N, Shift+I e Shift+U"
    ],
    correctAnswer: 1,
    theme: "Informática",
    explanation: "No Word: Ctrl+B = Bold (Negrito), Ctrl+I = Italic (Itálico), Ctrl+U = Underline (Sublinhado). Estas são as teclas de atalho padrão em versões do Word em inglês, mantidas na maioria das instalações.",
    difficulty: 'easy',
    references: ["Microsoft Word - Formatação"]
  },
  {
    id: 62,
    question: "No Microsoft Excel, a fórmula =SOMA(A1:A10) realiza a seguinte operação:",
    options: [
      "Multiplica os valores das células A1 e A10.",
      "Soma apenas as células A1 e A10.",
      "Calcula a média dos valores de A1 até A10.",
      "Soma todos os valores das células de A1 até A10.",
      "Subtrai o valor de A10 do valor de A1."
    ],
    correctAnswer: 3,
    theme: "Informática",
    explanation: "A função SOMA com o intervalo A1:A10 adiciona todos os valores das células de A1 até A10 (incluindo A1 e A10). O sinal ':' indica um intervalo contínuo de células.",
    difficulty: 'easy',
    references: ["Microsoft Excel - Fórmulas Básicas"]
  },
  {
    id: 63,
    question: "No Excel, para criar um gráfico a partir de dados selecionados em uma planilha, o usuário deve:",
    options: [
      "Usar apenas fórmulas matemáticas avançadas.",
      "Selecionar os dados e acessar a guia 'Inserir', escolhendo o tipo de gráfico desejado.",
      "Copiar os dados para o Word e criar o gráfico lá.",
      "Digitar manualmente todos os valores do gráfico.",
      "Salvar a planilha como PDF antes de criar o gráfico."
    ],
    correctAnswer: 1,
    theme: "Informática",
    explanation: "Para criar gráficos no Excel: selecionar os dados desejados, ir na guia 'Inserir' e escolher o tipo de gráfico (colunas, linhas, pizza, etc.). O Excel gera automaticamente o gráfico com base nos dados selecionados.",
    difficulty: 'easy',
    references: ["Microsoft Excel - Gráficos"]
  },
  {
    id: 64,
    question: "No Microsoft PowerPoint, para adicionar um novo slide a uma apresentação, pode-se:",
    options: [
      "Apenas copiar slides de outras apresentações.",
      "Usar a tecla de atalho Ctrl+M ou clicar em 'Novo Slide' na guia 'Página Inicial'.",
      "Criar manualmente no Word e importar.",
      "Salvar a apresentação novamente.",
      "Excluir um slide existente e criar no lugar."
    ],
    correctAnswer: 1,
    theme: "Informática",
    explanation: "Para adicionar slides no PowerPoint: usar Ctrl+M, ou ir em 'Página Inicial' > 'Novo Slide'. É possível escolher diferentes layouts (título, conteúdo, em branco, etc.).",
    difficulty: 'easy',
    references: ["Microsoft PowerPoint - Slides"]
  },
  {
    id: 65,
    question: "Para navegar na internet e acessar sites, é necessário utilizar um:",
    options: [
      "Sistema operacional apenas.",
      "Navegador web (browser) como Google Chrome, Mozilla Firefox ou Microsoft Edge.",
      "Programa de edição de texto.",
      "Planilha eletrônica.",
      "Antivírus exclusivamente."
    ],
    correctAnswer: 1,
    theme: "Informática",
    explanation: "Navegadores web (browsers) são programas específicos para acessar sites na internet. Exemplos: Chrome, Firefox, Edge, Safari, Opera. Eles interpretam códigos HTML e exibem páginas web.",
    difficulty: 'easy',
    references: ["Internet - Navegação"]
  },
  {
    id: 66,
    question: "Sobre o envio de e-mails, analise as assertivas:\n\nI. CC (com cópia) envia cópia do e-mail para outros destinatários de forma visível a todos.\nII. CCO ou BCC (com cópia oculta) envia cópia sem que os destinatários vejam quem mais recebeu.\nIII. É seguro abrir anexos de e-mails de remetentes desconhecidos.\nIV. O campo 'Assunto' deve ser preenchido para facilitar a organização das mensagens.\n\nEstão CORRETAS:",
    options: [
      "Apenas I e II.",
      "Apenas I, II e IV.",
      "Apenas III e IV.",
      "Apenas I, III e IV.",
      "I, II, III e IV."
    ],
    correctAnswer: 1,
    theme: "Informática",
    explanation: "I, II e IV corretas. III INCORRETA: NUNCA abrir anexos de remetentes desconhecidos - pode conter vírus, malware ou ransomware. Sempre verificar a origem antes de abrir anexos.",
    difficulty: 'medium',
    references: ["E-mail - Uso e Segurança"]
  },
  {
    id: 67,
    question: "Sobre segurança digital e proteção de dados, é CORRETO afirmar:",
    options: [
      "Senhas fortes devem conter apenas letras minúsculas para facilitar memorização.",
      "É seguro usar a mesma senha para todos os serviços e sites.",
      "Antivírus são desnecessários se o computador for novo.",
      "Senhas devem combinar letras maiúsculas, minúsculas, números e caracteres especiais.",
      "Compartilhar senhas por e-mail é um procedimento seguro."
    ],
    correctAnswer: 3,
    theme: "Informática",
    explanation: "Senhas seguras devem ter: letras maiúsculas e minúsculas, números, caracteres especiais, mínimo 8 caracteres. Evitar: senhas óbvias, mesma senha em vários locais, compartilhamento de senhas. Antivírus e atualizações são essenciais.",
    difficulty: 'easy',
    references: ["Segurança Digital"]
  },
  {
    id: 68,
    question: "Phishing é uma técnica de ataque cibernético que:",
    options: [
      "Melhora a velocidade da conexão com a internet.",
      "Organiza automaticamente os arquivos do computador.",
      "Tenta enganar usuários para obter informações confidenciais, como senhas e dados bancários.",
      "Protege o computador contra todos os tipos de vírus.",
      "Aumenta a capacidade de armazenamento do disco rígido."
    ],
    correctAnswer: 2,
    theme: "Informática",
    explanation: "Phishing é golpe digital onde criminosos se passam por instituições confiáveis (bancos, empresas) através de e-mails, mensagens ou sites falsos para roubar dados pessoais, senhas e informações bancárias. Sempre verificar a origem das mensagens.",
    difficulty: 'medium',
    references: ["Segurança Digital - Phishing"]
  },
  {
    id: 69,
    question: "No Windows, para organizar arquivos e pastas, o usuário pode utilizar o:",
    options: [
      "Explorador de Arquivos (Windows Explorer ou Gerenciador de Arquivos).",
      "Microsoft Word exclusivamente.",
      "Navegador de internet.",
      "PowerPoint.",
      "Bloco de Notas."
    ],
    correctAnswer: 0,
    theme: "Informática",
    explanation: "O Explorador de Arquivos (File Explorer) é o programa do Windows usado para navegar, organizar, copiar, mover, renomear e excluir arquivos e pastas. Acesso: tecla Windows+E ou ícone de pasta na barra de tarefas.",
    difficulty: 'easy',
    references: ["Windows - Gerenciamento de Arquivos"]
  },
  {
    id: 70,
    question: "Sobre armazenamento e backup de dados, assinale a alternativa CORRETA:",
    options: [
      "Fazer backup significa excluir permanentemente os arquivos.",
      "Pen drives e HDs externos podem ser usados para fazer cópias de segurança (backup).",
      "Não é necessário fazer backup de arquivos importantes se o computador for novo.",
      "Nuvem (cloud storage) é um termo para armazenamento físico na mesa.",
      "Backups devem ser feitos apenas uma vez na vida útil do computador."
    ],
    correctAnswer: 1,
    theme: "Informática",
    explanation: "Backup é cópia de segurança dos dados. Pode ser feito em: pen drives, HDs externos, DVDs, serviços de nuvem (Google Drive, OneDrive, Dropbox). Backups regulares protegem contra perda de dados por falhas, vírus ou acidentes.",
    difficulty: 'easy',
    references: ["Backup e Armazenamento"]
  }
]
