const MENU = [
    {
        key: "insalata",
        label: "Insalata",
        items: [
            { name: "Mozzarella Burrata", desc: "Semi-soft fresh mozzarella, heirloom cherry tomatoes, basil, EVOO.", price: "$18.95" },
            { name: "Full Kale Caesar", desc: "Kale, romaine, seasoned croutons, shaved Parmesan, caesar dressing.", price: "$16.45" },
            { name: "The Beet", desc: "Mixed greens, roasted beets, goat cheese, walnuts, balsamic vinaigrette.", price: "$18.95" },
            { name: "Half The Italian", desc: "Mixed greens, heirloom cherry tomatoes, onion, cucumber, kalamata olives, balsamic.", price: "$9.45" },
            { name: "Cucumber Tomato", desc: "Cucumbers, heirloom cherry tomatoes, red onion, EVOO, touch of balsamic.", price: "$17.95" },
            { name: "Chopped Salad", desc: "Chopped iceberg, fresh mozzarella, salami, chickpeas, marinated artichokes, sun-dried tomatoes, Parmesan.", price: "$19.95" },
            { name: "Full The Italian", desc: "Mixed greens, tomatoes, onions, olives, croutons with a light Italian vinaigrette.", price: "$16.45" },
            { name: "Full The Misto", desc: "Mixed greens with tomatoes, cucumbers, onions, house-made balsamic vinaigrette.", price: "$16.45" },
            { name: "Half Kale Caesar", desc: "Chopped kale, creamy homemade dressing, shaved Asiago, pine nuts.", price: "$9.45" },
            { name: "Half The Misto", desc: "Mixed greens, pears, walnuts, goat cheese, balsamic vinaigrette.", price: "$9.45" }
        ]
    },
    {
        key: "small",
        label: "Small Plates",
        items: [
            { name: "Meatballs", desc: "Veal, pork, beef, tomato sauce, dollop of ricotta, fresh herbs, Parmesan.", price: "$18.95" },
            { name: "Traditional Pasta Fagioli", desc: "Cannellini beans, tomatoes, onions, garlic, herbs, fresh pasta, Parmesan.", price: "$7.95" },
            { name: "Italian Style Ribs", desc: "Pork ribs, tomato sauce, Parmesan.", price: "$19.95" },
            { name: "Broccoli Rabe &amp; Sausage", desc: "Mild Italian sausage, roasted garlic, EVOO.", price: "$18.95" }
        ]
    },
    {
        key: "pasta",
        label: "Pasta",
        items: [
            { name: "Lasagna", desc: "Thinly layered fresh pasta, bolognese sauce, creamy ricotta.", price: "$28.45" },
            { name: "Half Spaghetti Pomodoro", desc: "Tomato sauce, garlic, herbs, Parmesan, EVOO.", price: "$12.95" },
            { name: "Ravioli Formaggi", desc: "Ricotta, tomato sauce, herbs, Parmesan. Make it blonde with spicy vodka sauce.", price: "$23.95" },
            { name: "Cavatelli with Sunday Sauce", desc: "Pork ribs, sausage, meatball, tomato sauce, herbs.", price: "$30.95" },
            { name: "Full Spaghetti Pomodoro", desc: "Spaghetti with a classic tomato sauce and fresh basil.", price: "$22.45" },
            { name: "Cavatelli with Broccoli Rabe", desc: "Mini sausage meatballs, sautéed broccoli rabe, roasted garlic.", price: "$27.45" },
            { name: "Cavatelli Trattoria", desc: "Chicken, spinach, cherry tomatoes, roasted garlic, herbs. Make it blonde with spicy vodka sauce.", price: "$27.45" },
            { name: "Rigatoni Boscaiola", desc: "Pancetta, mushrooms, peas, vodka sauce, Parmesan.", price: "$25.95" }
        ]
    },
    {
        key: "entrees",
        label: "Entrées",
        items: [
            { name: "Chicken Marsala", desc: "Sweet Marsala wine, mixed mushrooms, mashed potatoes.", price: "$27.45" },
            { name: "Chicken Francese", desc: "Egg batter, white wine, lemon, mashed potatoes.", price: "$27.45" },
            { name: "Chicken Piccata", desc: "Capers, oven-roasted tomatoes, white wine, lemon, herbs, mashed potatoes.", price: "$27.45" },
            { name: "Chicken Sorrentino", desc: "Chicken breast, sliced eggplant, fresh mozzarella, herbs, light tomato sauce.", price: "$28.45" }
        ]
    },
    {
        key: "pizza",
        label: "Pizza",
        items: [
            { name: "Plain (10&quot; Cauliflower)", desc: "10\" cauliflower crust pizza topped with classic cheese and tomato sauce.", price: "$18.95" },
            { name: "Plain (12&quot; Round)", desc: "12\" round pizza with a dough base, pizza sauce and cheese.", price: "$17.95" },
            { name: "Plain (12&quot;×18&quot; Roman)", desc: "Roman-style pizza with a rectangular crust, topped with tomato sauce and cheese.", price: "$21.45" }
        ]
    },
    {
        key: "specialty",
        label: "Specialty Pies",
        items: [
            { name: "The Carnivore", desc: "Tomato sauce, pepperoni, sausage, meatball, bacon, fresh mozzarella.", price: "$24.95" },
            { name: "The Blondie", desc: "Spicy vodka sauce, pepperoni, fresh mozzarella, ricotta, hot honey.", price: "$23.95" },
            { name: "Kung Fu Chicken", desc: "Chicken, red onion, pineapple, fresh mozzarella, ricotta, sweet Asian BBQ.", price: "$21.45" },
            { name: "Mixed Mushroom", desc: "Variety of fresh mushrooms, goat cheese, fresh mozzarella, ricotta, Parmesan.", price: "$22.45" },
            { name: "Quattro Formaggi", desc: "Fresh mozzarella, Asiago, ricotta, Gorgonzola, pesto.", price: "$21.45" },
            { name: "The Casino", desc: "Chopped Jersey clams, bacon, onions, peppers, breadcrumbs, ricotta, fresh mozzarella.", price: "$23.95" }
        ]
    },
    {
        key: "sides",
        label: "Sides",
        items: [
            { name: "6 Piece Garlic Bread", desc: "Toasted bread with garlic butter spread.", price: "$6.00" },
            { name: "3 Piece Garlic Bread", desc: "Lightly toasted Italian bread with a garlic butter spread.", price: "$3.50" },
            { name: "Side Pomodoro 4oz", desc: "Housemade tomato sauce with fresh garlic, basil, EVOO.", price: "$2.50" },
            { name: "Mashed Potatoes", desc: "Creamy, buttery whipped potatoes, perfectly seasoned.", price: "$5.95" },
            { name: "Broccoli Rabe", desc: "Tender greens with a delightful bitterness.", price: "$7.95" },
            { name: "Sautéed Spinach", desc: "Sautéed green goodness, a flavorful leafy greens option.", price: "$6.95" },
            { name: "Parmesan Truffle Fries", desc: "Crispy fries, dusted with Parmesan cheese, drizzled with truffle oil.", price: "$7.95" },
            { name: "French Fries", desc: "Crispy golden strips of deliciousness, served hot and seasoned.", price: "$5.95" }
        ]
    },
    {
        key: "dessert",
        label: "Dessert",
        items: [
            { name: "Cheesecake", desc: "Smooth and rich, our creamy cheesecake.", price: "$11.95" },
            { name: "Chocolate Cake", desc: "Decadent chocolate delight, lavished with frosting.", price: "$11.95" },
            { name: "Tiramisu", desc: "Classic Italian dessert made with ladyfingers.", price: "$10.45" },
            { name: "Cannoli", desc: "Flaky pastry filled with a delightful creamy filling.", price: "$7.95" }
        ]
    }
];

(function renderMenu() {
    const tabsMount = document.getElementById('menu-tabs-mount');
    const gridMount = document.getElementById('menu-grid-mount');
    if (!tabsMount || !gridMount) return;

    let tabsHtml = `<span class="tab active" data-cat="all">All</span>`;
    MENU.forEach(cat => {
        tabsHtml += `<span class="tab" data-cat="${cat.key}">${cat.label}</span>`;
    });
    tabsMount.innerHTML = tabsHtml;

    let gridHtml = '';
    let num = 1;
    MENU.forEach(cat => {
        cat.items.forEach(item => {
            gridHtml += `
        <div class="slice" data-cat="${cat.key}">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="price">${item.price}</div>
        </div>`;
            num++;
        });
    });
    gridMount.innerHTML = gridHtml;

    document.querySelectorAll('.menu .tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.menu .tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const cat = tab.dataset.cat;
            document.querySelectorAll('.menu .slice').forEach(slice => {
                slice.style.display = (cat === 'all' || slice.dataset.cat === cat) ? '' : 'none';
            });
        });
    });
})();