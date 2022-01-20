let searchBox =document.querySelector('#meal-search-input');



function searchMeal(){
    const mealName = document.getElementById("meal-search-input").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then(res => res.json())
    .then(data => displayFoods(data));
}

searchBox.addEventListener('keyup', function(e){
    if(e.key==='Enter'){
        searchMeal()
    }
})

const displayFoods = foods =>{
    const mealsDiv = document.getElementById("meals");
    mealsDiv.innerHTML = "";
    const mealIfoDiv = document.getElementById('meal-details');
    mealIfoDiv.style.display = 'none';
    if(foods.meals == null){
        mealsDiv.innerHTML = `
                                <div class="col">
                                    <p class="text-danger text-center">Can't find any food</p>
                                </div>
                            `;
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
                                        <li class="list-group-item">${meal.strMeasure7} ${meal.strIngredient7}</li>
                                        <li class="list-group-item">${meal.strMeasure8} ${meal.strIngredient8}</li>
                                        <li class="list-group-item">${meal.strMeasure9} ${meal.strIngredient9}</li>
                                        <li class="list-group-item">${meal.strMeasure10} ${meal.strIngredient10}</li>
                                    </ul>
                                    <h4><u>Instructions:</u></h4>
                                    <p>${meal.strInstructions}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
    mealIfoDiv.style.display = 'block';
}