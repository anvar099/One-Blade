const products = document.querySelector(".products__row");

function createCard([
  img,
  product,
  icon1,
  icon2,
  icon3,
  title,
  currentPrice,
  oldPrice,
]) {
  let code = `
  <div class="product">
          <div class="product__img">
            <img src="${img}" loading="lazy" alt="${product}" />
          </div>
          <div class="product__select-btn">
            <img src="${icon1}" alt="" />
            <img src="${icon2}" alt="" />
            <img src="${icon3}" alt="" />
          </div>
          <h2 class="product__title">${title}</h2>
          <div class="product__price">
            <p class="product__current-price">${currentPrice}</p>
            <del class="product__old-price">${oldPrice}</del>
          </div>
          
        </div>
  `;
  products.innerHTML += code;
}

let item1 = [
  "../assets/images/plp-product.jpg",
  "brade",
  "../assets/icons/select3.svg",
  "../assets/icons/select1.svg",
  "../assets/icons/select2.svg",
  "Product Title",
  "$99.00",
  "$150.00",
];

createCard(item1)
createCard(item1)
createCard(item1)


const productsSecond = document.querySelector(".products__row-second");

function createCardSecond([
  img,
  product,
  icon1,
  icon2,
  icon3,
  title,
  currentPrice,
  oldPrice,
]) {
  let codeSecond = `
  <div class="product">
          <div class="product__img">
            <img src="${img}" loading="lazy" alt="${product}" />
          </div>
          <div class="product__select-btn">
            <img src="${icon1}" alt="" />
            <img src="${icon2}" alt="" />
            <img src="${icon3}" alt="" />
          </div>
          <h2 class="product__title">${title}</h2>
          <div class="product__price">
            <p class="product__current-price">${currentPrice}</p>
            <del class="product__old-price">${oldPrice}</del>
          </div>
          
        </div>
  `;
  productsSecond.innerHTML += codeSecond;
}



let item2 = [
  "../assets/images/plp-product.jpg",
  "brade",
  "../assets/icons/select3.svg",
  "../assets/icons/select1.svg",
  "../assets/icons/select2.svg",
  "Product Title",
  "$99.00",
  "$150.00",
];

createCardSecond(item2);
createCardSecond(item2);
createCardSecond(item2);


const productsThird = document.querySelector(".products__row-third");

function createCardThird([
  img,
  product,
  icon1,
  icon2,
  icon3,
  title,
  currentPrice,
  oldPrice,
]) {
  let codeThird = `
  <div class="product">
          <div class="product__img">
            <img src="${img}" loading="lazy" alt="${product}" />
          </div>
          <div class="product__select-btn">
            <img src="${icon1}" alt="" />
            <img src="${icon2}" alt="" />
            <img src="${icon3}" alt="" />
          </div>
          <h2 class="product__title">${title}</h2>
          <div class="product__price">
            <p class="product__current-price">${currentPrice}</p>
            <del class="product__old-price">${oldPrice}</del>
          </div>
          
        </div>
  `;
  productsThird.innerHTML += codeThird;
}

let item3 = [
  "../assets/images/plp-product.jpg",
  "brade",
  "../assets/icons/select3.svg",
  "../assets/icons/select1.svg",
  "../assets/icons/select2.svg",
  "Product Title",
  "$99.00",
  "$150.00",
];

createCardThird(item3);
createCardThird(item3);
createCardThird(item3);
createCardThird(item3);
createCardThird(item3);
createCardThird(item3);