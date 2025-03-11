const generateResponse = async (query) => {
  try {
    console.log(query);

    let result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/prompt/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: query }),
    });

    result = await result.json();

    if (!result.success) throw new Error(result.message);

    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
    return "Error while generating the response.";
  }
};

export default generateResponse;
