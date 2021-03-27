import { Button } from 'react-bootstrap';

export default function button(props) {
    return <Button style={props.style}>{props.children}</Button>
}