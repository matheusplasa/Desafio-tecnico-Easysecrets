import { IMonthSale, ISaleData } from "../types/sales";

export const buildAreaData = (salesData: ISaleData[]): IMonthSale[] => {
  const areaData: IMonthSale[] = [];

  salesData.forEach((item) => {
    item.vendas.forEach((venda) => {
      const existingMonth = areaData.find((data) => data.mes === venda.mes);
      if (existingMonth) {
        existingMonth.quantidade += venda.quantidade;
      } else {
        areaData.push({ mes: venda.mes, quantidade: venda.quantidade });
      }
    });
  });

  return areaData;
}