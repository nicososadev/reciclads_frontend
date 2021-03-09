const baseUrl = 'http://192.168.1.71:8000/api'

export const apiFetch = (endpoint, data, method) => {
    
    const url = `${baseUrl}/${endpoint}`
    
    if(method === 'GET'){
        return fetch(url)
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'aplication/json'
            },
            body: JSON.stringify(data)
            
        })
    }
}
