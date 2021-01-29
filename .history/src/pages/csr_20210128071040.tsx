// @flow 
import * as React from 'react';

export const csr = (props) => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h1>Contador</h1>
            {count}
            <button onClick={() => setCount(count+1)}></button>
        </div>
    );
};

export default csr;