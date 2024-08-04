import { m } from 'framer-motion';
// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// theme
import { bgGradient } from 'src/theme/css';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';
import Typography from "@mui/material/Typography";
import {IconBrandDiscordFilled} from "@tabler/icons-react";

// ----------------------------------------------------------------------

export default function HomeAdvertisement() {
  const theme = useTheme();

  const renderDescription = (
      <Box
          sx={{
              textAlign: {
                  xs: 'center',
                  md: 'left',
              },
              mb: {
                  xs: 2,
                  md: 5
              },
              p: {
                  xs: 1,
                  md: 0
              }
          }}
      >
          <Box
              component={m.div}
              variants={varFade().inDown}
              sx={{color: 'common.white', mb: 2, typography: { xs: 'h3', md: 'h2' }}}
          >
              Join the Watchit
              <br/> Community on Discord
          </Box>
          <m.div variants={varFade().inRight}>
              <Typography
                  sx={{
                      color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                      mb: 3,
                      width: { xs: '100%', md: '85%' }
                  }}
              >
                  Experience the future of independent cinema with the Watchit community on Discord.
                  Connect with filmmakers, discuss your favorite films, participate in events, and
                  stay updated with the latest news and releases. Dive into engaging discussions,
                  get exclusive updates, and become part of our vibrant community. Click the button
                  below to join our Discord server now.
              </Typography>
          </m.div>

          <Stack
              direction={'row'}
              justifyContent={{xs: 'center', md: 'flex-start'}}
              spacing={2}
          >
              <m.div variants={varFade().inRight}>
                  <Button
                      color="inherit"
                      size="large"
                      variant="contained"
                      target="_blank"
                      rel="noopener"
                      startIcon={<IconBrandDiscordFilled />}
                      href={paths.discord}
                      sx={{
                          color: 'grey.800',
                          bgcolor: 'common.white',
                      }}
                  >
                      Join discord
                  </Button>
              </m.div>

              <m.div variants={varFade().inRight}>
                  <Button
                      color="inherit"
                      size="large"
                      variant="outlined"
                      target="_blank"
                      rel="noopener"
                      href={paths.webapp}
                      endIcon={<Iconify icon="eva:external-link-fill" width={16} sx={{mr: 0.5}}/>}
                      sx={{
                          color: 'common.white',
                          '&:hover': {borderColor: 'currentColor'},
                      }}
                  >
                      Launch app
                  </Button>
              </m.div>
          </Stack>
      </Box>
  );

    const renderImg = (
        <Stack component={m.div} variants={varFade().inUp} alignItems="center">
            <Box
                component={m.img}
                animate={{
                    y: [-20, 0, -20],
                }}
                transition={{duration: 4, repeat: Infinity}}
                alt="rocket"
                src="/assets/images/home/rocket.webp"
                sx={{ maxWidth: { xs: 300, md: 460 } }}
            />
        </Stack>
    );

    return (
        <Container component={MotionViewport}>
            <Stack
                alignItems="center"
                direction={{ xs: 'column', md: 'row' }}
        sx={{
          ...bgGradient({
            direction: '135deg',
            startColor: theme.palette.primary.main,
            endColor: theme.palette.primary.dark,
          }),
          borderRadius: 2,
          pb: { xs: 1, md: 0 },
          mb: 7
        }}
      >
        {renderImg}

        {renderDescription}
      </Stack>
    </Container>
  );
}
