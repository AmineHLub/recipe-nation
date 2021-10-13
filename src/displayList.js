import generatePopup from './generatePopup.js';

const sendList = () => {
  const fetchData = async () => {
    const fetchScores = fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const update = await fetchScores;
    const jsonObject = await update.json();
    const mealObj = jsonObject.meals[0];
    return mealObj;
  };
  const websiteID = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5OvdDl22dcA0TUpGjcko';
  const getLikes = async () => {
    const fetchLikes = fetch(`${websiteID}/likes/`);
    const likesCount = await fetchLikes;
    const likesJson = await likesCount.json();
    const { likes } = likesJson[0];
    return likes;
  };

  //       likes.innerText = `likes : ${getLikes().then((res) => res)}`;
  for (let i = 0; i < 9; i += 1) {
    fetchData().then((res) => {
      getLikes().then((likesCount) => {
        const items = document.createElement('div');
        items.id = `meal${res.idMeal}`;
        const image = document.createElement('img');
        const heading = document.createElement('h5');
        const commentBtn = document.createElement('button');
        const likes = document.createElement('span');
        const likeLink = document.createElement('a');
        const likebtn = document.createElement('i');
        likebtn.classList.add('far');
        likebtn.classList.add('fa-heart');
        likes.classList.add('likes-counter');
        likes.innerText = `likes : ${likesCount}\n`;
        commentBtn.innerText = 'Comments';
        document.querySelector('main').append(items);
        items.append(image);
        items.append(heading);
        // likeLink.append(likebtn);
        items.append(likebtn);
        items.append(likes);
        items.append(commentBtn);
        image.src = `${res.strMealThumb}`;
        heading.innerText = `${res.strMeal}`;
        commentBtn.classList.add('c-btn');
        items.classList.add('item');
        image.classList.add('item-image');
        image.addEventListener('click', generatePopup.bind(null, res.idMeal));
      });
    });
  }
};

export default sendList;