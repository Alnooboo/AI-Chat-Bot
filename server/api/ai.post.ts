import OpenAI from "openai";
import { customerSupportAgent } from "~/agents";

export default defineEventHandler(async (event) => {
  // Getting the API key
  const { OPENAI_API_KEY } = useRuntimeConfig();

  const body = await readBody(event);

  // Creating a new OpenAI instance
  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
  });

  // Making the API call
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: body.messages || [],
    temperature: body.temperature || 1,
    ...customerSupportAgent(body),
  });

  return completion;
});
