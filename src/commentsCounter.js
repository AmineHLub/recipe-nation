const commentsCounter = async (mealId) => {
  try {
    const websiteID = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5OvdDl22dcA0TUpGjcko';
    const fetchComments = fetch(`${websiteID}/comments?item_id=${mealId}`);
    const getComments = await fetchComments;
    if (getComments.status > 399 && getComments.status < 600) {
      throw Error('There are no comments for this meal');
    } else {
      const commentsjson = await getComments.json();
      const commentsArr = commentsjson;
      return commentsArr;
    }
  } catch {
    const emptyArr = [];
    return emptyArr;
  }
};

export default commentsCounter;