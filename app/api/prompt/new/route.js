import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

export const POST = async (request) => {
  const { prompt, userId, tag } = await request.json();

  try {
    await connectToDB();
    const newPrompt = Prompt({ creator: userId, prompt, tag });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (eror) {
    console.log(eror);
    return new Response('not able to upload data', { status: 500 });
  }
};
