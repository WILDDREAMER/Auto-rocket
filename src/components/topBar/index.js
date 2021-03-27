import {colors, logo} from "../../data/list"

export default function TopBar(props) {
    const darkStyling = {background: colors.primaryDark};
    const lightStyling = {background: colors.primaryLight};

    return (
        <div className='logo' style={(props.dark) ? darkStyling : lightStyling}>
            <img src={(props.dark) ? logo.dark : logo.light} alt="" style={(props.dark) ? {mixBlendMode: "lighten"} : {}}/>
        </div>
    )
}