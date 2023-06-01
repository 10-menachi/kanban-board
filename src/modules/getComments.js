const getComments = async (postId) => {
  const appId = 'TJyGMNz4sg9mjXTgep4V';
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}`;
  const response = await fetch(`${url}/comments?item_id=item${postId}`);
  const data = await response.json();
  return data;
};
export default getComments;