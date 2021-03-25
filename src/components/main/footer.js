import { Button } from 'react-bootstrap';
export default function Footer(props) {
    return (
        <footer className='container' style={(props.dark) ? {background:'#1F2024'} : {}}>
            <h1 style={(props.dark) ? {color:'white'} : {}}>Share this list!</h1>
            <p style={(props.dark) ? {color:'white'} : {}} className='infos footer'><span>Need another opinion?<br/>Send it to another number</span></p>
            <input placeholder="+1" style={(props.dark) ? {color:'white', background:'#323338'} : {}} type="text" />
            <Button>Share link</Button>
        </footer>
    )
}