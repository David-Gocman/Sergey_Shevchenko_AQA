// class MyOwnError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "MyTestOwnError";
//     }
// }

async function fetchData() {
    try {
        const response = await fetch('https://dog_fact.ninja/docs/api-docs.json');
        if (!response.ok) {
            throw new Error('The First source is not exists');
        }
        const data = await response.json();
        console.log('received data from 1:', data);
    } catch {

        try {
            const response = await fetch('https://pig_fact.ninja/docs/api-docs.json');

            if (!response.ok) {
                throw new Error('The second source is not exists');
            }

            const data = await response.json();
            console.log('received data from 2:', data);
        } catch {
            throw new Error('Both resources are bad');
        }
    }
}

fetchData().catch((error) => {
    console.log('MyOwnError:', error.message);
});
