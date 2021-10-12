const sendList = async () => {
  const fetchScores = fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
  const update = await fetchScores;
  const jsonObject = await update.json();
  const mealObj = jsonObject.meals[0];
  // console.log (mealObj.strMealThumb);
  for (let i = 0; i < 6; i++) {
    const items = document.createElement('div');
    const image = document.createElement('img');
    const heading = document.createElement('h5');
    const commentBtn = document.createElement('input');
    const lineBreak = document.createElement('br');
    const reserveBtn = document.createElement('input');
    commentBtn.type = 'button';
    commentBtn.value = 'button';
    reserveBtn.type = 'button';
    reserveBtn.value = 'Reservations';

    document.body.append(items);
    items.append(image);
    items.append(heading);
    items.append(commentBtn);
    items.append(lineBreak);
    items.append(reserveBtn);

    image.src = `${mealObj.strMealThumb}`;
    heading.innerText = `${mealObj.strMeal}`;

    items.classList.add('item');
    image.classList.add('item-image');
  }
};
export default sendList;