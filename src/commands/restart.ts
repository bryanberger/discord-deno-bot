import { botCache } from '../../mod.ts'
import { PermissionLevels } from '../types/commands.ts'
import { sendMessage } from '../../deps.ts'

botCache.commands.set('restart', {
  name: 'restart',
  description: 'commands/restart:DESCRIPTION',
  permissionLevels: [PermissionLevels.BOT_OWNER],
  cooldown: { seconds: 5 },
  execute: async (message) => {
    await sendMessage(message.channelID, 'Restarting...')
    Deno.exit()
  },
})
