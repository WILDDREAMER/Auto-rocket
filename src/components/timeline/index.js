import { profile } from '../../data/profile'
import { radius, colors } from '../../data/global'

export default function Timeline({dark}) {
    const styling=(dark) ? {backgroundColor: colors.dark.card}
    :
    {backgroundColor: colors.light.card}
    return (
        <div className='timeline'>
            {
                profile.timeline.map((item) => {
                    return <div className='item' style={{...{borderRadius: radius}, ...styling}}>
                        <div className='titleAndDate'>
                            <p className='title'>{item.title}</p>
                            <p className='date'>{item.date}</p>
                        </div>
                        <p className='text'>{item.text}</p>
                    </div>
                })
            }
        </div>)
}