import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Guitarra from './Components/Guitarra'
import { useState } from 'react'
import { db } from './db'

export default function App() {
  
   const [data]=useState(db)
   const [car, setCar]=useState([])

    function addToCart(item){
        const itemExist=car.findIndex(guitarra => guitarra.id === item.id)
        if (itemExist>=0){
            //haremos una copia del carrito
            //console.log("Ya existe")
            const updateCart=[...car]
            updateCart[itemExist].quantity++
            setCar(updateCart)
        }else{
            //console.log("No existe")
            item.quantity=1
            setCar(prevCart => [...prevCart, item])
        }
    }

  return (
    <>
        <Header
            car={car}
        />
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


