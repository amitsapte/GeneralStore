import { Set_Active_Index, Set_Active_Product, Set_Active_Search } from "./action";

const initialState = {
      activeIndex:0,
      activeProduct:0,
      initalSearch:true,
        item :[[{ percentage: 12 ,itemName:"Amul Taaza Toned Fresh Milk",price:56}, {itemName:"Amul Fresh Milk",price:26}, { percentage: 53 ,itemName:"Chitale Pasteurised Cow Fresh Milk",price:28}, {itemName:"Amul Gold Full Cream Fresh Milk",price:34}, {itemName:"Amul Cow Fresh Milk",price:28}
              , { percentage: 23,itemName:"Amul Taaza Homogenised Toned Fresh Milk",price:28 }, { percentage: 23,itemName:"Amul Moti Toned  Milk",price:33 }], [{}, { percentage: 23 ,itemName:"Moder 100% whole wheat Bread",price:55 }, {}, { percentage: 23,itemName:"Modern Sandwich Bread",price:40 },
              {itemName:"English Oven Sandwich WHite Bread",price:40},{itemName:"Britannia Brrown Bread",price:50},{itemName:"The Health Factory Zero Maida Protein Bread",price:76}], [{itemName:"Yojana Poultry Power White Eggs",price:53}, {itemName:"Yojana Poultry Power ",price:104},{itemName:"Table White Eggs",price:104},{itemName:"Table White Eggs ",price:106},{itemName:"Hen Fruit White Protein Rich Eggs",price:119}
          ]],
           product : [{ name: "Milk" ,id:1 }, { name: "Bread & Pav" ,id:2 }, { name: "Eggs" ,id:3}]
};

   const activeReducer = (state = initialState,action) =>{
     
         switch (action.type) {
            case Set_Active_Index:
                return {
                    ...state ,
                    activeIndex : action.payload,
                };

                case Set_Active_Product:
                    return{
                     ...state,
                     activeProduct: action.payload,
                    };
                 
                case Set_Active_Search:
                    return{
                        ...state,
                        initalSearch : action.payload

                    };

            default:
             return   state;
         }

   }

   export default activeReducer;