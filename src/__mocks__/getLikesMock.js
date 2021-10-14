const getLikesMock = async (idMeal) => {
  const websiteID = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5OvdDl22dcA0TUpGjcko';
  const fetchLikes = fetch(`${websiteID}/likes/`);
  const likesCount = await fetchLikes;
  const likesJson = await likesCount.json();
  const result = likesJson.filter((obj) => obj.item_id === idMeal);
  try {
    const { likes } = result[0];
    return likes;
  } catch {
    const likes = 0;
    return (`${likes} there is no data at ${idMeal}`);
    // return likes;
  }
};
export default getLikesMock;