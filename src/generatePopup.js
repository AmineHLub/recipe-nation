import closeIcon from './assets/close-icon.png';

const generatePopup = () => {
  const fetchData = async () => {
    const fetchMeal = fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
    const get = await fetchMeal;
    const jsonObject = await get.json();
    const mealObj = jsonObject.meals[0];
    return mealObj;
  };
  fetchData().then((res) => {
    const popup = document.createElement('div');
    const closeButton = document.createElement('a');
    const closeLogo = document.createElement('img');
    const wrapper = document.createElement('div');
    const image = document.createElement('img');
    const mealName = document.createElement('h2');
    const mealDescription = document.createElement('div');
    //
    const mealArea = document.createElement('p');
    mealArea.classList.add('meal-area');
    const mealType = document.createElement('p');
    mealType.classList.add('meal-type');
    const mealInstructions = document.createElement('p');
    mealInstructions.classList.add('meal-instructions');
    //
    popup.classList.add('popup-modal');
    wrapper.classList.add('popup-wrapper');
    image.classList.add('popup-meal-img');
    mealName.classList.add('popup-meal-name');
    mealDescription.classList.add('popup-meal-description');
    document.body.append(popup);
    popup.append(wrapper);
    popup.append(closeButton);
    closeButton.classList.add('close-btn');
    closeButton.append(closeLogo);
    closeLogo.src = closeIcon;
    wrapper.append(image);
    image.src = `${res.strMealThumb}`;
    wrapper.append(mealName);
    mealName.innerText = `${res.strMeal}`;
    wrapper.append(mealDescription);
    mealDescription.append(mealType);
    mealDescription.append(mealArea);
    mealDescription.append(mealInstructions);
    mealArea.innerText = `Area : ${res.strArea}`;
    mealType.innerText = `Type : ${res.strCategory}`;
    mealInstructions.innerText = `${res.strInstructions}`;
    document.body.classList.add('effects');
    // closing
    closeButton.addEventListener('click', () => {
      popup.remove();
      document.body.classList.remove('effects');
    });
  });
};

export default generatePopup;