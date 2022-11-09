import { navbar } from './config/navbar'
import { socialLinks } from './config/socialLinks'
import { footer } from './config/footer'
import { sidebar } from './config/sidebar'

export default {
  // title: 'VitePress',
  // description: 'Just playing around.',

  themeConfig: {
    siteTitle: 'My Custom Title',
    // siteTitle: false,

    /* 设置logo */
    logo: {
      light: {
        src: '/img/1.png'
      },
      dark: {
        src: 'https://excalidraw.com/apple-touch-icon.png'
      }
    },
    // nav
    nav: navbar,
    // sidebar
    sidebar: sidebar,
    // socialLinks
    socialLinks: socialLinks,
    // footer
    footer: footer,
  }
}