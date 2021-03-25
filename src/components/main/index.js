import React from 'react'
import CarCard from "./carCard"
import Header from "./header"
import Hero from "./hero"
import Volswagen from "../../assets/images/volswagen.svg"
import Mazda from "../../assets/images/mazda.svg"
import Peugeot from "../../assets/images/peugeot.svg"
import Footer from './footer'
import {cars} from "../../data/initial-data"

export default function Main(params) {
    const [dark, setDark] = React.useState(false);
    return (
        <div style={(dark) ? {background:'#1F2024'} : {}} onClick={() => setDark(curr => !curr)}>
            <Header dark={dark}></Header>
            <Hero dark={dark}></Hero>
            <div className='card-list' style={(dark) ? {background:'#1F2024'} : {}}>
                {cars.map(car => {
                    return <CarCard dark={dark}  img={car.img} name={car.name} type={car.fuel} green={car.green} safety={car.safety} price={car.price}></CarCard>
                })}
            </div>
            <Footer dark={dark}></Footer>
        </div>
    )
}