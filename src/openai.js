const { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateCaption = async (occasion) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a caption generator." },
        { role: "user", content: `Write a caption for ${occasion} and include relevant emojis.` },
      ],      max_tokens: 256,
    });
    
    if (!response) {
      console.error("Error: Response is undefined.");
      return null;
    } else {
      const caption = response.choices[0].message.content.trim();
      return caption;
    }
  } catch (err) {
    console.error("Error: API request failed.");
    console.error(err);
    return null;
  }
};
