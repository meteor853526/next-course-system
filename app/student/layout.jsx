import Sidebar from "../../components/sidebar"
import DefaultSidebar from "../../components/defaultbar"

export default async function ClientLayout({ children }) {
  return ( // wrap session with provider so you can get userdata in following components
        <section className="bg-slate-50 h-screen w-screen ">
            <main className="absolute left-60">
              
              {children}
            </main>
        </section>
  )
}

