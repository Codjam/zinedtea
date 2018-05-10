const getTeas = () => fetch ("https://desolate-inlet-42765.herokuapp.com/api/teas")
 .then (response => response.json())

const addComment = (comment) => fetch ("https://desolate-inlet-42765.herokuapp.com/api/note", {
  body:JSON.stringify(comment),
  method:"POST",
  headers:new Headers ({
    "Content-Type": "application/json"
  })
})
 .then (response => response.json())

 const getComments = () => fetch("https://desolate-inlet-42765.herokuapp.com/api/note")
  .then (response => response.json())


const updateCart =(cart) => {

  console.log("updateCart");
  return fetch("https://desolate-inlet-42765.herokuapp.com/api/cart", {
    body:JSON.stringify(cart),
    method:"PUT",
    headers:new Headers ({
      "Content-Type": "application/json"
    })
})
.then (response => response.json())

}

const getCart = () => fetch ("https://desolate-inlet-42765.herokuapp.com/api/cart")
 .then (response => response.json())


 const addUser = (user) => fetch ("https://desolate-inlet-42765.herokuapp.com/api/user", {
   body:JSON.stringify(user),
   method:"POST",
   headers:new Headers ({
     "Content-Type": "application/json"
   })
 })
  .then (response => response.json())

const getUser = () => fetch ("https://desolate-inlet-42765.herokuapp.com/api/user")
 .then (response => response.json())

export {getTeas, addComment, getComments, updateCart, getCart, addUser, getUser};
