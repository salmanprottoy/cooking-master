function searchMeal(){
    const mealName = document.getElementById("meal-search-input").value;
    console.log(mealName);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then(res => res.json())
    .then(data => displayFoods(data));
}

const displayFoods = foods =>{
    console.log(foods.meals);
    const mealsDiv = document.getElementById("meals")
    if(foods.meals == null){
        mealsDiv.innerHTML = "";
    }else{
        foods.meals.forEach(meal =>{
            const mealDiv = document.createElement("div");
            const mealInfo = `
                    <div class="col">
                        <div class="card cooking-card h-100 shadow bg-white rounded border-">
                            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                            <div
                                class="card-body border-top-0 bg-white cooking-card-footer d-flex justify-content-between">
                                <p class="card-text">${meal.strMeal}</p>
                            </div>
                        </div>
                    </div>
                    `;
            mealsDiv.innerHTML = mealInfo;
            mealsDiv.appendChild(mealDiv);
        });
    }
}
