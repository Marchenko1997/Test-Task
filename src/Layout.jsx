
import { Outlet } from 'react-router-dom';
import NavHeader from './components/NavHeader/NavHeader';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';



const Layout = () => {
  return (
    <div>
      <NavHeader />
      <Suspense fallback={<div>Loading...</div>}>
      
      <main>
        <Outlet />
      </main>
      </Suspense>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              background: '#169315',
              color: '#fff',
            },
          },
          error: {
            duration: 3000,
            style: {
              background: '#ea2c04',
              color: '#fff',
            },
          },
        }}
        containerStyle={{
          top: 124,
        }}
      />
    </div>
  )
}

export default Layout