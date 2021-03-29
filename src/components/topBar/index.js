import {colors, logo, Reward} from "../../data/list"
import RewardsCounter from "../rewardsCounter";

export default function TopBar(props) {
    const darkStyling = {background: colors.primaryDark, justifyContent: (Reward) ? 'space-between' : 'center'};
    const lightStyling = {background: colors.primaryLight, justifyContent: (Reward) ? 'space-between' : 'center'};

    return (
        <div className='topBar' style={(props.dark) ? darkStyling : lightStyling}>
            <img src={(props.dark) ? logo.dark : logo.light} alt="" style={(props.dark) ? {mixBlendMode: "lighten"} : {}}/>
            {(Reward) ? <Reward></Reward> : ''}
        </div>
    )
}