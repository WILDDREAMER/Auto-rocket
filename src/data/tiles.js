import Mazda from "./images/mazda2013.svg"
import Volswagen2014 from "./images/volswagen2014.svg"
import Volswagen2017 from "./images/volswagen2017.svg"
import Toyota from "./images/toyota2012.svg"
import rewardsIcon from "./images/rewardsIcon.svg"

export const radius = "8px";
export const theSurvey = {text: "Take the Survey and Earn Reward Points", color: '#FA9268'};

export const listBackground = {};

export const articles = [
    {
        img: Volswagen2014,
        title: "Volswagen Golf",
        subtitle: "2014",
        price: '$15,000',
        color: '#697B89',
    },
    {
        img: Mazda,
        title: "2013 Mazda 2 NEO Sport",
        subtitle: "2012",
        price: '$15,000',
        color: '#BD374C'
    },
    {
        img: Volswagen2017,
        title: "2017 Volkswagen Golf 110 TSI",
        subtitle: "2016",
        price: '$15,000',
        color: '#3C7B96'
    },
    {
        img: Toyota,
        title: "2012 Toyota Yaris YR",
        subtitle: "2011",
        price: '$9,986',
        color: '#DADEE9',
        //if text color is not white then fill this variable
        textColor: '#0A0D16',
    },
]

export const text = {
    hero: {
        title: 'Special list for you!',
        subtitle: 'Carefully curated list of cars for you',
    },
}