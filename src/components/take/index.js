import icon from '../../data/images/feedback.svg'
import ShowMoreText from 'react-show-more-text';
import { colors, radius } from '../../data/global';

export default function Take({ dark, take, index }) {
    const style = (dark) ? { backgroundColor: colors.dark.card, color: colors.dark.text}
        :
        { backgroundColor: colors.light.background, color: colors.light.text, borderRadius: (index == 0) ? '16px 16px 0px 0px' : '0px' }
    console.log(index)
    return (
        <div className='take' style={style}>
            <div className='header'>
                <img src={icon} alt="" />
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
                width={380}
            >
                {take.text}
            </ShowMoreText>
        </div>
    )
}