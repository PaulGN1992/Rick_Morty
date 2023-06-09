export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const ORDER = "ORDER";
export const FILTER = "FILTER";
export const RESET = "RESET";



export function addFav(character) {
    return {
        type: ADD_FAV,
	    payload: character
    }
}

export function removeFav(id) {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export function orderFav(order) {
    return {
      type: ORDER,
      payload: order,
    };
  }
  
  export function filterFav(gender) {
    return {
      type: FILTER,
      payload: gender,
    };
  }
  
  export function resetFav() {
    return {
      type: RESET,
    };
  }