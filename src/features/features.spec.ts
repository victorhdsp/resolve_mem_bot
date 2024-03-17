// Esse documento deve fazer a conexão entre as outras funcionalidades do projeto

import getRandomMessage from './getRandomMessage'
import sendMessage from './sendMessage'
import getChatIdWithUser from './getChatIdWithUser'

import { Message } from 'grammy/types'

const messageMockup: Message = {
  message_id: 68,
  from: {
    id: 6325676650,
    is_bot: false,
    first_name: 'Victor Hugo',
    language_code: 'pt-br'
  },
  chat: {
    id: -4199884334,
    title: 'Testes Resolve Mem Bot',
    type: 'group'
  },
  date: 1710647916,
  text: '/hello',
  entities: [ { offset: 0, length: 6, type: 'bot_command' } ]
}

describe('Integrate all functions', () => {
  it ('get chatId with user --> chatId is valid', () => {
    const chatIdTest = process.env.CHAT_ID_TEST
    const chatId = getChatIdWithUser(messageMockup)

    expect(chatId).toBe(chatIdTest)
  })

  it ('select random message in data -->  random text in data', () => {
    const data = ['message 1', 'message 2', 'message 3']
    const receivedMessage = getRandomMessage(data)

    expect(data).toContain(receivedMessage)
  })

  it ('send message to user --> user receive one message', async () => {})

  it ('save message in database --> new message in database', () => {})
  it ('delete message after 1 second --> message deleted', () => {})
  it ('send a message to user in 2 second --> user receive one message', () => {})
  
  it ('alert to user if he not send a message in 1 second --> user receive one message', () => {})
  
  it ('receive a voice message by user --> has one .OGG archive in storage', () => {})
  it ('transcription of voice message --> has one transcription in database', () => {})
  it ('clear the storage --> storage is empty', () => {})
  it ('validate the transcription --> transcription is correct', () => {})

  it ('create a report --> has one report in database', () => {})
})