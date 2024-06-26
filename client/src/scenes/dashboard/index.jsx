import React from 'react'
import Topbar from '../global/topBar'
import SideBarCmp from '../global/sideBar'
import DashboardComp from '../../components/dashboard/dashboardcomp'
import { BrowserRouter,Outlet,Route,Routes } from 'react-router-dom'

const Layout = () => {
  return (
    
    <div className='app' style={{ overflow: 'auto' }}>
      <style>
        {`.app::-webkit-scrollbar {
            display: none;
          }`}
      </style>
      <SideBarCmp />
      <main className="content" style={{
        height: '100vh',
        overflow: "auto"
      }}>
        <Topbar />
        <Outlet />
      </main>
    </div>


  )
}

export default Layout
