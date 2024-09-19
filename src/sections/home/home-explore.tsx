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
    description: 'Give creators flexible revenue options and full control over how they monetize their content.'
  },
  {
    icon: ' /assets/icons/home/ic_ad.svg',
    label: 'Effortless Promotion Tools',
    description: 'Let audiences organically promote content with simple, community-driven tools, eliminating the need for costly traditional advertising.'
  },
  {
    icon: ' /assets/icons/home/ic_community.svg',
    label: 'Distribution Marketplace',
    description: 'Infrastructure providers offer services in an open marketplace, allowing filmmakers and distributors to easily negotiate and collaborate.'
  },
  {
    icon: ' /assets/icons/home/ic_cinema.svg',
    label: 'Support Indie Cinema',
    description: 'Directly connect independent filmmakers with their audience for valuable feedback and support, nurturing a vibrant creative ecosystem.'
  },
  {
    icon: ' /assets/icons/home/ic_lock.svg',
    label: 'Rights Management',
    description: 'Ensure fair and transparent management of intellectual property rights, with every transaction and agreement securely recorded on the blockchain.'
  },
];

const CARDS = [
  {
    icon: '/assets/icons/home/ic_tools.svg',
    label: 'AI Creative Studio',
    description: 'AI tools for editing, scriptwriting, and VFX.'
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
    label: 'AI-Powered Movie Search',
    description: 'AI tags content for faster search.'
  },
  {
    icon: '/assets/icons/home/ic_warning.svg',
    label: 'AI-Powered Anomaly Detection',
    description: 'Detects unusual activity and alerts in real-time.'
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
            boxShadow: `-40px 40px 80px ${theme.palette.mode === 'light'
                ? alpha(theme.palette.grey[500], 0.16)
                : alpha(theme.palette.common.black, 0.4)
              }`,
          }
        }}
      >
        <CarouselArrows
          filled
          shape="rounded"
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
        >
          <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
            {MAIN_CARDS.map((card, index) => (
              <Box key={card.label} component={m.div} variants={varFade().in} sx={{ px: 2, mb: 10 }}>
                <Card
                  className={'card-slide'}
                  sx={{
                    textAlign: 'center',
                    textWrap: 'wrap',
                    boxShadow: { md: 'none' },
                    bgcolor: 'background.default',
                    p: 5,
                  }}
                >
                  <Box component="img" src={card.icon} alt={card.label} sx={{ mx: 'auto', width: 60, height: 60 }} />
                  <Typography variant="h5" sx={{ mt: 4, mb: 2, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
