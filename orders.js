const orders = [
    {
      id: 1,
      size: "Footlong",  
      bread: "Artisan Italian",
      protein: "Turkey",
      cheese: "American Cheese",
      veggies: ["Lettuce","Tomatoes","Red Onions"],
      sauces: ["Peppercorn Ranch", "Oil", "Vinegar"],
      instructions: "no mayo"
    },
    {
        id: 2,
        size: "6\"",  
        bread: "Toasted Hearty Multigrain",
        protein: "Rotisserie-Style Chicken",
        cheese: "Provolone",
        veggies: ["Lettuce","Pickles","Spinach"],
        sauces: ["Mayonnaise", "Yellow Mustard", "Vinegar", "Oil", "Vinegar"],
        instructions: "go light on mayo"
    },

]

export const getOrders = () => {
    const orderData = orders.map(order => ({...order}))
    return orderData
}

const getNewOrderId = () => {
    let highestOrderId = orders.sort((a, b) => b.id - a.id)[0].id
    return highestOrderId + 1
}

export const addNewOrder = (order) => {
    const newId = getNewOrderId()
    order.id = newId
    orders.push(order)
    orders.sort((a, b) => a.id - b.id)
    document.dispatchEvent(new CustomEvent("stateChanged"))
}