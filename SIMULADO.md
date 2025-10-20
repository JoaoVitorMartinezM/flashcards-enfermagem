# 🎓 Simulado Interativo - Técnico em Enfermagem

Aplicativo web completo desenvolvido em Next.js para simulados de enfermagem com questões no estilo **FEPESE** (Fundação de Estudos e Pesquisas Sócio-Econômicos).

## ✨ Características Principais

### 📝 Questões Aprimoradas
- **20 questões de múltipla escolha** no formato FEPESE
- **5 alternativas** por questão (padrão de concursos públicos)
- **3 níveis de dificuldade**: Fácil ⭐, Médio ⭐⭐, Difícil ⭐⭐⭐
- Questões contextualizadas com **casos clínicos** e **situações práticas**
- **Assertivas múltiplas** para análise complexa
- **Referências legais** em cada questão

### 📚 Conteúdo Programático
1. **Lei nº 7.498/1986** - Regulamentação do Exercício da Enfermagem
2. **Decreto nº 94.406/1987** - Atribuições das Categorias Profissionais
3. **Resolução COFEN nº 564/2017** - Código de Ética dos Profissionais de Enfermagem
4. **Atenção Básica** - PNAB, ESF, Programas de Saúde
5. **Média Complexidade** - UPA, CME, Centro Cirúrgico
6. **Alta Complexidade** - UTI, Hemodiálise, Pacientes Críticos

### 🎯 Sistema de Avaliação

#### Durante o Simulado:
- ⏱️ **Cronômetro automático** (tempo total)
- 📊 **Barra de progresso** visual
- 🎨 **Indicadores de dificuldade** por questão
- 🔢 **Navegação rápida** por grade de questões
- ✅ **Marcação visual** de questões respondidas
- ⚠️ **Alertas** para questões não respondidas

#### Resultado e Análise:
- 🏆 **Nota final** e percentual de acerto
- ⏰ **Tempo total** e tempo médio por questão
- 📈 **Análise por tema** (Lei, Decreto, Código de Ética, SUS)
- 📊 **Análise por dificuldade** (Fácil, Médio, Difícil)
- 🎭 **Feedback motivacional** baseado no desempenho
- 📝 **Revisão completa** com:
  - Gabarito comentado
  - Explicações detalhadas
  - Identificação de erros e acertos
  - Referências normativas para cada questão
  - Indicação da dificuldade

### 💯 Sistema de Classificação
- **90-100%**: Excelente! 🏆
- **70-89%**: Muito Bom! 👏
- **50-69%**: Bom! Continue estudando 📚
- **0-49%**: Continue se esforçando! 💪

## 🚀 Tecnologias Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Armazenamento**: LocalStorage (resultados)
- **UI/UX**: Design responsivo e moderno

## 📁 Estrutura do Projeto

```
flashcards-enfermagem/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   ├── globals.css         # Estilos globais
│   ├── simulado/
│   │   └── page.tsx        # Página do simulado
│   └── resultado/
│       └── page.tsx        # Página de resultados
├── lib/
│   └── questions.ts        # Banco de questões
├── public/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Interface do Usuário

### Página Inicial
- Apresentação do simulado
- Informações sobre conteúdo e avaliação
- Explicação dos níveis de dificuldade
- Botão destacado para iniciar

### Página do Simulado
- Design limpo e focado
- Questões com formatação adequada (quebras de linha em assertivas)
- Opções de resposta bem espaçadas
- Navegação intuitiva (anterior/próxima)
- Grade de navegação rápida
- Indicadores visuais de progresso

### Página de Resultados
- Visão geral do desempenho
- Gráficos de desempenho por tema
- Gráficos de desempenho por dificuldade
- Revisão detalhada expansível
- Gabarito comentado com cores (verde/vermelho)
- Explicações e referências legais

## 📊 Tipos de Questões (Estilo FEPESE)

### 1. Questões Diretas
```
"De acordo com a Lei nº 7.498/1986, é correto afirmar..."
```

### 2. Questões com Assertivas
```
"Analise as assertivas:
1. ...
2. ...
3. ...
Estão CORRETAS:"
```

### 3. Questões de Caso Clínico
```
"Um paciente apresenta... Qual deve ser a conduta do Técnico em Enfermagem?"
```

### 4. Questões de Exceção
```
"São atribuições do Técnico em Enfermagem, EXCETO:"
```

## 🎓 Diferenciais do Simulado

1. **Fidelidade aos Concursos FEPESE**
   - 5 alternativas por questão
   - Questões contextualizadas
   - Casos clínicos realistas
   - Linguagem técnica apropriada

2. **Feedback Pedagógico**
   - Explicações detalhadas
   - Referências normativas
   - Indicação da fundamentação legal

3. **Análise de Desempenho**
   - Múltiplas dimensões de análise
   - Identificação de pontos fracos
   - Direcionamento de estudos

4. **Experiência do Usuário**
   - Interface intuitiva
   - Design responsivo (mobile/desktop)
   - Navegação fluida
   - Feedback visual imediato

## 📖 Como Utilizar

### 1. Iniciar o Simulado
```bash
npm run dev
```
Acesse: http://localhost:3000

### 2. Realizar o Simulado
- Leia atentamente cada questão
- Analise todas as alternativas
- Marque sua resposta
- Use a navegação para revisar questões
- Finalize quando estiver seguro

### 3. Análise de Resultados
- Visualize seu desempenho geral
- Analise os gráficos por tema e dificuldade
- Revise as questões erradas
- Leia as explicações e referências
- Identifique áreas para estudo

### 4. Reforço de Aprendizagem
- Anote os temas com menor desempenho
- Consulte as referências legais indicadas
- Refaça o simulado após estudar
- Acompanhe sua evolução

## 📚 Referências Normativas

- **Lei nº 7.498/1986** - Regulamentação do Exercício da Enfermagem
- **Decreto nº 94.406/1987** - Atribuições Profissionais
- **Resolução COFEN nº 564/2017** - Código de Ética
- **Portaria GM/MS nº 2.436/2017** - Política Nacional de Atenção Básica
- **RDC ANVISA nº 15/2012** - Central de Material e Esterilização
- **RDC ANVISA nº 7/2010** - Unidades de Terapia Intensiva
- **RDC ANVISA nº 11/2014** - Serviços de Diálise
- **Resolução COFEN nº 543/2017** - Centro Cirúrgico
- **Resolução COFEN nº 515/2016** - Hemodiálise

## 🔄 Atualizações Futuras

- [ ] Banco de questões expansível
- [ ] Modo de estudo por tema específico
- [ ] Histórico de simulados realizados
- [ ] Comparação de desempenho ao longo do tempo
- [ ] Modo de prova cronometrada
- [ ] Exportação de resultados em PDF
- [ ] Sistema de favoritos para questões
- [ ] Comentários e dúvidas nas questões

## 👨‍💻 Desenvolvimento

Para adicionar novas questões, edite o arquivo `lib/questions.ts`:

```typescript
{
  id: 21,
  question: "Sua questão aqui...",
  options: [
    "Alternativa A",
    "Alternativa B",
    "Alternativa C",
    "Alternativa D",
    "Alternativa E"
  ],
  correctAnswer: 0, // índice da resposta correta (0-4)
  theme: "Tema da questão",
  explanation: "Explicação detalhada...",
  difficulty: 'medium', // 'easy' | 'medium' | 'hard'
  references: ["Lei nº...", "Resolução..."]
}
```

## 📝 Licença

Este projeto é destinado para fins educacionais.

## 🤝 Contribuições

Sugestões de melhorias e novas questões são bem-vindas!

---

**📌 Dica Final:** Use o simulado como ferramenta de autoavaliação e direcionamento de estudos. Bons estudos e sucesso no concurso! 🎯📚
