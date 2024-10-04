import { m } from 'framer-motion';
// @mui
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
// // hooks
// import { useResponsive } from 'src/hooks/use-responsive';
// utils
import { fPercent } from 'src/utils/format-number';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------
export const QUARTERS = [
  {
    label: '2024 Q1',
    progress: 100,
    color: 'success',
    value: [
      {
        task: 'Watchit Website',
        isDone: true
      },
      {
        task: 'New Web/Desktop App',
        isDone: true
      },
      {
        task: 'UI/UX (Proposal)',
        isDone: true
      }
    ],
  },
  {
    label: '2024 Q2',
    progress: 100,
    color: 'success',
    value: [
      {
        task: 'Beta Web App',
        isDone: true
      },
      {
        task: 'Beta Desktop App',
        isDone: true
      }
    ],
  },
  {
    label: '2024 Q3',
    progress: 80,
    color: 'info',
    value: [
      {
        task: 'MVP Testnet',
        status: 'On It',
        statusColor: 'info.main',
        isDone: false
      },
      {
        task: 'Protocol Core Development',
        status: 'On It',
        statusColor: 'info.main',
        isDone: false
      },
      {
        task: 'Integration with Lens Protocol',
        status: 'On It',
        statusColor: 'info.main',
        isDone: false
      }
    ],
  },
  {
    label: '2024 Q4',
    progress: 0,
    color: 'warning',
    value: [
      {
        task: 'DAO & Foundation',
        isDone: false
      },
      {
        task: 'Studio First Steps',
        isDone: false
      },
      {
        task: 'Layer Zero First Steps',
        isDone: false
      },
      {
        task: 'Continue Protocol Development',
        isDone: false
      },
    ],
  },
  {
    label: '2025 Q1',
    progress: 0,
    color: 'warning',
    value: [
      {
        task: 'Audits & Compliance',
        isDone: false
      },
      {
        task: 'Continue Integration with Layer Zero',
        isDone: false
      },
      {
        task: 'Continue Studio Development',
        isDone: false
      },
      {
        task: 'Protocol Documentation Release',
        isDone: false
      },

    ],
  },
  {
    label: '2025 Q2',
    progress: 0,
    color: 'warning',
    value: [
      {
        task: 'Finalize MVP Testnet',
        isDone: false,
        dependency: 'MVP Testnet'
      },
      {
        task: 'Studio Beta Release',
        isDone: false
      },
      {
        task: 'OS Toolkit First Steps',
        isDone: false
      },
      {
        task: 'Node First Steps',
        isDone: false
      },
    ],
  },
  {
    label: '2025 Q3',
    progress: 0,
    color: 'warning',
    value: [
      {
        task: 'CDN IAC First Steps',
        isDone: false
      },
      {
        task: 'Continue Node Development',
        isDone: false
      },
      {
        task: 'Continue OS Toolkit Development',
        isDone: false
      },
    ],
  },
  {
    label: '2025 Q4',
    progress: 0,
    color: 'warning',
    value: [
      {
        task: 'Analytics First Steps',
        isDone: false
      },
      {
        task: 'Continue CDN IAC Development',
        isDone: false
      },
      {
        task: 'Beta Node Release',
        isDone: false
      },
      {
        task: 'Beta OS Toolkit',
        isDone: false
      },
    ],
  },
  {
    label: '2026 Q1',
    progress: 0,
    color: 'warning',
    value: [
      {
        task: 'CDN IAC First Release',
        isDone: false
      },
      {
        task: 'Distribution Network Development',
        isDone: false
      },
      {
        task: 'Continue Analytics Development',
        isDone: false
      },
      {
        task: 'More Coming...',
        isDone: false
      },
    ],
  },
];

// ----------------------------------------------------------------------

export default function HomeWhat() {
  // const theme = useTheme();
  // const isLight = theme.palette.mode === 'light';

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 6, md: 15 },
        textAlign: 'center',
      }}
    >
      <Grid container columnSpacing={{ md: 3 }}>
        <Grid xs={12}>
          <m.div variants={varFade().inDown}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Roadmap
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Typography variant="h2" sx={{ mb: 2, mt: 1 }}>
              Our Plan
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight} style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography
              sx={{
                mx: 'auto',
                maxWidth: '95%',
                color: 'text.secondary',
                textAlign: 'justify',
                textWrap: 'wrap',
              }}
            >
              Our roadmap lays out bold plans to strengthen our ecosystem, empower filmmakers, and foster community-driven infrastructures.
              We are committed to delivering an immersive, engaging experience for fans. 
              <b>Together, we're shaping the future of cinema.</b>
            </Typography>
          </m.div>

          <Stack spacing={3} sx={{
            my: 5,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'space-between'
          }}>
            {QUARTERS.map((quarter, index) => (
              <Box component={m.div} key={quarter.label} variants={varFade().inRight} sx={{ width: { xs: '100%', md: '30%' }, mb: 3 }}>
                <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
                  <Typography variant="subtitle2" sx={{ flexGrow: 1, textAlign: 'left' }}>
                    {quarter.label}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {fPercent(quarter.progress)}
                  </Typography>
                </Stack>
                <LinearProgress
                  color={quarter.color as any}
                  variant="determinate"
                  value={quarter.progress}
                />

                <Stack spacing={1} sx={{ mt: 2 }}>
                  {quarter.value.map((item: any, idx) => (
                    <Stack direction="row" alignItems="center" key={idx}>
                      <Typography
                        variant="body2"
                        sx={{
                          flexGrow: 1,
                          textDecoration: item.isDone ? 'line-through' : 'none',
                          textAlign: 'left'
                        }}
                      >
                        {item.task}
                      </Typography>
                      <Typography variant="body2" sx={{ color: item?.statusColor ? item.statusColor : item.isDone ? 'success.main' : 'error.main' }}>
                        {item?.status ? item.status : item.isDone ? 'Done' : 'Pending'}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
    // </Box>
  );
}
