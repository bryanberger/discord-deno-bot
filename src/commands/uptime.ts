import { sendMessage } from '../../deps.ts'
import { botCache, upSince } from '../../mod.ts'
import { humanizeDelta } from '../utils/timeUtil.ts'
import { Embed } from '../utils/Embed.ts'

botCache.commands.set(`uptime`, {
  name: `uptime`,
  guildOnly: true,
  execute: async (message) => {
    const diff = Date.now() - upSince

    const embed = new Embed()
      .setTitle(`**Uptime**`)
      .setDescription(
        `
      I've been online for:
      **${humanizeDelta(diff)}** 
      `,
      )
      .setColor(`#35e07c`)

    sendMessage(message.channelID, { embed: embed })
  },
})
