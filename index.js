async function iterateWithAsyncAwait(values) {
    for (let value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(values);
    }
}

iterateWithAsyncAwait([1,2,3,4,5]);

// Awaiting a call
async function awaitCall() {
    //simulating an Api call with a delay
    const fetchData = ()=> new Promise(resolve => setTimeout(() => resolve("API Data"), 1000));
    const data = await fetchData();
    console.log(data);
}

awaitCall();

// Handling Error With Async Await
async function awaitCallWithErorHandling() {
    const fetchData = () => new Promise((resolve, reject) => {
        setTimeout(()=> reject(new Error("API Request failed")), 1000);
    });

    try {
     const data = await fetchData();
    } catch(error) {
      console.log(`Something went wrong ${error.message} `)
    }
}

awaitCallWithErorHandling();