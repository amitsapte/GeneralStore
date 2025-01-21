export const Set_Active_Index ='Set_Active_Index';
export const Set_Active_Product='Set_Active_Product';
export const Set_Active_Search ='Set_Active_Search';
export const Set_Active_Item= 'Set_Active_Item';
export const Set_Chat_Action= 'Set_Chat_Action';
export const Set_My_Card_Action= "Set_card_Action";


export const setActiveIndex=(index)=>({
      type:Set_Active_Index,
      payload:index
})

export const setActiveProduct=(index)=>({
    type:Set_Active_Product,
    payload:index
})

export const setUserSearch=(userSearch) => ({
    type : Set_Active_Search,
    payload : userSearch
})

export const setActiveItem=(activeItem) =>({
    type:Set_Active_Item,
    payload:activeItem
})

export const setChatAction=(activeItem) =>({
    type:Set_Chat_Action,
    payload:activeItem
})

export const setCardVisibility = (activeAction) => ({
    type: Set_My_Card_Action,
    payload:activeAction
})