import { botCache } from '../../mod.ts'
import { PermissionLevels } from '../types/commands.ts'
import { sendMessage } from '../../deps.ts'

const sides = ['heads', 'tails']

botCache.commands.set('flip', {
  name: 'flip',
  description: 'commands/flip:DESCRIPTION',
  permissionLevels: [PermissionLevels.MEMBER],
  cooldown: { seconds: 3 },
  execute: (message) => {
    const side = sides[Math.floor(Math.random() * sides.length)]
    return sendMessage(message.channelID, `Your coin landed on ${side}!`)
  },
})
