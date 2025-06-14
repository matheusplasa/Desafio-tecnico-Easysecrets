export interface IMonthSale {
  mes: string;
  quantidade: number;
}

export interface ISaleData {
  produto: string;
  vendas: IMonthSale[];
}

export interface IGeneralSaleData {
  produto: string;
  quantidade: number;
}
