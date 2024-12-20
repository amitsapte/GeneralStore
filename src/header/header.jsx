import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigator = useNavigate();

    const gotoLoginPage = () => {
        navigator("/Login");
    }
    return (
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
                    <input className=" border   w-[460px] h-[40px] rounded-md" placeholder="Search"></input>
                </div>
                <div onClick={gotoLoginPage} className="border w-[100px]  h-[40px] border-black rounded-md  flex justify-center  items-center">
                    <button >Login</button>
                </div>
                <div>
                    <button className="rounded-md bg-green-500  w-[100px]  h-[40px] text-white">My Card</button>
                </div>
            </div>
        </div>
    );
}

export default Header;