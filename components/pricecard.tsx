import * as React from "react";
import Card, { CardProps } from "./card";

/** Propiedades */
export interface PriceCardProps extends CardProps {
  price: string;
  currency: string;
}

/** Componente de tarjeta de precio */
export default function PriceCard(props: PriceCardProps) {
  /* Propiedades */
  const { price, currency, children, ...cardProps } = props;

  /* Renderización */
  return (
    <Card {...cardProps}>
      <p className="text-center my-6 font-display font-bold text-5xl">
        <span className="text-xl">$</span>
        {price} <span className="text-xl">{currency}</span>
      </p>
      <hr />
      {children}
    </Card>
  );
}
