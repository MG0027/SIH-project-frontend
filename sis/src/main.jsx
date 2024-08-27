
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Sensor from './routes/Sensor-Status.jsx'
import Dashboard from './routes/dashboard.jsx'
import Alerts from './routes/Alerts.jsx'
import Weather from './routes/Weather-info.jsx'
import Camera from './routes/camera.jsx'
import Water from './routes/water.jsx'
import store from './store/index.js'
import {Provider} from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      {
        path: "/Sensor-Status",
        element: <Sensor/>
       
      },
      {path: "/Weather-info",
        element: <Weather/>
      },
      {path: "/Alerts",
        element: <Alerts/>
      },
      {path: "/Camera",
        element: <Camera/>
      },
      {path: "/Watering-control",
        element: <Water/>
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
    <RouterProvider router={router}>
    </RouterProvider>
    </Provider>
  </StrictMode>,
)
