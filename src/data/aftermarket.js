import WixWl7515 from './images/WIX-WL7515.svg'
import knPerformance from './images/k&n.svg'
import oilFilter from './images/filter.svg'
import brake from './images/brake.svg'
import speakers from './images/speakers.svg'
import floorMats from './images/floorMats.svg'
import headLights from './images/headlights.svg'
import wheel from './images/wheel.svg'

export const colors = {
    dark: {
        background: '#1f2024',
    },
    light: {
        background: '#edf0f3',
    }
}

export const categories = {
    filter: {
        image: oilFilter,
        color: '#EBBF5E',
        title: {color: '#1D1E22', text: 'Oil Filter'},
        subTitle: {color: '#1E1F22', text: 'Starts from'},
        tags: ["tag1", "tag2", "tag3"],
        price: 59.99,
        products: [
            {
                img: WixWl7515,
                id: 12344567,
                title: 'Oil Filter by WIX - WL7515',
                price: 19.99,
                rate: 4,
                reviews: 754,
                description: 'Since 1939, WIX Filters has been an innovator in filtration products. WIX designs, manufactures and distributes products for automotive',
                details: [
                    { title: 'Capacity(grams)', content: '0.00' },
                    { title: 'Outer Diameter Bottom', content: '2.560' },
                    { title: 'Inner Diameter Bottom', content: '1.100' },
                    { title: 'Part Number', content: 'WL7515' },
                    { title: 'Outer Diameter', content: '2.800' },
                    { title: 'Style', content: 'Cartridge Lube Metal Free Filt' },
                    { title: 'Class', content: 'D' },
                    { title: 'Height', content: '3.430' },
                ]
            },
            {
                img: knPerformance,
                id: 887541,
                title: 'K&N Performance Gold Oil Filter Black',
                price: 19.99,
                rate: 3,
                reviews: 230,
                description: 'Since 1939, WIX Filters has been an innovator in filtration products. WIX designs, manufactures and distributes products for automotive',
                details: [
                    { title: 'Capacity(grams)', content: '0.00' },
                    { title: 'Outer Diameter Bottom', content: '2.560' },
                    { title: 'Inner Diameter Bottom', content: '1.100' },
                    { title: 'Part Number', content: 'WL7515' },
                    { title: 'Outer Diameter', content: '2.800' },
                    { title: 'Style', content: 'Cartridge Lube Metal Free Filt' },
                    { title: 'Class', content: 'D' },
                    { title: 'Height', content: '3.430' },
                ]
            },
        ]
    },
    brake: {
        image: brake,
        color: '#9C170D',
        title: {color: '#FFFFFF', text: 'Brake Pads'},
        subTitle: {color: '#FFFFFF', text: 'Starts from'},
        tags: ["tag1", "tag2", "tag3"],
        price: 59.99,
        products: []
    },
    soundSystems: {
        image: speakers,
        color: '#F69058',
        title: {color: '#1D1E22', text: 'Sound Systems'},
        subTitle: {color: '#1E1F22', text: 'Starts from'},
        tags: ["tag1", "tag2", "tag3"],
        price: 59.99,
        products: []
    },
    wheels: {
        image: wheel,
        color: '#C5C3BC',
        title: {color: '#1D1E22', text: 'Tires & Wheels'},
        subTitle: {color: '#1E1F22', text: 'Starts from'},
        tags: ["tag1", "tag2", "tag3"],
        price: 59.99,
        products: []
    },
    floor: {
        image: floorMats,
        color: '#B7BFC5',
        title: {color: '#1D1E22', text: 'Floor Mats'},
        subTitle: {color: '#1E1F22', text: 'Starts from'},
        tags: ["tag1", "tag2", "tag3"],
        price: 59.99,
        products: []
    },
    headlights: {
        image: headLights,
        color: '#F27607',
        title: {color: '#1D1E22', text: 'Headlights'},
        subTitle: {color: '#1E1F22', text: 'Starts from'},
        tags: ["tag1", "tag2", "tag3"],
        price: 59.99,
        products: []
    },
}