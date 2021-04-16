import { Button } from "react-bootstrap";
import { colors, radius } from "../../data/global";

export default function Redeem({ dark, image, title, pt, desc }) {
    const style=(dark) ? { borderRadius: radius, backgroundColor: colors.dark.card} :
    {borderRadius: radius, backgroundColor: colors.light.card}
    return (
        <div className='redeem' style={style}>
            <img className='redeemImg' src={image} alt="" />
            <div className='text'>
                <div className='redeemHeader'>
                    <p className='title'>{title}</p>
                    <p className='pt'>{pt} pt</p>
                </div>
                <p className='desc'>{desc}</p>
                <Button style={{borderRadius: '12px'}}>Redeem points</Button>
            </div>
        </div>
    )
}