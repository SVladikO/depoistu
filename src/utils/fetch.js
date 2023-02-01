export const fetchData = async (url, body) => {
    console.log('Request url: ', url, body);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }

    const response = body
        ? await fetch(url, options)
        : await fetch(url);

    if (response.ok) {
        return response.json();
    }

    throw new Error('Error')
}
