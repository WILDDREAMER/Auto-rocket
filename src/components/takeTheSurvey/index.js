import {theSurvey} from '../../data/tiles'
import {radius} from '../../data/global'
import arrowThick from '../../data/images/arrowThickOrange.svg'

export default function TakeTheSurvey(props) {
    return (
        <div className='takeTheSurvey' style={{color: theSurvey.color, borderRadius: radius}}>
            <p>{theSurvey.text}</p>
            <div className='button'><img src={arrowThick} alt="" /></div>
        </div>
    )
}