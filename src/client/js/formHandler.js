function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    console.log("::: Form Submitted :::")

    getKey().then(res => postData(`https://api.meaningcloud.com/sentiment-2.1?key=${res.key}&lang=en&txt=${formText}`)
    .then(res => document.getElementById('results').innerHTML = JSON.stringify(res), err => alert(err)))
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}

const postData = async (url = '', data = {}) => {
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    };
    try {
        const res = await fetch(`${url}`, settings);
        return await res.json();
    } catch (error) {
        const message = error ? error : '';
        return alert(`Problem with POST request! ${message}`);
    }
}

const getKey = async () => {
    const req = await fetch('http://localhost:8081/key');
    try {
        return await req.json();
    } catch (error) {
        const message = error ? error : '';
        alert(`Problem with GET request! ${message}`);
    }
}

export { handleSubmit }
