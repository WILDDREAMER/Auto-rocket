import { colors } from "../../data/global"
import Take from "../take"

export default function Reviews({ car, dark }) {
    const style = (dark) ? { backgroundColor: colors.dark.card, color: colors.dark.text }
        :
        { backgroundColor: colors.light.card, color: colors.light.text }
    return (
        <div className='reviews' style={style}>
            <p className='title'>Reviews from customers</p>
            <div className='cardsContainer'>
                {
                    car.reviews.map((review, index) => {
                        return <Take all index={index} key={index} dark={dark} take={review} car={car}></Take>
                    })
                }
            </div>
        </div>
    )
}