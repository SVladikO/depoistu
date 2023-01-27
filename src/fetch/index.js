import Error from "../components/Error/Error";

export const fetchData = async (url) => {
    console.log('Request url: ', url);

    const responce = await fetch(url);

    if (responce.ok) {
        return responce.json();
    }

    return <Error/>
}
