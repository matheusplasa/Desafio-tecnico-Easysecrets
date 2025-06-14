import React from "react";
import { IGeneralSaleData, IMonthSale } from "../types/sales";
import * as d3 from "d3";
import { useD3 } from "../hooks/useD3";
import { type Theme } from "../types/styles";

interface PieChartProps {
  data: IGeneralSaleData[];
  theme: Theme;
}

export const PieChart = ({ data, theme }: PieChartProps) => {
  const isDarkMode = theme === "dark";
  const ref = useD3(
    (svg) => {
      svg.selectAll("*").remove();

      const parent = svg.node()?.parentElement;
      if (!parent) return;

      d3.select(parent).selectAll(".tooltip").remove();

      const { width, height } = parent.getBoundingClientRect();
      const radius = Math.min(width, height) / 2;
      const color = d3.scaleOrdinal(d3.schemeCategory10);

      const pie = d3.pie<IGeneralSaleData>().value((d) => d.quantidade)(data);

      const arc = d3
        .arc<d3.PieArcDatum<IGeneralSaleData>>()
        .innerRadius(0)
        .outerRadius(radius);

      svg
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`)
        .selectAll("path")
        .data(pie)
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", (d, i) => color(i.toString()))
        .append("title")
        .text((d) => `${d.data.produto}: ${d.data.quantidade}`);

      svg
        .select("g")
        .selectAll("text")
        .data(pie)
        .enter()
        .append("text")
        .attr("transform", (d) => `translate(${arc.centroid(d)})`)
        .attr("text-anchor", "middle")
        .text((d) => d.data.produto);
    },
    [data, isDarkMode]
  );

  return (
    <div className="w-full h-full">
      <svg ref={ref} className="w-full h-full" />
    </div>
  );
};
