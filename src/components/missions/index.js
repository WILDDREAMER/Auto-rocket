import Button from "../../components/button/"
import { colors, text, missions } from "../../data/list"
import { radius } from "../../data/global"

export default function Missions({header, xl, icon, title, subtitle, button, background}) {
    const styling = (xl) ?
        { background: background, flexDirection: 'column', borderRadius: radius }
        :
        { background: background, borderRadius: radius }

    const buttonStyling = {width: '32px', height: '32px', borderRadius: '50%', padding: '0'}

    return (
        (xl) ?
            <div className='missions' style={styling}>
                <p className='subtitle' style={{opacity: '0.7', marginBottom: '35px'}}>{header}</p>
                <img style={{marginBottom: "8px"}} src={icon} alt="" />
                <p className='title'>{title}</p>
                <p style={{marginBottom: "78px"}} className='subtitle'>{subtitle}</p>
                <Button>{button}</Button>
            </div>
            :
            <div className='missions' style={styling}>
                <img src={icon} style={{margin: 'auto'}} alt="" />
                <p className='title'>{title}</p>
                <p className='subtitle' style={{display: "none"}}>{subtitle}</p>
                <Button style={buttonStyling}><img src={text.missions.button.sm} style={{margin: 'auto'}} alt="" /></Button>
            </div>
    )
}