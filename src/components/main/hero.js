export default function Main(props) {
    return(
        <div className='container body' style={(props.dark) ? {background:'#1F2024'} : {}}>
            <div className='text'>
                <h1 style={(props.dark) ? {color:'white'} : {}}>Special list for you!</h1>
                <h2 style={(props.dark) ? {color:'white'} : {}}>Carefully curated list of cars for you</h2>
                <p className='List-expires'>List expires in: <span>22h 32min</span></p>
            </div>
        </div>
    )
}