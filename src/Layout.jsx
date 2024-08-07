
import { Outlet } from 'react-router-dom';
import NavHeader from './components/NavHeader/NavHeader';
import { Suspense } from 'react';



const Layout = () => {
  return (
    <div>
      <NavHeader />
      <Suspense fallback={<div>Loading...</div>}>
      <main>
        <Outlet />
      </main>
      </Suspense>
    </div>
  )
}

export default Layout