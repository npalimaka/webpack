function validate(text) {
    if (!text || text === '') {
        alert('Field cannot be blank!')
    }
    console.log('Validating input')
}

export {validate}
