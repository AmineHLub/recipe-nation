const commentsCounter = async (mealId) => {
  const websiteID = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5OvdDl22dcA0TUpGjcko';
  const fetchComments = fetch(`${websiteID}/comments?item_id=${mealId}`);
  const getComments = await fetchComments;
  const commentsjson = await getComments.json();
  const commentsArr = commentsjson;
  return commentsArr;
};

export default commentsCounter;