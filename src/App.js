
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routers/Router/Router';
import 'react-photo-view/dist/react-photo-view.css';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div className="">
       <RouterProvider router={router}>
          <Toaster/>
       </RouterProvider>
    </div>
  );
}

export default App;
