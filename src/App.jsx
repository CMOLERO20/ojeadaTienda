import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/Navbar'
import './App.css'

function App() {
  
  return (
    <>
      <Navbar />
      <ItemListContainer mensaje="probando la props"/>
    </>
  )
}

export default App
