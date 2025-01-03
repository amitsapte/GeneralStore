import { setActiveIndex, setActiveProduct } from "../reduxstory/action";
import ItemCard from "./itemcard";
import ProductCard from "./productcard";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {

    const dispatch = useDispatch();

    // here i take state
    const { activeIndex, activeProduct, item, product, userSearch } = useSelector((state) => ({
        activeIndex: state.activeIndex, activeProduct: state.activeProduct,
        item: state.item, product: state.product, userSearch: state.initalSearch
    }));

    const handleClikc = (index) => {
        dispatch(setActiveIndex(index));
        dispatch(setActiveProduct(index));
    }
    return (
        <div>
            {userSearch ? (
                <div className="grid grid-flow-col gap-0">
                    <div className="flex flex-col">
                        {product.map((currentIndex, index) => {
                            return <ProductCard key={index} currentIndex={currentIndex} isActive={activeIndex === index} onClick={() => { handleClikc(index) }} />
                        })}
                    </div>
                    <div>
                        <div className="flex flex-row justify-between items-center  border-b border-r   p-2" >
                            <div>
                                <h2 className="font-bold text-[18px]">Buy {product[activeProduct].name} online</h2>
                            </div>
                            <div className=" flex flex-row items-center  mr-8 ">
                                <div><label>sort by</label></div>
                                <div className="ml-2">
                                    <button type="button" className="inline-flex justify-between w-full rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-green-700 ">
                                        Default dropdown
                                        <svg className="ml-2 -mr-1 h-5 w-5 text-green-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" width="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=' grid   grid-cols-5   bg-blue-50 border-r'>
                            {item[activeProduct].map((currentItem, index) => {
                                return <ItemCard key={index} currentItem={currentItem} />
                            })}
                        </div>
                    </div>
                </div>

            ) : (<div></div>)}
        </div>
    );
};



export default Product;