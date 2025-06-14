import React from 'react';

// import { Github } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { SalesChart } from './components/SalesChart';
import salesData from './data/vendas.json';

interface DataPoint {
  month: string;
  sales: number;
}


export default function App() {

  const data: DataPoint[] = salesData.flatMap(item => 
    item.vendas.map(venda => ({
      month: venda.mes,
      sales: venda.quantidade
    }))
  );

  return (
    <div className="min-h-screen w-full text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <header className="p-4 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
          Dashboard de Vendas 2025
        </h1>
        <div className="flex items-center gap-4">
          <a href="https://github.com/SEU_USUARIO/Desafio-tecnico-Easysecrets" target="_blank" rel="noopener noreferrer" aria-label="Ver código no GitHub">
             Github
          </a>
          <ThemeToggle theme={'light'} toggleTheme={function (): void {
            throw new Error('Function not implemented.');
          } } />
        </div>
      </header>
      
      <main className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Vendas Mensais</h2>
          <div className="h-[400px] md:h-[500px]">
             <SalesChart data={data} theme={'light'} />
          </div>
        </div>
      </main>

       <footer className="text-center p-4 mt-8 text-sm text-slate-500 dark:text-slate-400">
         <p>Desenvolvido para o Desafio Técnico da Easysecrets.</p>
       </footer>
    </div>
  );
}