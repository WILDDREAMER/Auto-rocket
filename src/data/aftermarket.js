import WixWl7515 from './images/WIX-WL7515.svg'
import knPerformance from './images/k&n.svg'
import oilFilter from './images/filter.svg'
import brake from './images/brake.svg'
import speakers from './images/speakers.svg'
import floorMats from './images/floorMats.svg'
import headLights from './images/headlights.svg'
import wheel from './images/wheel.svg'

export const categories = {
    filter: {
        titleMargin: '28px',
        paddingTop: '123px', 
        image: oilFilter,
        imgShadow: 'drop-shadow(0px 78px 80px rgba(0, 0, 0, 0.25)) drop-shadow(0px 45.9264px 41.728px rgba(0, 0, 0, 0.1808)) drop-shadow(0px 23.5872px 19.584px rgba(0, 0, 0, 0.1404)) drop-shadow(0px 9.4848px 8.576px rgba(0, 0, 0, 0.1096)) drop-shadow(0px 2.1216px 3.712px rgba(0, 0, 0, 0.0692))',
        imgPosition:{top: '-28px', left: '17px'},
        color: '#EBBF5E',
        textColor: '#1D1E22',
        title: 'Oil Filter',
        subTitle: 'Starts from',
        tags: ["tag1", "tag2", "tag3"],
        price: 59.99,
        products: [
            {
                image: WixWl7515,
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
                image: knPerformance,
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
            {
                image: WixWl7515,
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
                image: WixWl7515,
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
        ]
    },
    brake: {
        titleMargin: '13px',
        paddingTop: '110px',
        image: brake,
        imgPosition:{top: '-23px', left: '31px'},
        imgShadow: 'drop-shadow(0px 54px 51px rgba(0, 0, 0, 0.43)) drop-shadow(0px 10.8px 8.2875px rgba(0, 0, 0, 0.215))',
        color: '#9C170D',
        textColor: '#FFFFFF',
        title: 'Brake Pads',
        subTitle:'Starts from',
        tags: ["tag1", "tag2", "tag3"],
        price: 59.99,
        products: []
    },
    soundSystems: {
        titleMargin: '33px',
        paddingTop: '97px',
        image: speakers,
        imgPosition:{top: '-15px', left: '-11px'},
        color: '#F69058',
        textColor: '#1D1E22',
        title:  'Sound Systems',
        subTitle: 'Starts from',
        tags: ["tag1", "tag2", "tag3"],
        price: 59.99,
        products: []
    },
    wheels: {
        titleMargin: '16px',
        paddingTop: '123px',
        image: wheel,
        imgPosition:{top: '-20px', left: '4px'},
        color: '#C5C3BC',
        textColor: '#1D1E22',
        title:  'Tires & Wheels',
        subTitle: 'Starts from',
        tags: ["tag1", "tag2", "tag3"],
        price: 59.99,
        products: []
    },
    floor: {
        titleMargin: '12px',
        paddingTop: '139px',
        image: floorMats,
        imgPosition:{top: '-18px', left: '4.5px'},
        imgShadow: 'drop-shadow(0px 78px 80px rgba(0, 0, 0, 0.25)) drop-shadow(0px 45.9264px 41.728px rgba(0, 0, 0, 0.1808)) drop-shadow(0px 23.5872px 19.584px rgba(0, 0, 0, 0.1404)) drop-shadow(0px 9.4848px 8.576px rgba(0, 0, 0, 0.1096)) drop-shadow(0px 2.1216px 3.712px rgba(0, 0, 0, 0.0692))',
        color: '#B7BFC5',
        textColor: '#1D1E22',
        title:  'Floor Mats',
        subTitle: 'Starts from',
        tags: ["tag1", "tag2", "tag3"],
        price: 59.99,
        products: []
    },
    headlights: {
        titleMargin: '13px',
        paddingTop: '110px',
        imgPosition:{top: '-20px', left: '0px'},
        imgShadow: 'drop-shadow(0px 54px 51px rgba(0, 0, 0, 0.43)) drop-shadow(0px 10.8px 8.2875px rgba(0, 0, 0, 0.215))',
        image: headLights,
        color: '#F27607',
        textColor: '#1D1E22',
        title:  'Headlights',
        subTitle: 'Starts from',
        tags: ["tag1", "tag2", "tag3"],
        price: 59.99,
        products: []
    },
}