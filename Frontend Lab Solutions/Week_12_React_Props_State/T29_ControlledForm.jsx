// Task 29: Controlled Form component using useState()
import React, { useState } from 'react';

function ControlledForm() {
    // 1. Manage form data using useState
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submittedData, setSubmittedData] = useState(null);

    // 2. Handle input changes (Controlled Input)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    // 3. Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData); // Display values below
        console.log('Form Submitted:', formData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <div style={{ marginTop: '20px', border: '1px solid green', padding: '15px' }}>
                    <h4>Submitted Values:</h4>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Message:</strong> {submittedData.message}</p>
                </div>
            )}
        </div>
    );
}

export default ControlledForm;
