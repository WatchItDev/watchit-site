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
    progress: 95,
    color: 'info',
    value: [
      {
        task: 'MVP Testnet',
        status: 'On It',
        statusColor: 'info.main',
        isDone: false
      },
      {
        task: 'Integration with Synapse Protocol',
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
        task: 'Studio First Steps',
        isDone: false
      },
      {
        task: 'Continue Integrations with Synapse',
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
        task: 'Studio Beta Release',
        isDone: false
      },
      {
        task: 'MMC Economics First Steps',
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
        task: 'MMC Economics',
        isDone: false
      },
      {
        task: 'Audits & Compliance',
        isDone: false
      }
    ],
  },
  {
    label: '2025 Q3',
    progress: 0,
    color: 'warning',
    value: [
      {
        task: 'Content Development',
        isDone: false
      },
      {
        task: 'DAO & Foundation',
        isDone: false
      },
      {
        task: 'Governance Platform',
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
        task: 'Analytics & Monitoring',
        isDone: false
      },
      {
        task: 'Distribution Market',
        isDone: false
      }
    ],
  },
  {
    label: '2026 Q1',
    progress: 0,
    color: 'warning',
    value: [
      {
        task: 'Integrations with Layer Zero',
        isDone: false
      },
      {
        task: 'Integrations with Lit',
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
              Our roadmap outlines ambitious plans to strengthen our ecosystem, support creators, and build a community-driven platform. We’re committed to delivering engaging screen experiences that captivate audiences. 
              <b>Together, we’re shaping the future of digital entertainment.</b>
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
