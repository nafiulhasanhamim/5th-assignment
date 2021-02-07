

const getFood = () => {
    const food = document.getElementById('foodList');
    const message = document.getElementById('error');
    fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${food.value}`)
    .then (res => res.json())
    .then (data => result(data.meals))
    .catch(error => {
        message.style.display = 'block';
    })
}

const result = meals => {
    const foods = document.getElementById('food');
    meals.map(meal => {
        const createDiv = document.createElement('div');
        createDiv.className = 'mealList';
        const List = `
        <img src="${meal.strMealThumb}" onclick="Details('${meal.strMeal}')">
        <h5 onclick="Details('${meal.strMeal}')">${meal.strMeal}</h5>
        `;
        createDiv.innerHTML = List;
        foods.appendChild(createDiv);
    });
        
}

const Details = mealName => {
    fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then (res => res.json())
    .then (data =>FoodItemsDetails(data.meals[0]))
}

const FoodItemsDetails = mealData => {
    const show = document.getElementById('for-more-details');
    const infoDetailsDiv = document.createElement('div');
    infoDetailsDiv.className = 'mealDetails';
    const mealBrief = `
    <img  src="${mealData.strMealThumb}" class="">
    <h1>${mealData.strMeal}</h1>
    <h4>Ingredients</h4>
    <ul>

    <li><i class="fas fa-check-square"></i> ${ mealData.strIngredient1}</li>
    <li> <i class="fas fa-check-square"></i>${mealData.strIngredient2}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strIngredient3}</li>
    <li> <i class="fas fa-check-square"></i>${mealData.strIngredient4}</li>
    <li><i class="fas fa-check-square"></i> ${ mealData.strIngredient5}</li>
    <li> <i class="fas fa-check-square"></i>${mealData.strIngredient6}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strIngredient7}</li>
    <li> <i class="fas fa-check-square"></i>${mealData.strIngredient8}</li>
   
    </ul>
    `
    infoDetailsDiv.innerHTML = mealBrief;
    show.appendChild(infoDetailsDiv);
}