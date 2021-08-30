

const fetchFromServer = (method,url,data) =>{
 return fetch(url,{
    method:method,
    headers: data ? {'Content-Type': 'application/json'} : {},
    body: JSON.stringify(data)
}).then(res=>{
    if(res.status >= 400){
        res.json().then(err=>{
            const error = new Error('Something went wrong');
            error.data = err
            throw error
        })
    }
   return res.json()
}) 
}