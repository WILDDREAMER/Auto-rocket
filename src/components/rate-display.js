import GreenEmpty from "../data/images/green-empty.svg"
import GreenFilled from "../data/images/green-filled.svg"
import SafetyEmpty from "../data/images/safety-empty.svg"
import SafetyFilled from "../data/images/safety-filled.svg"

export default function rateDisplay(params, rate) {
    const rateRange = [0, 1, 2, 3, 4];
    return (
        (params === "green") ?
            <div className='rate'>
                {rateRange.map((value, index) => {
                    return <img src={(rate > index) ? GreenFilled : GreenEmpty} alt="" />
                })}
            </div>
            :
            <div className='rate'>
                {rateRange.map((value, index) => {
                    return <img src={(rate > index) ? SafetyFilled : SafetyEmpty} alt="" />
                })}
            </div>
    )
}