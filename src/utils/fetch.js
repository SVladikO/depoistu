const getOptions = body => ({
    method: body.method || 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
})

export const fetchData = async (url, body) => {
    console.log('Request url: ', url, body);
    let response;

    try {
        response = await (body
                ? fetch(decodeURIComponent(url), getOptions(body))
                : fetch(decodeURIComponent(url))
        );
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject({status: 500, body: {errorMessage: 'Unable to make request.'}});
        })
    }

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
