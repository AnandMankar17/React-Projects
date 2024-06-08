import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './Card'

const root =  ReactDOM.createRoot(document.getElementById('root'))

fetch('https://dummyjson.com/products')
.then(res=>res.json())
.then(data=>{
  root.render(
    <StrictMode>
      {data.products.map((product)=>{
        return <Card title={product.title} image={product.thumbnail} brand={product.brand} price={product.price}/>
      })}
</StrictMode>
  )

})
