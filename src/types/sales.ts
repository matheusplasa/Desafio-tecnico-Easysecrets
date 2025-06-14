export interface IMonthSale {
  mes: string;
  quantidade: number;
}

export interface ISaleData {
  produto: string;
  vendas: IMonthSale[];
}
