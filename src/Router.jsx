import { Route, Routes } from 'react-router'
import Layout from './layouts/Layout/Layout.jsx'
import About from './pages/About/About.jsx'
import Error404 from './pages/Error404/Error404.jsx'
import Home from './pages/Home/Home.jsx'
import Housing from './pages/Housing/Housing.jsx'


function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Housing />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
}

export default Router
