function toJSON(data){
    return JSON.stringify(data);
}
function toJS(data){
    return JSON.parse(data);
}

function getCart(){
    if(!localStorage.getItem("cart")){
        const cart = {
            products: []
        }
        localStorage.setItem("cart", toJSON(cart))
    }
    return localStorage.getItem("cart")
}

function addProduct(product){
    if(!localStorage.getItem("cart")){
        const cart = {
            products: []
        }
        localStorage.setItem("cart", toJSON(cart))
    }
    const cartJSON = localStorage.getItem("cart");

    const cartJS = toJS(cartJSON);
    
    cartJS.products.push(product); 
    console.log(cartJS);
 

    localStorage.setItem("cart", toJSON(cartJS));
}


function removeProduct(productID){
    try{
        const cartJSON = localStorage.getItem("cart");
        const cartJS = toJS(cartJSON);

        const productIndex = cartJS.products.findIndex(index => index.id === productID);

        if(productIndex === -1){
            console.error("Cannot Find The Product in the Cart");
        }
        else{
            cartJS.products.splice(productIndex, 1);
            console.log(productIndex);


            localStorage.setItem("cart", toJSON(cartJS));
            window.location.reload()
        }
    }
    catch(err){
        console.error(err);
    }
    
}