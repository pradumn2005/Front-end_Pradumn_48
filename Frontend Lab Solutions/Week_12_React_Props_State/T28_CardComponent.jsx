// Task 28: Custom Reusable Card component using props
import React from 'react';

function Card(props) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', width: '300px' }}>
            <img src={props.image} alt={props.title} style={{ width: '100%', height: 'auto' }} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button>View Details</button>
        </div>
    );
}

export default Card;

// Example usage in another file (App.jsx):
/*
<Card 
    image="https://via.placeholder.com/300x200"
    title="Product A"
    description="This is the first product." 
/>
*/
