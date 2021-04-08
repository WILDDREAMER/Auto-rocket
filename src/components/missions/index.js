import Button from "../../components/button/"
import { colors, text, missions } from "../../data/list"
import { radius } from "../../data/global"

export default function Missions(props) {
    const styling = (props.xl) ?
        { background: colors.missions, flexDirection: 'column' }
        :
        { background: colors.missions, borderRadius: radius }

    const buttonStyling = {width: '38px', height: '38px', borderRadius: '50%', padding: '0'}

    return (
        (props.xl) ?
            <div className='missions' style={styling}>
                <img style={{marginBottom: "8px"}} src={missions.rewardsIcon} alt="" />
                <p className='title'>{text.missions.title}</p>
                <p style={{marginBottom: "22px"}} className='subtitle'>{text.missions.subtitle}</p>
                <Button>{text.missions.button.xl}</Button>
            </div>
            :
            <div className='missions' style={styling}>
                <img src={missions.rewardsIcon} alt="" />
                <p className='title'>{text.missions.title}</p>
                <p className='subtitle' style={{display: "none"}}>{text.missions.subtitle}</p>
                <Button style={buttonStyling}><img src={text.missions.button.sm} alt="" /></Button>
            </div>
    )
}