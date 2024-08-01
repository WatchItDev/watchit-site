import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from 'src/components/animate';
import Grid from "@mui/material/Unstable_Grid2";
import ReactPlayer from 'react-player';
import {_carouselsMembers} from "../../_mock";
import Carousel, {CarouselArrows, useCarousel} from "../../components/carousel";
import {team} from "./home-team";
import ListItemButton from "@mui/material/ListItemButton";
import Image from "../../components/image";

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: ' /assets/icons/home/ic_distribution.svg',
    label: 'Social-Fi Interaction',
    description: 'Enhanced community engagement.'
  },
  {
    icon: ' /assets/icons/home/ic_community.svg',
    label: 'Support Independent Cinema',
    description: 'Direct engagement with creators.'
  },
  {
    icon: ' /assets/icons/home/ic_token.svg',
    label: 'Innovative monetization models',
    description: 'Diverse revenue strategies.'
  },
  {
    icon: ' /assets/icons/home/ic_token.svg',
    label: 'Effortless Promotion Tools',
    description: 'Community-driven promotion.'
  },
  {
    icon: ' /assets/icons/home/ic_distribution.svg',
    label: 'Secure Digital Ownership',
    description: 'On-chain DRM and rights management.'
  },
  {
    icon: ' /assets/icons/home/ic_community.svg',
    label: 'Collaborative Distribution Network',
    description: 'Open marketplace for distributors.'
  },
  {
    icon: ' /assets/icons/home/ic_token.svg',
    label: 'Flexible Revenue Strategies',
    description: 'Creators set their own terms.'
  },
  {
    icon: ' /assets/icons/home/ic_distribution.svg',
    label: 'Creative Studio for Filmmakers',
    description: 'Empowering creative projects.'
  },
  {
    icon: ' /assets/icons/home/ic_community.svg',
    label: 'Film3 protocol',
    description: 'Decentralized film distribution.'
  }
];

// ----------------------------------------------------------------------

export default function HomeBenefits() {
  const carousel = useCarousel({
    infinite: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  return (
      <Container
          component={MotionViewport}
          sx={{
            py: { xs: 10, md: 15 },
          }}
      >
        {/*<Stack*/}
        {/*    spacing={3}*/}
        {/*    sx={{*/}
        {/*      textAlign: 'center',*/}
        {/*      mb: {xs: 5, md: 10},*/}
        {/*    }}*/}
        {/*>*/}
        {/*  <m.div variants={varFade().inUp}>*/}
        {/*    <Typography component="div" variant="overline" sx={{color: 'text.disabled'}}>*/}
        {/*      Benefits*/}
        {/*    </Typography>*/}
        {/*  </m.div>*/}

        {/*  <m.div variants={varFade().inDown}>*/}
        {/*    <Typography variant="h2">*/}
        {/*      Explore WatchIT*/}
        {/*    </Typography>*/}
        {/*  </m.div>*/}

        {/*  <m.div variants={varFade().inUp}>*/}
        {/*    <Typography*/}
        {/*        sx={{*/}
        {/*          mx: 'auto',*/}
        {/*          maxWidth: 640,*/}
        {/*          color: 'text.secondary',*/}
        {/*        }}*/}
        {/*    >*/}
        {/*      Discover the future of film distribution with Watchit, a cutting-edge Web3 platform designed to empower filmmakers, distributors, and viewers alike. Dive into the unique features and innovative solutions that set Watchit apart in the world of digital cinema. From secure digital ownership to flexible monetization models, explore how Watchit is reshaping the cinematic landscape and creating a thriving ecosystem for independent cinema.*/}
        {/*    </Typography>*/}
        {/*  </m.div>*/}
        {/*</Stack>*/}

        <Grid container>
          <Grid xs={12} md={12}>
            <Box sx={{
              p: 0, mb: 3,
              'video': {
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: (theme) => ({
                  md: `-40px 40px 80px ${
                      theme.palette.mode === 'light'
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
            // maxWidth: 140,
            borderRadius: 1,
            textAlign: 'left',
            alignItems: 'center',
            typography: 'subtitle2',
            flexDirection: 'row',
            justifyContent: 'center',
            // height: '10rem',
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

// import { m } from 'framer-motion';
// // @mui
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// // components
// import { MotionViewport, varFade } from 'src/components/animate';
// import Grid from "@mui/material/Unstable_Grid2";
//
// // ----------------------------------------------------------------------
//
// const CARDS = [
//   {
//     icon: ' /assets/icons/home/ic_distribution.svg',
//     title: 'Film Distribution',
//     description: 'Ensures transparency and security in the distribution of independent films using blockchain technology, protecting digital rights.',
//   },
//   {
//     icon: ' /assets/icons/home/ic_community.svg',
//     title: 'Community and Engagement',
//     description: 'Connect with film enthusiasts, join discussions, participate in events and challenges, and enjoy movies with friends using the co-watching feature.',
//   },
//   {
//     icon: ' /assets/icons/home/ic_token.svg',
//     title: 'Rewards and Tokenized Economy',
//     description: 'Earn WVC Coins and other incentives for watching, sharing, and rating movies. Creators can also earn rewards and recognition for their work.',
//   },
// ];
//
// // ----------------------------------------------------------------------
//
// export default function HomeBenefits() {
//   return (
//     <Container
//       component={MotionViewport}
//       sx={{
//         py: { xs: 10, md: 15 },
//       }}
//     >
//       <Stack
//         spacing={3}
//         sx={{
//           textAlign: 'center',
//           mb: { xs: 5, md: 10 },
//         }}
//       >
//         <m.div variants={varFade().inUp}>
//           <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
//             Benefits
//           </Typography>
//         </m.div>
//
//         <m.div variants={varFade().inDown}>
//           <Typography variant="h2">
//             Explore WatchIT
//           </Typography>
//         </m.div>
//       </Stack>
//
//       <Grid container>
//         <Grid xs={8}>
//         {/*  Here goes the video */}
//         </Grid>
//         <Grid xs={4}>
//           <Box
//               gap={{ xs: 3, lg: 10 }}
//               display="grid"
//               alignItems="center"
//               gridTemplateColumns={{
//                 xs: 'repeat(1, 1fr)',
//                 md: 'repeat(1, 1fr)',
//               }}
//           >
//             {CARDS.map((card, index) => (
//                 <m.div variants={varFade().inUp} key={card.title}>
//                   <Card
//                       sx={{
//                         display: 'flex',
//                         textAlign: 'left',
//                         bgcolor: 'background.default',
//                         p: 2,
//                         boxShadow: (theme) => ({
//                           md: `-10px 10px 20px ${
//                               theme.palette.mode === 'light'
//                                   ? alpha(theme.palette.grey[500], 0.16)
//                                   : alpha(theme.palette.common.black, 0.4)
//                           }`,
//                         }),
//                       }}
//                   >
//                     <Box
//                         component="img"
//                         src={card.icon}
//                         alt={card.title}
//                         sx={{ mr: 1, width: 50, height: 50 }}
//                     />
//
//                     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//                       <Typography variant="h5" sx={{ mb: 1 }}>
//                         {card.title}
//                       </Typography>
//
//                       <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
//                     </Box>
//                   </Card>
//                 </m.div>
//             ))}
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }
