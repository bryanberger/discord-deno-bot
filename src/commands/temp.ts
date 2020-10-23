import { sendMessage } from '../../deps.ts'
import { botCache } from '../../mod.ts'
import { sendResponse } from '../utils/helpers.ts'
import { convert, tempSuffixes } from '../utils/temperature.ts'

botCache.commands.set(`temp`, {
  name: `temp`,
  arguments: [
    {
      name: 'degrees',
      type: 'string',
      lowercase: true,
      required: true,
      missing: (message) => {
        sendResponse(
          message,
          `please provide a temperature to convert, such as: 32f or 0c`,
        )
      },
    },
  ],
  execute: async (message, args: TempArgs) => {
    if (!args.degrees) {
      return sendMessage(message.channelID, `No temperature provided.`)
    }

    const suffix = args.degrees[args.degrees.length - 1]
    const degrees = Number(args.degrees.split(suffix)[0])

    if (isNaN(degrees) || tempSuffixes.indexOf(suffix) < 0) {
      return sendMessage(
        message.channelID,
        `Unknown temperature format, use ${tempSuffixes.join(' or ')}.`,
      )
    }

    const convertedTemp = convert(degrees, suffix)

    sendMessage(message.channelID, convertedTemp)
  },
})

interface TempArgs {
  degrees?: string
}
