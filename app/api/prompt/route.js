import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

export const GET = async () => {
  try {
    await connectToDB();
    const data = await Prompt.find({}).populate('creator');
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response('failed to load all prompts', { status: 500 });
  }
};
