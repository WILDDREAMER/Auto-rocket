import { Button } from 'react-bootstrap';
export default function Footer(props) {
    const h1Content = "Share this list!";
    const pContent = <span>Need another opinion?<br/>Send it to another number</span>;
    const buttonText = "Share link";
    return (
        (props.dark) ?
        <footer className='container' style={(props.dark) ? {background:'#1F2024'} : {}}>
            <h1 style={{color:'white'}}>{h1Content}</h1>
            <p style={{color:'white'}} className='infos footer'>{pContent}</p>
            <input placeholder="+1" style={{color:'white', background:'#323338'}} type="text" />
            <Button>{buttonText}</Button>
        </footer>
        :
        <footer className='container'>
            <h1>{h1Content}</h1>
            <p className='infos footer'>{pContent}</p>
            <input placeholder="+1" type="text" />
            <Button>{buttonText}</Button>
        </footer>
    )
}