import React, { useState } from "react";
import '../App.css';

function InputName({ onSubmit }) {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim()) {
            onSubmit(name);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
                style={{marginBottom: '7px'}}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default InputName;