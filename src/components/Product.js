import React from 'react'

export default function Product({prod,onAdd}) {
    return (
        <div>
            <img className='small' src={prod.image} alt={prod.name}></img>
            <h3>{prod.name}</h3>
            <div>${prod.price}</div>
            <div>
                <button type='submit' onClick={()=>onAdd(prod)}>Add To Cart</button>
            </div>
        </div>
    )
}
