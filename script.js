const toggleButton = document.querySelector('[data-collapse-toggle="navbar-solid-bg"]');
const navMenu = document.getElementById('navbar-solid-bg');

toggleButton.addEventListener('click', function() {
  navMenu.classList.toggle('hidden');
  const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
  toggleButton.setAttribute('aria-expanded', !isExpanded);
});

const menuItems = [
    {
        category: 'pijetfresk',
        name: 'Coca-Cola',
        image: 'https://m.media-amazon.com/images/I/61qtDO0X9GL.jpg',
        description: 'Pije Gazuese',
        price: '1.5 eur'
    },
    {
        category: 'pijetfresk',
        name: 'Fanta',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkJogpvTMUqkTcpdRmixXor8QuZoGalWcHA&s',
        description: 'Pije Gazuese',
        price: '1.5 eur'
    },
    {
        category: 'pijetfresk',
        name: 'ICE Tea',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRXyRbiFfSlD2L5cC-YESQwk6XqGtq4ycFQ&s',
        description: 'Pije Gazuese',
        price: '1.5 eur'
    },
    {
        category: 'pijetfresk',
        name: 'Orange Juice',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfcGb7liKr1lPN9OEu5QHzCuE7oI1B_QOmng&s',
        description: 'Pije Bio',
        price: '1.2 eur'
    },
    {
        category: 'desertet',
        name: 'Trileqe',
        image: 'https://i.ytimg.com/vi/A22HmfxRgik/maxresdefault.jpg',
        description: 'Embelsire',
        price: '2.5 eur'
    },
    {
        category: 'desertet',
        name: 'Torte snickers',
        image: 'https://www.homecookingadventure.com/wp-content/uploads/2022/01/snickers_mousse_cake_main.jpg',
        description: 'Embelsire',
        price: '3.5 eur'
    },
    {
        category: 'desertet',
        name: 'Cheesecake',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCMK-IaT-oxjWWP05jCuq84dBEiJdOsjOXQ&s',
        description: 'Embelsire',
        price: '4.5 eur'
    },
    {
        category: 'desertet',
        name: 'Red Velvet',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UOH3zmJME2CXJdNdXv3vGXWBCwXKRmVu-g&s',
        description: 'Embelsire',
        price: '3.5 eur'
    },
    {
        category: 'pizza',
        name: 'Pizza Proshut',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWy-34h1l8Ves-Jidn9xF1Dqx9KqCYIskl1g&s',
        description: 'Pizza',
        price: '5.5 eur'
    },
    {
        category: 'pizza',
        name: 'Pizza Margarita',
        image: 'https://media.istockphoto.com/id/1168754685/photo/pizza-margarita-with-cheese-top-view-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=psLRwd-hX9R-S_iYU-sihB4Jx2aUlUr26fkVrxGDfNg=',
        description: 'Pizza',
        price: '5.5 eur'
    },
    {
        category: 'pizza',
        name: 'Pizza Tuna',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIvz0Hakwxpm0ZvhvX4KSPzFfVAakAB6N4w&s',
        description: 'Pizza',
        price: '5.5 eur'
    },
    {
        category: 'pizza',
        name: 'Pizza Peperoni',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTedUeWfNA42ORivu3l2whWDkXNY9FiL_IIMA&s',
        description: 'Pizza',
        price: '5.5 eur'
    },
    {
        category: 'skara',
        name: 'Qebapa',
        image: 'https://i.ytimg.com/vi/3GhqXEQTozE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBr6QUVu6SvN95_rQi_KoUpbPKmPQ',
        description: 'Qebapa shtepie',
        price: '5.5 eur'
    },
    {
        category: 'skara',
        name: 'Pleskavic',
        image: 'https://sofiaadventures.com/wp-content/uploads/2021/03/shutterstock_1784945408.jpg',
        description: 'Pleskavic shtepis',
        price: '5.5 eur'
    },
    {
        category: 'skara',
        name: 'Kombinim',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgGRU_-UKnYw1MBLjceF2GxGRW4IRkAh1CoA&s',
        description: 'Kombinim i shtepie',
        price: '5.5 eur'
    },
    {
        category: 'skara',
        name: 'Biftek',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdgvdiaxc5lHmwL32g2jy3Cp3r46G4cH7ypw&s',
        description: 'Biftek i shtepis',
        price: '5.5 eur'
    }
];

function filterMenu() {
    const selectedCategory = document.getElementById('categorySelect').value;
    const menuGallery = document.getElementById('menu-gallery');

    menuGallery.innerHTML = '';

    const filteredItems = menuItems.filter(item => {
        return selectedCategory === 'all' || item.category === selectedCategory;
    });

    filteredItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');

        menuItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p><strong>${item.price}</strong></p>
        `;

        menuGallery.appendChild(menuItemDiv);
    });
}

window.onload = filterMenu;

function showReservationAlert(event) {
    event.preventDefault();
    alert("Your reservation has been sent!");
}

function showContactAlert(event) {
    event.preventDefault();
    alert("Your message has been sent!");
}
