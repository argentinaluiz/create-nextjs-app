import { useRouter } from "next/dist/client/router";

export const Product = (props) => {
    const {query} = useRouter();
    return (
        <h1>Meu produto {query.id}</h1>
    );
};

export default Product;