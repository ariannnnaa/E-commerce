import { useParams } from "react-router";
import { categories } from "../data/data";
import useFetch from "../utils/useFetch";
// components 
import Loading from "../components/Loading";
import ProductContainer from "../components/ProductContainer";
import AboutUs from "../components/AboutUs";


const Category = () => {
const {category} = useParams();
const {data, isLoading} = useFetch(`products/category/${category}`);
const current = categories.find((item) => item.category === category);

if(isLoading || !data) return <Loading />

    return (
        <div className="pt-36"> 
        {/* Продукция  */}
        <h2 className='mt-16'>{current.title}</h2>
        <ProductContainer items={data} cards={4}/>
        {/* О нас  */}
        <AboutUs />
        </div>
    );
}

export default Category;
