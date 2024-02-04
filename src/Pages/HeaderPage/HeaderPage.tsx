
import { Outlet } from 'react-router-dom'
import Header from '../../components/Layout/Header'

export const HeaderPage = () => {


  return (
   <>
   <Header/>

   <Outlet/>
   </>
  )
}
