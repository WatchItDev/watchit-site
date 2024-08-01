import { m } from 'framer-motion';
// @mui
import { useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { textGradient, bgGradient } from 'src/theme/css';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';
import Stack from "@mui/material/Stack";

// ----------------------------------------------------------------------

export default function HomeForDesigner() {
  const theme = useTheme();

  const upMd = useResponsive('up', 'md');

  const renderDescription = (
      <Box sx={{textAlign: {xs: 'center', md: 'unset'}, mt: {xs: 10, md: 12}}}>
          <m.div variants={varFade().inUp}>
              <Typography component="div" variant="overline" sx={{color: 'text.disabled'}}>
                  Platforms
              </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
              <Typography
                  variant="h2"
                  sx={{
                      mt: 3,
                      mb: 1,
                      ...textGradient(
                          `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 100%`
                      ),
                  }}
              >
                  Explore our apps
              </Typography>
          </m.div>

          <m.div variants={varFade().inLeft}>
              <Typography
                  sx={{
                      maxWidth: '80%',
                      color: 'text.primary',
                      mb: 4
                  }}
              >
                  For movie fans and cinema lovers, Watchit brings you an exceptional experience
                  through our user-friendly applications. Designed with you in mind, our apps
                  enhance your digital cinema journey, providing seamless access to a diverse range
                  of films across a decentralized network.
              </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
              <Stack spacing={2} direction="row" justifyContent="flex-start">
                  {['apple', 'android', 'desktop', 'web', 'tv'].map((platform) => (
                      <m.div key={platform} variants={varFade().in}>
                          <Box
                              component="img"
                              src={`/assets/icons/platforms/ic_${platform}.svg`}
                              sx={{ width: 24, height: 24 }}
                          />
                      </m.div>
                  ))}
              </Stack>
          </m.div>
      </Box>
  );

    const renderImg = (
        <Box
            component={m.img}
            src="/assets/images/home/app.webp"
            variants={varFade().in}
            sx={{
                height: 1,
                width: 0.6,
                objectFit: 'cover',
                position: 'absolute',
                boxShadow: `-80px 80px 80px ${
                    theme.palette.mode === 'light'
                        ? alpha(theme.palette.grey[500], 0.48)
                        : alpha(theme.palette.common.black, 0.24)
                }`,
            }}
        />
    );

    return (
        <Box
            sx={{
                minHeight: 560,
                overflow: 'hidden',
        position: 'relative',
        ...bgGradient({
          startColor: `${theme.palette.grey[900]} 25%`,
          endColor: alpha(theme.palette.grey[900], 0),
          imgUrl: '/assets/images/home/for_designer.webp',
        }),
        ...(upMd && {
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.8),
            imgUrl: '/assets/background/overlay_4.jpg',
          }),
        }),
      }}
    >
      <Container component={MotionViewport}>
        <Grid container>
          <Grid xs={12} md={6}>
            {renderDescription}
          </Grid>

          {upMd && <Grid md={6}>{renderImg}</Grid>}
        </Grid>
      </Container>
    </Box>
  );
}
