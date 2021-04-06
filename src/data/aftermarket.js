import WixWl7515 from './images/WIX-WL7515.svg'
import knPerformance from './images/k&n.svg'

export const categories = {
    filter: {
        tags: ["tag1", "tag2", "tag3"],
        title: 'Oil Filter',
        price: 59.99,
        products: [
            {
                img: WixWl7515,
                id : 12344567,
                title: 'Oil Filter by WIX - WL7515',
                price: 19.99,
                rate: 4,
                reviews: 754,
                description: 'Since 1939, WIX Filters has been an innovator in filtration products. WIX designs, manufactures and distributes products for automotive',
                details: [
                    {title : 'Capacity(grams)', content: '0.00'},
                    {title : 'Outer Diameter Bottom', content: '2.560'},
                    {title : 'Inner Diameter Bottom', content: '1.100'},
                    {title : 'Part Number', content: 'WL7515'},
                    {title : 'Outer Diameter', content: '2.800'},
                    {title : 'Style', content: 'Cartridge Lube Metal Free Filt'},
                    {title : 'Class', content: 'D'},
                    {title : 'Height', content: '3.430'},
                ]
            },
            {
                img: knPerformance,
                id : 887541,
                title: 'K&N Performance Gold Oil Filter Black',
                price: 19.99,
                rate: 3,
                reviews: 230,
                description: 'Since 1939, WIX Filters has been an innovator in filtration products. WIX designs, manufactures and distributes products for automotive',
                details: [
                    {title : 'Capacity(grams)', content: '0.00'},
                    {title : 'Outer Diameter Bottom', content: '2.560'},
                    {title : 'Inner Diameter Bottom', content: '1.100'},
                    {title : 'Part Number', content: 'WL7515'},
                    {title : 'Outer Diameter', content: '2.800'},
                    {title : 'Style', content: 'Cartridge Lube Metal Free Filt'},
                    {title : 'Class', content: 'D'},
                    {title : 'Height', content: '3.430'},
                ]
            },
        ]
    }
}