import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Try from './TRY';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const path1 = <Try/>
const app = <App/>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={app}/>
    <Route path='/stage1' element={path1}/>
    {/* <Route path=`${path}` element={}/> */}
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
