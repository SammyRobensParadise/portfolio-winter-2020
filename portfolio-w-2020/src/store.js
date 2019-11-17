import { createStore } from 'redux';
import index from '../src/reducers/index';
export default function configureStore() {
 return createStore(
  index,
 );
}