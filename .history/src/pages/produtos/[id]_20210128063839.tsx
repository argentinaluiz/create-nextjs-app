import { useRouter } from "next/dist/client/router";

export const Product = (props) => {
    const router = useRouter();
    console.log(router);
    return (
        <h1></h1>
    );
};

export default Product;