import Product from "../card/product";
import Header from "../header/header";

const Home=()=>{
    return(
        <div className='gird grid-rows-3 row-auto' >
        <div >
            <Header/>
        </div>
     
        <div className='mx-14'>
          <Product/>
        </div>
      </div>
    );
}

export default  Home;