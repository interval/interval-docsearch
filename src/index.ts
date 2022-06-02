import Interval from '@interval/sdk'
import 'dotenv/config'

import util from 'node:util'
import child_process from 'node:child_process'

const exec = util.promisify(child_process.exec)

const interval = new Interval({
  apiKey: process.env.INTERVAL_KEY,
  actions: {
    docsearch: async (_, ctx) => {
      await ctx.loading.start({
        label: 'Scraping...',
        description: 'View Logs for scraper output',
      })

      const { stdout, stderr } = await exec('./scrape.sh')

      if (stderr.trim()) {
        for (const line of stderr.split('\n')) {
          ctx.log('[stderr]:', line)
        }
      }

      if (stdout.trim()) {
        for (const line of stdout.split('\n')) {
          ctx.log(line)
        }
      }
    },
  },
})

interval.listen()
