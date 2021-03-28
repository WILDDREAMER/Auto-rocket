import TileCard from "../tileCard";
import { articles, radius } from "../../data/tiles";

export default function tileCardList(props) {
    
    return (
            <div className='tileCardList'>
                <div className='right'>
                    {articles.map((item, index) => {
                        return (!(index % 2)) ? <TileCard article={item}></TileCard> : ''
                    })}
                </div>
                <div className='left'>
                    {articles.map((item, index) => {
                        return (index % 2) ? <TileCard article={item}></TileCard> : ''
                    })}
                </div>
            </div>
    )
}