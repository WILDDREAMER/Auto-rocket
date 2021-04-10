import CategoryCard from "../../components/categoryCard";
import Products from "../../components/products";
import TopBar from "../../components/topBar";
import { categories } from '../../data/aftermarket'
import { colors } from '../../data/global'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



export default function Aftermarket({ dark }) {
    function Categories() {
        return (
            <div className='categories'>
                <div className='left'>
                    <Link to='/aftermarketfilter'>
                        <CategoryCard category={categories.filter}></CategoryCard>
                    </Link>
                    <CategoryCard category={categories.soundSystems}></CategoryCard>
                    <CategoryCard category={categories.floor}></CategoryCard>
                </div>
                <div className='right'>
                    <CategoryCard category={categories.brake}></CategoryCard>
                    <CategoryCard category={categories.wheels}></CategoryCard>
                    <CategoryCard category={categories.headlights}></CategoryCard>
                </div>
            </div>
        )
    }
    function List() {
        return <Products category={categories.filter} dark={dark} ></Products>
    }
    const styling = (dark) ? { backgroundColor: colors.dark.background, color: colors.dark.text } : { backgroundColor: colors.light.background, color: (colors.light.text) }

 
    return (
        <div style={styling} className='aftermarket'>
            <TopBar dark={dark}></TopBar>
            <div className="body">
                <h1>All the parts you need</h1>
                <h2>Here's a few we think will fit you</h2>
                <Router>
                        <Route path="/aftermarket" component={Categories}></Route>
                        <Route path='/aftermarketfilter' component={List}></Route>
                </Router>
            </div>
        </div>
    )
}