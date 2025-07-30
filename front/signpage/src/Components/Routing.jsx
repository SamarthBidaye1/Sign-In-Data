import React from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import SIgnin from './SIgnin';
import Getreq from './Getreq';
const router=createBrowserRouter([
    {
        path:'/',
        element:<SIgnin/>
    },
    {
        path:'/getdata',
        element:<Getreq/>
    }
])

const Routing = () => {
    return <RouterProvider router={router}/>
}

export default Routing
