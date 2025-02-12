async function getData() {
    const response = await fetch('https://catfact.ninja/docs/api-docs.json');
    const data = await response.json();
    receivedData(data);
}

function receivedData(data) {
    console.log('Received Data:', data);
}

getData();
