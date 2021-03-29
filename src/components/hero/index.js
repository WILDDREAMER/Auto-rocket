import { colors, text, listBackground, listExpireDate } from "../../data/list"

export default function Hero(props) {
    const blendMode = (listBackground) ? { mixBlendMode: "hard-light" } : {};

    const darkStyling = { ...{color: colors.textDark}, ...blendMode  };
    const lightStyling = { ...{color: colors.textLigh }, ...blendMode };

    return (
        <div className='hero' style={(props.dark) ? { background: 'transparent' } : {}}>
            <div className='text'>
                <h1 style={(props.dark) ? darkStyling : lightStyling}>{text.hero.title}</h1>
                <h2 style={(props.dark) ? darkStyling : lightStyling}>{text.hero.subtitle}</h2>
                <p className='List-expires'>{text.hero.countdown}<span>22h 32min</span></p>
            </div>
        </div>
    )
}