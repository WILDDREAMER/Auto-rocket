import Volswagen from "./images/volswagen.svg"
import Mazda from "./images/mazda.svg"
import Peugeot from "./images/peugeot.svg"
import rewardsIcon from "./images/rewardsIcon.svg"
import arrow from "./images/arrowRight.svg"
import Rewards from '../components/rewardsCounter/'

export const colors = {
    primaryDark: '#323338',
    primaryLight: '#fff',
    secondaryDark: '#1F2024',
    secondaryLight: '#EFF2F5',
    textDark: "#fff",
    textLight: "#0c1a27",
    missions: '#FFC043'
}
export const listExpireDate = new Date("Jul 5, 2022 15:37:25").getTime();

//fill this variable if you have a background image 
//(example: backgroundImage:` url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80")`)
export const listBackground = {};

export const Reward = Rewards;
// case 2:
// export const Reward = null;

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

export const cars = [
    {
        img: Volswagen,
        title: "Volswagen Golf",
        subtitle: "15,000",
        secondTitle: 'Honda Holden Cruze',
        fuel: "premium",
        green: 1,
        safety: 5,
        year: '2019',
        reddit: 3,
        mileage: 11390,
        feedbacks: [
            {user: 'John Johnson', text: 'I’ve been using this car for 10 yea...',},
            {user: 'John Johnson', text: 'I’ve been using this car for 10 yea...',},
            {user: 'John Johnson', text: 'I’ve been using this car for 10 yea...',},
            {user: 'John Johnson', text: 'I’ve been using this car for 10 yea...',},
        ],
        take: [
            {user: 'John Johnson', date: 'aug 12', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus accumsan turpis et luctus. Morbi ultricies sem eu velit et luctus. Morbi ultricies sem eu velit '},
            {user: 'John Johnson', date: 'aug 12', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus accumsan turpis et luctus. Morbi ultricies sem eu velit et luctus. Morbi ultricies sem eu velit '},
            {user: 'John Johnson', date: 'aug 12', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus accumsan turpis et luctus. Morbi ultricies sem eu velit et luctus. Morbi ultricies sem eu velit '},
            {user: 'John Johnson', date: 'aug 12', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus accumsan turpis et luctus. Morbi ultricies sem eu velit et luctus. Morbi ultricies sem eu velit '},
        ]
    },
    {
        img: Peugeot,
        title: "Peugeot 308 Allure",
        subtitle: "13,888",
        secondTitle: 'Honda Holden Cruze',
        fuel: "diesel",
        green: 3,
        safety: 4,
        year: '2019',
        reddit: 3,
        mileage: 11390,
        feedbacks: [
            {user: 'John Johnson', text: 'I’ve been using this car for 10 yea...',},
        ],
        take: [
            {user: 'John Johnson', date: 'aug 12', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus accumsan turpis et luctus. Morbi ultricies sem eu velit et luctus. Morbi ultricies sem eu velit '},
            {user: 'John Johnson', date: 'aug 12', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus accumsan turpis et luctus. Morbi ultricies sem eu velit et luctus. Morbi ultricies sem eu velit '},
            {user: 'John Johnson', date: 'aug 12', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus accumsan turpis et luctus. Morbi ultricies sem eu velit et luctus. Morbi ultricies sem eu velit '},
            {user: 'John Johnson', date: 'aug 12', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus accumsan turpis et luctus. Morbi ultricies sem eu velit et luctus. Morbi ultricies sem eu velit '},
        ]
    },
    {
        img: Mazda,
        title: "2012 Mazda 6 Luxury Sports GH MY11",
        subtitle: "14,999",
        secondTitle: 'Honda Holden Cruze',
        fuel: "regular",
        green: 4,
        safety: 4,
        year: '2019',
        reddit: 3,
        mileage: 11390,
        feedbacks: [
            {user: 'John Johnson', text: 'I’ve been using this car for 10 yea...',},
        ],
        take: [
            {user: 'John Johnson', date: 'aug 12', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus accumsan turpis et luctus. Morbi ultricies sem eu velit... '},
            {user: 'John Johnson', date: 'aug 12', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus accumsan turpis et luctus. Morbi ultricies sem eu velit... '},
            {user: 'John Johnson', date: 'aug 12', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus accumsan turpis et luctus. Morbi ultricies sem eu velit... '},
            {user: 'John Johnson', date: 'aug 12', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus accumsan turpis et luctus. Morbi ultricies sem eu velit... '},
        ]
    },
]

export const missions = {
    rewardsIcon: rewardsIcon
}