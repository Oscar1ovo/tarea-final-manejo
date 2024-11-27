const products = [
    // Productos de Laptops Gaming
    { 
        name: 'Laptop Gaming ROG', 
        category: 'Laptops Gaming', 
        price: 1500, 
        description: 'Laptop potente con RTX 3060.', 
        img: 'https://m.media-amazon.com/images/I/61KlI5VaXcS.__AC_SY300_SX300_QL70_FMwebp_.jpg'
    },
    { 
        name: 'Laptop Alienware', 
        category: 'Laptops Gaming', 
        price: 2000, 
        description: 'Alienware con diseño exclusivo.', 
        img: 'https://m.media-amazon.com/images/I/71ixrysoD1L.__AC_SX300_SY300_QL70_FMwebp_.jpg' 
    },
    { 
        name: 'Laptop Predator', 
        category: 'Laptops Gaming', 
        price: 1800, 
        description: 'Predator con procesador i7.', 
        img: 'https://m.media-amazon.com/images/I/71gqlzTfZzL._AC_UY218_.jpg' 
    },
    { 
        name: 'Laptop MSI Gaming', 
        category: 'Laptops Gaming', 
        price: 1700, 
        description: 'MSI con pantalla de 144Hz.', 
        img: 'https://m.media-amazon.com/images/I/71F-Wcriq4L._AC_UY218_.jpg' 
    },
    { 
        name: 'Laptop HP Omen', 
        category: 'Laptops Gaming', 
        price: 1600, 
        description: 'HP Omen para gaming extremo.', 
        img: 'https://m.media-amazon.com/images/I/817kBdBB0IL._AC_UY218_.jpg' 
    },

    // Productos de Libros
    { 
        name: 'Libro Digital', 
        category: 'Libros', 
        price: 25, 
        description: 'Libro interactivo sobre tecnología.', 
        img: 'https://m.media-amazon.com/images/I/91pCf+RhTyL._AC_UY218_.jpg' 
    },
    { 
        name: 'Manual Programación', 
        category: 'Libros', 
        price: 20, 
        description: 'Manual completo de programación.', 
        img: 'https://m.media-amazon.com/images/I/714MSVpkLeL._AC_UY218_.jpg' 
    },
    { 
        name: 'Cocina Creativa', 
        category: 'Libros', 
        price: 15, 
        description: 'Libro de recetas creativas.', 
        img: 'https://m.media-amazon.com/images/I/71NSgI5QxhL._AC_UY218_.jpg' 
    },
    { 
        name: 'Historia del Arte', 
        category: 'Libros', 
        price: 30, 
        description: 'Libro sobre la historia del arte.', 
        img: 'https://m.media-amazon.com/images/I/81nXooRtfbL._AC_UY218_.jpg' 
    },
    { 
        name: 'Enciclopedia Visual', 
        category: 'Libros', 
        price: 40, 
        description: 'Una enciclopedia ilustrada.', 
        img: 'https://m.media-amazon.com/images/I/910mnIpV7lL._AC_UY218_.jpg' 
    },

    // Productos de Gymnasio
    { 
        name: 'Pesas Ajustables', 
        category: 'Gymnasio', 
        price: 50, 
        description: 'Pesas ajustables para entrenamiento.', 
        img: 'https://m.media-amazon.com/images/I/71NnU+xnoQL._AC_UL320_.jpg' 
    },
    { 
        name: 'Banda Elástica', 
        category: 'Gymnasio', 
        price: 15, 
        description: 'Banda elástica de resistencia.', 
        img: 'https://m.media-amazon.com/images/I/71EmSb-wSwL._AC_UL320_.jpg' 
    },
    { 
        name: 'Rueda Abdominal', 
        category: 'Gymnasio', 
        price: 25, 
        description: 'Rueda para fortalecimiento abdominal.', 
        img: 'https://m.media-amazon.com/images/I/71WYhvuQfbL._AC_UL320_.jpg' 
    },
    { 
        name: 'Banco Multifunción', 
        category: 'Gymnasio', 
        price: 80, 
        description: 'Banco ajustable para pesas.', 
        img: 'https://m.media-amazon.com/images/I/71XKoRN8CmL._AC_UL320_.jpg' 
    },
    { 
        name: 'Guantes de Gimnasio', 
        category: 'Gymnasio', 
        price: 10, 
        description: 'Guantes para levantamiento de pesas.', 
        img: 'https://m.media-amazon.com/images/I/814vFr7nZpL._AC_UL320_.jpg' 
    },

    //Productos de hot wheels
    { 
        name: 'hot wheels pack 10', 
        category: 'hot wheels', 
        price: 13.99, 
        description: 'Hot wheels Paquete de 10 automoviles (los estitlos pueden variar)', 
        img: 'https://m.media-amazon.com/images/I/717vmR2p1OL._AC_UL320_.jpg'
    },
    { 
        name: 'Monster Trucks', 
        category: 'hot wheels', 
        price: 9.99, 
        description: 'Monster Trucks de hot wheels -Paquete surtido doble camion ', 
        img: 'https://m.media-amazon.com/images/I/81+7PhqFW-L._AC_UL320_.jpg' 
    },
    { 
        name: 'Hot Wheels pack 24', 
        category: 'hot wheels', 
        price: 62.99, 
        description: 'Hot wheels paquete de fista surtido aleatorio de 24 coches', 
        img: 'https://m.media-amazon.com/images/I/71V7XF20XZL._AC_UL320_.jpg'
    },
    { 
        name: 'Estuche Hot Wheels', 
        category: 'hot wheels', 
        price: 20.99, 
        description: 'Estuche para 100 Autos Hot Wheels, Zipbin Wheelie, sin el carro de bono.', 
        img: 'https://m.media-amazon.com/images/I/81C2UFIhrvL._AC_UL320_.jpg'
    },
    { 
        name: 'Car & mega truck', 
        category: 'hot wheels', 
        price: 10, 
        description: 'Hot Wheels Car & Mega Track Pack.', 
        img: 'https://m.media-amazon.com/images/I/819UUrdZy7L._AC_UL320_.jpg' 
    },
     //Instrumentos musicales 
     { 
        name: 'juego de bateria electronica', 
        category: 'Musica', 
        price: 189.60, 
        description: 'bateria electrica para principiantes con 150 sonidos.', 
        img: 'https://m.media-amazon.com/images/I/61rl7+9Ah3L._AC_UL320_.jpg'
    },
    { 
        name: 'Teclado electrónico', 
        category: 'Musica', 
        price: 139.99, 
        description: 'Teclado electronico RockJam de 61 teclas superkit con soporte, taburete, auriculares y fuente de alimentacion.', 
        img: 'https://m.media-amazon.com/images/I/71nSQ71Z-SL._AC_UL320_.jpg' 
    },
    { 
        name: 'Violín', 
        category: 'Musica', 
        price: 69.99, 
        description: 'Mendini 1/2 MV violin de madera maciza con estuche rigido', 
        img: 'https://m.media-amazon.com/images/I/81oOg-4lFzL._AC_UL320_.jpg',
    },
    { 
        name: 'Pyle Kit', 
        category: 'Musica', 
        price: 44.99, 
        description: 'Pyle Kit de guitarra acustica, instrumento de cuerda de acero de madera 3/4', 
        img: 'https://m.media-amazon.com/images/I/81-VRw-XYeL._AC_UL320_.jpg' 
    },
    { 
        name: 'Musfunny Pandereta', 
        category: 'Musica', 
        price: 12.79, 
        description: 'Musfunny Pandereta de doble fila de percusion de mano Pandereta de media luna.', 
        img: 'https://m.media-amazon.com/images/I/71FmRhNe2yS._AC_UL320_.jpg' 
    },
     //Celulares 
    { 
        name: 'S24 ultra', 
        category: 'Celulares', 
        price: 1024.99, 
        description: 'Samsung Telefono celular Galaxy S24 ultra, 256 GB, color gris.', 
        img: 'https://m.media-amazon.com/images/I/71WcjsOVOmL._AC_UY218_.jpg'
    },
    { 
        name: 'Iphone 15 pro max', 
        category: 'Celulares', 
        price: 1200, 
        description: 'Apple iphone 15 pro max, 256 GB, titanio azul', 
        img: 'https://m.media-amazon.com/images/I/61rDLIISfiL._AC_UY218_.jpg',
    },
    { 
        name: 'Xiaomi 14 Ultra', 
        category: 'Celulares', 
        price: 1099.99, 
        description: 'Xiaomi 14 Ultra 5G (512 GB)', 
        img: 'https://m.media-amazon.com/images/I/41Yb3ZpArjL._AC_UY218_.jpg' 
    },
    { 
        name: 'Honor magic', 
        category: 'Celulares',
        price: 849.99,
        description: 'Honor Magic6 pro Dual SIM 512 GB, 12GB RAM', 
        img: 'https://m.media-amazon.com/images/I/71So+bbhRQL._AC_UY218_.jpg' 
    },
    { 
        name: 'J7 prime', 
        category: 'Celulares', 
        price: 130, 
        description: 'Samsung Galaxy J7 2018', 
        img: 'https://m.media-amazon.com/images/I/51MHI3uaKPL._AC_UY218_.jpg' 
    }
];


let cart = [];

function displayProducts(productsToDisplay) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    productsToDisplay.forEach(product => {
        const productDiv = `
            <div class="product">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>$${product.price.toFixed(2)}</strong></p>
                <button onclick="addToCart('${product.name}', ${product.price})">Añadir al carrito</button>
            </div>
        `;
        grid.innerHTML += productDiv;
    });
}

function filterByCategory() {
    const selectedCategory = document.getElementById('category-filter').value;
    if (selectedCategory === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === selectedCategory);
        displayProducts(filteredProducts);
    }
}

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`${productName} añadido al carrito`);
    const cartIcon = document.getElementById('cart');
    cartIcon.classList.add('bounce');
    setTimeout(() => cartIcon.classList.remove('bounce'), 500);
}

function viewCart() {
    if (cart.length === 0) {
        alert('El carrito está vacío.');
        return;
    }
    let cartDetails = cart.map((item, index) => `${index + 1}. ${item.name} - $${item.price.toFixed(2)}`).join('\n');
    let total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    alert(`Carrito:\n\n${cartDetails}\n\nTotal: $${total}`);
}

// Mostrar todos los productos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});
