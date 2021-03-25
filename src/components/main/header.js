import Logo from "../../assets/images/Logo.svg"
import LogoDark from "../../assets/images/LogoDark.svg"

export default function header(props) {
    return (
        <div className='logo' style={(props.dark) ? {background:'#323338'} : {}}>
            <img src={(props.dark) ? LogoDark : Logo} alt="" style={(props.dark) ? {mixBlendMode: "lighten"} : {}}/>
        </div>
    )
}