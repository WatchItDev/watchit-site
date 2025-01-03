// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

// motion
import { m } from 'framer-motion';

// components
import Grid from "@mui/material/Unstable_Grid2";
import ListItemButton from "@mui/material/ListItemButton";
import Image from "../../components/image";
import { MotionViewport, varFade } from 'src/components/animate';
import Carousel, { CarouselArrows, useCarousel } from 'src/components/carousel';

// ----------------------------------------------------------------------

const MAIN_CARDS = [
  {
    icon: ' /assets/icons/home/ic_social.svg',
    label: 'Social-Fi Interaction',
    description: 'Build deeper connections between audiences, enabling them to share and collaborate around their favorite films.'
  },
  {
    icon: ' /assets/icons/home/ic_token.svg',
    label: 'Monetization Models',
    description: 'Give creators full control over how they earn from their content and experiences, with adaptable revenue options.'
  },
  {
    icon: ' /assets/icons/home/ic_ad.svg',
    label: 'Effortless Promotion Tools',
    description: 'Allow the community to promote content organically, eliminating the need for costly traditional advertising.'
  },
  {
    icon: ' /assets/icons/home/ic_community.svg',
    label: 'Distribution Marketplace',
    description: 'Create an open space where creators and distributors can negotiate and collaborate easily, all in one place.'
  },
  {
    icon: ' /assets/icons/home/ic_cinema.svg',
    label: 'Support Creators',
    description: 'Connect creators with their audience to get valuable feedback and build a vibrant, creative ecosystem.'
  },
  {
    icon: ' /assets/icons/home/ic_lock.svg',
    label: 'Rights Management',
    description: 'Ensure fair and transparent IP management, with every transaction securely recorded on the blockchain."'
  },
];

const CARDS = [
  {
    icon: '/assets/icons/home/ic_tools.svg',
    label: 'AI Creative Studio',
    description: 'AI tools for editing and VFX.'
  },
  {
    icon: '/assets/icons/home/ic_subtitles.svg',
    label: 'AI-Powered Subtitle and Translation',
    description: 'Auto-generate subtitles and live translations.'
  },
  {
    icon: '/assets/icons/home/ic_cinema.svg',
    label: 'Audience Popularity Analysis',
    description: 'Analyze feedback and predict trends.'
  },
  {
    icon: '/assets/icons/home/ic_search.svg',
    label: 'AI-Powered Video Search',
    description: 'AI tags content for faster search.'
  },
  {
    icon: '/assets/icons/home/ic_brain.svg',
    label: "AI-Agents Content Onboarding Support",
    description: "Streamlines content onboarding with AI-driven assistance."
  },
  {
    icon: '/assets/icons/home/ic_warning.svg',
    label: 'AI-Powered Content Moderation',
    description: 'Detect harmful content in uploads and comments.'
  },
  {
    icon: '/assets/icons/home/ic_user.svg',
    label: 'AI-Driven Recommendations',
    description: 'Personalized film suggestions based on user habits.'
  },
];

// ----------------------------------------------------------------------

export default function HomeBenefits() {
  const theme = useTheme();

  const carousel = useCarousel({
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 6, md: 15 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 5 },
        }}
      >
        <m.div variants={varFade().inUp}>
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            Cool Tools & Perks
          </Typography>
        </m.div>
      </Stack>

      <Box
        sx={{
          position: 'relative',
          '& .slick-center .card-slide': {
            boxShadow: `-40px 40px 80px transparent`,
          }
        }}
      >
        <CarouselArrows
          // filled
          shape="rounded"
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
        >
          <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
            {MAIN_CARDS.map((card, index) => (
              <Box key={card.label} component={m.div} variants={varFade().in}>
                <Card
                  className={'card-slide'}
                  sx={{
                    textAlign: 'center',
                    textWrap: 'wrap',
                    boxShadow: { md: 'none' },
                    bgcolor: 'transparent',
                    p: 5,
                  }}
                >
                  <Box component="img" src={card.icon} alt={card.label} sx={{ mx: 'auto', width: 60, height: 60 }} />
                  <Typography variant="h5" sx={{ mt: 1, mb: 1, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {card.label}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
                </Card>
              </Box>
            ))}
          </Carousel>
        </CarouselArrows>
      </Box>
      <Grid container>
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
