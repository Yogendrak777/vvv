import logo from './logo.svg';
import './App.css';
import ReatTime from './Components/ReatTime';
import Spline from './Components/Spline';
import PieChart from './Components/PieChart';
import ColumnChart from './Components/ColumnChart';
import NavBar from './Components/NavBar';
import NavButton from './Components/NavButton';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AllRoute from './Components/AllRoute';
import NxpFive from './Components/NxpFive';
import NxpSeven from './Components/NxpSeven';
import QuarkU from './Components/QuarkU';
import Moptro from './Components/Moptro';
import Irrway from './Components/Irrway';

function App() {

  const BrowserRouter = createBrowserRouter([
  {
    path: '/', element: <NavBar/>, children: [
      {path: '/', element: <AllRoute/>},
      {path: '/nxp500', element: <NxpFive/>},
      {path: '/nxp700', element: <NxpSeven/>},
      {path: '/quarku', element: <QuarkU/>},
      {path: '/moptro', element: <Moptro/>},
      {path: '/irrway', element: <Irrway/>},
    ]
   }
  
])

  return (
    <div className='bg' >
      <RouterProvider router={BrowserRouter}/>
    </div>
  );  
}

export default App;
