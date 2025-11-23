// Task 27: Explore JSX & Babel: Dynamic Greetings
import React from 'react';

function DynamicGreeting() {
    const user = 'Pradumn';
    const today = new Date().toLocaleDateString();

    function formatGreeting(name) {
        return Welcome back, !;
    }

    return (
        <section>
            <h3>{formatGreeting(user)}</h3>
            <p>Today's date is: {today}</p>
            <p>Result of a calculation (5 + 5): {5 + 5}</p>
        </section>
    );
}

export default DynamicGreeting;
