import { m } from 'framer-motion';
// @mui
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeHugePackElements() {
  const renderDescription = (
    <Stack
      sx={{
        textAlign: { xs: 'center', md: 'unset' },
        pl: { md: 5 },
        pt: { md: 15 },
      }}
    >
      <m.div variants={varFade().inUp}>
        <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
          Interface Starter Kit
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3 }}>
          Huge pack <br />
          of elements
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          sx={{
            mb: 5,
            color: 'text.secondary',
          }}
        >
          We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just
          dive in!
        </Typography>
      </m.div>
    </Stack>
  );

  const renderContent = (
    <Stack
      component={Paper}
      variant="outlined"
      alignItems="center"
      spacing={{ xs: 3, md: 5 }}
      sx={{
        borderRadius: 2,
        bgcolor: 'unset',
        borderStyle: 'dashed',
        p: { xs: 3, md: 5 },
      }}
    >

    </Stack>
  );

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Grid container direction={{ xs: 'column', md: 'row-reverse' }} spacing={5}>
        <Grid xs={12} md={5}>
          {renderDescription}
        </Grid>

        <Grid xs={12} md={7}>
          {renderContent}
        </Grid>
      </Grid>
    </Container>
  );
}
