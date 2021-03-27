import { Button } from 'react-bootstrap';
import { colors } from "../../data/list"
import Input from "../input/"

export default function Footer(props) {
    const h1Content = "Share this list!";
    const pContent = <span>Need another opinion?<br />Send it to another number</span>;
    const buttonText = "Share link";

    const textStyling = (props.dark) ? { color: colors.textDark } : {};
    const footerStyling = (props.dark) ? { background: colors.secondaryDark } : {};

    return (
        <footer className='container' style={footerStyling}>
            <h1 style={textStyling}>{h1Content}</h1>
            <p style={textStyling} className='infos footer'>{pContent}</p>
            <Input dark={props.dark} />
            <Button>{buttonText}</Button>
        </footer>
    )
}