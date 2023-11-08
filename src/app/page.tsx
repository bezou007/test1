import FormAndTable from "./components/Form";
import Header from "./components/Header";
import Sidebar from "./components/sidebar";
export default function Home() {
  return (
   
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <FormAndTable />
      </div>
    </div>
    

  )
}
