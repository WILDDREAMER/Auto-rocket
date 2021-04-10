import React, { useState, useEffect } from 'react'
import Input from '../input'
import Product from '../product/'
import { radius, colors } from '../../data/global'

export default function Products({ category, dark }) {
    const buttonStyle = (dark) ? { borderRadius: radius, border: 'solid 2px', color: colors.dark.text }
        :
        { borderRadius: radius, border: 'solid 2px', color: colors.light.text }
    const [clicked, setClicked] = useState(false)
    const [event, setEvent] = useState(false)

    function clickHandle(e) {
        e.target.style.color = (clicked) ?  ((dark) ? colors.light.text : colors.dark.text) : ((dark) ? colors.dark.text : colors.light.text)
        e.target.style.backgroundColor = (clicked) ? ((dark) ? colors.dark.text : colors.light.text) : 'transparent'
    }
    useEffect(() => {
        if(event){
            clickHandle(event)
        }
    }, [ clicked ])
    return (
        <div className='products'>
            <Input dark={dark} placeHolder='Search parts'></Input>
            <div className='tags'>
                {
                    category.tags.map((tag, index) => {
                        return <div
                            key={index}
                            style={buttonStyle}
                            onClick={(e) => {
                                setClicked(curr => !curr)
                                setEvent(e)
                                console.log(clicked);
                            }}
                            className='tagButton'>{tag}</div>
                    })
                }
            </div>
            <div className='productsList'>
                <Product dark={dark} product={category.products[0]}></Product>
                <Product dark={dark} product={category.products[1]}></Product>
                <Product dark={dark} product={category.products[2]}></Product>
                <Product dark={dark} product={category.products[3]}></Product>
            </div>
        </div>
    )
}