const db = require("@makeitrealcamp/db-mock")


const createData = (data) => {
  const product = db.insert(data)

  return product
}

const readData = () => {
  const products = db.findAll()

  return products
}

const readDataById = (id) => {
  const product = db.findById(id)

  return product
}

const updateData = (id, data) => {
  const product = db.update({id, ...data})

  return product
}

const deleteData = (id) => {
    db.remove(id)
    
}


module.exports = {
  createData,
  readData,
  readDataById,
  updateData,
  deleteData
}