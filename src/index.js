import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import readline from "readline";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generateCaption = async (occasion) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Write a caption for ${occasion} and include relevant emojis.`,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    if (!response) {
      console.error("Error: Response is undefined.");
    } else {
      const caption = response.data.choices[0].text.trim();
      rl.question(`Caption: ${caption}.\nDid you like it? (yes/no) `, (answer) => {
        if (answer.toLowerCase() === "yes") {
          console.log("Great! Enjoy your caption.");
          rl.close();
        } else {
          generateCaption(occasion);
        }
      });
    }
  } catch (err) {
    console.error("Error: API request failed.");
    console.error(err);
  }
};

rl.question("What is the occasion or mode you want to get a caption for? ", (occasion) => {
  generateCaption(occasion);
});
