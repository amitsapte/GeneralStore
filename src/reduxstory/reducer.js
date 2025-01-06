import { Set_Active_Index, Set_Active_Product, Set_Active_Search } from "./action";

const initialState = {
      activeIndex:0,
      activeProduct:0,
      initalSearch:true     
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