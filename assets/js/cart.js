window.addEventListener('load', () => {
    const emptyCart = document.getElementById('empty-cart');

    const cart = getCart();
    const cartJS = toJS(cart);
    
    const products = cartJS.products;

    
    if(cart){
        products.map(product => {
            
            emptyCart.style.display = 'none';
            const productModel = new Product(
                {
                    product: product
                }
                )
                

                productModel.displayProduct()
        });
    }


});

class Product{
    constructor({product}){
        this.product = product;
        this.cart = document.getElementById('cart');

        this.div = document.createElement('div');

        this.imgDiv = document.createElement('div');
        this.img = document.createElement('img');

        this.descriptionDiv = document.createElement('div');
        this.productName = document.createElement('h3');
        this.price = document.createElement('p');
        this.button = document.createElement('button');
        this.removeBtn = document.createElement('button');

    }
    elementsClasses(){
        this.div.className = 'product';
        this.imgDiv.className = 'img-div';
        this.descriptionDiv.className = 'description';
        this.productName.className = 'ff-2 f-2 bold';
        this.price.className = 'f-2 price bold';
        this.removeBtn.className = 'remove';

    }
    elementsContent(){
        this.elementsClasses()

        this.img.src = `../../${this.product.image}`;
        this.productName.textContent = this.product.description;
        this.price.textContent = this.product.price;
        this.button.textContent = 'order now';
        this.removeBtn.textContent = 'remove';

    }
    appendProducts(){
        this.elementsContent()

        this.imgDiv.appendChild(this.img);

        this.descriptionDiv.appendChild(this.productName);
        this.descriptionDiv.appendChild(this.price);
        this.descriptionDiv.appendChild(this.button);
        this.descriptionDiv.appendChild(this.removeBtn);

        this.div.appendChild(this.imgDiv);
        this.div.appendChild(this.descriptionDiv);

        this.cart.appendChild(this.div);
    }
    remove(){
        const id = this.product.id;
        

        this.removeBtn.addEventListener('click', () => {
            removeProduct(id)
            this.displayProduct()
        });
    }
    displayProduct(){
        this.appendProducts()
        this.remove()
    }

}
