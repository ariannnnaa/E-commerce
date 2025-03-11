import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from './ProductCard';

const ProductContainer = ({items,cards}) => {
//данные для пагинации 
const [currentPage,setCurrentPage] = useState(0);
const itemsForPage = cards;
const startIndex = currentPage * itemsForPage;
const data = items.slice(startIndex, startIndex + itemsForPage);
const pages = Math.ceil(items.length / itemsForPage);


const togglePages = (e) => {
    setCurrentPage(e.selected);
}

    return (
        <section className='my-9'>
            {/* продукция */}
            <div className='grid justify-center mb-10 justify-items-center sm:grid-cols-2 xl:grid-cols-3 gap-7'>
            {data.map((item) => {
                return <ProductCard  key={item.id} {...item}/>
            })}
            </div>
            {/* пагинация */}
            {items.length > cards && (
                <ReactPaginate 
                pageCount={pages}
                onPageChange={togglePages}
                previousLabel="<"
                nextLabel=">"
                containerClassName='flex gap-5 sm:gap-12 justify-center flex-wrap sm:text-lg'
                nextClassName='border px-2 border-black rounded-sm bg-black hover:bg-gray-900 text-white'
                previousClassName='border px-2 border-black rounded-sm bg-black hover:bg-gray-900 text-white'
                pageClassName='border px-3 border-black rounded-sm bg-black hover:bg-gray-900 text-white'
                disabledClassName='hidden'
                activeClassName='bg-gray-700 border-gray-400'
                />
            )}
        </section>
    );
}

export default ProductContainer;
