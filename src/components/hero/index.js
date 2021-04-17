import { colors, text, listBackground, listExpireDate } from "../../data/list"

export default function Hero(props) {
    const blendMode = (listBackground) ? { mixBlendMode: "hard-light" } : {};

    const darkStyling = { ...{color: colors.textDark}, ...blendMode  };
    const lightStyling = { ...{color: colors.textLigh }, ...blendMode };

    return (
        <div className='hero' style={(props.dark) ? { background: 'transparent' } : {}}>
            <div className='text'>
                <h1>All the parts you need</h1>
                <h2>Here's a few we think will fit you</h2>
            </div>
        </div>
    )
}