import React from 'react';
import './App.css';
import Form from './components/Form'
import axios from 'axios'
import * as yup from 'yup'
import { useState, useEffect } from 'react';
import formSchema from './validation/formSchema';


  const initialDisabled = true

  const initialFormErrors = {
    username: '',
    email: '',
    password: '',
    tos: '',
  }


function App() {

  const [memberInfo, setMemberInfo] = useState({name: "", email: "", password: "", tos: false});
  const [members, setMembers] = useState([])

  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 

  
const checkboxChange = (tos, isChecked) => {
  if(memberInfo.tos === false){
    setMemberInfo({
      ...memberInfo,
      [tos]: isChecked
    }
    )
  }
  else {
    setMemberInfo({
      ...memberInfo,
      [tos]: false
    })
  }
}

const inputChange = (name, value) => {
  yup
  .reach(formSchema, name)
  
  .validate(value)

  .then(valid => {
    setFormErrors({
      ...formErrors,
      [name]: ""
    });
  })

  .catch(err => {
    setFormErrors({
      ...formErrors,
      [name]: err.errors[0],
    });
  });

  setMemberInfo({
    ...memberInfo,
    [name]: value
  })
}

const submit = () => {
  const newUser = {
    username: memberInfo.name.trim(),
    email: memberInfo.email.trim(),
    password: memberInfo.password.trim()
  }
  postNewMember(newUser)
  //postNewMember is made below
}

const postNewMember = newMember => {

  axios.post('https://reqres.in/api/users', newMember)
  .then(res => {
    setMembers([...members, res.data])
    console.log(res.data);
  })
  .catch(err => {
    debugger
  })
  // .finally (() =>{
  //   setMembers(memberInfo)
  // })
}

useEffect(() => {
  formSchema.isValid(memberInfo)
  .then(valid => {
    setDisabled(!valid);
  })
}, [memberInfo])




  return (
    <div className='container'>

   <Form 
   memberInfo={memberInfo} 
   checkboxChange={checkboxChange} 
   inputChange={inputChange} 
   submit={submit}
   disabled={disabled}
   formErrors={formErrors}
   />

   {
      members.map(member => {
          return (
         
              <section className="member-card">
              <h1>{member.name}</h1>
              <h1>{member.email}</h1>
              <h1>{member.password}</h1>
              </section>
             )
          })
        }
  </div>
     
  );

}

export default App;
