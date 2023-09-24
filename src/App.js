import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body" ;
import {Provider} from 'react-redux' ; 
import store from './utils/store';
import MainContainer from './components/MainContainer'
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom" ; 
import WatchPage from "./components/WatchPage" ; 
import Result from  "./components/Result" ; 

const path = createBrowserRouter ( [ {
  path :"/" , 
  element : <>
      <Header />
      <Body /> 
  </> , 
  children : [ 
   {
    path : "/" , 
    element : <MainContainer/>
   }
   ,{
    path : "/watch",
    element : <WatchPage/>
   }, {
    path : "/results" , 
    element : <Result />
   }
  ] 
} ] ) 

function App() {

 
  return (
    <Provider store={store} >
      <div className="bigouter">
        
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
