import React from 'react';
import ProductCard from './component/ProductCard';

function App(){

    return(
        <div>

            <ProductCard name="Laptop" price="50000" category="Electronics"/>
            <ProductCard name="Mobile" price="20000" category="Electronics"/>
            <ProductCard name="Shoes" price="30000" category="Fashion"/>
        </div>
    );
}
export default App;