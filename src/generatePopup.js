import closeIcon from './assets/close-icon.png';

const generatePopup = async (mealId) => {
  const fetchMeal = fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const get = await fetchMeal;
  const jsonObject = await get.json();
  const mealObj = jsonObject.meals[0];
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
  const watchYT = document.createElement('a');
  watchYT.classList.add('yt-btn');
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
  image.src = `${mealObj.strMealThumb}`;
  wrapper.append(mealName);
  mealName.innerText = `${mealObj.strMeal}`;
  wrapper.append(mealDescription);
  mealDescription.append(mealType);
  mealDescription.append(mealArea);
  mealDescription.append(mealInstructions);
  mealDescription.append(watchYT);
  mealArea.innerText = `Area : ${mealObj.strArea}`;
  mealType.innerText = `Type : ${mealObj.strCategory}`;
  // getting ingredients
  let i = 1;
  while ((mealObj[`strIngredient${i}`]) !== '') {
    mealInstructions.innerText += `${mealObj[`strMeasure${i}`]} : ${mealObj[`strIngredient${i}`]}\n`;
    i += 1;
  }
  watchYT.innerText = 'Youtube';
  watchYT.target = '_blank';
  watchYT.href = mealObj.strYoutube;

  document.querySelector('main').classList.add('effects');
  document.querySelector('header').classList.add('effects');
  document.querySelector('footer').classList.add('effects');
  document.body.style.overflow = 'hidden';
  // closing
  closeButton.addEventListener('click', () => {
    popup.remove();
    document.querySelector('main').classList.remove('effects');
    document.querySelector('header').classList.remove('effects');
    document.querySelector('footer').classList.remove('effects');
    document.body.style.overflow = 'auto';
  });
};

export default generatePopup;