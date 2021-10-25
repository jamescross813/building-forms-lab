export default function manageBand(state = {
  bands: [],
}, action) {
  
  switch(action.type){
    case "ADD_BAND":
      // console.log(action.name.name)
      return{
        ...state, 
        bands: [...state.bands, action.name]
      }
  default:
  return state
    }
};

