const url = 'https://api.adviceslip.com/advice';

export const getAdvice = async () => {
    const data = await fetch(url, { method: 'GET' });
    return await data.json()
}

