import Button from "../../components/button/"
import { colors, text, missions } from "../../data/list"
import { radius } from "../../data/global"

export default function Missions({ header, xl, icon, title, subtitle, button, background }) {
    const styling = (xl) ?
        {
            background: background,
            backgroundImage: `url(${background})`,
            flexDirection: 'column',
            borderRadius: radius,
            backgroundSize: 'cover',
            backgroundPosition :'center center',
            backgroundRepeat: 'no-repeat'
        }
        :
        { background: background, borderRadius: radius }

    const buttonStyling = { width: '32px', height: '32px', padding: '3px', borderRadius: '50%', padding: '0' }

    return (
        (xl) ?
            <div className='missions' style={styling}>
                <p className='subtitle' style={{ opacity: '0.7', marginBottom: '35px' }}>{header}</p>
                <img style={{ marginBottom: "8px" }} src={icon} alt="" />
                <p className='title'>{title}</p>
                <p  className='subtitle'>{subtitle}</p>
                <Button style={(button == 'I accept the Mission') ? {backgroundColor:  '#d50314', border: '0'} : {}}>{button}</Button>
            </div>
            :
            <div className='missions' style={{...styling, ...{flexDirection: 'column'}}}>
                <p className='subtitle' style={{ opacity: '0.7', marginBottom: '4px' }}>{header}</p>
                <div style={{display: 'flex'}}>
                    <img src={icon} style={{ margin: 'auto' }} alt="" />
                    <p className='title' style={{ fontSize:'18px' }}>{title}</p>
                    <p className='subtitle' style={{ display: "none"}}>{subtitle}</p>
                    <Button style={buttonStyling}><img src={text.missions.button.sm} style={{ margin: 'auto' }} alt="" /></Button>
                </div>
            </div>
    )
}