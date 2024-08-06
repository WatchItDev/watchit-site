// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
// components
import Logo from 'src/components/logo';

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

              <Grid
                  container
                  justifyContent={{
                      xs: 'center',
                      md: 'space-between',
                  }}
              >
                  <Grid xs={8} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pb: { xs: 5, md: 0 } }}>
                      <Logo sx={{ mb: 3, mx: 'auto' }} extended={true} />
                      <Typography
                          variant="body2"
                          sx={{
                              maxWidth: 270,
                              textAlign: 'center',
                              mx: { xs: 'auto', md: 'unset' },
                              textWrap: 'balance'
                          }}
                      >
                          Whether you're a filmmaker ready to showcase your latest work or a
                          movie lover eager for new discoveries, Watchit is here for you. Join
                          our community and start exploring now!
                      </Typography>
                  </Grid>

                  <Grid xs={12} md={6}>
                      <Stack spacing={5} direction={'row'} flexWrap={{ xs: 'wrap', md: 'nowrap' }} alignItems={'flex-start'} justifyContent={'space-around'}>
                          {LINKS.map((list) => (
                              <Stack
                                  key={list.headline}
                                  spacing={2}
                                  alignItems={{ xs: 'center', md: 'flex-start' }}
                                  sx={{
                                      width: {
                                          xs: 0.4,
                                          md: 1
                                      }
                                  }}
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

              <Typography variant="body2" sx={{ mt: { xs: 5, md: 10 }, textAlign: 'center' }}>
                  © 2024. All rights reserved
              </Typography>
          </Container>
      </Box>
  );
}
