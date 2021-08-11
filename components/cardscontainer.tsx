import * as React from "react";

/** Propiedades */
export interface CardsContainerProps {
  children: React.ReactNode;
}

/** Componente de comparación de precios */
export default function CardsContainer(props: CardsContainerProps) {
  /* Propiedades */
  const { children } = props;

  /* Renderización */
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-3 lg:gap-6 xl:gap-12 justify-center">
      {children}
    </div>
  );
}
