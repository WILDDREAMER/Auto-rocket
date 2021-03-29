import { colors } from "../../data/list"
import { text, listBackground } from "../../data/tiles"

export default function HeroTiles(props) {
    const blendMode = (listBackground) ? { mixBlendMode: "hard-light" } : {};

    const darkStyling = { ...{color: colors.textDark}, ...blendMode  };
    const lightStyling = { ...{color: colors.textLigh }, ...blendMode };

    return (
        <div className='hero heroTiles' style={(props.dark) ? { background: 'transparent' } : {}}>
            <div className='text'>
                <h1 style={(props.dark) ? darkStyling : lightStyling}>{text.hero.title}</h1>
                <h2 style={(props.dark) ? darkStyling : lightStyling}>{text.hero.subtitle}</h2>
            </div>
        </div>
    )
}