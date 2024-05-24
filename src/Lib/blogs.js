export const getBlogs = async () => {
  const response = await fetch(
      `${process.env.NEXT_PUBLIC_BLOGS_URL}/articles?username=busycaesar`
    ),
    data = await response.json();
  return data;
};

export const getBlog = async (id) => {
  const response = await fetch(
      `${process.env.NEXT_PUBLIC_BLOGS_URL}/articles/${id}`
    ),
    data = await response.json();
  return data;
};
