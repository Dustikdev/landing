let mock = {
    dish1: {
        imgSource: './assets/dish1.png',
        dishName: 'Amet donec.',
        price: '550 ₽',
        weight: '200 гр',
        description: `Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.`
    },
    dish2: {
        imgSource: './assets/dish2.png',
        dishName: 'Amet donec.',
        price: '550 ₽',
        weight: '500 гр',
        description: `Elit imperdiet faucibus euismod tortor risus volutpat molestie morbi sed. Porta ac eu.`
    },
    dish3: {
        imgSource: './assets/dish3.png',
        dishName: 'Amet donec.',
        price: '550 ₽',
        weight: '400 гр',
        description: `Pharetra morbi purus hendrerit risus vel consequat nunc, sed. Pharetra nulla imperdiet.`
    },
    dish4: {
        imgSource: './assets/dish4.png',
        dishName: 'Amet donec.',
        price: '550 ₽',
        weight: '200 гр',
        description: `Leo in arcu in gravida vivamus scelerisque non. Euismod nec amet amet egestas nisl iaculis.`
    },
    dish5: {
        imgSource: './assets/dish5.png',
        dishName: 'Amet donec.',
        price: '550 ₽',
        weight: '300 гр',
        description: `In mauris, elit nisl sed. Nulla accumsan vestibulum sed velit sagittis quis accumsan.`
    },
    dish6: {
        imgSource: './assets/dish6.png',
        dishName: 'Amet donec.',
        price: '550 ₽',
        weight: '500 гр',
        description: `Duis quisque tristique nulla cursus justo, etiam viverra nulla cras. Consectetur eget augue.`
    },
    dish7: {
        imgSource: './assets/dish7.png',
        dishName: 'Amet donec.',
        price: '550 ₽',
        weight: '100 гр',
        description: `In cras pharetra aliquet laoreet. Lectus nisi ante felis quam pharetra in maecenas ut felis. `
    },
    dish8: {
        imgSource: './assets/dish8.png',
        dishName: 'Amet donec.',
        price: '550 ₽',
        weight: '300 гр',
        description: `Integer dolor et sed tempus non. Adipiscing viverra in viverra quisque pretium. Commodo.`
    },
    dish9: {
        imgSource: './assets/dish1.png',
        dishName: 'Amet donec.',
        price: '550 ₽',
        weight: '200 гр',
        description: `Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.`
    },
    dish10: {
        imgSource: './assets/dish1.png',
        dishName: 'Amet donec.',
        price: '550 ₽',
        weight: '200 гр',
        description: `Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.`
    },
    dish11: {
        imgSource: './assets/dish1.png',
        dishName: 'Amet donec.',
        price: '550 ₽',
        weight: '200 гр',
        description: `Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.`
    },
    dish12: {
        imgSource: './assets/dish1.png',
        dishName: 'Amet donec.',
        price: '550 ₽',
        weight: '200 гр',
        description: `Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.`
    },
    dish13: {
        imgSource: './assets/dish1.png',
        dishName: 'Amet donec.',
        price: '550 ₽',
        weight: '200 гр',
        description: `Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.`
    },
    dish14: {
        imgSource: './assets/dish1.png',
        dishName: 'Amet donec.',
        price: '550 ₽',
        weight: '200 гр',
        description: `Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.`
    },
    dish15: {
        imgSource: './assets/dish1.png',
        dishName: 'Amet donec.',
        price: '550 ₽',
        weight: '200 гр',
        description: `Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.`
    },
    dish16: {
        imgSource: './assets/dish1.png',
        dishName: 'Amet donec.',
        price: '550 ₽',
        weight: '200 гр',
        description: `Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.`
    },
}

function createGrid(data) {
    const grid = document.querySelector('.menu-grid');
    const gridColumns = Math.ceil(Object.keys(data).length / 4)
    if (gridColumns > 2) {
        grid.style['grid-template-columns']  = `repeat(${gridColumns}, 1fr)`;
    };
    for(dish in data) {
        const markup = `<div class="menu-item">
        <img src="${data[dish].imgSource}"/>
        <div>
          <div class="item-name-price">
            <span>${data[dish].dishName}</span>
            <div class="price">${data[dish].price}</div>
          </div>
          <div class="item-weight">${data[dish].weight}</div>
          <div class="item-description">
          ${data[dish].description}
          </div>
        </div>
        </div>`
        grid.insertAdjacentHTML('beforeend', markup);
    }
}

function moveSlider() {
    let offset = 0;
    const columnCount = Math.ceil(Object.keys(mock).length / 4)
    let extremePosition = columnCount
    const menu = document.querySelector('.menu-container');
    const leftSlider = document.querySelector('.slider-left');
    const rightSlider = document.querySelector('.slider-right');
        leftSlider.addEventListener('click', () => {
            if (extremePosition > 2) {
                extremePosition -= 1
                offset -= 596;
                menu.style.left = offset + 'px';
            }
        })
        rightSlider.addEventListener('click', () => {
            if (extremePosition < columnCount) {
                extremePosition += 1
            offset += 596;
            menu.style.left = offset + 'px';
            }
        })
}

createGrid(mock)
moveSlider()