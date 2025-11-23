// Task 24: University Search API using fetch
document.getElementById('search-btn').addEventListener('click', fetchUniversities);

async function fetchUniversities() {
    const country = document.getElementById('country-input').value.trim();
    const list = document.getElementById('university-list');
    
    if (country === "") {
        alert("Please enter a country name.");
        return;
    }

    list.innerHTML = '<li>Loading universities...</li>';
    const apiUrl = http://universities.hipolabs.com/search?country=;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(HTTP error! status: );
        }
        const data = await response.json();
        
        list.innerHTML = ''; // Clear loading message

        if (data.length === 0) {
            list.innerHTML = '<li>No universities found for this country.</li>';
            return;
        }

        data.slice(0, 10).forEach(uni => { // Display first 10 for brevity
            const listItem = document.createElement('li');
            const website = uni.web_pages[0] || 'N/A';
            const state = uni['state-province'] || 'N/A';

            listItem.innerHTML = 
                <strong></strong><br>
                State/Province: <br>
                Website: <a href="" target="_blank"></a>
            ;
            list.appendChild(listItem);
        });

    } catch (error) {
        list.innerHTML = <li>Error: Failed to fetch data. </li>;
        console.error("Fetch Error:", error);
    }
}
