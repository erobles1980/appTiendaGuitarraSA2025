import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Guitarra from './Components/Guitarra'
import { useState } from 'react'
import { db } from './db'

export default function App() {
  
   const [data,setData]=useState(db)
   const [car, setCar]=useState([])

    function addToCart(item){
        const itemExist=car.findIndex(guitarra => guitarra.id===item.id)
        if (itemExist>=0){
            //haremos una copia del carrito
            //console.log("Ya existe")
            const updateCart=[...cart]
            updateCart[itemExist].quantity++
            setCart(updateCart)
        }else{
            //console.log("No existe")
            item.quantity=1
            setCart(prevCart => [...prevCart, item])
        }
    }

  return (
    <>
        <Header/>
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
                {data.map((guitarra)=>(
                    <Guitarra
                        key={guitarra.id}
                        guitarra={guitarra}
                        addToCart={addToCart}
                    />     
                ))}
            </div>
        </main>

        <Footer/>
    </>
    
  )
}


