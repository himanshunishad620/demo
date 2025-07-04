
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider></BrowserRouter>
);

