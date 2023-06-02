const postComment = async (postId, name, userComment) => {
  const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
  const item = {
    item_id: `item${postId}`,
    username: name,
    comment: userComment,
  };

  const response = await fetch(`${baseURL}/apps/TJyGMNz4sg9mjXTgep4V/comments/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });

  return response;
};

export default postComment;
