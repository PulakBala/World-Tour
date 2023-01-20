import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import backgroundImage from './Images/back.jpg'



function App() {
  return (
    <div className='opacity-100' style={{
     width:'100%',
     height:'600px',
     backgroundRepeat: 'no-repeat',
     backgroundPosition: 'center',
     backgroundSize: 'cover',
     backgroundImage: `url(${backgroundImage})`}}>


      <RouterProvider router={routes}></RouterProvider>
    
    </div>
  );
}

export default App;
