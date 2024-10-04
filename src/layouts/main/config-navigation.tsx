// routes
import { paths } from 'src/routes/paths';
// components
import { IconBrandGithub, IconCoins, IconFileDescription } from "@tabler/icons-react";

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: 'Github',
    icon: <IconBrandGithub />,
    path: paths.github,
  },
  {
    title: 'Open collective',
    icon: <IconCoins />,
    path: paths.openCollective,
  },
  // {
  //   title: 'Paper',
  //   icon: <IconFileDescription />,
  //   path: paths.paper,
  // },
];
