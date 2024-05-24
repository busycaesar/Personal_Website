export const getBlogs = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BLOGS_URL}/articles?username=busycaesar&per_page=5&top=30`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getBlog = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BLOGS_URL}/articles/${id}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
