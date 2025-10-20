'use client'

import { useState, useEffect } from 'react'
import { questions } from '@/lib/questions'
import { useRouter } from 'next/navigation'

export default function SimuladoPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  )
  const [startTime, setStartTime] = useState<number>(Date.now())
  const [showWarning, setShowWarning] = useState(false)

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
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

    questions.forEach((q, index) => {
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
      total: questions.length,
      percentage: (correct / questions.length) * 100,
      timeSpent,
      resultsByTheme,
      answers: selectedAnswers,
      date: new Date().toISOString()
    }

    localStorage.setItem('lastSimuladoResult', JSON.stringify(results))
    router.push('/resultado')
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const answeredCount = selectedAnswers.filter(a => a !== null).length

  return (
    <main className="min-h-screen p-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-indigo-600">
              Questão {currentQuestion + 1} de {questions.length}
            </h1>
            <span className="text-sm text-gray-600">
              Respondidas: {answeredCount}/{questions.length}
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
              {questions[currentQuestion].theme}
            </span>
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
              questions[currentQuestion].difficulty === 'easy' 
                ? 'bg-green-100 text-green-800' 
                : questions[currentQuestion].difficulty === 'medium'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {questions[currentQuestion].difficulty === 'easy' 
                ? '⭐ Fácil' 
                : questions[currentQuestion].difficulty === 'medium'
                ? '⭐⭐ Médio'
                : '⭐⭐⭐ Difícil'}
            </span>
          </div>
          
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 whitespace-pre-line">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
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
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex-1 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          >
            ← Anterior
          </button>
          
          {currentQuestion === questions.length - 1 ? (
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
            {questions.map((_, index) => (
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

                  questions.forEach((q, index) => {
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
                    total: questions.length,
                    percentage: (correct / questions.length) * 100,
                    timeSpent,
                    resultsByTheme,
                    answers: selectedAnswers,
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
