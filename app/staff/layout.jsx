
import Sidebar from '../../components/sidebar'
import Navbar from '../../components/navbar'

export default function ClientLayout({ children }) {
  return ( // wrap session with provider so you can get userdata in following components
        <section>
            <Navbar></Navbar>
            <main>
              <Sidebar></Sidebar>
              {children}
            </main>
            
            
        </section>
  )
}

