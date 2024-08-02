// utils
import { paramCase } from 'src/utils/change-case';
import { _id, _postTitles } from 'src/_mock/assets';

// ----------------------------------------------------------------------

const MOCK_ID = _id[1];

const MOCK_TITLE = _postTitles[2];

const ROOTS = {
  AUTH: '/auth',
  AUTH_DEMO: '/auth-demo',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  components: '/components',
  docs: '#',
  changelog: '#',
  zoneUI: '#',
  minimalUI: '#',
  discord: 'https://discord.gg/4vQG56NuHA',
  github: 'https://github.com/WatchitDev',
  openCollective: 'https://opencollective.com/watchit',
  paper: 'https://watchit.notion.site/WatchIT-d8a242d26292414991ed1d8fc5e918d3',
  webapp: 'https://app.watchit.movie/',
  telegram: 'https://t.me/watchitofficial',
  reddit: 'https://www.reddit.com/r/watchitprotocol/',
  matrix: 'https://matrix.to/#/#watchit:matrix.org',
  fosstodon: 'https://fosstodon.org/@watchit',
  fediverse: 'https://fediverse.tv/c/watchit/videos',
  freeUI: '#',
  figma:
    '#',
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    mail: `${ROOTS.DASHBOARD}/mail`,
    chat: `${ROOTS.DASHBOARD}/chat`,
    blank: `${ROOTS.DASHBOARD}/blank`,
    kanban: `${ROOTS.DASHBOARD}/kanban`,
    calendar: `${ROOTS.DASHBOARD}/calendar`,
    fileManager: `${ROOTS.DASHBOARD}/file-manager`,
    permission: `${ROOTS.DASHBOARD}/permission`,
    general: {
      app: `${ROOTS.DASHBOARD}/app`,
      ecommerce: `${ROOTS.DASHBOARD}/ecommerce`,
      analytics: `${ROOTS.DASHBOARD}/analytics`,
      banking: `${ROOTS.DASHBOARD}/banking`,
      booking: `${ROOTS.DASHBOARD}/booking`,
      file: `${ROOTS.DASHBOARD}/file`,
    },
  
  },
};
