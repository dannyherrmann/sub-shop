import {getOrders, addNewOrder} from './orders.js'

document.getElementById("app").innerHTML = `

<h1>Welcome to Subway!</h1>

    <div>

        <h3>Build your own Sandwhich</h3>

            <div class="sandwhichForm">

                <div class="size">
                    <h4>Size:</h4>
                        <input id="sixInch" name="size" type="radio" value="6&quot;" />
                        <label for="sixInch">6"</label><br><br>
                        <input id="footLong" name="size" type="radio" value="Footlong" />
                        <label for="footLong">Footlong</label>   
                </div>

                <div class="bread">
                    <h4>Bread:</h4>
                        <input id="italian" name="bread" type="radio" value="Artisan Italian" />
                        <label for="italian">Artisan Italian</label><br><br>
                        <input id="multigrain" name="bread" type="radio" value="Hearty Multigrain" />
                        <label for="multigrain">Hearty Multigrain</label><br><br>
                        <input id="flatbread" name="bread" type="radio" value="Artisan Flatbread" />
                        <label for="flatbread">Artisan Flatbread</label>
                </div>

                <div class="protein">
                    <h4>Protein:</h4>
                        <input id="turkey" name="protein" type="radio" value="Turkey" />
                        <label for="turkey">Turkey</label><br><br>
                        <input id="ham" name="protein" type="radio" value="Ham" />
                        <label for="ham">Ham</label><br><br>
                        <input id="chicken" name="protein" type="radio" value="Chicken" />
                        <label for="chicken">Chicken</label><br><br>
                        <input id="steak" name="protein" type="radio" value="Steak" />
                        <label for="steak">Steak</label>
                </div>
                            
                <div class="cheese">
                    <h4>Cheese:</h4>
                        <label for="american">American Cheese</label>
                            <input id="american" name="cheese" type="radio" value="American Cheese">
                        <label for="pepperJack">Pepper Jack</label>
                            <input id="pepperJack" name="cheese" type="radio" value="Pepper Jack">
                        <label for="provolone">Provolone</label>
                            <input id="provolone" name="cheese" type="radio" value="Provolone">
                        <label for="montereyCheddar">Monterey Cheddar</label>
                            <input id="MontereyCheddar" name="cheese" type="radio" value="Monterey Cheddar">
                </div>

                <div class="veggies">

                    <p>Pick your veggies (Select all that apply)</p>

                    <ul>

                        <li>
                            <input id="lettuce" name="veggies" type="checkbox" value="Lettuce" />
                            <label for="lettuce">Lettuce</label>
                        </li>

                        <li>
                            <input id="spinach" name="veggies" type="checkbox" value="Spinach" />
                            <label for="spinach">Spinach</label>
                        </li>

                        <li>
                            <input id="tomatoes" name="veggies" type="checkbox" value="Tomatoes" />
                            <label for="spinach">Spinach</label>
                        </li>

                        <li>
                            <input id="cucumbers" name="veggies" type="checkbox" value="Cucumbers" />
                            <label for="cucumbers">Cucumbers</label>
                        </li>

                        <li>
                            <input id="greenPeppers" name="veggies" type="checkbox" value="Green Peppers" />
                            <label for="greenPeppers">Green Peppers</label>
                        </li>

                        <li>
                            <input id="redOnions" name="veggies" type="checkbox" value="Red Onions" />
                            <label for="redOnions">Red Onions</label>
                        </li>

                        <li>
                            <input id="pickles" name="veggies" type="checkbox" value="Pickles" />
                            <label for="pickles">Pickles</label>
                        </li>

                </div>

                <div class="sauces">

                    <p>Pick your sauces (Select all that apply)</p>

                    <ul>

                        <li>
                            <input id="oil" name="sauces" type="checkbox" value="Oil" />
                            <label for="oil">Oil</label>
                        </li>

                        <li>
                            <input id="redWineVinegar" name="sauces" type="checkbox" value="Red Wine Vinegar" />
                            <label for="redWineVinegar">Red Wine Vinegar</label>
                        </li>

                        <li>
                            <input id="mayo" name="sauces" type="checkbox" value="Mayonnaise" />
                            <label for="mayo">Mayonnaise</label>
                        </li>

                        <li>
                            <input id="yellowMustard" name="sauces" type="checkbox" value="Yellow Mustard" />
                            <label for="yellowMustard">Yellow Mustard</label>
                        </li>

                        <li>
                            <input id="peppercornRanch" name="sauces" type="checkbox" value="Peppercorn Ranch" />
                            <label for="peppercornRanch">Peppercorn Ranch</label>
                        </li>

                    </ul>

                </div>

                <div class="extras">
                    <label for="specialInstructions">Notes/Special Instructions</label>
                    <div>
                        <textarea id="specialInstructions"></textArea>
                    </div>
                </div>
                <div>
                    <button id="submitOrder" type="button">Order Sandwhich</button>
                </div>
                    

            </div>

    </div>
`

const displayOrders = () => {
    const orders = getOrders()
    let orderData = ''
    for (const order of orders) {
        orderData += 
            `<div class="orders">
                Order #${order.id}<br>
                <ul>
                    <li>Size: ${order.size}</li>
                    <li>Bread: ${order.bread}</li>
                    <li>Protein: ${order.protein}</li>
                    <li>Cheese: ${order.cheese}</li>
                    <li>Veggies: ${order.veggies}</li>
                    <li>Sauces: ${order.sauces}</li>
                    <li>Instructions: ${order.instructions}</li>
                </ul>
            </div>`
    }
    orderData += '</div>'
    document.getElementById("orders").innerHTML = orderData
};

displayOrders()

let submitButton = document.querySelector('#submitOrder')

submitButton.addEventListener("click", () => {
    let size = document.querySelector("input[name=size]:checked")?.value 
    let bread = document.querySelector("input[name=bread]:checked")?.value 
    let protein = document.querySelector("input[name=protein]:checked")?.value 
    let cheese = document.querySelector("input[name=cheese]:checked")?.value 
    let veggiesArray = []
    const veggieElements = document.querySelectorAll("input[name=veggies]:checked")
    veggieElements.forEach(veggie => {veggiesArray.push(veggie.value)})
    let saucesArray = []
    const sauceElements = document.querySelectorAll("input[name=sauces]:checked")
    sauceElements.forEach(sauce => {saucesArray.push(sauce.value)})
    let instructions = document.getElementById('specialInstructions')?.value
    let newOrder = {
        size: size,
        bread: bread,
        protein: protein,
        cheese: cheese,
        veggies: veggiesArray,
        sauces: saucesArray,
        instructions: instructions
    }
    addNewOrder(newOrder)
})

document.addEventListener("stateChanged", () => {displayOrders()})