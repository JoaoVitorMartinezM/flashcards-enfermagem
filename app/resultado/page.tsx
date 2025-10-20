'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { questions } from '@/lib/questions'
import { useRouter } from 'next/navigation'

interface Results {
  score: number
  total: number
  percentage: number
  timeSpent: number
  resultsByTheme: { [key: string]: { correct: number; total: number } }
  answers: (number | null)[]
  date: string
}

export default function ResultadoPage() {
  const router = useRouter()
  const [results, setResults] = useState<Results | null>(null)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const savedResults = localStorage.getItem('lastSimuladoResult')
    if (savedResults) {
      setResults(JSON.parse(savedResults))
    } else {
      router.push('/')
    }
  }, [router])

  if (!results) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Carregando resultados...</div>
      </main>
    )
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}min ${secs}s`
  }

  const getPerformanceMessage = (percentage: number) => {
    if (percentage >= 90) return { message: 'Excelente! 🏆', color: 'text-green-600', bg: 'bg-green-50' }
    if (percentage >= 70) return { message: 'Muito Bom! 👏', color: 'text-blue-600', bg: 'bg-blue-50' }
    if (percentage >= 50) return { message: 'Bom! Continue estudando 📚', color: 'text-yellow-600', bg: 'bg-yellow-50' }
    return { message: 'Continue se esforçando! 💪', color: 'text-red-600', bg: 'bg-red-50' }
  }

  const performance = getPerformanceMessage(results.percentage)

  return (
    <main className="min-h-screen p-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">Resultado do Simulado</h1>
          <p className="text-gray-600">Confira seu desempenho</p>
        </div>

        {/* Score Card */}
        <div className={`${performance.bg} rounded-2xl shadow-2xl p-8 mb-6 border-2 border-opacity-20`}>
          <div className="text-center mb-6">
            <div className="text-6xl font-bold text-gray-800 mb-2">
              {results.score}/{results.total}
            </div>
            <div className="text-3xl font-semibold mb-4" style={{ color: performance.color.replace('text-', '') }}>
              {results.percentage.toFixed(1)}%
            </div>
            <div className={`text-2xl font-semibold ${performance.color}`}>
              {performance.message}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white bg-opacity-50 rounded-lg p-4 text-center">
              <div className="text-gray-600 text-sm mb-1">Tempo Total</div>
              <div className="text-2xl font-bold text-gray-800">{formatTime(results.timeSpent)}</div>
            </div>
            <div className="bg-white bg-opacity-50 rounded-lg p-4 text-center">
              <div className="text-gray-600 text-sm mb-1">Tempo Médio/Questão</div>
              <div className="text-2xl font-bold text-gray-800">
                {(results.timeSpent / results.total).toFixed(0)}s
              </div>
            </div>
            <div className="bg-white bg-opacity-50 rounded-lg p-4 text-center">
              <div className="text-gray-600 text-sm mb-1">Acertos</div>
              <div className="text-2xl font-bold text-gray-800">
                {results.score} / {results.total}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics by Difficulty */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Desempenho por Dificuldade</h2>
          <div className="space-y-4">
            {(() => {
              const byDifficulty: { [key: string]: { correct: number; total: number } } = {
                easy: { correct: 0, total: 0 },
                medium: { correct: 0, total: 0 },
                hard: { correct: 0, total: 0 }
              }
              
              questions.forEach((q, index) => {
                byDifficulty[q.difficulty].total++
                if (results.answers[index] === q.correctAnswer) {
                  byDifficulty[q.difficulty].correct++
                }
              })

              const difficultyLabels = {
                easy: '⭐ Fácil',
                medium: '⭐⭐ Médio',
                hard: '⭐⭐⭐ Difícil'
              }

              return Object.entries(byDifficulty).map(([difficulty, data]) => {
                if (data.total === 0) return null
                const percentage = (data.correct / data.total) * 100
                return (
                  <div key={difficulty} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-700">{difficultyLabels[difficulty as keyof typeof difficultyLabels]}</h3>
                      <span className="text-sm text-gray-600">
                        {data.correct}/{data.total} ({percentage.toFixed(0)}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${
                          percentage >= 70 ? 'bg-green-500' :
                          percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                )
              })
            })()}
          </div>
        </div>

        {/* Performance by Theme */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Desempenho por Tema</h2>
          <div className="space-y-4">
            {Object.entries(results.resultsByTheme).map(([theme, data]) => {
              const themePercentage = (data.correct / data.total) * 100
              return (
                <div key={theme} className="border-b border-gray-200 pb-4 last:border-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-700">{theme}</h3>
                    <span className="text-sm text-gray-600">
                      {data.correct}/{data.total} ({themePercentage.toFixed(0)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${
                        themePercentage >= 70 ? 'bg-green-500' :
                        themePercentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${themePercentage}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Detailed Review */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full flex justify-between items-center text-left"
          >
            <h2 className="text-2xl font-bold text-gray-800">📝 Revisão Detalhada</h2>
            <span className="text-2xl">{showDetails ? '−' : '+'}</span>
          </button>

          {showDetails && (
            <div className="mt-6 space-y-6">
              {questions.map((question, index) => {
                const userAnswer = results.answers[index]
                const isCorrect = userAnswer === question.correctAnswer
                const wasAnswered = userAnswer !== null

                return (
                  <div key={index} className={`p-4 rounded-lg border-2 ${
                    !wasAnswered ? 'border-gray-300 bg-gray-50' :
                    isCorrect ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'
                  }`}>
                    <div className="flex items-start mb-3">
                      <span className={`text-2xl mr-3 ${
                        !wasAnswered ? '' :
                        isCorrect ? '✅' : '❌'
                      }`}>
                        {!wasAnswered ? '⚠️' : ''}
                      </span>
                      <div className="flex-1">
                        <div className="flex gap-2 mb-2 flex-wrap">
                          <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                            Questão {index + 1} - {question.theme}
                          </span>
                          <span className={`text-xs font-semibold px-2 py-1 rounded ${
                            question.difficulty === 'easy' 
                              ? 'bg-green-100 text-green-800' 
                              : question.difficulty === 'medium'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {question.difficulty === 'easy' 
                              ? '⭐ Fácil' 
                              : question.difficulty === 'medium'
                              ? '⭐⭐ Médio'
                              : '⭐⭐⭐ Difícil'}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-3 whitespace-pre-line">{question.question}</h3>
                        
                        <div className="space-y-2">
                          {question.options.map((option, optIndex) => {
                            const isUserAnswer = userAnswer === optIndex
                            const isCorrectAnswer = optIndex === question.correctAnswer
                            
                            return (
                              <div
                                key={optIndex}
                                className={`p-2 rounded ${
                                  isCorrectAnswer ? 'bg-green-100 font-semibold' :
                                  isUserAnswer ? 'bg-red-100' : ''
                                }`}
                              >
                                <span className="font-semibold mr-2">
                                  {String.fromCharCode(65 + optIndex)})
                                </span>
                                {option}
                                {isCorrectAnswer && <span className="ml-2 text-green-600">✓ Correta</span>}
                                {isUserAnswer && !isCorrectAnswer && <span className="ml-2 text-red-600">✗ Sua resposta</span>}
                              </div>
                            )
                          })}
                        </div>

                        {question.explanation && (
                          <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="font-semibold text-blue-900 mb-1">💡 Explicação:</div>
                            <div className="text-sm text-blue-800">{question.explanation}</div>
                          </div>
                        )}

                        {question.references && question.references.length > 0 && (
                          <div className="mt-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                            <div className="font-semibold text-purple-900 mb-1">📚 Referências:</div>
                            <div className="text-sm text-purple-800">
                              {question.references.map((ref, idx) => (
                                <div key={idx}>• {ref}</div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Link 
            href="/"
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg text-center transition-all duration-200"
          >
            ← Voltar ao Início
          </Link>
          <Link 
            href="/simulado"
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-200"
          >
            Fazer Novo Simulado 🔄
          </Link>
        </div>
      </div>
    </main>
  )
}
