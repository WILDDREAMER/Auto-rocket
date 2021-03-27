import Volswagen from "../assets/images/volswagen.svg"
import Mazda from "../assets/images/mazda.svg"
import Peugeot from "../assets/images/peugeot.svg"
import LogoLight from "../assets/images/Logo.svg"
import LogoDark from "../assets/images/LogoDark.svg"

export const colors = {
    primaryDark: '#323338',
    primaryLight: '#fff',
    secondaryDark: '#1F2024',
    secondaryLight: '#EFF2F5',
    textDark: "#fff",
    textLight: "#0c1a27",
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