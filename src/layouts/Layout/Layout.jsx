import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer.jsx'
import Header from '../../components/Header/Header.jsx'
import './Layout.scss'

function Layout() {
  return (
    <div className="layout">
      <div className="layout__inner">
        <Header />
        <main className="layout__main">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
