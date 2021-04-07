import CategoryCard from "../../components/categoryCard";
import {categories} from '../../data/aftermarket'
export default function Aftermarket(props) {
    return(
        <div>
            <CategoryCard category={categories.floor}></CategoryCard>
        </div>
    )
}