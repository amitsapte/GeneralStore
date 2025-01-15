import { Set_Active_Index, Set_Active_Item, Set_Active_Product, Set_Active_Search, Set_Chat_Action } from "./action";

const initialState = {
      activeIndex:0,
      activeProduct:0,
      initalSearch:true  ,
      activeItemIndex:0 ,
      chatOnorOff:false       
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

                    case Set_Active_Item :
                        return{
                         ...state,
                         activeItemIndex: action.payload
                        };

                        case Set_Chat_Action:
                            return {
                         ...state,
                         chatOnorOff :  action.payload
                            };

            default:
             return   state;
         }

   }

   export default activeReducer;