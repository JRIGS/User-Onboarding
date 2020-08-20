import React from 'react';
import '../App.css';

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

    <form>
        <div className="errors-container">
          <div>{formErrors.username}</div>
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
        <button disabled={disabled} onClick={onSubmit}>Submit</button>
        
    </form>
)
}

export default Form;