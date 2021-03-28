import {theSurvey, radius} from '../../data/tiles'
import arrowThick from '../../assets/images/arrowThickOrange.svg'

export default function TakeTheSurvey(props) {
    return (
        <div className='takeTheSurvey' style={{color: theSurvey.color, borderRadius: radius}}>
            <p>{theSurvey.text}</p>
            <div className='button'><img src={arrowThick} alt="" /></div>
        </div>
    )
}