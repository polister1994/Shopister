function Item ({item}) {
    
    return (
        <section>
        {item?.map((product) => (
        <div className='productCards' key={product.id} > 
            <div className='divCart'>
                <img className='imgCard' src={product.image} alt="Imagen de Producto" />
            </div>
        </div>
        ))}
        </section>
    )
} 

export default Item