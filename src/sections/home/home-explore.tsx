// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport } from 'src/components/animate';
import Grid from "@mui/material/Unstable_Grid2";
import ReactPlayer from 'react-player';
import ListItemButton from "@mui/material/ListItemButton";
import Image from "../../components/image";

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: ' /assets/icons/home/ic_social.svg',
    label: 'Social-Fi Interaction',
    description: 'Enhanced community engagement.'
  },
  {
    icon: ' /assets/icons/home/ic_cinema.svg',
    label: 'Support Independent Cinema',
    description: 'Direct engagement with creators.'
  },
  {
    icon: ' /assets/icons/home/ic_token.svg',
    label: 'Innovative monetization models',
    description: 'Diverse revenue strategies.'
  },
  {
    icon: ' /assets/icons/home/ic_ad.svg',
    label: 'Effortless Promotion Tools',
    description: 'Community-driven promotion.'
  },
  {
    icon: ' /assets/icons/home/ic_lock.svg',
    label: 'Secure Digital Ownership',
    description: 'On-chain DRM and rights management.'
  },
  {
    icon: ' /assets/icons/home/ic_community.svg',
    label: 'Collaborative Distribution Network',
    description: 'Open marketplace for distributors.'
  },
  {
    icon: ' /assets/icons/home/ic_coins.svg',
    label: 'Flexible Revenue Strategies',
    description: 'Creators set their own terms.'
  },
  {
    icon: ' /assets/icons/home/ic_filmMaker.svg',
    label: 'Creative Studio for Filmmakers',
    description: 'Empowering creative projects.'
  },
  {
    icon: ' /assets/icons/home/ic_distribution.svg',
    label: 'Film3 protocol',
    description: 'Decentralized film distribution.'
  }
];

// ----------------------------------------------------------------------

export default function HomeBenefits() {

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Grid container>
        <Grid xs={12} md={12}>
          <Box sx={{
            p: 0, mb: 3,
            'video': {
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: (theme) => ({
                md: `-40px 40px 80px ${theme.palette.mode === 'light'
                    ? alpha(theme.palette.grey[500], 0.16)
                    : alpha(theme.palette.common.black, 0.4)
                  }`
              })
            },
          }}>
            <ReactPlayer
              url="assets/video/Watchit_intro.mp4"
              width="100%"
              height="100%"
              controls
              loop={true}
              muted={true}
              playing={true}
              playsinline={true}
            />
          </Box>
        </Grid>
        <Grid xs={12} md={12} sx={{ position: 'relative' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'space-between', p: 1, gap: 1 }}>
            {CARDS.map((card) => (
              <CardMobile key={card.label} {...card} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

type CardDesktopProps = {
  label: string;
  description: string;
  icon: string;
};

function CardMobile({ label, description, icon }: CardDesktopProps) {

  return (
    <ListItemButton
      key={label}
      sx={{
        py: 2,
        borderRadius: 1,
        textAlign: 'left',
        alignItems: 'center',
        typography: 'subtitle2',
        flexDirection: 'row',
        justifyContent: 'center',
        bgcolor: 'background.neutral',
        flexWrap: 'nowrap'
      }}
    >
      <Image alt={icon} src={icon} sx={{ width: 48, height: 48, mr: 2 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="body1" sx={{ color: 'text.primary' }}>
          {label}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Box>
    </ListItemButton>
  );
}
