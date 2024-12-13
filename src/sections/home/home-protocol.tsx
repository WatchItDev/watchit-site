import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// components
import Image from 'src/components/image';
import { MotionViewport, varFade } from 'src/components/animate';
import { textGradient } from "../../theme/css";
import ListItemButton from "@mui/material/ListItemButton";

// ----------------------------------------------------------------------

export const FEATURES = [
  {
    label: 'Blockchain-Agnostic',
    value: 'Integrates seamlessly with multiple technologies and adopts the best features of each chain, enhancing the adaptability and reach of our protocol.',
  },
  {
    label: 'Decentralization and Scalability',
    value: 'Community-driven infrastructure fosters decentralization and enables efficient scalability, ensuring the ecosystem can grow and adapt to an increasing user base.'
  },
  {
    label: 'Flexible Monetization',
    value: 'Creators can maximize their earnings by selecting monetization methods that best suit their needs and audiences, adopting different strategies to cater to diverse preferences.'
  },
  {
    label: 'Community Governance',
    value: 'Transparent and democratic decision-making allows participants to influence the development and direction of our protocol through referendums for content and distributors\' approval, economic parameters, and more, ensuring that the community has the power to decide.'
  },
  {
    label: 'Extensibility and Integration',
    value: 'Easily integrates with various protocols, such as Farcaster and Lens, enhancing interoperability and allowing users to leverage additional features from other platforms, thereby expanding the possibilities and functionalities of our protocol.'
  },
  {
    label: 'Multi-Currency Support',
    value: 'Facilitates global accessibility and usability, allowing users to conduct transactions in their preferred currency.'
  },
  // {
  //   label: 'Custom Access Control',
  //   value: 'Content creators can establish and decide how users can access the content and under what conditions, offering a tailored experience to their audience.'
  // }
]
// ----------------------------------------------------------------------

export default function HomeProtocol() {
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
        py: { xs: 6, md: 15 },
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
                mt: 1,
                mb: 2,
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
                textWrap: 'wrap',
                textAlign: 'justify',
                mx: { xs: 'auto', md: 0 },

                maxWidth: { xs: '95%' }
              }}
            >
              With a blockchain-agnostic approach, community-driven innovation, flexible monetization, seamless integration, and transparent governance,
              Watchit creates a dynamic and secure ecosystem for creators and audiences.
            </Typography>
          </m.div>

          <Stack spacing={1} sx={{ my: 2, mt: { xs: 3 }, }}>
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
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
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
              Explore the full potential in our upcoming documentation. Stay tuned!
            </Typography>
          </m.div>
        </Grid>
      </Grid>
    </Container>
    // </Box>
  );
}
