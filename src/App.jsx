import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNavBar from './components/TopNavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LayananPage from './pages/LayananPage'
import CaregiverPage from './pages/CaregiverPage'
import SumberDayaPage from './pages/SumberDayaPage'

function Layout({ children }) {
  return (
    <div style={{ background: 'linear-gradient(0deg, #FDF9F4, #FDF9F4), #FFFFFF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopNavBar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/layanan" element={<LayananPage />} />
          <Route path="/caregiver" element={<CaregiverPage />} />
          <Route path="/sumber-daya" element={<SumberDayaPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
