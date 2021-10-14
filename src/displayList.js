import generatePopup from './generatePopup.js';
import addLikes from './addLikes.js';
import getLikes from './getLikes.js';

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
      getLikes(res.idMeal).then((likesCount) => {
        const items = document.createElement('div');
        items.id = `meal${res.idMeal}`;
        const image = document.createElement('img');
        const heading = document.createElement('h5');
        const commentBtn = document.createElement('button');
        const likes = document.createElement('span');
        const likeBtn = document.createElement('a');
        likeBtn.setAttribute('href', '#');
        const likeIcon = document.createElement('i');
        likeIcon.classList.add('far');
        likeIcon.classList.add('fa-heart');
        likes.classList.add('likes-counter');
        likes.innerText = `${likesCount} likes\n`;
        commentBtn.innerText = 'Comments';
        document.querySelector('main').append(items);
        items.append(image);
        items.append(heading);
        likeBtn.append(likeIcon);
        items.append(likeBtn);
        items.append(likes);
        items.append(commentBtn);
        image.src = `${res.strMealThumb}`;
        heading.innerText = `${res.strMeal}`;
        commentBtn.classList.add('c-btn');
        items.classList.add('item');
        image.classList.add('item-image');
        image.addEventListener('click', generatePopup.bind(null, res.idMeal));
        likeBtn.addEventListener('click', async () => {
          addLikes(res.idMeal);
          likes.innerText = '';
          setTimeout(async () => {
            const newlikes = await getLikes(res.idMeal).then((res) => res);
            console.log(newlikes);
            likes.innerText = `${newlikes} likes \n`;
          }, 700);
        });
      });
    });
  }
};

export default sendList;