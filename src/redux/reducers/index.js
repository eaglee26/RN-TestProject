import { combineReducers } from 'redux';
import FoodDataReducer from './FoodDataReducer';

export default combineReducers({
    foodData: FoodDataReducer,
});