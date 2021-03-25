import React from 'react'
import CarCard from "./carCard"
import Header from "./header"
import Body from "./main"
import Volswagen from "../../assets/images/volswagen.svg"
import Mazda from "../../assets/images/mazda.svg"
import Peugeot from "../../assets/images/peugeot.svg"
import Footer from './footer'
export default function Main(params) {
    return (
        <>
            <Header></Header>
            <Body></Body>
            <div className='card-list'>
                <CarCard img={Volswagen} name={"Volswagen Golf"} type="premium" green={4} safety={4} price={"15,000"}></CarCard>
                <CarCard img={Peugeot} name={"Peugeot 308 Allure"} type="diesel" green={4} safety={4} price={"13,888"}></CarCard>
                <CarCard img={Mazda} name={"2012 Mazda 6 Luxury Sports GH MY11"} type="regular" green={4} safety={4} price={"14,999"}></CarCard>
            </div>
            <Footer></Footer>
        </>
    )
}