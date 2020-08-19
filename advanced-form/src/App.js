import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import axios from 'axios'
import * as yup from 'yup'
import { useState } from 'react';


function App() {

  const [memberInfo, setMemberInfo] = useState({name: "", email: "", password: "", tos: false});
  const [members, setMembers] = useState([])
  


  return (
   <Form />
     
  );
}

export default App;
