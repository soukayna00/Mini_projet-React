import { createStore } from 'redux';
import ReducerBillet from './Reducers/ReducerBillet'; // Import the default export

const store = createStore(ReducerBillet);

export default store ;
