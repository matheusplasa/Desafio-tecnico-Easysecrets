import { useRef, useEffect } from "react";
import * as d3 from "d3";

export const useD3 = (
  renderChartFn: (
    selection: d3.Selection<SVGSVGElement, unknown, null, undefined>
  ) => void,
  dependencies: React.DependencyList
) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      renderChartFn(d3.select(ref.current));
    }
  }, dependencies);

  return ref;
};
