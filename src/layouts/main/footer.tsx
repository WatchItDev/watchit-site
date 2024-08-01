// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
// _mock
import { _socials } from 'src/_mock';
// components
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Community',
    children: [
      { name: 'Open Collective', href: paths.openCollective },
      { name: 'Development', href: paths.github },
      { name: 'Documentation', href: paths.paper },
      { name: 'Support', href: paths.discord }
    ],
  },
  {
    headline: 'Socials',
    children: [
      { name: 'Telegram', href: paths.telegram },
      { name: 'Reddit', href: paths.reddit },
      { name: 'Matrix', href: paths.matrix },
      { name: 'Fosstodon', href: paths.fosstodon },
      { name: 'Fediverse', href: paths.fediverse },
    ],
  },
  {
    headline: 'Contact',
    children: [{ name: 'info@watchit.movie', href: '#' }],
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
  return (
      <Box
          component="footer"
          sx={{
              position: 'relative',
              bgcolor: 'background.default',
          }}
      >
          <Divider />

          <Container
              sx={{
                  pt: 10,
                  pb: 5,
                  textAlign: { xs: 'center', md: 'unset' },
              }}
          >
              <Logo sx={{ mb: 3, ml: 1 }} extended={true} />

              <Grid
                  container
                  justifyContent={{
                      xs: 'center',
                      md: 'space-between',
                  }}
              >
                  <Grid xs={8} md={3}>
                      <Typography
                          variant="body2"
                          sx={{
                              maxWidth: 270,
                              mx: { xs: 'auto', md: 'unset' },
                          }}
                      >
                          Whether you're a filmmaker ready to showcase your latest work or a
                          movie lover eager for new discoveries, Watchit is here for you. Join
                          our community and start exploring now!
                      </Typography>

                      {/*<Stack*/}
                      {/*    direction="row"*/}
                      {/*    justifyContent={{ xs: 'center', md: 'flex-start' }}*/}
                      {/*    sx={{*/}
                      {/*        mt: 3,*/}
                      {/*        mb: { xs: 5, md: 0 },*/}
                      {/*    }}*/}
                      {/*>*/}
                      {/*    {_socials.map((social) => (*/}
                      {/*        <IconButton*/}
                      {/*            key={social.name}*/}
                      {/*            sx={{*/}
                      {/*                '&:hover': {*/}
                      {/*                    bgcolor: alpha(social.color, 0.08),*/}
                      {/*                },*/}
                      {/*            }}*/}
                      {/*        >*/}
                      {/*            <Iconify color={social.color} icon={social.icon} />*/}
                      {/*        </IconButton>*/}
                      {/*    ))}*/}
                      {/*</Stack>*/}
                  </Grid>

                  <Grid xs={12} md={6}>
                      <Stack spacing={5} direction={{ xs: 'column', md: 'row' }}>
                          {LINKS.map((list) => (
                              <Stack
                                  key={list.headline}
                                  spacing={2}
                                  alignItems={{ xs: 'center', md: 'flex-start' }}
                                  sx={{ width: 1 }}
                              >
                                  <Typography component="div" variant="overline">
                                      {list.headline}
                                  </Typography>

                                  {list.children.map((link) => (
                                      <Link
                                          key={link.name}
                                          component={RouterLink}
                                          href={link.href}
                                          color="inherit"
                                          variant="body2"
                                      >
                                          {link.name}
                                      </Link>
                                  ))}
                              </Stack>
                          ))}
                      </Stack>
                  </Grid>
              </Grid>

              <Typography variant="body2" sx={{ mt: 10, textAlign: 'center' }}>
                  © 2021. All rights reserved
              </Typography>
          </Container>
      </Box>
  );
}
