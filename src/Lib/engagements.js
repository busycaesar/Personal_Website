const ENGAGEMENTS_URL =
  "https://raw.githubusercontent.com/busycaesar/Public_Speaking_Portfolio/refs/heads/Master/engagements.json";

export const getEngagements = async () => {
  try {
    const response = await fetch(ENGAGEMENTS_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch engagements");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
