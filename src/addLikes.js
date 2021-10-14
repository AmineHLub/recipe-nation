const addLikes = async (idmeal) => {
  const likeObj = {
    item_id: idmeal,
  };

  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5OvdDl22dcA0TUpGjcko/likes', {
    method: 'POST',
    body: JSON.stringify(likeObj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default addLikes;