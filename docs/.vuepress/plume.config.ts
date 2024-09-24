import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',
  // your git repo url
  docsRepo: '',
  docsDir: 'docs',

  appearance: true,

  social: [
    { icon: 'github', link: 'https://github.com/MegaFatty' },
  ],

  locales: {
    '/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'Chris Liu',
        // description: '',
        circle: true,
        location: 'Toronto, CA',
        organization: 'Growup Internet Ltd.',
      },

      navbar: enNavbar,
      notes: enNotes,
    },
    '/zh/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: '刘子龙',
        description: '',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: zhNavbar,
      notes: zhNotes,
    },
  },
})
