import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// utils
import { fPercent } from 'src/utils/format-number';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';
import {textGradient} from "../../theme/css";
import ListItemButton from "@mui/material/ListItemButton";
import { IconCurrencyEthereum } from "@tabler/icons-react";

// ----------------------------------------------------------------------

export const FEATURES = [
  {
    label: 'Blockchain-Agnostic',
    value: 'Enables integration with various technologies and adoption of the best features of each blockchain, enhancing the protocol\'s adaptability and reach.',
  },
  {
    label: 'Decentralization and Scalability',
    value: 'This community-driven infrastructure fosters decentralization and allows for efficient scalability, ensuring the protocol can grow and adapt to an increasing user base.'
  },
  {
    label: 'Flexible Monetization',
    value: 'Creators can maximize their earnings by selecting monetization methods that best suit their needs and audiences, ranging from pay-per-view to subscriptions and microtransactions.'
  },
  {
    label: 'Community Governance',
    value: 'Decisions on the platform are transparent and democratic, allowing participants to influence the platform\'s development and direction through referendums for content and distributor approval.'
  },
  {
    label: 'Extensibility and Integration',
    value: 'Easy integration with other protocols like Farcaster and Lens enhances interoperability and allows users to leverage additional features from other platforms, expanding Watchit\'s possibilities and functionalities.'
  },
  {
    label: 'Multi-Currency Support',
    value: 'Facilitates global accessibility and usability, allowing users to conduct transactions in their preferred currency'
  }
]
// ----------------------------------------------------------------------

export default function HomeWhat() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.24
  )}`;

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <Grid container columnSpacing={{ md: 2 }} alignItems="center">
        {mdUp && (
          <Grid md={6}>
            <Box sx={{ width: '100%' }}>
              <Grid container xs={12} columnSpacing={{ md: 3 }} alignItems="center" sx={{ mb: 5, pr: { md: 7 } }}>
                <Grid xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                        alt="our office 2"
                        src="/assets/images/home/protocol_1.png"
                        ratio="1/1"
                        sx={{ borderRadius: 3, boxShadow: shadow }}
                    />
                  </m.div>
                </Grid>

                <Grid xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                        alt="our office 1"
                        src="/assets/images/home/protocol_2.png"
                        ratio="3/4"
                        sx={{ borderRadius: 3, boxShadow: shadow }}
                    />
                  </m.div>
                </Grid>
              </Grid>
              <Grid container xs={12} columnSpacing={{ md: 3 }} alignItems="center" sx={{ pr: { md: 7 } }}>
                <Grid xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                        alt="our office 1"
                        src="/assets/images/home/protocol_3.png"
                        ratio="3/4"
                        sx={{ borderRadius: 3, boxShadow: shadow }}
                    />
                  </m.div>
                </Grid>
                <Grid xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                        alt="our office 2"
                        src="/assets/images/home/protocol_4.png"
                        ratio="1/1"
                        sx={{ borderRadius: 3, boxShadow: shadow }}
                    />
                  </m.div>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        )}

        <Grid md={6}>
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
              Our Protocol
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Typography
                sx={{
                  color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                }}
            >
              With a blockchain-agnostic approach compatible with EVM, true decentralization,
              community-driven innovation, flexible monetization strategies, seamless integration
              with other protocols, and transparent governance, Watchit creates a dynamic and
              secure ecosystem for diverse content.
            </Typography>
          </m.div>

          <Stack spacing={1} sx={{my: 2}}>
            {FEATURES.map((feature, index) => (
                <Box component={m.div} key={feature.label} variants={varFade().inRight}>
                  <ListItemButton
                      sx={{
                        p: 2,
                        mb: 0,
                        borderRadius: '10px',
                        alignItems: 'flex-start',
                        typography: 'subtitle2',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        bgcolor: 'background.neutral',
                      }}
                  >
                    <Box display='flex'>
                      {/*{feature.icon}*/}
                      <Typography
                          variant="body1"
                          fontWeight="bold"
                          sx={{
                            flexGrow: 1,
                            textAlign: 'left',
                            mb: 0.5,
                            ...textGradient(
                                `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 100%`
                            ),
                          }}>
                        {feature.label}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle2" sx={{color: 'text.secondary'}}>
                      {feature.value}
                    </Typography>
                  </ListItemButton>
                </Box>
            ))}
          </Stack>
          <m.div variants={varFade().inRight}>
            <Typography
                sx={{
                  color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                }}
            >
              ...and more. Stay tuned for our documentation.
            </Typography>
          </m.div>
        </Grid>
      </Grid>
    </Container>
      // </Box>
  );
}
