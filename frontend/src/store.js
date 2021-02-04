import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {productListReducer} from './reducers/productReducers'
import {productDetailReducer} from './reducers/productReducers'


///this essentially just returns the list of products. but it is now globally available.
//now we have to wrap the entire application in a provider
const initialState={}

const reducer=combineReducers({
  productList:productListReducer,
  productDetails:productDetailReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)))

export default store;
