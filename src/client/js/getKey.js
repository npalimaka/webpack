const getKey = async () => {
    const req = await fetch('http://localhost:8081/key');
    try {
        return await req.json();
    } catch (error) {
        const message = error ? error : '';
        alert(`Problem with GET request! ${message}`);
    }
}

export { getKey }
