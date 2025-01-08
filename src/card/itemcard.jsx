
const ItemCard = ({ currentItem,imgaeCard }) => {

  return (
    <div className=" w-[185px]  h-[270px] lgg:w-[210px] sl:w-[250px] lgm:w-[200px]  sm:w-[225px] sm:h-[270px] lgs:w-[180px]  mll:h-[270px] ml:w-[310px] mll:w-[230px] md:w-[265px] md:h-[270px] lg:w-[225px] lg:h-[270px] grid  grid-rows-2  mt-2 ml-[6px] border-2 rounded shadow-lg overflow-hidden   bg-white" >
      <div className='flex justify-center  overflow-hidden  '>
        <div className=" pl-1 pr-1 h-auto border-0 w-auto  justify-center items-center    ">
          {currentItem && currentItem.percentage ?
            <div className=" top-0 left-1 text-center w-auto  z-10 ">
              <svg className="w-6 h-6" fill="#5088EF">
                <rect height={24} width={24}></rect>
                <text x="50%" y="50%" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" dy=".3em">
                  <tspan x="50%" dy="0">{currentItem.percentage}%</tspan>
                  <tspan x="50%" dy="1.2em">OFF</tspan>
                </text>
              </svg>

              {/* <div className="[color:rgba(255,255,255,.98)] text-[8px] absolute  top-0 left-0 font-bold "  >
                {currentItem.percentage}% <br></br> OFF
              </div> */}
            </div> : ""}

        </div>
        <div className=' justify-center px-6 py-1 items-center overflow-hidden '>
          <img src={imgaeCard} className="  h-auto w-auto   object-cover" alt="Imagenotfound" />
        </div>
      </div>
      <div className='flex flex-col ml-1 mr-1 '>
        <div className=' text-[8px] w-fit font-bold shadow-sm rounded-sm bg-slate-100' > <span className="font-size: 10px;"></span> 12 min </div>
        <div className='font-bold mt-2 text-[13px] h-[40px] w-[150px] overflow-hidden text-ellipsis line-clamp-2'>
          {currentItem.itemName}
        </div>
        <p className=' text-slate-700 mt-1 text-[12px]'>150 g</p>
        <div className=' flex justify-between items-center mt-2'>
          <div className='flex flex-col gap-0 '>
            <div className=' font-bold font-serif text-[12px] '>₹{currentItem.percentage ? Math.round((currentItem.price - (currentItem.price * currentItem.percentage) / 100)) : currentItem.price}</div>
            <div className=' text-slate-700 text-[12px] line-through'>{currentItem.percentage ? currentItem.price : <></>}</div>
          </div>
          <div className=''>
            <button className='border border-green-700  bg-green-50 text-[12px]  rounded-md font-bold w-16 h-8 text-green-700' type='submit' >ADD</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ItemCard;