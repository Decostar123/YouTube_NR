import logo from './logo.svg';
import './App.css';
import Head from "./components/Header";
import Body from "./components/Body" ;
import {Provider} from 'react-redux' ; 
import store from './utils/store';
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom" ; 

const path = createBrowserRouter([{
  path :"/" , 
  element : <Body/> , 
}]) 

function App() {

 
  return (
    <Provider store={store} >
      <div>
        <Head />
        <RouterProvider router={path}  />
      </div>
    </Provider>
// head 
// body 
//    SideBar 
//        MenuItems
//    MainContainer
//        ButtonList 
//        VideoContainer
//            VideoCard
// 

  );
}

export default App;
