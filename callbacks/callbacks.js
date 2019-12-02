// setTimeout(() => {
//   console.log('Probando terminal');
// }, 3000)

let getUserById = (id, callback) => {

  let user = {
    name: 'Cleyber',
    id
  }

  if (id !== 20 ){
    callback(`el usuario con id: ${id}, no existe`)
  } else {
    callback(null, user)
  }

}

getUserById(11, (err, user) => {
  if (err) {
    return console.log(err);
  }
  console.log('Usuario: ', user)
})
