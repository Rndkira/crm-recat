import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import Layout from './components/Layout'
import Index,{loader as clientesLoader, } from './pages/Index'
import NuevoCliente,{  action as nuevoClienteAction} from './pages/NuevoCliente'
import EditarCliente,{loader as editarClienteLoader, action as editarClienteAction, action} from './components/EditarCliente'
import cliente,{action as EliminarclienteAction} from './components/Cliente'
import ErrorPage from './components/Error.page'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente/>,
        action: nuevoClienteAction
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente/>,
        loader: editarClienteLoader,
        action: editarClienteAction
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: EliminarclienteAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
