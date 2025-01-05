import { Set_Active_Index, Set_Active_Product, Set_Active_Search } from "./action";

const initialState = {
      activeIndex:0,
      activeProduct:0,
      initalSearch:true,
        item :[[{ percentage: 12 ,itemName:"Amul Taaza Toned Fresh Milk",price:56}, {itemName:"Amul Fresh Milk",price:26}, { percentage: 53 ,itemName:"Chitale Pasteurised Cow Fresh Milk",price:28}, {itemName:"Amul Gold Full Cream Fresh Milk",price:34}, {itemName:"Amul Cow Fresh Milk",price:28}
              , { percentage: 23,itemName:"Amul Taaza Homogenised Toned Fresh Milk",price:28 }, { percentage: 23,itemName:"Amul Moti Toned  Milk",price:33 },{ percentage: 12 ,itemName:"Amul Taaza Toned Fresh Milk",price:56}, {itemName:"Amul Fresh Milk",price:26}, { percentage: 53 ,itemName:"Chitale Pasteurised Cow Fresh Milk",price:28}, {itemName:"Amul Gold Full Cream Fresh Milk",price:34}, {itemName:"Amul Cow Fresh Milk",price:28}
              , { percentage: 23,itemName:"Amul Taaza Homogenised Toned Fresh Milk",price:28 }, { percentage: 23,itemName:"Amul Moti Toned  Milk",price:33 }], [{}, { percentage: 23 ,itemName:"Moder 100% whole wheat Bread",price:55 }, {}, { percentage: 23,itemName:"Modern Sandwich Bread",price:40 },
              {itemName:"English Oven Sandwich WHite Bread",price:40},{itemName:"Britannia Brrown Bread",price:50},{itemName:"The Health Factory Zero Maida Protein Bread",price:76}], [{itemName:"Yojana Poultry Power White Eggs",price:53}, {itemName:"Yojana Poultry Power ",price:104},{itemName:"Table White Eggs",price:104},{itemName:"Table White Eggs ",price:106},{itemName:"Hen Fruit White Protein Rich Eggs",price:119}
          ]],
            arrayOfImage :[{producImage:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/922_1643384380004.png',
                  cardImage:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/89cb3ef5-0003-4100-bcf4-f97092f30997.jpg?ts=1712325592'},
                  {producImage:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c43be68e-4639-41de-a497-27332b6925d1.jpg?ts=1734340152',
                    cardImage:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c2c6aabf-26ce-48f1-844a-cec06b6740d5.jpg?ts=1723622171'},
                    {producImage:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/584_1680251645977.png',
                  cardImage:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/fdc75876-f010-4814-a9d7-0c46f5511b51.jpg?ts=1708591840'}]
          
          ,
           product : [{ name: "Milk" ,id:1 }, { name: "Rusks" ,id:2 }, { name: "Oats" ,id:3}]
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