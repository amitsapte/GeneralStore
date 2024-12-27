export const Set_Active_Index ='Set_Active_Index';
export const Set_Active_Product='Set_Active_Product'
export const Set_Active_Search ='Set_Active_Search'
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