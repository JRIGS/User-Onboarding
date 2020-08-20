import React from 'react';
import '../App.css';
import styled from 'styled-components';

const StyledForm = styled.form`
border: 1px solid #d2d2d2;
box-shadow: 0px 1px 6px -2px #807f7f;
border-radius: 8px;
margin-top: 16px;
padding: 16px;
font-family: monospace;
background-color: whitesmoke;
display:flex;
justify-content: center;


button {
  background-color: red;
  color: white;
  margin: 1rem;

  transition: all 0.35s ease-in-out;

  &:hover{
  color: black;
  transition: all 0.35s ease-in-out;
  transform: scale(1.15);
  }
}

input {
  padding: .25rem;
}

label {
  font-size: 1rem;
}

`;

function Form(props) {

const {memberInfo, checkboxChange, inputChange, submit, disabled, formErrors} = props

const onCheckboxChange = evt => {
    const { name, value } = evt.target
    // console.log(evt.target);
    checkboxChange(name, value)
  }

const onInputChange = evt => {
    const { name, value } = evt.target
    // console.log(evt.target);
    inputChange(name, value)
}

const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }


return (
      
    <StyledForm>
        
        <div className="errors-container">
          <div>{formErrors.name}</div>
          <div>{formErrors.password}</div>
          <div>{formErrors.email}</div>
          <div>{formErrors.tos}</div>
        </div>

         <label>
            <br />
            Name: <input
            type="text"
            name="name"
            placeholder="type name here..."
            value={memberInfo.name}
            onChange={onInputChange}
            />
            Email: <input
            type="email"
            name="email"
            value={memberInfo.email}
            onChange={onInputChange}
            placeholder="type email here..."
            />
            Password: <input
            type="password"
            name="password"
            value={memberInfo.password}
            onChange={onInputChange}
            placeholder="type password here..."
            />
            TOS: <input
            type="checkbox"
            name="tos"
            checked={memberInfo.tos === 'true'}
            value={true}
            onChange={onCheckboxChange}
            />
        </label>
        <button name='submitBtn' disabled={disabled} onClick={onSubmit}>Submit</button>
        
    </StyledForm>
)
}

export default Form;