export const addCountry =(country)=>{
    return {
      type: "ADD_COUNTRY",
      country
    }
}

export const deleteCountry =(index)=>{
    return {
      type: "DELETE_COUNTRY",
      index
    }
}
