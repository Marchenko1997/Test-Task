
import { Outlet } from 'react-router-dom';
import NavHeader from './components/NavHeader/NavHeader';



const Layout = () => {
  return (
    <div>
      <NavHeader />
      <main>
        <Outlet />
      </main>

    </div>
  )
}

export default Layout