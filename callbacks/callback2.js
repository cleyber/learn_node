let employes = [{
  id: 1,
  name: 'Cleyber'
},
{
  id:2,
  name: 'Dubian'
},
{
  id:3,
  name: 'Espinosa'
}]

let salaries = [{
  id:1,
  salary: 2000
},
{
  id:2,
  salary: 3000
}]


let getEmploye =  (id, callback) => {
  let employeDB = employes.find(employe => employe.id === id)

  if (!employeDB) {
    callback(`No existe el empleado con el id: ${ id }`)
  } else {
    callback(null, employeDB)
  }
}

let getSalary = (employe, callback) => {

  let salaryDb = salaries.find(salary => salary.id === employe.id)
  if (!salaryDb) {
    callback(`No se encontró un salario para el usuario ${ employe.name }`);
  }else {
    callback(null, {
      name: employe.name,
      salary: salaryDb.salary
    })
  }
}


getEmploye(3, (err, employe) => {
  if (err) {
    return console.log(err);
  }

  getSalary(employe, (err, resp) => {
    if (err) {
      return console.log(err);
    }
    console.log(`El salario para el empleado ${ resp.name } es ${ resp.salary }`);

  })

})
