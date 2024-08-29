<script setup lang="ts">
import type { Message, User } from "@/types";

const me = ref<User>({
  id: "user",
  avatar: "/avatar.jpg",
  name: "You",
});
const bot = ref<User>({
  id: "assistant",
  avatar: "/bot.jpg",
  name: "Botman",
});

const users = computed(() => [me.value, bot.value]);

const messages = ref<Message[]>([]);

const usersTyping = ref<User[]>([]);

// send messages to Chat API here
// and in the empty function below

async function handleNewMessage(message: Message) {
  //making the message apear as message pubble
  messages.value.push(message);
  //getting th api response message:
  usersTyping.value.push(bot.value);
  //sending the message to the api
  const res = await $fetch("/api/ai", {
    method: "POST",
    //definig the message body:
    body: {
      messages: [
        {
          role: "user",
          content: message.text,
        },
      ],
    },
  });
  //check on the response from the api
  if (!res.choices[0].message?.content) return;

  //definig the msg to be exact to the Message interface
  const msg = {
    id: res.id,
    userId: bot.value.id,
    createdAt: new Date(),
    text: res.choices[0].message?.content,
  };
  //pushing the message:
  messages.value.push(msg);
  //the bot stopped typing:
  usersTyping.value = [];
}
</script>
<template>
  <ChatBox
    :me="me"
    :users="users"
    :messages="messages"
    @new-message="handleNewMessage"
    :usersTyping="usersTyping"
  />
</template>
