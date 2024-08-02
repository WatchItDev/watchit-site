// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  // {
  //   title: 'Home',
  //   icon: <Iconify icon="solar:home-2-bold-duotone" />,
  //   path: '/',
  // },
  {
    title: 'Github',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: paths.github,
  },
  {
    title: 'Open collective',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: paths.openCollective,
  },
  {
    title: 'Paper',
    icon: <Iconify icon="solar:notebook-bold-duotone" />,
    path: paths.paper,
  },
];
