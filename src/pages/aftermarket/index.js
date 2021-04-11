import React, { useState, useEffect } from 'react'
import CategoryCard from "../../components/categoryCard";
import Products from "../../components/products";
import TopBar from "../../components/topBar";
import { categories } from '../../data/aftermarket'
import { colors } from '../../data/global'
import { Link } from "react-router-dom";

export default function Aftermarket(props) {
    const [back, setBack] = useState('');
    const [link, setLink] = useState('');
    const [body, setBody] = useState(Categories);
    const dark = props.dark

    const getLink = (str) => {
        setLink(str);
    }

    useEffect(() => {
        if (link) {
            setBody(Categories)
            setBack(false)
        }
    }, [link])

    function Categories() {
        return (
            <div className='categories'>
                <div className='left'>
                    <Link onClick={() => {
                        setBack('/aftermarket')
                        setBody(List)
                        setLink('')
                    }}>
                        <CategoryCard category={categories.filter}></CategoryCard>
                    </Link>
                    <CategoryCard category={categories.soundSystems}></CategoryCard>
                    <CategoryCard category={categories.floor}></CategoryCard>
                </div>
                <div className='right'>
                    <CategoryCard category={categories.brake}></CategoryCard>
                    <CategoryCard category={categories.wheels}></CategoryCard>
                    <CategoryCard category={categories.headlights}></CategoryCard>
                </div>
            </div>
        )
    }
    function List() {
        return <Products category={categories.filter} dark={dark} ></Products>
    }
    const styling = (dark) ? { backgroundColor: colors.dark.background, color: colors.dark.text } : { backgroundColor: colors.light.background, color: (colors.light.text) }


    return (
        <div style={styling} className='aftermarket'>
            <TopBar back={back} dark={dark} sendLink={getLink}  ></TopBar>
            <div className="body">
                <h1>All the parts you need</h1>
                <h2>Here's a few we think will fit you</h2>
                {body}
            </div>
        </div>
    )
}