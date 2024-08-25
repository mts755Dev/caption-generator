import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

export const generateCaption = async (occasion) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      prompt: `Write a caption for ${occasion} and include relevant emojis.`,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    if (!response) {
      console.error("Error: Response is undefined.");
      return null;
    } else {
      const caption = response.data.choices[0].text.trim();
      return caption;
    }
  } catch (err) {
    console.error("Error: API request failed.");
    console.error(err);
    return null;
  }
};
