import { Route, Routes } from 'react-router'
import Layout from './layouts/Layout/Layout.jsx'
import About from './pages/About/About.jsx'
import Error404 from './pages/Error404/Error404.jsx'
import Home from './pages/Home/Home.jsx'
import Housing from './pages/Housing/Housing.jsx'

/**
 * Toutes les pages partagent le meme Layout (header + footer), declare ici
 * comme route parente : les pages s'affichent dans son <Outlet />.
 *
 * /404 est une route nommee en plus du joker, pour que la page logement
 * puisse y rediriger explicitement quand l'id n'existe pas (etape 9).
 */
function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Housing />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
}

export default Router
