import './App.css';
import { legacy_createStore as createStore } from 'redux';
import {rootReducer} from './redux/rootReducer'
import { changeTheme, decrement, increment} from './redux/actions';
import { Provider } from 'react-redux';
import React from 'react';


function App() {

 const store = createStore(rootReducer)

 function handleIncrementButton() {
    store.dispatch(increment())
  }

  function handleDecrementButton() {
    store.dispatch(decrement())
  }

  store.subscribe(() => {
    const state = store.getState()
    const counter = document.getElementById('counter')
      counter.textContent = state.counter
    
  })

  return (
    <React.StrictMode>
    <Provider store={store}>
    <div className="app">
      <header className="header">
        <h1 className="header__title">Redux</h1>
        <button className="btn btn_theme">Сменить тему</button>
      </header>

        <div className="counter">
            <h5 className="counter__title">Счетчик: <span id="counter">0</span> </h5>
            <button className="btn btn_add" onClick={handleIncrementButton}>Добавить</button>
            <button className="btn btn_delete" onClick={handleDecrementButton}>Убрать</button>
        </div>

      </div>
      </Provider>
      </React.StrictMode>
     
   
  );
}

export default App;
