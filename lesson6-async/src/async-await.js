async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/4');
        const data = await response.json();
        receivedData(data);
    } catch (error) {
        console.log('incorrect request or something else:', error.message);
    }
}

function receivedData(data) {
    console.log('Received data:', data);
}

(async () => { await fetchData() }) ();
