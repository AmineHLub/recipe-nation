import generatePopup from './generatePopup.js';

const sendList = () => {
  const fetchData = async () => {
    const fetchScores = fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const update = await fetchScores;
    const jsonObject = await update.json();
    const mealObj = jsonObject.meals[0];
    return mealObj;
  };

  for (let i = 0; i < 9; i += 1) {
    fetchData().then((res) => {
      const items = document.createElement('div');
      items.id = `meal${res.idMeal}`;
      const image = document.createElement('img');
      const heading = document.createElement('h5');
      const commentBtn = document.createElement('button');
      commentBtn.innerText = 'Comments';
      document.querySelector('main').append(items);
      items.append(image);
      items.append(heading);
      items.append(commentBtn);
      image.src = `${res.strMealThumb}`;
      heading.innerText = `${res.strMeal}`;
      commentBtn.classList.add('c-btn');
      items.classList.add('item');
      image.classList.add('item-image');
      image.addEventListener('click', generatePopup.bind(null, res.idMeal));
    });
  }
};
export default sendList;