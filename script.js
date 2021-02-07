function searchMeal(){
    const mealName = document.getElementById("meal-search-input").value;
    console.log(mealName);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then(res => res.json())
    .then(data => displayFoods(data));
}

const displayFoods = foods =>{
    const mealsDiv = document.getElementById("meals")
    if(foods.meals == null){
        mealsDiv.innerHTML = "";
    }else{
        foods.meals.forEach(meal =>{
            console.log(meal);
            const mealDiv = document.createElement("div");
            const mealInfo = 
                       `<div class="col">
                            <div class="card h-100 shadow bg-white rounded border-0">
                                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-title">${meal.strMeal}</p>
                                </div>
                            </div>
                        </div>
                        `;
            mealDiv.innerHTML = mealInfo;
            mealsDiv.appendChild(mealDiv);
        });
    }
}
