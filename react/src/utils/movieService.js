import client from './client';

const eventListFields = `
  title,
  'actor': actor -> name
`;

export const getMovie = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${eventListFields}}`);
  return data;
};
