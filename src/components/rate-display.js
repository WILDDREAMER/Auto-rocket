import GreenEmpty from "../data/images/green-empty.svg"
import GreenFilled from "../data/images/green-filled.svg"
import SafetyEmpty from "../data/images/safety-empty.svg"
import SafetyFilled from "../data/images/safety-filled.svg"
import reddit from "../data/images/reddit.svg"
import redditempty from "../data/images/redditempty.svg"

export default function rateDisplay(params, rate) {
    const rateRange = [0, 1, 2, 3, 4];
    var filled = ''
    var empty = ''
    if (params === "green") {
        filled = GreenFilled;
        empty = GreenEmpty;
    }
    else if (params === "safety") {
        filled = SafetyFilled;
        empty = SafetyEmpty;
    }
    else if (params === "reddit") {
        filled = reddit;
        empty = redditempty;
    }
    return <div className='rate'>
        {rateRange.map((value, index) => {
            return <img src={(rate > index) ? filled : empty} alt="" />
        })}
    </div>
}