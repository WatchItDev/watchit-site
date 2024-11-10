import { m } from 'framer-motion';
// @mui
import { useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { textGradient, bgGradient } from 'src/theme/css';
import { MotionViewport, varFade } from 'src/components/animate';
import Stack from "@mui/material/Stack";

// ----------------------------------------------------------------------

export default function HomeForDesigner() {
  const theme = useTheme();

  const renderDescription = (
      <Box sx={{textAlign: 'center', mt: {xs: 10, md: 12}}}>
          <m.div variants={varFade().inUp}>
              <Typography component="div" variant="overline" sx={{ color: 'text.disabled', textAlign: { xs: 'center', md: 'left' } }}>
                  Platforms
              </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
              <Typography
                  variant="h2"
                  sx={{
                      mt: 1,
                      mb: 2,
                      ...textGradient(
                          `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 100%`
                      ),
                      textAlign: { xs: 'center', md: 'left' }
                  }}
              >
                  Explore our apps
              </Typography>
          </m.div>

          <m.div variants={varFade().inLeft}>
              <Typography
                  sx={{
                      maxWidth: { xs: '95%', md: '80%' },
                      color: 'text.primary',
                      mb: 4,
                      mx: { xs: 'auto', md: 0 },
                      textAlign: { xs: 'justify', md: 'left' },
                      textWrap: 'wrap'
                  }}
              >
                  For fans of captivating stories and immersive content, Watchit delivers an exceptional experience through our user-friendly apps. 
                  Designed with you in mind, our platform elevates your digital journey, providing seamless access to a diverse world of visual experiences within a decentralized network.              
                  </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
              <Stack spacing={2} direction="row" justifyContent={{ xs: "center", md: 'flex-start' }}>
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
                height: 'auto',
                width: { xs: '100%', md: 0.75 },
                mt: { xs: '26px', md: '0' },
                objectFit: 'cover',
                left: { xs: 0, md: 'auto' },
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
            color: alpha(theme.palette.background.default, 0.8),
            imgUrl: '/assets/background/overlay_4.jpg',
          }),
      }}
    >
      <Container component={MotionViewport}>
        <Grid container>
          <Grid xs={12} md={6}>
            {renderDescription}
          </Grid>

          <Grid xs={12} md={6} sx={{ minHeight: '14rem' }}>
              {renderImg}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
