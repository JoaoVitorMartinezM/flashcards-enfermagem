'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [selectedThemes, setSelectedThemes] = useState<string[]>([])
  const [questionsCount, setQuestionsCount] = useState(20)
  const [reviewMode, setReviewMode] = useState(false)
  const [difficultyCount, setDifficultyCount] = useState({ hard: 0, forgot: 0 })

  useEffect(() => {
    // Count questions with difficulty
    const savedRecalls = localStorage.getItem('questionRecalls')
    if (savedRecalls) {
      const recalls = JSON.parse(savedRecalls)
      const counts = { hard: 0, forgot: 0 }
      Object.values(recalls).forEach((difficulty: any) => {
        if (difficulty === 'hard') counts.hard++
        if (difficulty === 'forgot') counts.forgot++
      })
      setDifficultyCount(counts)
    }
  }, [])

  const themes = [
    { id: 'all', name: 'Todas as Disciplinas', icon: '📚', color: 'indigo' },
    { id: 'Legislação Profissional', name: 'Legislação Profissional', icon: '⚖️', color: 'blue' },
    { id: 'Sistema Único de Saúde', name: 'Sistema Único de Saúde (SUS)', icon: '🏥', color: 'green' },
    { id: 'Níveis de Atenção', name: 'Níveis de Atenção', icon: '🏨', color: 'teal' },
    { id: 'Fundamentos de Enfermagem', name: 'Fundamentos de Enfermagem', icon: '💉', color: 'cyan' },
    { id: 'Procedimentos de Rotina', name: 'Procedimentos de Rotina', icon: '🩺', color: 'sky' },
    { id: 'Urgência e Emergência', name: 'Urgência e Emergência', icon: '🚨', color: 'red' },
    { id: 'Vigilância em Saúde', name: 'Vigilância em Saúde', icon: '🔬', color: 'purple' },
    { id: 'Ética e Humanização', name: 'Ética e Humanização', icon: '❤️', color: 'pink' },
    { id: 'Segurança do Paciente', name: 'Segurança do Paciente', icon: '🛡️', color: 'amber' },
    { id: 'Língua Portuguesa', name: 'Língua Portuguesa', icon: '📝', color: 'violet' },
    { id: 'Atualidades', name: 'Temas da Atualidade', icon: '🌍', color: 'emerald' },
    { id: 'Informática', name: 'Noções de Informática', icon: '💻', color: 'slate' },
  ]

  const handleThemeToggle = (themeId: string) => {
    if (themeId === 'all') {
      setSelectedThemes([])
    } else {
      setSelectedThemes(prev => 
        prev.includes(themeId) 
          ? prev.filter(t => t !== themeId)
          : [...prev, themeId]
      )
    }
  }

  const startSimulado = () => {
    const params = new URLSearchParams()
    if (selectedThemes.length > 0) {
      params.set('themes', selectedThemes.join(','))
    }
    if (reviewMode) {
      params.set('difficulty', 'review')
    }
    params.set('count', questionsCount.toString())
    
    router.push(`/simulado?${params.toString()}`)
  }

  const isAllSelected = selectedThemes.length === 0
  const totalDifficult = difficultyCount.hard + difficultyCount.forgot

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl p-6 md:p-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-600 mb-3">
            📚 Simulado de Enfermagem
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Prepare-se para concursos públicos com questões estilo FEPESE
          </p>
        </div>

        {/* Review Mode Section */}
        {totalDifficult > 0 && (
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl mb-6 border-2 border-orange-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="text-4xl">🧠</div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-orange-900 mb-2 flex items-center gap-2">
                  Modo Revisão - Questões com Dificuldade
                </h2>
                <p className="text-gray-700 text-sm mb-3">
                  Você marcou <strong>{totalDifficult} questões</strong> como difíceis de lembrar
                  ({difficultyCount.hard} difíceis, {difficultyCount.forgot} esquecidas)
                </p>
                <button
                  onClick={() => setReviewMode(!reviewMode)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    reviewMode
                      ? 'bg-orange-600 text-white shadow-lg scale-105'
                      : 'bg-white text-orange-700 border-2 border-orange-300 hover:border-orange-500'
                  }`}
                >
                  {reviewMode ? '✓ Modo Revisão Ativado' : '🎯 Ativar Modo Revisão'}
                </button>
                {reviewMode && (
                  <p className="text-sm text-orange-800 mt-2">
                    ✓ Serão exibidas apenas as questões que você teve dificuldade
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Seleção de Temas */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-6 border-2 border-indigo-200">
          <h2 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
            🎯 Escolha os Temas do Simulado
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Selecione as disciplinas que deseja praticar ou deixe em branco para incluir todas
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {themes.map(theme => (
              <button
                key={theme.id}
                onClick={() => handleThemeToggle(theme.id)}
                className={`
                  p-3 rounded-lg border-2 transition-all duration-200 text-left
                  ${theme.id === 'all' && isAllSelected
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg'
                    : theme.id === 'all'
                    ? 'bg-white border-gray-300 text-gray-700 hover:border-indigo-400'
                    : selectedThemes.includes(theme.id)
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg'
                    : 'bg-white border-gray-300 text-gray-700 hover:border-indigo-400 hover:shadow-md'
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{theme.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">{theme.name}</p>
                  </div>
                  {theme.id !== 'all' && selectedThemes.includes(theme.id) && (
                    <span className="text-white">✓</span>
                  )}
                </div>
              </button>
            ))}
          </div>
          
          {selectedThemes.length > 0 && (
            <div className="mt-4 p-3 bg-indigo-100 rounded-lg">
              <p className="text-indigo-900 text-sm font-semibold">
                ✓ {selectedThemes.length} {selectedThemes.length === 1 ? 'tema selecionado' : 'temas selecionados'}
              </p>
            </div>
          )}
        </div>

        {/* Seleção de Quantidade */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl mb-6 border-2 border-green-200">
          <h2 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
            📊 Quantidade de Questões
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="10"
                max="70"
                step="5"
                value={questionsCount}
                onChange={(e) => setQuestionsCount(Number(e.target.value))}
                className="flex-1 h-2 bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center">
                {questionsCount}
              </div>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {[10, 20, 30, 40, 50, 70].map(num => (
                <button
                  key={num}
                  onClick={() => setQuestionsCount(num)}
                  className={`
                    px-4 py-2 rounded-lg font-semibold text-sm transition-all
                    ${questionsCount === num
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-white text-green-700 border-2 border-green-300 hover:border-green-500'
                    }
                  `}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Informações do Simulado */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="text-blue-600 text-2xl mb-2">📚</div>
            <p className="font-semibold text-blue-900">70 Questões</p>
            <p className="text-xs text-blue-700">Banco completo disponível</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <div className="text-purple-600 text-2xl mb-2">⭐</div>
            <p className="font-semibold text-purple-900">3 Níveis</p>
            <p className="text-xs text-purple-700">Fácil, Médio e Difícil</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <div className="text-amber-600 text-2xl mb-2">✓</div>
            <p className="font-semibold text-amber-900">Gabarito Comentado</p>
            <p className="text-xs text-amber-700">Com explicações detalhadas</p>
          </div>
        </div>

        {/* Botão Iniciar */}
        <button
          onClick={startSimulado}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-5 px-8 rounded-xl text-xl transition-all duration-200 transform hover:scale-[1.02] shadow-xl"
        >
          🚀 Iniciar Simulado
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            💡 Dica: Reserve 60-90 minutos para realizar o simulado com tranquilidade
          </p>
        </div>
      </div>
    </main>
  )
}
