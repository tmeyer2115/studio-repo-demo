import * as React from "react";

export interface ProductProps {
  cost: number
  color: string
};

const Product = (props: ProductProps) => {
  return (
    <div>
        <div>{`Price: ${props.cost} USD`}</div>
        <div>{`They come in ${props.color}`}</div>
    </div>
  );
};

export default Product;