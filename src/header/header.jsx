import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveItem, setUserSearch , setCardVisibility} from "../reduxstory/action";
import ItemCard from "../card/itemcard";
import { product, item, arrayOfImage } from "../data/cardData";

const Header = () => {
    const navigator = useNavigate();

    const dispatch = useDispatch();
    const {defaultProduct, myCardOpenClose } = useSelector((state )=>({
        defaultProduct: state.activeItemIndex ,myCardOpenClose :state.myCardOpenClose
    }) )
  const [userSearch, setSearch] = useState("");
    const [findId, setfindId] = useState(0);

     useEffect (() =>{
         if(findId > 0) {
            dispatch(setActiveItem (findId));
         }
         
    }, [findId,dispatch]);

    const showMyCard = () =>{
        dispatch(setCardVisibility(myCardOpenClose ? false :true  ));
    };

    const displayThatItem = (event) => {

        setSearch(event.target.value);
        if (userSearch.length > 1) {

            dispatch(setUserSearch(false));
            const matchingIds = product
                .filter(productCheck => productCheck.name.toLowerCase().includes(userSearch.toLowerCase()))
                .map(productCheck => productCheck.id);
            setfindId(matchingIds.length > 0 ? matchingIds[0] : 0);
        }
        else {
            dispatch(setUserSearch(true));
            dispatch(setActiveItem (0));
            setfindId(0);
        }



        // console.log(findId);
    }

    const gotoLoginPage = () => {
        navigator("/Login");
    }
    return (
        <div>
            <div className=" md:border-b ">
                <div className="flex flex-row justify-between items-center w-auto  h-[50px] md:h-[80px] mx-2">
                    <div className="  flex-row justify-between items-center h-full  lg:flex hidden">
                        <span className=" text-yellow-400 text-[30px] font-bold "> Genral</span>
                        <span className="text-green-500 text-[30px] font-bold ">Story </span>

                    </div>
                    <div className=" border-r hidden lg:block w-12px h-full m-0 bg-red-600" >
                    </div>
                    <div className=" flex flex-row justify-center items-center w-auto   ">
                        <p className="text-[25px] justify-start  w-[240px] lg:text-[20px]  sm:w-[240px] md:w-[240px] sm:h-auto md:h-auto sm:text-[15px] md:text-[25px] lg:w-auto lg:h-auto font-bold">
                            Deliver in 5 Minutes
                        </p>

                    </div>
                      <div className="visible ml:hidden">
                      <button type="submit" class="p-2 bg-white text-white rounded hover:bg-blue-600">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 0v1m0 4h4m1 0h1m-6-1v1m0 4H7m-2 0a9 9 0 0118 0v0a9 9 0 01-18 0v0z" />
                       </svg>
                      </button>
                      </div>
                    <div className=" invisible ml:visible " >
                        <input className=" border   w-[460px] h-[40px] rounded-md" value={userSearch} placeholder="Search" onChange={displayThatItem}></input>
                    </div>
                    <div onClick={gotoLoginPage} className="border w-[100px]  h-[40px] border-black rounded-md lg:visible invisible flex justify-center  items-center">
                        <button >Login</button>
                    </div>
                    <div>
                        <button onClick={showMyCard} className="rounded-md bg-green-500  w-[100px] lg:visible invisible h-[40px] text-white">My Card</button>
                    </div>
                </div>
                <div className=" w-full h-[40px] border-r my-2 pl-2 border-t border-b flex items-center  md:hidden lg:hidden " >
                    <h2 className="font-bold text-[12px]">  Buy {product[findId - 1] && product[findId - 1].name ? product[findId - 1].name : "Product"} online
                    </h2>
                </div>
            </div>
            {findId >= 1 || defaultProduct >0 ?
                <div className=" mx-6 sm:mx-16 lg:mt-14 lg:mx-24 md:mx-20 md:mt-7 h-full" >
                    <p className="font-bold"> Showing result for "{userSearch}"</p>
                    <div className="grid grid-cols-2 sm:grid-cols-2 mll:grid-cols-3 md:grid-cols-3 lgs:grid-cols-5  mt-2 h-full gap-1  ">
                        {item[ ( (findId ) > 0 ? (findId -1) : (defaultProduct -1 )) ].map((currentItem, index) => {
                            return <ItemCard currentItem={currentItem} key={index} imgaeCard={arrayOfImage[findId - 1  >= 0 ? (findId -1) :  (defaultProduct -1)].cardImage} />
                        })}
                    </div> </div> : <div></div>}
        </div>
    );
}

export default Header;

