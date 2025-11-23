// Task 17: Image Gallery using Event Delegation
document.getElementById('thumbnails').addEventListener('click', function(event) {
    if (event.target.classList.contains('thumbnail')) {
        const mainImage = document.getElementById('main-image');
        const newSrc = event.target.getAttribute('data-full-src');
        mainImage.src = newSrc;
    }
});

// Task 18: Simulate Data Fetching using setTimeout and Promises
function simulateFetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = { id: 1, status: 'success', message: 'Data loaded after 2 seconds!' };
            resolve(data);
        }, 2000); // Simulate 2 second network delay
    });
}

document.getElementById('fetch-data-btn').addEventListener('click', function() {
    const outputDiv = document.getElementById('data-output');
    outputDiv.textContent = 'Fetching data... please wait.';

    simulateFetchData()
        .then(response => {
            outputDiv.innerHTML = <strong>Status:</strong> <br><strong>Message:</strong> ;
        })
        .catch(error => {
            outputDiv.textContent = 'Error fetching data.';
            console.error(error);
        });
});
