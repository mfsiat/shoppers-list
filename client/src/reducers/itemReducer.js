// this is the state 
import uuid from 'uuid/dist/v4';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'Eggs' },
    { id: uuid(), name: 'Milk' },
    { id: uuid(), name: 'Steak' },
    { id: uuid(), name: 'Water' }
  ]  
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state
      }
    default:
      return state;
  }
}