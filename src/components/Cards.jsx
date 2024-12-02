import { useState, useEffect } from 'react';

function Cards (){

    const [data, setData]= useState(null);

    useEffect(() => {
    fetch ("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setData(data));
    }, []);

    return<>
    <ul>
        {data?.map((product) => (<li key={product.id} > {product.title} </li>))}
    </ul>
    </> 
    
}
export default Cards