import React from "react"
export default function Card({title, image, brand, price}){
    return (
        <div className="cardDemo">
        <img src={image} alt="some Image" />
        <div>
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>{price}</p>
        </div>

        </div>
       
    )
}