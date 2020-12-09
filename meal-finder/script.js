//Selectors
const search = document.getElementById("search");
const submit = document.getElementById("submit");
const randomMealBtn = document.getElementById("randomMeal");
const resultHeading = document.getElementById("resultHeading");
const mealContainer = document.getElementById("mealContainer");
const singleMeal = document.getElementById("singleMeal");
const form = document.querySelector("form");

// functions

// search  meal and fetch from API
async function searchMeal(e) {
    e.preventDefault();

    //get search term
    const searchValue = search.value.trim();
    if (searchValue) {
        const response = await fetch(`
        https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
        const data = await response.json();
        resultHeading.innerHTML = `<h2>Search results for ${searchValue}</h2>`;
        mealContainer.innerHTML = " ";
        if (data.meals === null) {
            resultHeading.innerHTML = `<h2>No meal found. Please search something else</h2>`;
        } else {
            mealContainer.innerHTML = data.meals
                .map(
                    (meal) =>
                        `<div class="meal">
                            <img src="${meal.strMealThumb}" alt="">
                            <div class="meal-info" data-mealId=${meal.idMeal}>
                                <h3>${meal.strMeal}</h3>
                            </div>
                        </div>`
                )
                .join("");
        }
        // clear search value
        search.value = " ";
    } else {
        alert("Enter a search value");
    }
}

// event listeners
submit.addEventListener("click", searchMeal);
form.addEventListener("submit", searchMeal);
