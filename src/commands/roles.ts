import { PermissionLevels } from '../types/commands.ts'
import { sendMessage } from '../../deps.ts'
import { botCache } from '../../mod.ts'

botCache.commands.set(`roles`, {
  name: `roles`,
  guildOnly: true,
  permissionLevels: [PermissionLevels.MODERATOR, PermissionLevels.ADMIN],
  execute: async (message, _args, guild) => {
    if (!guild) return

    const listroles = [...guild.roles.values()]
    const allRoles = listroles.sort((a, b) => b.position - a.position)

    let response = ``
    for (const role of allRoles) {
      const allRoles = `${role.mention}  -> **${role.id}**\n`
      if (response.length + allRoles.length >= 2000) {
        sendMessage(message.channelID, {
          content: response,
          mentions: { parse: [] },
        })
        response = ``
      }
      response += allRoles
    }
    sendMessage(message.channelID, {
      content: response,
      mentions: { parse: [] },
    })
  },
})
