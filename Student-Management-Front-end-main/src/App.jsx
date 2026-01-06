
import './App.css'
import FooterComponent from './components/FooterComponent'
import { HeaderComponent } from './components/HeaderComponent'
import ListStudentComponent from './components/ListStudentComponent'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import StudentComponent from './components/StudentComponent'



function App(){
  return(
    <>
    <BrowserRouter>
    <HeaderComponent/>

      <Routes>
       {/*// http://localhost:5174*/}
       <Route path='/' element={<ListStudentComponent/>}></Route>
      {/*// http://localhost:5174/students */}
      <Route path='/students' element= {<ListStudentComponent />} > </Route>
      {/*// http://localhost:5174/students/add-student */}
       <Route path='add-student' element={<StudentComponent/>}></Route>
      </Routes>

     <FooterComponent/>
     </BrowserRouter>

    </>
  )
}

export default App
