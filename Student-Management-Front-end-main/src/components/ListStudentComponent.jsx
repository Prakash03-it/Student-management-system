import React,{useEffect, useState}from 'react'
import { listStudent } from '../services/StudentService'
import { useNavigate  } from 'react-router-dom'
const ListStudentComponent = () => {

  const[Students, setStudents] = useState([])

    const navigator = useNavigate (); 

        useEffect( ()   =>{
         listStudent().then((response)=>{
          setStudents(response.data);
         }).catch(error =>{
            console.error(error);
         })

        }, [])

        function addNewStudent(){
            navigator('/add-student')
        }

  return (
    <div className='container'>
        <h2 className='text-center'>Students List</h2>
        <button className='btn btn-success' onClick={addNewStudent}>Add Student</button>
        <table className='table table-hower table-striped table-bordered '>
            <thead>
              <tr className='table-dark'>
                <th >ID NO</th>
                <th>STUDENT NAME</th>
                <th>AGE </th>
                <th >E-MAIL ID</th>
          
              </tr>
            </thead>
            <tbody >
                {
                   Students.map(students => 
                       <tr className='table-light' key={students.id}>
                        <td >{students.id}</td>
                        <td >{students.name}</td>
                        <td >{students.age}</td>
                        <td >{students.email}</td>
                        </tr>
                    )
                }
                </tbody>
             </table>

    </div>
  )
}

export default ListStudentComponent