import React from "react";
import { IMonthSale } from "../types/sales";
import * as d3 from "d3";
import { useD3 } from "../hooks/useD3";
import { type Theme } from "../types/styles";

interface SalesChartProps {
  data: IMonthSale[];
  theme: Theme;
}

export const BarChart: React.FC<SalesChartProps> = ({ data, theme }) => {
  const isDarkMode = theme === "dark";

  const ref = useD3(
    (svg) => {
      svg.selectAll("*").remove();

      const parent = svg.node()?.parentElement;
      if (!parent) return;

      d3.select(parent).selectAll(".tooltip").remove();

      const { width, height } = parent.getBoundingClientRect();
      const margin = { top: 40, right: 30, bottom: 50, left: 60 };

      const axisColor = isDarkMode ? "#94a3b8" : "#475569";
      const textColor = isDarkMode ? "#e2e8f0" : "#ffffff";
      const barColor = isDarkMode ? "#CBC3E3" : "#00CED1";
      const barHoverColor = isDarkMode ? "#99f6e4" : "#60a5fa";

      const g = svg
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const xScale = d3
        .scaleBand<string>()
        .domain(data.map((d) => d.mes))
        .range([0, width - margin.left - margin.right])
        .padding(0.4);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.quantidade) || 0])
        .range([height - margin.top - margin.bottom, 0])
        .nice();

      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale).ticks(5).tickFormat(d3.format("~s"));

      const xAxisGroup = g
        .append("g")
        .attr(
          "transform",
          `translate(0, ${height - margin.top - margin.bottom})`
        )
        .call(xAxis);

      const yAxisGroup = g.append("g").call(yAxis);

      [xAxisGroup, yAxisGroup].forEach((axisGroup) => {
        axisGroup.selectAll("path").style("stroke", axisColor);
        axisGroup.selectAll("line").style("stroke", axisColor);
        axisGroup
          .selectAll("text")
          .style("fill", textColor)
          .style("font-size", "12px");
      });

      const tooltip = d3
        .select(parent)
        .append("div")
        .attr(
          "class",
          "tooltip absolute opacity-0 pointer-events-none p-2 text-sm rounded-md shadow-lg bg-slate-800 text-white dark:bg-white dark:text-slate-900 transition-opacity duration-200"
        );

      g.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => xScale(d.mes)!)
        .attr("width", xScale.bandwidth())
        .attr("y", height - margin.top - margin.bottom)
        .attr("height", 0)
        .attr("fill", barColor)
        .attr("rx", 4)
        .on("mouseover", (event, d) => {
          d3.select(event.currentTarget)
            .transition()
            .duration(200)
            .attr("fill", barHoverColor);
          tooltip
            .style("opacity", 1)
            .html(
              `<strong>${d.mes}:</strong> ${d3.format(",")(
                d.quantidade
              )} vendas`
            )
            .style("left", `${event.pageX + 15}px`)
            .style("top", `${event.pageY - 28}px`);
        })
        .on("mouseout", (event) => {
          d3.select(event.currentTarget)
            .transition()
            .duration(200)
            .attr("fill", barColor);
          tooltip.style("opacity", 0);
        })
        .transition()
        .duration(800)
        .delay((_d, i) => i * 50)
        .attr("y", (d) => yScale(d.quantidade))
        .attr(
          "height",
          (d) => height - margin.top - margin.bottom - yScale(d.quantidade)
        );

      g.append("text")
        .attr("x", (width - margin.left - margin.right) / 2)
        .attr("y", 0 - margin.top / 2)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("fill", textColor)
        .text("Performance de Vendas Mensal");
    },
    [data, isDarkMode]
  );

  return (
    <div className="w-full h-full">
      <svg ref={ref} className="w-full h-full" />
    </div>
  );
};
