// @flow 
import * as React from 'react';

export const csr = (props) => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h1>Contador</h1>
            <h3>{count}</h3>
            <button onClick={() => setCount(count+1)}>Contar</button>
        </div>
    );
};

export default csr;