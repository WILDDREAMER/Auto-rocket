import { colors } from "../../data/list"

export default function Hero(props) {
    const darkStyling = { color: colors.textDark };
    const lightStyling = { color: colors.textLigh };

    return (
        <div className='body' style={(props.dark) ? { background: '#1F2024' } : {}}>
            <div className='text'>
                <h1 style={(props.dark) ? darkStyling : lightStyling}>Special list for you!</h1>
                <h2 style={(props.dark) ? darkStyling : lightStyling}>Carefully curated list of cars for you</h2>
                <p className='List-expires'>List expires in: <span>22h 32min</span></p>
            </div>
        </div>
    )
}