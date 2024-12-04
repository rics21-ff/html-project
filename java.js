// Sample recipe data
const recipes = [
    { name: "Grilled Chicken", image: "Grilled-BBQ-Chicken.jpg", link: "grilled-chicken.html" },
    { name: "Chicken Soup", image: "Chicken-Soup-6-1024x1536.webp", link: "chicken-soup.html" },
    { name: "Chicken Parmesan", image: "Chicken Parmesan - Two Peas & Their Pod.jpg", link: "chicken-parmesan.html" },
    { name: "Chicken Tacos", image: "Easy Chicken Tacos.jpg", link: "chicken-tacos.html" },
    { name: "Chicken Salad", image: "Grilled Chicken Salad Recipe.jpg", link: "chicken-salad.html" },
    { name: "Chicken Alfredo", image: "chicken-alfredo.jpg", link: "chicken-alfredo.html" },
    { name: "Buffalo Chicken Wings", image: "Crispy Baked Buffalo Chicken Wings.jpg", link: "buffalo-w ings.html" },
    { name: "Honey Garlic Chicken", image: "Honey Garlic Chicken Wings + {VIDEO}.jpg", link: "honey-garlic-chicken.html" },
    { name: "Chicken Stir Fry", image: "Chicken Stir Fry _ The Modern Proper.jpg", link: "chicken-stir-fry.html" },
    { name: "BBQ Chicken Pizza", image: "BBQ Chicken Pizza.jpg", link: "bbq-chicken-pizza.html" },
    { name: "Chicken Fajitas", image: "Sheet Pan Chicken Fajitas.jpg", link: "chicken-fajitas.html" },
    { name: "Chicken Enchiladas", image: "The Best Chicken Enchiladas Recipe.jpg", link: "chicken-enchiladas.html" },
    // Add more recipes as needed
];

// Function to filter recipes
function filterRecipes(query) {
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(query.toLowerCase()));
    displayRecipes(filteredRecipes);
}

// Function to display recipes
function displayRecipes(recipes) {
    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = ''; // Clear existing recipes
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.innerHTML = `
            <h3>${recipe.name}</h3>
            <img src="${recipe.image}" alt="${recipe.name}">
            <a href="${recipe.link}">View Recipe</a>
        `;
        recipeContainer.appendChild(recipeElement);
    });
}

// Event listener for search input
document.getElementById('search-input').addEventListener('input', (event) => {
    filterRecipes(event.target.value);
});

// Initial display of all recipes
displayRecipes(recipes);