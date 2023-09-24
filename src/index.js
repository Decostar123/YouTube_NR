import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom" ; 
import Body from './components/Body';
const root = ReactDOM.createRoot(document.getElementById('root'));
const path = createBrowserRouter([{
  path :"/" , 
  element : <App/> , 
  children:[{
    path :"/", 
    element :< Body />
    
  }]

}])  ;
root.render(
  // <React.StrictMode>
    <App />
    // {/* <RouterProvider router={path} /> */}
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
