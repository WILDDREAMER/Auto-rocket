import React from 'react'
import CarCard from "./carCard"
import Header from "./header"
import Body from "./main"
import Volswagen from "../../assets/images/volswagen.svg"
import Mazda from "../../assets/images/mazda.svg"
import Peugeot from "../../assets/images/peugeot.svg"
import Footer from './footer'
export default function Main(params) {
    const [dark, setDark] = React.useState(false);
    return (
        <div style={(dark) ? {background:'#1F2024'} : {}} onClick={() => setDark(curr => !curr)}>
            <Header dark={dark}></Header>
            <Body dark={dark}></Body>
            <div className='card-list' style={(dark) ? {background:'#1F2024'} : {}}>
                <CarCard dark={dark} img={Volswagen} name={"Volswagen Golf"} type="premium" green={4} safety={4} price={"15,000"}></CarCard>
                <CarCard dark={dark} img={Peugeot} name={"Peugeot 308 Allure"} type="diesel" green={4} safety={4} price={"13,888"}></CarCard>
                <CarCard dark={dark} img={Mazda} name={"2012 Mazda 6 Luxury Sports GH MY11"} type="regular" green={4} safety={4} price={"14,999"}></CarCard>
            </div>
            <Footer dark={dark}></Footer>
        </div>
    )
}