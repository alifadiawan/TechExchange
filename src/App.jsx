import './App.css'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'

function App({ children }) {
  return (
    <div className="bg-zinc-900 text-gray-200 min-h-screen">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default App
