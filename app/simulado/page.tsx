'use client'

import { useState, useEffect, Suspense } from 'react'
import { questions, Question } from '@/lib/questions'
import { useRouter, useSearchParams } from 'next/navigation'

type RecallDifficulty = 'easy' | 'medium' | 'hard' | 'forgot' | null

function SimuladoContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([])
  const [recallDifficulty, setRecallDifficulty] = useState<RecallDifficulty[]>([])
  const [showRecallButtons, setShowRecallButtons] = useState(false)
  const [startTime, setStartTime] = useState<number>(Date.now())
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    // Get parameters from URL
    const themesParam = searchParams.get('themes')
    const countParam = searchParams.get('count')
    const difficultyParam = searchParams.get('difficulty')
    
    let filtered = [...questions]
    
    // Filter by recall difficulty if specified
    if (difficultyParam === 'review') {
      const savedRecalls = localStorage.getItem('questionRecalls')
      if (savedRecalls) {
        const recalls = JSON.parse(savedRecalls)
        // Filter only questions marked as hard or forgot
        filtered = filtered.filter(q => {
          const recall = recalls[q.id]
          return recall === 'hard' || recall === 'forgot'
        })
      }
    }
    
    // Filter by themes if specified
    if (themesParam && themesParam.length > 0) {
      const selectedThemes = themesParam.split(',')
      filtered = filtered.filter(q => selectedThemes.includes(q.theme))
    }
    
    // Shuffle questions
    filtered = filtered.sort(() => Math.random() - 0.5)
    
    // Limit quantity if specified
    const count = countParam ? parseInt(countParam) : 70
    filtered = filtered.slice(0, Math.min(count, filtered.length))
    
    setFilteredQuestions(filtered)
    setSelectedAnswers(new Array(filtered.length).fill(null))
    setRecallDifficulty(new Array(filtered.length).fill(null))
  }, [searchParams])

  if (filteredQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando questões...</p>
        </div>
      </div>
    )
  }

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
    // Show recall difficulty buttons after answering
    if (!showRecallButtons) {
      setShowRecallButtons(true)
    }
  }

  const handleRecallDifficulty = (difficulty: RecallDifficulty) => {
    const newRecall = [...recallDifficulty]
    newRecall[currentQuestion] = difficulty
    setRecallDifficulty(newRecall)
    
    // Save to localStorage
    const currentQuestionId = filteredQuestions[currentQuestion].id
    const savedRecalls = localStorage.getItem('questionRecalls')
    const recalls = savedRecalls ? JSON.parse(savedRecalls) : {}
    recalls[currentQuestionId] = difficulty
    localStorage.setItem('questionRecalls', JSON.stringify(recalls))
    
    // Auto advance to next question after rating
    setTimeout(() => {
      if (currentQuestion < filteredQuestions.length - 1) {
        handleNext()
        setShowRecallButtons(false)
      }
    }, 300)
  }

  const handleNext = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleFinish = () => {
    const unanswered = selectedAnswers.filter(a => a === null).length
    if (unanswered > 0) {
      setShowWarning(true)
      return
    }

    const endTime = Date.now()
    const timeSpent = Math.floor((endTime - startTime) / 1000)
    
    // Calculate results
    let correct = 0
    const resultsByTheme: { [key: string]: { correct: number; total: number } } = {}

    filteredQuestions.forEach((q, index) => {
      const theme = q.theme
      if (!resultsByTheme[theme]) {
        resultsByTheme[theme] = { correct: 0, total: 0 }
      }
      resultsByTheme[theme].total++

      if (selectedAnswers[index] === q.correctAnswer) {
        correct++
        resultsByTheme[theme].correct++
      }
    })

    // Save to localStorage
    const results = {
      score: correct,
      total: filteredQuestions.length,
      percentage: (correct / filteredQuestions.length) * 100,
      timeSpent,
      resultsByTheme,
      answers: selectedAnswers,
      questions: filteredQuestions,
      date: new Date().toISOString()
    }

    localStorage.setItem('lastSimuladoResult', JSON.stringify(results))
    router.push('/resultado')
  }

  const progress = ((currentQuestion + 1) / filteredQuestions.length) * 100
  const answeredCount = selectedAnswers.filter(a => a !== null).length

  const currentQ = filteredQuestions[currentQuestion]

  return (
    <main className="min-h-screen p-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-indigo-600">
              Questão {currentQuestion + 1} de {filteredQuestions.length}
            </h1>
            <span className="text-sm text-gray-600">
              Respondidas: {answeredCount}/{filteredQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-6">
          <div className="mb-4 flex gap-2 flex-wrap">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
              {currentQ.theme}
            </span>
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
              currentQ.difficulty === 'easy' 
                ? 'bg-green-100 text-green-800' 
                : currentQ.difficulty === 'medium'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {currentQ.difficulty === 'easy' 
                ? '⭐ Fácil' 
                : currentQ.difficulty === 'medium'
                ? '⭐⭐ Médio'
                : '⭐⭐⭐ Difícil'}
            </span>
          </div>
          
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 whitespace-pre-line">
            {currentQ.question}
          </h2>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-indigo-600 bg-indigo-50 shadow-md'
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start">
                  <span className="font-semibold text-indigo-600 mr-3">
                    {String.fromCharCode(65 + index)})
                  </span>
                  <span className="flex-1">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Recall Difficulty Rating */}
          {selectedAnswers[currentQuestion] !== null && (
            <div className="mt-6 pt-6 border-t-2 border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">
                🧠 Quão difícil foi lembrar dessa resposta?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button
                  onClick={() => handleRecallDifficulty('easy')}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    recallDifficulty[currentQuestion] === 'easy'
                      ? 'bg-green-600 border-green-600 text-white shadow-lg scale-105'
                      : 'bg-white border-green-300 text-green-700 hover:border-green-500 hover:shadow-md'
                  }`}
                >
                  <div className="text-2xl mb-1">😊</div>
                  <div className="font-semibold text-sm">Fácil</div>
                  <div className="text-xs opacity-80">Lembrei bem</div>
                </button>
                
                <button
                  onClick={() => handleRecallDifficulty('medium')}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    recallDifficulty[currentQuestion] === 'medium'
                      ? 'bg-yellow-600 border-yellow-600 text-white shadow-lg scale-105'
                      : 'bg-white border-yellow-300 text-yellow-700 hover:border-yellow-500 hover:shadow-md'
                  }`}
                >
                  <div className="text-2xl mb-1">🤔</div>
                  <div className="font-semibold text-sm">Médio</div>
                  <div className="text-xs opacity-80">Hesitei um pouco</div>
                </button>
                
                <button
                  onClick={() => handleRecallDifficulty('hard')}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    recallDifficulty[currentQuestion] === 'hard'
                      ? 'bg-orange-600 border-orange-600 text-white shadow-lg scale-105'
                      : 'bg-white border-orange-300 text-orange-700 hover:border-orange-500 hover:shadow-md'
                  }`}
                >
                  <div className="text-2xl mb-1">😰</div>
                  <div className="font-semibold text-sm">Difícil</div>
                  <div className="text-xs opacity-80">Custei a lembrar</div>
                </button>
                
                <button
                  onClick={() => handleRecallDifficulty('forgot')}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    recallDifficulty[currentQuestion] === 'forgot'
                      ? 'bg-red-600 border-red-600 text-white shadow-lg scale-105'
                      : 'bg-white border-red-300 text-red-700 hover:border-red-500 hover:shadow-md'
                  }`}
                >
                  <div className="text-2xl mb-1">😵</div>
                  <div className="font-semibold text-sm">Esqueci</div>
                  <div className="text-xs opacity-80">Não lembrava</div>
                </button>
              </div>
              <p className="text-center text-sm text-gray-500 mt-3">
                💡 Isso ajuda a identificar quais questões você precisa revisar mais
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex-1 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          >
            ← Anterior
          </button>
          
          {currentQuestion === filteredQuestions.length - 1 ? (
            <button
              onClick={handleFinish}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
            >
              Finalizar Simulado ✓
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
            >
              Próxima →
            </button>
          )}
        </div>

        {/* Question Navigator */}
        <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-semibold text-gray-700 mb-3">Navegação Rápida:</h3>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {filteredQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`aspect-square rounded-lg font-semibold transition-all duration-200 ${
                  index === currentQuestion
                    ? 'bg-indigo-600 text-white'
                    : selectedAnswers[index] !== null
                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Warning Modal */}
      {showWarning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-red-600 mb-4">⚠️ Atenção!</h3>
            <p className="text-gray-700 mb-6">
              Você ainda tem {selectedAnswers.filter(a => a === null).length} questão(ões) sem resposta. 
              Deseja finalizar mesmo assim?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowWarning(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg"
              >
                Revisar
              </button>
              <button
                onClick={() => {
                  setShowWarning(false)
                  const endTime = Date.now()
                  const timeSpent = Math.floor((endTime - startTime) / 1000)
                  
                  let correct = 0
                  const resultsByTheme: { [key: string]: { correct: number; total: number } } = {}

                  filteredQuestions.forEach((q, index) => {
                    const theme = q.theme
                    if (!resultsByTheme[theme]) {
                      resultsByTheme[theme] = { correct: 0, total: 0 }
                    }
                    resultsByTheme[theme].total++

                    if (selectedAnswers[index] === q.correctAnswer) {
                      correct++
                      resultsByTheme[theme].correct++
                    }
                  })

                  const results = {
                    score: correct,
                    total: filteredQuestions.length,
                    percentage: (correct / filteredQuestions.length) * 100,
                    timeSpent,
                    resultsByTheme,
                    answers: selectedAnswers,
                    questions: filteredQuestions,
                    date: new Date().toISOString()
                  }

                  localStorage.setItem('lastSimuladoResult', JSON.stringify(results))
                  router.push('/resultado')
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Finalizar Assim Mesmo
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default function SimuladoPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-indigo-600 font-semibold">Carregando simulado...</p>
        </div>
      </div>
    }>
      <SimuladoContent />
    </Suspense>
  )
}
