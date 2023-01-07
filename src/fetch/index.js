

export const fetchData = async (url) => {
    console.log({url})
        const responce = await fetch(url);

        if (responce.ok) {
            return responce.json();
        }

        throw new Error('Error')
    }
