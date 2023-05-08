const getOptions = body => ({
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
})

export const fetchData = async (url, body) => {
    console.log('Request url: ', url, body);

    const response = await (body
            ? fetch(decodeURIComponent(url), getOptions(body))
            : fetch(decodeURIComponent(url))
    );

    const json = await response.json();

    const {status, statusText, headers} = response;

    if (response.ok) {
        return new Promise((resolve) => {
            resolve({status, statusText, headers, body: json});
        })
    }

    return new Promise((resolve, reject) => {
        reject({status, statusText, headers, body: json});
    })
}
