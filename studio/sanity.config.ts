import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'Sent Ones Denton',

  projectId: 'x7fqxc5g',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    // Query playground for developers; hidden from editors by Sanity's role permissions in practice.
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    // Keep the "Create new" menu to the things editors actually add.
    newDocumentOptions: (prev) => prev.filter((item) => ['event', 'rhythm', 'post', 'author'].includes(item.templateId)),
  },
})
