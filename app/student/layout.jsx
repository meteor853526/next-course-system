import Sidebar from "../../components/sidebar"
import DefaultSidebar from "../../components/defaultbar"

export default async function ClientLayout({ children }) {
  return ( 
        <section className="bg-slate-50 h-screen w-screen ">
            <main className="absolute left-72">
              {children}
            </main>
        </section>
  )
}

