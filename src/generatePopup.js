import closeIcon from './assets/close-icon.png';

const generatePopup = () => {
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
  image.src = 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg';
  wrapper.append(mealName);
  mealName.innerText = 'Mealname';
  wrapper.append(mealDescription);
  mealDescription.append(mealType);
  mealDescription.append(mealArea);
  mealDescription.append(mealInstructions);
  mealArea.innerText = 'Area : Turkey';
  mealType.innerText = 'Type : Main';
  mealInstructions.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi aliquid, perferendis quibusdam dolorum at, possimus asperiores cupiditate debitis quidem'
  + 'modi excepturi quasi qui. Itaque beatae quod rem blanditiis voluptatibus.';
  document.body.classList.add('effects');
  // closing
  closeButton.addEventListener('click', () => {
    popup.remove();
    document.body.classList.remove('effects');
  });
};

export default generatePopup;