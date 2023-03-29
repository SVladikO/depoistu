const getOptions = body => ({
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
})

export const fetchData = async (url, body) => {
    console.log('Request url: ', url, body);

    const response = body
        ? await fetch(url, getOptions(body))
        : await fetch(url);

    if (response.ok) {
        return response.json();
    }

    const message = response.status + " " + response.statusText;
    throw new Error(message)
}
