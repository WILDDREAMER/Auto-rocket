import TileCardList from "../../components/tileCardList";
import Survey from '../../components/takeTheSurvey/';
import HeroTiles from "../../components/heroTiles";
import TopBar from "../../components/topBar";
export default function Tiles({ dark }) {
    return (
        <div className='tilesContainer'>
            <TopBar dark={dark}></TopBar>
            <div className='card-list tiles' >
                <HeroTiles dark={dark}></HeroTiles>
                <TileCardList dark={dark}></TileCardList>
                <Survey dark={dark}></Survey>
            </div>
        </div>
    )
}