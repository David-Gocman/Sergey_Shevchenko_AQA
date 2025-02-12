function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos/4')
        .then(response => {
            return response.json();
        })
        .then(data => {
            receivedData(data);
        })
        .catch(error => {
            console.log('incorrect request or something else: ', error.message);
        });
}

function receivedData(data) {
    console.log('Received data:', data);
}
fetchData();
