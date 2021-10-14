const commentsCounterMock = async () => {
  try {
    const websiteID = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5OvdDl22dcA0TUpGjcko';
    const fetchComments = fetch(`${websiteID}/comments?item_id=${156165146}`);
    const getComments = await fetchComments;
    const commentsjson = await getComments.json();
    const commentsArr = commentsjson;
    return commentsArr.length;
  } catch (e) {
    return null;
  }
};

module.exports = commentsCounterMock;