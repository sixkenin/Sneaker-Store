document.addEventListener('DOMContentLoaded', function() {
 loadProduct();
}, false);


document.getElementById("add-to-cart-btn").onclick=function()
{
    addToCart();
}




function loadProduct() {
    document.getElementById('sneaker-image').src = sneaker.image;
    document.getElementById('sneaker-brand').textContent = sneaker.brand;
    document.getElementById('sneaker-name').textContent = sneaker.name;
    document.getElementById('sneaker-description').textContent = sneaker.description;
    document.getElementById('sneaker-price').innerHTML = `<b>RON ${sneaker.price.toFixed(2)}</b>`;
}

function loadImage(photo)
{
    const image = document.getElementById("sneaker-image");
    image.src = photo;
}

function loadBrand(brand) {
    const brandElement = document.getElementById("sneaker-brand");
    brandElement.textContent = brand;
}

function loadName(name) {
    const nameElement = document.getElementById("sneaker-name");
    nameElement.textContent = name;
}

function loadDescription(description) {
    const descriptionElement = document.getElementById("sneaker-description");
    descriptionElement.textContent = description;
}

function loadPrice(price) {
    const priceElement = document.getElementById("sneaker-price");
    priceElement.innerHTML = "<b>" + price + "</b>";
}

// function createSneakerImg(){
//     let img = document.createElement('img');
//     img.src="images/amiriredma1.png";
//     img.id="sneaker-image";
//     img.alt="Sneaker Image";
//     return img;
// }

            // <div class="sneaker-info">
            //     <h2 id="sneaker-brand">-sneaker brand-</h2>
            //     <p id="sneaker-name">-sneaker model-</p>
            //     <p id="sneaker-description">
            //         -details-
            //     </p>
            //     <p id="sneaker-price"><b>RON 0.00</b></p>
            //     <label for="quantity">Quantity:</label>
            //     <input type="number" id="quantity" min="1" value="1">
            //     <button id="add-to-cart-btn">Add to Cart</button>
            //     <button id="favorite-btn">Add to Favorites</button>
            //     <label for="size">Select Size:</label>
            //     <select id="size">
            //         <option value="36">36</option>
            //         <option value="37">37</option>
            //         <option value="38">38</option>
            //         <option value="39">39</option>
            //         <option value="40">40</option>
            //         <option value="41">41</option>
            //         <option value="42">42</option>
            //         <option value="43">43</option>
            //         <option value="44">44</option>
            //         <option value="45">45</option>
            //         <option value="46">46</option>
            //     </select>
            //     <label for="quantity">Quantity:</label>