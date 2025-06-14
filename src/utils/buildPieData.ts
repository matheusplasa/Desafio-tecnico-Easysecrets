import { IGeneralSaleData, IMonthSale, ISaleData } from "../types/sales";

export const buildPieData = (salesData: ISaleData[]): IGeneralSaleData[] => {
  const pieData: IGeneralSaleData[] = [];

  salesData.forEach((item) => {
    const existingProduct = pieData.find(
      (data) => data.produto === item.produto
    );
    if (existingProduct) {
      item.vendas.forEach((venda) => {
        existingProduct.quantidade += venda.quantidade;
      });
    } else {
      pieData.push({
        produto: item.produto,
        quantidade: item.vendas.reduce(
          (partial, c) => partial + c.quantidade,
          0
        ),
      });
    }
  });

  return pieData;
};
