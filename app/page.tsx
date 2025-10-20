'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">
            📚 Simulado de Enfermagem
          </h1>
          <p className="text-gray-600 text-lg">
            Teste seus conhecimentos sobre legislação e atuação profissional do Técnico em Enfermagem
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h2 className="font-semibold text-indigo-900 mb-2">📋 O que você vai encontrar:</h2>
            <ul className="text-gray-700 space-y-1 ml-5 list-disc">
              <li>20 questões de múltipla escolha estilo FEPESE</li>
              <li>Baseado na Lei 7.498/1986 e Decreto 94.406/1987</li>
              <li>Código de Ética (COFEN 564/2017)</li>
              <li>Atuação no SUS (Atenção Básica, Média e Alta Complexidade)</li>
              <li>Questões com 3 níveis de dificuldade</li>
              <li>Referências legais para cada questão</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h2 className="font-semibold text-green-900 mb-2">📊 Avaliação de Desempenho:</h2>
            <ul className="text-gray-700 space-y-1 ml-5 list-disc">
              <li>Tempo total gasto e tempo médio por questão</li>
              <li>Nota final e percentual de acerto</li>
              <li>Análise por tema e por dificuldade</li>
              <li>Feedback detalhado com explicações</li>
              <li>Identificação visual de acertos e erros</li>
              <li>Referências normativas para estudo</li>
            </ul>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-200">
            <h2 className="font-semibold text-amber-900 mb-2">⚡ Níveis de Dificuldade:</h2>
            <div className="text-gray-700 space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">⭐ Fácil</span>
                <span className="text-sm">Conceitos básicos e definições</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">⭐⭐ Médio</span>
                <span className="text-sm">Aplicação prática e análise</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">⭐⭐⭐ Difícil</span>
                <span className="text-sm">Situações complexas e tomada de decisão</span>
              </div>
            </div>
          </div>
        </div>

        <Link 
          href="/simulado"
          className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl text-center text-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          Iniciar Simulado 🚀
        </Link>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>💡 Dica: Reserve um tempo tranquilo para fazer o simulado</p>
        </div>
      </div>
    </main>
  )
}
