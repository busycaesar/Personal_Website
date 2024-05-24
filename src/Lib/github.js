export const getRepos = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_GITHUB_URL}/users/busycaesar/repos?type=pinned`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
