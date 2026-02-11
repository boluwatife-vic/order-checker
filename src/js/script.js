const prompt = require('prompt-sync')()

const menu = [
  {name: "Coffee" , Price: 1500},
  {name: "Sandwich" , Price: 2500},
  {name: "Cake" , Price: 2000}
]

for (let i = 0; i < menu.length; i++){
  let quantity = Number(prompt(`How many ${menu[i].name} do you want?`));
  
  let totalCost = quantity * menu[i].Price;

  console.log(`Total cost for ${menu[i].name}: $${totalCost}`)
}