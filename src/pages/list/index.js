import React, {useEffect, useState} from 'react'
import Card from "../../components/card"
import Missions from "../../components/missions/"
import TopBar from "../../components/topBar"
import Hero from "../../components/hero"
import Footer from '../../components/footer'
import {cars, colors, listBackground} from "../../data/list"
import { Mode, useLightSwitch } from 'use-light-switch'


export default function List(props) {
    const listStyleDark = {...{backgroundColor:colors.secondaryDark}, ...listBackground};
    const listStyleLight = {...{backgroundColor:colors.secondaryLight}, ...listBackground};
    return (
        <div >
            <TopBar dark={props.dark}></TopBar>
            <div className='card-list' style={(props.dark) ? listStyleDark : listStyleLight}>
                <Hero dark={props.dark}></Hero>
                {cars.map(car => {
                    return <Card dark={props.dark}  img={car.img} title={car.title} type={car.fuel} green={car.green} safety={car.safety} subtitle={car.subtitle}></Card>
                })}
                <Missions xl></Missions>
            </div>
            <Footer dark={props.dark}></Footer>
        </div>
    )
}