import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App';
import StudentStore from './store/student';
import * as serviceWorker from './serviceWorker';
import StudentActions from './actions/student';

setTimeout(() => StudentStore.dispatch(StudentActions.loadStudentProfile('Dinanjana')), 100);

window.store = () => StudentStore.getState();

ReactDOM.render(
    <Provider store={StudentStore}>
        <App/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
