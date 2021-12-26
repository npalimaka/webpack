function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('text').value

    console.log("::: Form Submitted :::")

    Client.getKey().then(res => postData(`https://api.meaningcloud.com/sentiment-2.1?key=${res.key}&lang=en&txt=${formText}`)
    .then(res => {
        document.getElementById('agreement').innerHTML = JSON.stringify(res.agreement);
        document.getElementById('subjectivity').innerHTML = JSON.stringify(res.subjectivity);
        document.getElementById('confidence').innerHTML = JSON.stringify(res.confidence);
        document.getElementById('irony').innerHTML = JSON.stringify(res.irony);
    }, err => alert(err)))
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

export { handleSubmit }
