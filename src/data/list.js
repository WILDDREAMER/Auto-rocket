import Volswagen from "../assets/images/volswagen.svg"
import Mazda from "../assets/images/mazda.svg"
import Peugeot from "../assets/images/peugeot.svg"
import LogoLight from "../assets/images/Logo.svg"
import LogoDark from "../assets/images/LogoDark.svg"
import rewardsIcon from "../assets/images/rewardsIcon.svg"
import arrow from "../assets/images/arrowRight.svg"

export const colors = {
    primaryDark: '#323338',
    primaryLight: '#fff',
    secondaryDark: '#1F2024',
    secondaryLight: '#EFF2F5',
    textDark: "#fff",
    textLight: "#0c1a27",
    missions: '#FFC043'
}

//fill this variable if you have a background image 
//(example: backgroundImage:` url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80")`)
export const listBackground = {};

export const radius = "3px";

export const text = {
    card:{
        info1: 'Fuel type:',
        info2: 'Green Rating:',
        info3: 'Safety rating:'
    },
    hero:{
        title: 'Special list for you!',
        subtitle: 'Carefully curated list of cars for you',
        countdown: 'List expires in: ',
        date: [0,22,32]
    },
    missions:{
        title: 'Take the Survey and Earn Reward Points',
        subtitle: 'Description goes here',
        button: {xl:'Take the Survey!', sm:arrow}
    }
}

export const logo ={
    light: LogoLight,
    dark: LogoDark
}

export const cars = [
    {
        img: Volswagen,
        title: "Volswagen Golf",
        subtitle: "15,000",
        fuel: "premium",
        green: 4,
        safety: 4
    },
    {
        img: Peugeot,
        title: "Peugeot 308 Allure",
        subtitle: "13,888",
        fuel: "diesel",
        green: 3,
        safety: 4
    },
    {
        img: Mazda,
        title: "2012 Mazda 6 Luxury Sports GH MY11",
        subtitle: "14,999",
        fuel: "regular",
        green: 4,
        safety: 4
    },
]

export const missions = {
    rewardsIcon: rewardsIcon
}