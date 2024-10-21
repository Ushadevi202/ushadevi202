document.addEventListener(`DOMContentLoaded`, () => {
    const restaurants = [
        { 
            id: 1, 
            name: 'Italian Bistro', 
            description: 'Authentic Italian cuisine',
            menu: [
                { id: 1, name: 'Pasta Carbonara', price: 12.99, image: 'https://www.thespruceeats.com/thmb/sUSIS7lVuErRIJHonesrPRjhXQQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pasta-carbonara-recipe-5210168-hero-01-80090e56abc04ca19d88ebf7fad1d157.jpg' },
                { id: 2, name: 'Margherita Pizza', price: 10.99, image: 'https://thumbs.dreamstime.com/b/pizza-margherita-27409337.jpg' },
                { id: 3, name: 'Tiramisu', price: 5.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQXGPTb04lktwuFY6CVpvpZsO-GzBO1BsvIg&s' }
            ]
        },
        { 
            id: 2, 
            name: 'Sushi Place', 
            description: 'Fresh sushi and sashimi',
            menu: [
                { id: 1, name: 'California Roll', price: 8.99,image:'https://media.istockphoto.com/id/157609060/photo/a-plate-of-six-california-rolls.jpg?s=612x612&w=0&k=20&c=k0jWX09UU94Nn1x0xqhsSM43dmPOrnCTSm2OtelXzQA=' },
                { id: 2, name: 'Salmon Sashimi', price: 14.99,image: 'https://media.istockphoto.com/id/621899966/photo/sliced-salmon-sashimi-japanese-raw-food-delicious-menu.jpg?s=612x612&w=0&k=20&c=5ioBz7KYmcTCCr6KW1cpd2i0tPG_Q-eKMzU1BXyh_ZA='},
                { id: 3, name: 'Miso Soup', price: 3.99, image: 'https://media.istockphoto.com/id/155341533/photo/miso-soup.jpg?s=612x612&w=0&k=20&c=0614e4CQibtJ5RlwsHfdFuVPa9FS6QG38ITuBXoh4Qk=' }
            ]
        },
        { 
            id: 3, 
            name: 'Mexican Grill', 
            description: 'Delicious Mexican food',
            menu: [
                { id: 1, name: 'Tacos', price: 9.99, image: 'https://marleyspoon.com/media/recipes/89041/main_photos/large/carne-166bdf7d22dfae26f991ce285897b8d9.jpeg' },
                { id: 2, name: 'Burrito', price: 11.99, image: 'https://media.istockphoto.com/id/1313361282/photo/mexican-rice-and-chorizo-sausage-wrap.jpg?s=612x612&w=0&k=20&c=7BgOT-kuluQIlZ50l-p-DNvajA66EeB_HIUvW6O_GPM=' },
                { id: 3, name: 'Churros', price: 4.99, image: 'https://t4.ftcdn.net/jpg/01/94/33/89/360_F_194338950_QVORmwfdhWHryTBv8CK0VX2X85PgLvoc.jpg' }
            ]
        }
    ];

    //document.addEventListener('DOMContentLoaded', () => {
        const restaurantList = document.getElementById('restaurant-list');
        restaurants.forEach(restaurant => {
            const card = document.createElement('div');
            card.classList.add('restaurant-card');
            card.innerHTML = `

                <h3>${restaurant.name}</h3>
                <p>${restaurant.description}</p>
                <button onclick="viewMenu(${restaurant.id})">View Menu</button>
            `;
            restaurantList.appendChild(card);
        });
    });
    
    function viewMenu(id) {
        // Redirect to the menu page for the selected restaurant
        window.location.href = `menu.html?id=${id}`;
    }
/*function viewMenu(id) {
    const menus = [
        [
            { id: 1, name: 'Pasta Carbonara', price: 12.99, image: 'https://www.thespruceeats.com/thmb/sUSIS7lVuErRIJHonesrPRjhXQQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pasta-carbonara-recipe-5210168-hero-01-80090e56abc04ca19d88ebf7fad1d157.jpg' },
            { id: 2, name: 'Margherita Pizza', price: 10.99, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6T_i8L3hWJe8nFUfX6oJ12Qgy1aXciq8xzQ&s' },
            { id: 3, name: 'Tiramisu', price: 5.99, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQXGPTb04lktwuFY6CVpvpZsO-GzBO1BsvIg&s' }
        ],
        [
            { id: 1, name: 'California Roll', price: 8.99, image: 'https://media.istockphoto.com/id/157609060/photo/a-plate-of-six-california-rolls.jpg?s=612x612&w=0&k=20&c=k0jWX09UU94Nn1x0xqhsSM43dmPOrnCTSm2OtelXzQA=' },
            { id: 2, name: 'Salmon Sashimi', price: 14.99, image: 'https://cdn3.didevelop.com/public/cdn/533_025114abe67072171a1918f26c34fdd9.jpg' },
            { id: 3, name: 'Miso Soup', price: 3.99, image: 'https://media.istockphoto.com/id/155341533/photo/miso-soup.jpg?s=612x612&w=0&k=20&c=0614e4CQibtJ5RlwsHfdFuVPa9FS6QG38ITuBXoh4Qk=' }
        ],
        [
            { id: 1, name: 'Tacos', price: 9.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZZ2CyIz6hiwMuudloMFOPFsmKkmhqO-WJw&s' },
            { id: 2, name: 'Burrito', price: 11.99, image: 'https://media.istockphoto.com/id/1313361282/photo/mexican-rice-and-chorizo-sausage-wrap.jpg?s=612x612&w=0&k=20&c=7BgOT-kuluQIlZ50l-p-DNvajA66EeB_HIUvW6O_GPM=' },
            { id: 3, name: 'Churros', price: 4.99, image: 'https://t4.ftcdn.net/jpg/01/94/33/89/360_F_194338950_QVORmwfdhWHryTBv8CK0VX2X85PgLvoc.jpg' }
        ]
    ];

    const menu = menus[id - 1];
    localStorage.setItem('menu', JSON.stringify(menu));
    window.location.href = 'menu.html?id=' + id;
}*/
