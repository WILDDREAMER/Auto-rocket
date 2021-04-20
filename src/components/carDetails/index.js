import rateDisplay from '../rate-display'
import Type from '../fuel'
import { colors, radius } from '../../data/global'
export default function CarDetails({ dark, car }) {
    return (
        <>
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
        </>
    )
}