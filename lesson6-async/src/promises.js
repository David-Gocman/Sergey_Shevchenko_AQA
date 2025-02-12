fetch('https://catfact.ninja/docs/api-docs.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        receivedData(data);
    });

function receivedData(data) {
    console.log('Received Data:', data);
}
