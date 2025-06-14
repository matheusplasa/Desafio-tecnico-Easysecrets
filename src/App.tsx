import React from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import { BarChart } from "./components/barChart";
import salesData from "./data/vendas.json";
import { IGeneralSaleData, IMonthSale } from "./types/sales";
import { buildAreaData } from "./utils/buildAreaData";
import { buildPieData } from "./utils/buildPieData";
import { PieChart } from "./components/PieChart";

export default function App() {
  const barData: IMonthSale[] = buildAreaData(salesData);
  const pieData: IGeneralSaleData[] = buildPieData(salesData);

  return (
    <div className="min-h-screen w-full text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <header className="p-4 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
          Dashboard de Vendas 2025
        </h1>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/SEU_USUARIO/Desafio-tecnico-Easysecrets"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver código no GitHub"
          >
            Github
          </a>
          <ThemeToggle
            theme={"light"}
            toggleTheme={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </header>

      <main className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
            Vendas Mensais
          </h2>
          <div className="h-[400px] md:h-[500px]">
            <BarChart data={barData} theme={"light"} />
          </div>
        </div>
        <div className="max-w-7xl mx-auto bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
            Vendas Por Produto
          </h2>
          <div className="h-[400px] md:h-[500px]">
            <PieChart data={pieData} theme={"light"} />
          </div>
        </div>
      </main>

      <footer className="text-center p-4 mt-8 text-sm text-slate-500 dark:text-slate-400">
        <p>Desenvolvido para o Desafio Técnico da Easysecrets.</p>
      </footer>
    </div>
  );
}
