function searchMeal(){
    const mealName = document.getElementById("meal-search-input").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then(res => res.json())
    .then(data => displayFoods(data));
}

const displayFoods = foods =>{
    const mealsDiv = document.getElementById("meals")
    const mealIfoDiv = document.getElementById('meal-details');
    mealIfoDiv.style.display = 'none';
    if(foods.meals == null){
        mealsDiv.innerHTML = "";
    }else{
        foods.meals.forEach(meal =>{
            const mealDiv = document.createElement("div");
            const mealInfo = 
                       `<div class="col">
                            <div class="card h-100 shadow bg-white rounded border-0" onclick="displayMealDetails('${meal.idMeal}')">
                                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h4 class="card-title text-center">${meal.strMeal}</h4>
                                </div>
                            </div>
                        </div>
                        `;
            mealDiv.innerHTML = mealInfo;
            mealsDiv.appendChild(mealDiv);
        });
    }
}

const displayMealDetails = id =>{
    const url =  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderMealInfo(data.meals[0]));
}

const renderMealInfo = meal =>{
    console.log(meal);
    const mealIfoDiv = document.getElementById('meal-details');
    mealIfoDiv.innerHTML =
                    `<div class="row row-cols-2 row-cols-md-9 g-4 justify-content-center">
                        <div class="col">
                            <div class="card h-100 shadow bg-white rounded border-0">
                                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h2 class="card-title font-weight-bold text-center">${meal.strMeal}</h2>
                                    <h4><u>Ingredients:</u></h4>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">${meal.strMeasure1} ${meal.strIngredient1}</li>
                                        <li class="list-group-item">${meal.strMeasure2} ${meal.strIngredient2}</li>
                                        <li class="list-group-item">${meal.strMeasure3} ${meal.strIngredient3}</li>
                                        <li class="list-group-item">${meal.strMeasure4} ${meal.strIngredient4}</li>
                                        <li class="list-group-item">${meal.strMeasure5} ${meal.strIngredient5}</li>
                                        <li class="list-group-item">${meal.strMeasure6} ${meal.strIngredient6}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
    mealIfoDiv.style.display = 'block';
}