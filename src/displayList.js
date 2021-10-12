const sendList = () => {
  const fetchData = async () => {
    const fetchScores = fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const update = await fetchScores;
    const jsonObject = await update.json();
    const mealObj = jsonObject.meals[0];
    return mealObj;
  };

  for (let i = 0; i < 6; i += 1) {
    fetchData().then((res) => {
      const items = document.createElement('div');
      items.id = `meal${res.idMeal}`;
      const image = document.createElement('img');
      const heading = document.createElement('h5');
      const commentBtn = document.createElement('input');
      const lineBreak = document.createElement('br');
      const reserveBtn = document.createElement('input');
      commentBtn.type = 'button';
      commentBtn.value = 'Comments';
      reserveBtn.type = 'button';
      reserveBtn.value = 'Reservations';

      document.body.append(items);
      items.append(image);
      items.append(heading);
      items.append(commentBtn);
      items.append(lineBreak);
      items.append(reserveBtn);

      image.src = `${res.strMealThumb}`;
      heading.innerText = `${res.strMeal}`;

      commentBtn.classList.add('c-btn');
      reserveBtn.classList.add('r-btn');
      items.classList.add('item');
      image.classList.add('item-image');
    });
  }
};
export default sendList;