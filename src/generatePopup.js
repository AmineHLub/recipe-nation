import closeIcon from './assets/close-icon.png';

// eslint-disable-next-line no-unused-vars
class MessageObject {
  constructor(mealId, username, message) {
    this.item_id = mealId;
    this.username = username;
    this.comment = message;
  }
}

const websiteID = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5OvdDl22dcA0TUpGjcko';

const generatePopup = async (mealId) => {
  // first API mealdb
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
  const mealArea = document.createElement('p');
  mealArea.classList.add('meal-area');
  const mealType = document.createElement('p');
  mealType.classList.add('meal-type');
  const mealInstructions = document.createElement('p');
  mealInstructions.classList.add('meal-instructions');
  const watchYT = document.createElement('a');
  watchYT.classList.add('yt-btn');
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
  // comments
  // Second API intervention
  const fetchComments = fetch(`${websiteID}/comments?item_id=${24}`);
  const getComments = await fetchComments;
  const commentsjson = await getComments.json();
  const commentsArr = commentsjson;
  // creation
  const commentsWrapper = document.createElement('section');
  const commentsTag = document.createElement('span');
  popup.append(commentsWrapper);
  commentsWrapper.classList.add('comment-section');
  commentsWrapper.append(commentsTag);
  commentsTag.classList.add('comment-span');
  commentsTag.innerText = `Comments (${commentsArr.length})`;
  for (let i = 0; i < commentsArr.length; i += 1) {
    const comments = document.createElement('ul');
    comments.classList.add('comments');
    commentsWrapper.append(comments);
    const date = document.createElement('li');
    comments.append(date);
    date.innerText = `${commentsArr[i].creation_date} `;
    const username = document.createElement('li');
    comments.append(username);
    username.innerText = `${commentsArr[i].username} `;
    const message = document.createElement('li');
    comments.append(message);
    message.innerText = `: ${commentsArr[i].comment}`;
  }

  //
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