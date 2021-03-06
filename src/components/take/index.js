import icon from '../../data/images/feedback.svg'
import iconDark from '../../data/images/feedbackDark.svg'
import ShowMoreText from 'react-show-more-text';
import { colors, radius } from '../../data/global';

export default function Take({ dark, take, index, all, car }) {
    const style = (dark) ? { backgroundColor: (all) ? colors.dark.background : colors.dark.card, color: colors.dark.text, borderRadius: (index == 0) ? '16px 16px 0px 0px' : '0px'}
        :
        { backgroundColor: colors.light.background, color: colors.light.text, borderRadius: (index == 0 ) ? '16px 16px 0px 0px' : '0px' }
        let border = ''
        if (index === 0)
            border = '16px 16px 0 0'
        else if (index === car.reviews.length -1 )
            border = '0 0 16px 16px'
        return (
        <div className='take' style={{...style, ...{borderRadius: border}} }>
            <div className='header'>
                <img src={(dark) ? iconDark : icon} alt="" />
                <p>{take.user}</p>
                <p className='date'>{take.date}</p>
            </div>
            <ShowMoreText
                lines={3}
                more='More'
                less='less'
                className='content-css'
                anchorClass='my-anchor-css-class'
                // onClick={this.executeOnClick}
                expanded={false}
                width={334}
            >
                {take.text}
            </ShowMoreText>
        </div>
    )
}