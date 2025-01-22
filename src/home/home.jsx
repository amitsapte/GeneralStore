import { useEffect, useState } from "react";
import Product from "../card/product";
import Header from "../header/header";
import ChatBot from "../aiimpelement/chat";
import { useDispatch, useSelector } from "react-redux";
import { setCardVisibility } from "../reduxstory/action";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // Handle scroll event to add a class when the page is scrolled
  const handleScroll = () => {
    if (window.scrollY > 50) {  // Threshold to toggle 'scrolled' state
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const { myCardOpenClose } = useSelector((state )=>({
  myCardOpenClose :state.myCardOpenClose
}) )

const dispatch = useDispatch();

      const closeCard = () =>{
        dispatch(setCardVisibility ( false) );
      }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='gird grid-rows-3 row-auto' >
      <div>
      { myCardOpenClose ? 
      <div className="h-full bg-red-800 w-full ">
               <button onClick={closeCard} > X</button>
              <h1>hey can do it </h1>
        </div> : <div></div>}
      </div>
      <div className={`sticky top-0 w-full bg-white md:shadow-md  ${isScrolled ? '' : ''}`} >
        <Header />
      </div>

      <div className='mx-1 sm:mx-3 md:mx-3 lg:mx-6'>
        <Product />
      </div>
      <div>
        <ChatBot/>
      </div>
      <div>
    
      </div>
    </div>
  );
}

export default Home;