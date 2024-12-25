 import BlackBeerImage from '../image/cola.png';


const ProductCard=({currentIndex,isActive,onClick})=>{

    return(
      
        <div className= {`shadow-sd flex flex-row w-full items-center  h-16  border-l   border-b  ${isActive ? 'bg-blue-50' : 'bg-white' } `} onClick={onClick}>
            <div className={`w-1 h-full ${isActive ? 'bg-green-400' : 'bg-white' }`}  id="changeColor"  > </div>
            <div className=" w-12 h-12 ml-3  " >
                <img src={BlackBeerImage} className="w-full h-full object-cover" alt="colorimage"></img>
            </div>
            <div className="ml-4" > <h1>{ currentIndex &&  currentIndex.name}</h1> </div>
            <div >
            </div>
        </div>
  
    );
}

export default ProductCard;
