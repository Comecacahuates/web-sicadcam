import * as React from "react";

/** Propiedades */
export interface CardProps {
  color: string;
  title: string;
  children: React.ReactNode;
}

/** Componente de tarjeta */
export default function Card(props: CardProps) {
  /* Propiedades */
  const { color, title, children } = props;

  /* Renderización */
  return (
    <div className="shadow-md overflow-hidden">
      <div className={`px-6 py-3 ${color}`}>
        <p className="text-center text-white font-bold font-display text-2xl my-2">
          {title}
        </p>
      </div>
      <div className="px-6 py-3">{children}</div>
    </div>
  );
}
