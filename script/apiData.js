export const getApiData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return  await response.json();
}

export const i = 0;

const b = 1;

export default b;