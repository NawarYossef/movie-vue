import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// creates store with redux dev tools chrome extension enabled https://github.com/gaearon/redux-devtools
// and redux-thunk middleware applied
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

function saveState(state) {
  try {
      let serializedState = JSON.stringify(state);
      localStorage.setItem("storeState", serializedState);
  }
  catch (err) {
    console.log(err);
  }
}

    store.subscribe(() => {
      //this is just a function that saves state to localStorage
      saveState(store.getState());
  }); 
export default store;
