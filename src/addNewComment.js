const addNewComment = (id) => {
  class MessageObject {
    constructor(mealId, username, message) {
      this.item_id = mealId;
      this.username = username;
      this.comment = message;
    }
  }
  const usernameInput = document.querySelector('.adding-name').value;
  const commentInput = document.querySelector('.adding-comment').value;
  const newmsg = new MessageObject(id, usernameInput, commentInput);

  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5OvdDl22dcA0TUpGjcko/comments', {
    method: 'POST',
    body: JSON.stringify(newmsg),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default addNewComment;