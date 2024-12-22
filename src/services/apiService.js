
const baseURL = "http://localhost:8080"
export const apiService = {
 getProducts :() =>{
  return fetch(`${baseURL}/items`)
 .then(data=>data.json())
},

getProductsByPlatform :(platformId) =>{
    return fetch(`${baseURL}/itemsByPlatform/${platformId}`)
   .then(data=>data.json())
  },

getProduct :async (id) =>{
    return  fetch(`${baseURL}/items/${id}`)
    .then(data=>data.json())
   },

 getPlaftorms : async () =>{
    return fetch(`${baseURL}/platforms`)
    .then(data=>data.json())
},

 getTypes : async () =>{
    return  fetch(`${baseURL}/types`)
    .then(data=>data.json())
}
}