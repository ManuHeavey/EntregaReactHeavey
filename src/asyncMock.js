const products = [
    { 
        id: '1', 
        name: 'Peugeot 208 Feline', 
        price: 20000, 
        category: 'vehiculos', 
        img:'https://www.gruporobayna.com.ar/peugeot/img/info/7-208.jpeg', 
        stock: 3, 
        description:'Descripcion de 208'
    },
    { 
        id: '2', 
        name: 'Harley Davidson Softail Fat Boy 114', 
        price: 16000, 
        category: 'vehiculos', 
        img:'https://motos-b60.kxcdn.com/sites/default/files/harley-davidson-softail-fatboy-aniversario-2020.jpg', 
        stock: 5, 
        description:'Descripcion de la Harley'
    },
    { 
        id: '3', 
        name: 'Celular Samsung A23', 
        price: 7000, 
        category: 'electronica', 
        img:'https://samsungar.vtexassets.com/arquivos/ids/182066-800-auto?width=800&height=auto&aspect=true', 
        stock: 8, 
        description:'Descripcion del celu'
    },
    { 
        id: '4', 
        name: 'Galaxy Watch4', 
        price: 3000, 
        category: 'electronica', 
        img:'https://images.samsung.com/is/image/samsung/p6pim/ar/2108/gallery/ar-galaxy-watch4-sm-r860nzdaaro-481110913?$650_519_PNG$', 
        stock: 3, 
        description:'Descripcion del reloj'
    },
    { 
        id: '5', 
        name: 'Teclado Hyper X Alloy Origins', 
        price: 5000, 
        category: 'armas', 
        img:'https://www.venex.com.ar/products_images/1635193591_hx-product-keyboard-alloy-origins-60-us-1-zm-lg.jpg', 
        stock: 15, 
        description:'Descripcion del teclado'
    },
    { 
        id: '6', 
        name: 'Headset Hyper X Cloud II Wireless', 
        price: 4000, 
        category: 'armas', 
        img:'https://s3-sa-east-1.amazonaws.com/saasargentina/ZJbHIvhG0bAAvHVxkNiY/imagen', 
        stock: 13, 
        description:'Descripcion del headset'
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}


export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}