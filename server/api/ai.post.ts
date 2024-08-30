import OpenAI from "openai";
import * as agents from "~/agents";

export default defineEventHandler(async (event) => {
  // Getting the API key
  const { OPENAI_API_KEY } = useRuntimeConfig();

  const body = await readBody(event);
  //getting the agent body or the customerSupportAgent
  const agent = body.agent || "customerSupportAgent";

  //check if hte agent exists int he system
  if (!Object.keys(agents).includes(agent)) {
    throw new Error(`${agent} doesn't exist`);
  }

  // Creating a new OpenAI instance
  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
  });

  // Making the API call
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: body.messages || [],
    temperature: body.temperature || 1,
    //@ts-expect-error checking above if the agent exists
    ...agents[agent](body),
  });

  return completion;
});
