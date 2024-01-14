

let newProduct = []

for(let i = 0; i < products.length; i+=6){
    newProduct.push(products.slice(i, i + 6));
}

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const pagesDiv = document.getElementById('pages');
const productsDiv = document.getElementById('products');


newProduct.map((products, index) => {

    const btnElem = document.createElement('button');
    btnElem.className = 'page';
    btnElem.textContent = `${index + 1}`;

    pagesDiv.appendChild(btnElem);

    btnElem.addEventListener('click', () => {
        displayProducts(index)
    })


});


let currentIndex = 0;



function displayProducts(index){
    productsDiv.innerHTML = '';
    newProduct[index].forEach((item) => {

        // Elements For Each Product //
        const elem = {
            div: document.createElement('div'),
            img: document.createElement('img'),
            summary: document.createElement('p'),
            price: document.createElement('p'),
            addToCartBtn: document.createElement('img')
        }
        // Add Product //
        elem.addToCartBtn.src = 'assets/icons/bag-plus-fill.svg';
        elem.addToCartBtn.className = 'addToCartBtn';

        elem.addToCartBtn.addEventListener('click', () => {
            addProduct(item);
        });

        // Product Image //
        elem.div.className = 'product';
        
        // Product Image//
        elem.img.className = 'productImg';
        elem.img.src = `${item.image}`;


        // Product Summary //
        console.log(item.description.length);
        if(item.description.length > 50){
            elem.summary.textContent = `${item.description.slice(0, 50)}...`;
        }
        else {
            elem.summary.textContent = `${item.description}`;
        }
        elem.summary.className = 'productDescription';
        elem.summary.classList.add('f-1');
        elem.summary.classList.add('light');


        // Product Price //
        elem.price.textContent = `${item.price}`;
        elem.price.className = 'productPrice';
        elem.price.classList.add('bold');


        // Append The Elements To Parent Division //
        elem.div.appendChild(elem.img);
        elem.div.appendChild(elem.summary);
        elem.div.appendChild(elem.price);
        elem.div.appendChild(elem.addToCartBtn);
        productsDiv.appendChild(elem.div);
    });
}
displayProducts(currentIndex)



next.addEventListener('click', () => {
    if(currentIndex < newProduct.length - 1){
        currentIndex++;
    }
    else if (currentIndex >= newProduct.length){
        currentIndex = newProduct.length -1;
    }
    displayProducts(currentIndex)
});
prev.addEventListener('click', () => {
    if(currentIndex > 0 ){
        currentIndex--;
    }
    else if(currentIndex == 0){
        currentIndex = currentIndex;
    }
    displayProducts(currentIndex)
});

