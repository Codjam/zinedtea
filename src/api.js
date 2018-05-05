const getTeas = () => fetch ("https://desolate-inlet-42765.herokuapp.com/api/teas")
 .then (response => response.json())

const addComment = (comment) =>
fetch ("https://desolate-inlet-42765.herokuapp.com/api/note", {
  body:JSON.stringify(comment),
  method:"POST",
  headers:new Headers ({
    "Content-Type": "application/json"
  })

})

 .then (response => response.json())

 const getComments = () => fetch ("https://desolate-inlet-42765.herokuapp.com/api/note")
  .then (response => response.json())

  export {getTeas, addComment, getComments};

  // const buyTeas = () =>
  // fetch("https://desolate-inlet-42765.herokuapp.com/api/teas",{
  //
  //
  // })
