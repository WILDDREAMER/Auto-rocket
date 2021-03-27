import React from 'react'
import Card from "../../components/card"
import Header from "../../components/topBar"
import Hero from "../../components/hero"
import Footer from '../../components/footer'
import {cars, colors} from "../../data/list"

export default function List(params) {
    const [dark, setDark] = React.useState(false);
    const listStyleDark = {background:colors.secondaryDark};
    const listStyleLight = {background:colors.secondaryLight};
    return (
        <div onClick={() => setDark(curr => !curr)}>
            <Header dark={dark}></Header>
            <div className='card-list' style={(dark) ? listStyleDark : listStyleLight}>
                <Hero dark={dark}></Hero>
                {cars.map(car => {
                    return <Card dark={dark}  img={car.img} title={car.title} type={car.fuel} green={car.green} safety={car.safety} subtitle={car.subtitle}></Card>
                })}
            </div>
            <Footer dark={dark}></Footer>
        </div>
    )
}