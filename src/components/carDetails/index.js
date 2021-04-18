import apple from '../../data/images/apple.svg'
import rateDisplay from '../rate-display'
import Type from '../fuel'
import heart from '../../data/images/Like.svg'
import redheart from '../../data/images/redlike.svg'
import React, { useState } from 'react'
import { colors, radius } from '../../data/global'
import Take from '../take'

export default function CarClicked({ car, dark }) {
    const [like, setLike] = useState(heart);
    const style = (dark) ? { color: '#CAC5C1' } : { color: '#404E5C' }
    const takeStyle = (dark) ? {color: colors.dark.text, backgroundColor:colors.dark.backgroundColor} : {color: colors.light.text, backgroundColor:'white'} 
    const styling = (dark) ? { backgroundColor: colors.dark.card, color: colors.dark.text } : { backgroundColor: 'white', color: colors.light.text }
    const [classDetails, setDetails] = useState('selected')
    const [classFeatures, setFeatures] = useState('')
    const [classSpecs, setSpecs] = useState('')
    function selected(selected) {
        if(selected === 'details'){
            setFeatures('')
            setSpecs('')
            setDetails('selected')
        }
        else if(selected === 'features'){
            setDetails('')
            setSpecs('')
            setFeatures('selected')
        }
        else {
            setFeatures('')
            setDetails('')
            setSpecs('selected')
        }
    }
    
    return (
        <div className='carClicked'>
            <img src={car.img} alt=""
                className='image'
                onClick={() => setLike(curr => (curr === heart) ? (redheart) : (heart))}
            />
            <img className='like' src={like} alt=""
                onClick={() => setLike(curr => (curr === heart) ? (redheart) : (heart))}
            />

            <div className='quality' style={styling}>
                <div className='safety status' style={style}>
                    <p>Safety rating:</p>
                    {rateDisplay('safety', car.safety)}
                </div>
                <div className='green status' style={style}>
                    <p>Green rating</p>
                    {rateDisplay('green', car.green)}
                </div>
                <div className='fuel status' style={style}>
                    <p>Fuel</p>
                    <Type short car={car} dark={dark}></Type>
                </div>
                <div className='titleAndPrice'>
                    <p className='title'>{car.title}</p>
                    <p className='sub'>${car.subtitle}</p>
                    <p className='sec'>{car.secondTitle}</p>
                </div>
            </div>

            <div className='testHolder' style={styling}>
                <div className='test' style={{ borderRadius: radius, color:'white' }}>
                    <div className='left'>
                        <img src={apple} alt="" />
                        <p>Request a Test Drive</p>
                    </div>
                    <div className='right'>
                        <p>$50 deposit</p>
                        <p className='refund'>100% refundable</p>
                    </div>
                </div>
            </div>
            <div className='bodyNavigation' style={styling}>
                <div className='header'>
                    <p className={classDetails} onClick={() => selected('details')}>Details</p>
                    <p className={classFeatures} onClick={() => selected('features')}>Features</p>
                    <p className={classSpecs} onClick={() => selected('specs')}>Specs</p>
                </div>
                <div className='navigationContent' style={{color: (dark) ? colors.light.card : '#404E5C'}}>
                    <div className='child'>
                        <p className='title' >Fuel type</p>
                        <Type short dark={dark} car={car}></Type>
                    </div>
                    <div className='child'>
                        <p className='title'>Year</p>
                        <p>{car.year}</p>
                    </div>
                    <div className='child'>
                        <p className='title'>Green rating</p>
                        {rateDisplay('green', car.green)}
                    </div>
                    <div className='child'>
                        <p className='title'>Green rating</p>
                        <p>Regular Petrol</p>
                    </div>
                    <div className='child'>
                        <p className='title'>Mileage</p>
                        <p>{car.mileage} km</p>
                    </div>
                    <div className='child'>
                        <p className='title'>Safety rating</p>
                        {rateDisplay('safety', car.safety)}
                    </div>
                    <div className='child'>
                        <p className='title'>Reddit rating</p>
                        {rateDisplay('reddit', car.reddit)}
                    </div>
                    <div className='child'>
                        <p className='title'>Reddit rating</p>
                        {rateDisplay('reddit', car.reddit)}
                    </div>
                </div>
            </div>

            <div className='ourTake' style={takeStyle}>
                <p className='title'>Our Take</p>
                <div className='takeContainer'>
                    {
                        car.take.map((take, index) => {
                            return <Take index={index} key={index} dark={dark} take={take}></Take>
                        })
                    }
                    <div className='seeAll' style={{backgroundColor: (dark) ? colors.dark.card : colors.light.background}}>
                        <p>See All</p>
                    </div>
                </div>
            </div>
        </div>
    )
}