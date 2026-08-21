import { Routes, Route } from 'react-router'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import Logement from '../pages/Logement/Logement'
import About from '../pages/About/About'
import Error404 from '../pages/Error404/Error404'

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
}

export default Router