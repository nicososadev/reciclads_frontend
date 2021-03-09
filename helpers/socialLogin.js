const baseUrl = 'http://192.168.1.71:8000'

export const googleApiLogin = (endpoint, data, method) => {
    
    const url = `${baseUrl}/${endpoint}`
    console.log(endpoint)
    console.log(JSON.stringify(data))
    console.log(method)
    
    if(method === 'POST'){
       
        
        return fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)

        })
    }
}