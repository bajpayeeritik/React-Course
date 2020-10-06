import * as ActionTypes from './ActionTypes'
import {DISHES} from '../shared/dishes'
 export const Dishes =(state=DISHES,action)=>
 {
     switch(action.type)
     {
         case ActionTypes.ADD_DISHES:

         case ActionTypes.DISHES_LOADING:

         case ActionTypes.DISHES_FAILED:

         default:
             return state;
     }
 }