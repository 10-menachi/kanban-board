const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'TJyGMNz4sg9mjXTgep4V';

export const createLike = async (id) => {
  const response = await fetch(`${baseURL}${appID}/likes`, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to create like');
  }
};

export const getLikes = async (postId) => {
  const response = await fetch(
    `${baseURL}${appID}/likes?item_id=item${postId}`,
  );

  if (!response.ok) {
    throw new Error('Failed to retrieve likes');
  }

  const data = await response.json();
  return data;
};