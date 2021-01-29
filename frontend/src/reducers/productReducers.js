const {PRODUCT_LIST_REQUEST} =require('.../constants/productConstants')

const producListReducer=(state={products:[]},action)=>{
  switch(action.type){
    case "PRODUCT_LIST_REQUEST":
      return{loading:true}

      case "PRODUCT_LIST_SUCCESS":
        return{loading:false, products:payload.action}

        case "PRODUCT_LIST_FAIL":
          return{loading:false, error:action.payload}
        default:
        return state
  }
}
