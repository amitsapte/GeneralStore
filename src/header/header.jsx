import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserSearch } from "../reduxstory/action";
import ItemCard from "../card/itemcard";

const Header = () => {
    const navigator = useNavigate();

    const dispatch = useDispatch();
    const { product, item } = useSelector((state) => ({ product: state.product, item: state.item }))
    const [userSearch, setSearch] = useState("");
    const [findId, setfindId] = useState(0);
    const displayThatItem = (event) => {

        setSearch(event.target.value);
        if (userSearch.length > 1) {
            dispatch(setUserSearch(false));
            setfindId((product.filter(product => product.name.toLowerCase()
                .includes(userSearch.toLowerCase()))).map(product => product.id));

        }
        else {
            dispatch(setUserSearch(true));
            setfindId(0);
        }



        console.log(findId);
    }

    const gotoLoginPage = () => {
        navigator("/Login");
    }
    return (
        <div>
            <div className="border-b">
                <div className="flex flex-row justify-between items-center  h-[80px] mx-2">
                    <div className=" flex flex-row justify-between items-center h-full">
                        <span className=" text-yellow-400 text-[30px] font-bold "> Genral</span>
                        <span className="text-green-500 text-[30px] font-bold ">Story </span>
                        <div className=" border-r h-full  ml-2 bg-red-600" >
                        </div>
                    </div>

                    <div className="items-center ">
                        <p className="text-[15px] font-bold">
                            Deliver in 5 Minutes
                        </p>

                    </div>
                    <div className="  " >
                        <input className=" border   w-[460px] h-[40px] rounded-md" value={userSearch} placeholder="Search" onChange={displayThatItem}></input>
                    </div>
                    <div onClick={gotoLoginPage} className="border w-[100px]  h-[40px] border-black rounded-md  flex justify-center  items-center">
                        <button >Login</button>
                    </div>
                    <div>
                        <button className="rounded-md bg-green-500  w-[100px]  h-[40px] text-white">My Card</button>
                    </div>
                </div>
            </div>
            {findId >= 1 ?
              <div className="mt-14 mx-28 h-full" >
                <p className="font-bold"> Showing result for "{userSearch}"</p>
             <div className="grid grid-cols-5 mt-2 h-full gap-1  ">
                
               { item[findId-1].map( (currentItem, index ) => {
                    return <ItemCard currentItem={currentItem}  key={index} />
                } )}
            </div> </div> : <div></div>}
        </div>
    );
}

export default Header;