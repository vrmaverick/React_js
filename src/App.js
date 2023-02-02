import './App.css'
import Header from './Mycomponents/Header';
import Todoes from './Mycomponents/Todoes';
import Footer from './Mycomponents/Footer';
function App() {
  return (
    <>
    <Header title='My_Todoes_List' searchBar={true}/>{/* attributes for props object in header file */}
    <Todoes/>
    <Footer/>
    </>
  )
}
export default App;
