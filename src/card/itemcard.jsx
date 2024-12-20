

const ItemCard = ({ currentItem }) => {
  console.log(currentItem);


  return (



    <div className=" w-[190px] h-[270px] grid  grid-rows-2 border-2 rounded shadow-lg   bg-white" >
      <div className="relative pl-1 pr-1 h-full border-0 w-full  flex justify-center items-center ">
        <img src="./BlackBeer.png" className=" px-10 py-3 relative w-full h-full  object-cover" alt="Imagenotfound" />
        {currentItem && currentItem.percentage ? <div className="absolute top-0 left-1 text-center ">
          <svg className="w-6 h-6" fill="#5088EF">
            <rect height={24} width={24}></rect>
          </svg>
          <div className="[color:rgba(255,255,255,.98)] text-[8px] absolute top-0 left-0 font-bold "  >
            {currentItem.percentage}% OFF
          </div>
        </div> : ""}
      </div>
      <div className='flex flex-col ml-1 mr-1 '>
        <div className=' text-[8px] w-fit font-bold shadow-sm rounded-sm bg-slate-100' > <span className="font-size: 10px;">⌚</span> 12 min </div>
        <div className='font-bold mt-2 text-[13px] h-[40px] w-[150px] overflow-hidden text-ellipsis line-clamp-2'>
          {currentItem.itemName}
        </div>
        <p className=' text-slate-700 mt-1 text-[12px]'>150 g</p>
        <div className=' flex justify-between items-center mt-2'>
          <div className='flex flex-col gap-0 '>
            <div className=' font-bold font-serif text-[12px] '>₹{currentItem.price}</div>
            <div className=' text-slate-700 text-[12px] line-through'>{currentItem.percentage ? `₹ ${(((currentItem.percentage * 100) / currentItem.price) + currentItem.price).toFixed(2)}` : <div></div>}</div>
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