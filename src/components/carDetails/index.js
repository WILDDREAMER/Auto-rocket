import apple from '../../data/images/apple.svg'
import rateDisplay from '../rate-display'
import Type from '../fuel'
export default function carDetails({car, dark}) {
    return (
        <div className='carDetails'>
            <img src="" alt="" />
            <img src="" alt="" />

            <div className='quality'>

            </div>

            <div className='test'>
                <div className='left'>
                    <img src={apple} alt="" />
                    <p>Request a Test Drive</p>
                </div>
                <div className='right'>
                    <p>$50 deposit</p>
                    <p>100% refundable</p>
                </div>
            </div>
            <div className='detailsBody'>
                <div className='header'>
                    <p>Details</p>
                    <p>Features</p>
                    <p>Specs</p>
                </div>
                {rateDisplay()}
                <Type car></Type>
            </div>
        </div>
    )
}