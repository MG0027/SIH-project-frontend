import { StrictMode, } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom';
import App from './routes/App.jsx';
import Sensor from './routes/Sensor-Status.jsx';
import Dashboard from './routes/dashboard.jsx';
import Alerts from './routes/Alerts.jsx';
import Weather from './routes/Weather-info.jsx';
//import Camera from './routes/camera.jsx';
import Water from './routes/Irrigation-control.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from 'react-redux';
import store from './store/index.js';
import CameraPanel from "./routes/camera.jsx"

const router = createBrowserRouter([
  {
    path: "/",

    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/Sensor-Status", element:<Sensor /> },
      { path: "/Weather-info", element: <Weather /> },
      { path: "/Alerts", element: <Alerts />},
     // { path: "/Camera", element: <Camera /> },
      { path: "/Calendar", element: <Water />},
      {path: "/camera", element: <CameraPanel></CameraPanel>}
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      
        <RouterProvider router={router} />
     
    </Provider>
  </StrictMode>
);

