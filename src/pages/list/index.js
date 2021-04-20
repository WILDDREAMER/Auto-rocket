import React, { useEffect, useState } from 'react'
import Card from "../../components/card"
import Missions from "../../components/missions/"
import TopBar from "../../components/topBar"
import Hero from "../../components/hero"
import Footer from '../../components/footer'
import { cars, listBackground } from "../../data/list"
import { colors } from "../../data/global";
import Car from '../../components/car/'

export default function List({ dark }) {
    const listStyleDark = { ...{ backgroundColor: colors.dark.background, color: colors.dark.text }, ...listBackground };
    const listStyleLight = { ...{ backgroundColor: colors.light.background, color: colors.dark.text }, ...listBackground };
    const [back, setBack] = useState('');
    const [link, setLink] = useState('');

    const getLink = (str) => {
        setLink(str);
    }

    return (
        <div style={(dark) ? listStyleDark : listStyleLight}>
            <TopBar back={back} dark={dark} sendLink={getLink} ></TopBar>
            <Car car={cars[0]} dark={dark}></Car>
            {/* <div className='card-list' style={(dark) ? listStyleDark : listStyleLight}>
                <Hero dark={dark}></Hero>
                {cars.map(car => {
                    return <Card dark={dark} car={car}></Card>
                })}
                <Missions xl></Missions>
            </div> */}
        </div>
    )
}