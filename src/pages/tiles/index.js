import TileCardList from "../../components/tileCardList";
import Survey from '../../components/takeTheSurvey/';
import HeroTiles from "../../components/heroTiles";
export default function Tiles(params) {
    return (
        <div className='card-list' >
            <HeroTiles></HeroTiles>
            <TileCardList></TileCardList>
            <Survey></Survey>
        </div>
    )
}