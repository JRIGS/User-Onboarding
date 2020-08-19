import React from 'react';
import '../App.css';

function Form(props) {

return (

    <form>
         <label>
            <br />
            Name: <input
            type="text"
            name="name"
            />
            Email: <input
            type="email"
            name="email"
            />
            Password: <input
            type="text"
            name="password"
            />
            TOS: <input
            type="checkbox"
            name="password"
            />
        </label>
        <button>Submit</button>
    </form>
)
}

export default Form;