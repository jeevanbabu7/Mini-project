import {BrowserRouter as Router , Routes,Route,Outlet} from 'react-router-dom'
import Home from './components/home/home'
import SignUp from './components/authentication/signup'
import Login from './components/authentication/login'
import Header from './components/header/header'
import './App.css'
import './index.css'
import Properties from './components/properties/properties'
import Profile from './components/profile/profile'
import PropertyForm from './components/Listing/PropertyForm'
import UpdateProperty from './components/updateProperty/updateProperty'
import Property from './components/property/property'
import { ColorModeContext,useMode } from './utils/theme.js'
import { CssBaseline, ThemeProvider } from '@mui/material'

import SideBarCmp from './scenes/global/sideBar'
import Users from './scenes/Users/users.jsx'
import Lease from './scenes/requests/lease.jsx'
import Layout from './scenes/dashboard/'
import DashboardComp from './components/dashboard/dashboardcomp.jsx'
import Calendar from './scenes/calendar/calendar.jsx'

function App() {
  const [theme,colorMode] = useMode(); 
  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <Router>
            
            
            <Routes> 
              <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="/sign-up/:role" element={<SignUp />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/properties/search" element={<Properties />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/property" element={<PropertyForm />} />
                <Route path="/update-property/:id" element={<UpdateProperty />} />
                <Route path="/properties/:id" element={<Property />} />
              </Route>
              
              <Route path='/dashboard' element={<Layout />}>
                <Route index element={<DashboardComp />}/> 
                <Route  path='tenants' element={<Users />}/> 
                <Route  path='calendar' element={<Calendar />}/> 
                <Route path='lease-requests' element={<Lease/>}/>
              </Route>
            </Routes>
          </Router>
          </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
