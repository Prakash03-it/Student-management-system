import React, { useState } from 'react'
import { createStudents } from '../services/StudentService'
import { useNavigate } from 'react-router-dom'

const StudentComponent = () => {


 const[ name,setName] = useState('')
 const[age,setAge] =useState('')
 const [email,setEmail]=useState('')

  const navigator =useNavigate();

 const[errors,setErrors]= useState({
    name:'',
    age:'',
    email:''
  })
 

 function saveStudent(e){
    e.preventDefault();

    if(validateForm()){
   const Students ={name,age,email}
    console.log(Students)

    createStudents(Students).then((response) =>{
        console.log(response.data);
        navigator('/Students')
    })
    }

   
 }

 function validateForm(){
    let valid =true;
    const errorsCopy={...errors}

    if(name.trim()){
        errorsCopy.name='';
    }else{
        errorsCopy.name='Name is required ';
        valid=false;
    }if(age.trim()){
        errorsCopy.age='';
    }else{
        errorsCopy.age='Age is required';
        valid=false;
    }
    if(email.trim()){
        errorsCopy.email='';
        
    }else{
        errorsCopy.email='Email is required';
         valid=false;
    }
    setErrors(errorsCopy);
    return valid;

 }

  return (
    <div className='container'>
        <br/> 
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Add Student <br/></h2>                
            <br/> 
            <div className='card-body'>
                <form> 
                    <div className='form-group mb-2'>
                        <label className='form-label'>
                                 Name: 
                        </label>
                        <input type='text' placeholder='Enter student Name' name='name' value={name}
                        className='form-control'
                        onChange={(e) =>  setName(e.target.value)}>

                        </input>
                            
                    </div>

                    <div className='form-group mb-2'>
                        <label className='form-label'>
                             Age:
                        </label>
                        <input type='text' placeholder='Enter student Age' name='age' value={age}
                         className='form-control '
                          onChange={(e) =>setAge(e.target.value)}>

                        </input>
                     
                    </div>

                    
                    <div className='form-group mb-2'>
                        <label className='form-label'>
                             Email:
                        </label>
                        <input type='text' placeholder='Enter student Email' name='email' value={email}
                      className='form-control' onChange={(e) => setEmail(e.target.value)}>

                      </input>
                       
                    </div><br/>
                    <button className='btn btn-success' onClick={saveStudent}>Submit</button>               
                     </form>
            </div>
        </div>

    </div>
  )
}

export default StudentComponent