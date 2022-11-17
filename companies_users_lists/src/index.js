import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Userlist from './userList';
import AddCompany from './addCompany';
import ViewCompany from './viewCompany';
import EditCompany from './editCompany';
import Adduser from './addUser';
import Edituser from './editUser';
import 'react-toastify/dist/ReactToastify.css';




const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/add/company',
    element: <AddCompany />
  },
  {
    path: '/view/company/:id',
    element: <ViewCompany />
  },
  {
    path: '/edit/company/:id',
    element: <EditCompany />
  },
  {
    path: '/users/:id',
    element: <Userlist />
  },
  {
    path: '/users/:id/add',
    element: <Adduser />
  },
  {
    path: '/users/:company_id/edit/:id',
    element: <Edituser />
  }
])

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
