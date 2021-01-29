import axios from 'axios';
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Products() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios
      .get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
      });
  }, []);

  return (
    <h1>Produtos</h1>
  )
}


