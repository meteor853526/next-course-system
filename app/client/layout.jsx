
import Sidebar from './sidebar'
import Navbar from './navbar'

export default function ClientLayout({ children }) {
  return ( // wrap session with provider so you can get userdata in following components
        <section>
            <Navbar></Navbar>
            <Sidebar>
                {children}
            </Sidebar>
        </section>
  )
}

