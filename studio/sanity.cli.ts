import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'x7fqxc5g',
    dataset: 'production',
  },
  // Hosted at https://sentonesdenton.sanity.studio once deployed with `npm run deploy`.
  studioHost: 'sentonesdenton',
  deployment: {
    // Pinned: the dashboard only changes when we upgrade the `sanity` package on purpose.
    autoUpdates: false,
  },
})
