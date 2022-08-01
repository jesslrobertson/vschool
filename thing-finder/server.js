const express = require("express")
const app = express()

//data
const store = [
  {
      name: "banana",
      type: "food",
      price: 200,
  },{
      name: "pants",
      type: "clothing",
      price: 2500,
  },{
      name: "basket ball",
      type: "toy",
      price: 1000,
  },{
      name: "rockem sockem robots",
      type: "toy",
      price: 1500,
  },{
      name: "shirt",
      type: "clothing",
      price: 800,
  },{
      name: "soup",
      type: "food",
      price: 300,
  },{
      name: "flour",
      type: "food",
      price: 100,
  }
]

//routes

// const paths = ["/", "/:name", '/search/type']

// app.route(paths)
//   .get((req, res) => {

//   })

app.get("/", (req, res) => {
  const results = []
  const keys = Object.keys(req.query).length
  console.log(keys)
  if (req.query.type !== undefined){
    const type = req.query.type
    const filteredItems = store.filter(items => items.type == type)
    results.push(...filteredItems)
  } 
  console.log("type")
  console.log(results)
  if (req.query.price !== undefined){
    const price = req.query.price
    const filteredItems = (results.length ? results : store).filter(items => items.price == price)
    results.length = 0
    results.push(...filteredItems)
  }
  console.log("price")
  console.log(results)
  if (req.query.maxPrice !== undefined){
    const maxPrice = req.query.maxPrice
    const lessThan = (results.length ? results : store).filter(items => items.price <= maxPrice)
    console.log("less than")
    console.log(lessThan)
    results.length = 0
    results.push(...lessThan)
  }
  console.log("maxPrice")
  console.log(results)
  if (req.query.minPrice !== undefined){
    const minPrice = req.query.minPrice
    const greaterThan = (results.length ? results : store).filter(items => items.price >= minPrice)
    results.length = 0
    results.push(...greaterThan)
  }
  console.log('minPrice')
  console.log(results)
  if (req.params.name !== undefined) {
    const name = req.query.name
    const item = store.find(item => item.name = name)
    res.send(item)
  } 
  // else {
  //   res.send(store)
  // }
  res.send(results)
  console.log(results)
  console.log(req.query)
  
})





app.listen(7001, () => {
  console.log("The server is running on port 7001")
})