import React, { useState } from 'react';
import '../styles.css';

const ItemListManager = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div className="container">
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Add a new item" 
            />
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemListManager;