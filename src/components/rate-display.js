import GreenEmpty from "../assets/images/green-empty.svg"
import GreenFilled from "../assets/images/green-filled.svg"
import SafetyEmpty from "../assets/images/safety-empty.svg"
import SafetyFilled from "../assets/images/safety-filled.svg"

export default function rateDisplay(params, props) {
    const rateRange = [0, 1, 2, 3, 4];
    return (
        (params === "green") ?
            <div className='rate'>
                {rateRange.map((value, index) => {
                    return <img src={(props.green > index) ? GreenFilled : GreenEmpty} alt="" />
                })}
            </div>
            :
            <div className='rate'>
                {rateRange.map((value, index) => {
                    return <img src={(props.safety > index) ? SafetyFilled : SafetyEmpty} alt="" />
                })}
            </div>
    )
}