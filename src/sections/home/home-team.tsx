import { m } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// _mock
import {_carouselsMembers} from 'src/_mock';
// components
import Image from 'src/components/image';
import { MotionViewport, varFade } from 'src/components/animate';
import Carousel, { CarouselArrows, useCarousel } from 'src/components/carousel';

// ----------------------------------------------------------------------

export const team = [
    {
        id: 0,
        name: 'Geolffrey Mena',
        role: 'Backend',
        avatarUrl: '',
    },
    {
        id: 1,
        name: 'Jacob Peralta',
        role: 'FrontEnd',
        avatarUrl: '',
    },
    {
        id: 2,
        name: 'Mark Henderson',
        role: 'Strategy Advisor',
        avatarUrl: '',
    },
    {
        id: 3,
        name: 'Dennis',
        role: 'Community Manager',
        avatarUrl: '',
    }
];

export default function HomeTeam() {
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
    <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
      <m.div variants={varFade().inDown}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Dream team
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3 }}>
          Great team is the key
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          sx={{
            mx: 'auto',
            maxWidth: 640,
            color: 'text.secondary',
          }}
        >
            Our dedicated team is transforming the landscape of independent film distribution. <br/>
            At Watchit, we believe that a great team is the foundation of our success, bringing
            together diverse expertise to create an innovative platform.
        </Typography>
      </m.div>

      <Box sx={{ position: 'relative' }}>
        <CarouselArrows
          filled
          shape="rounded"
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
          leftButtonProps={{
            sx: {
              left: 24,
              ...(_carouselsMembers.length < 5 && { display: 'none' }),
            },
          }}
          rightButtonProps={{
            sx: {
              right: 24,
              ...(_carouselsMembers.length < 5 && { display: 'none' }),
            },
          }}
        >
          <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
            {team.map((member) => (
              <Box
                key={member.id}
                component={m.div}
                variants={varFade().in}
                sx={{
                  px: 1.5,
                  py: { xs: 8, md: 10 },
                }}
              >
                <MemberCard member={member} />
              </Box>
            ))}
          </Carousel>
        </CarouselArrows>
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

type MemberCardProps = {
  member: {
    name: string;
    role: string | undefined;
    avatarUrl: string;
  };
};

function MemberCard({ member }: MemberCardProps) {
  const { name, role, avatarUrl } = member;
  return (
    <Card key={name}>
      <Typography variant="subtitle1" sx={{ mt: 2.5, mb: 0.5 }}>
        {name}
      </Typography>

      <Typography variant="body2" sx={{ mb: 2.5, color: 'text.secondary' }}>
        {role}
      </Typography>

      <Box sx={{ px: 1, mb: 1 }}>
        <Image alt={name} src={avatarUrl} ratio="1/1" sx={{ borderRadius: 2 }} />
      </Box>

      {/*<Stack direction="row" alignItems="center" justifyContent="center" sx={{ p: 2 }}>*/}
      {/*  {_socials.map((social) => (*/}
      {/*    <IconButton*/}
      {/*      key={social.name}*/}
      {/*      sx={{*/}
      {/*        color: social.color,*/}
      {/*        '&:hover': {*/}
      {/*          bgcolor: alpha(social.color, 0.08),*/}
      {/*        },*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      <Iconify icon={social.icon} />*/}
      {/*    </IconButton>*/}
      {/*  ))}*/}
      {/*</Stack>*/}
    </Card>
  );
}
