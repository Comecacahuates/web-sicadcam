import * as React from "react";

/** Propiedades */
export interface PriceComparisonProps {
  children: React.ReactNode;
}

/** Componente de comparación de precios */
export default function PriceComparison(props: PriceComparisonProps) {
  /* Propiedades */
  const { children } = props;

  /* Renderización */
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-12 md:gap-3 lg:gap-6 xl:gap-12">
      {children}
    </div>
  );
}
