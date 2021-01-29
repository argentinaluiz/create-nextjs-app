import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

interface Product {
  id: number;
  name: string;
  price: string;
}

interface ProductsProps {
  products: Product[];
}

const Products: React.FunctionComponent<ProductsProps> = (props) => {
  const { products } = props;
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/products").then((response) => {
  //     setProducts(response.data);
  //   });
  // }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map((p, key) => (
          <li key={key}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get("http://localhost:3000/products");

  return {
    props: {
      products: data,
    },
  };
};
