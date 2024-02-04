import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HeaderPage } from './Pages/HeaderPage/HeaderPage';
import { MainContentData } from './Pages/MainContentPage/MainContentData';
import { PersonalDetails } from './components/MainContent/PersonalDetails/personalDetails';

// import MainContent from './components/MainContent/MainContent';


function App() {


  const router= createBrowserRouter([
    {
        
      path:'/',element: <HeaderPage/>,children:[
        {path:'',element:<MainContentData/>},
        {path:'/personalDetails',element:<PersonalDetails/>}
      ]  
    }
   ])
    return (
      <div>
          <RouterProvider router={router}/>
      </div>
    
    );
  }

export default App
