// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// hooks
import { useCountdownDate } from 'src/hooks/use-countdown';
// _mock
// import { _socials } from 'src/_mock';
// assets
import { ComingSoonIllustration } from 'src/assets/illustrations';
// components
// import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ComingSoonView() {
  const { days, hours, minutes, seconds } = useCountdownDate(new Date('12/15/2024 21:30'));

  return (
    <>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Coming Soon!
      </Typography>

      {/*<Typography sx={{ color: 'text.secondary', mb: 2 }}>*/}
      {/*  We are currently working hard on this!*/}
      {/*</Typography>*/}

      <Stack
        direction="row"
        justifyContent="center"
        divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
        sx={{ typography: 'h2' }}
      >
        <TimeBlock label="Days" value={days} />

        <TimeBlock label="Hours" value={hours} />

        <TimeBlock label="Minutes" value={minutes} />

        <TimeBlock label="Seconds" value={seconds} />
      </Stack>

      <ComingSoonIllustration sx={{ my: 10, height: 240, width: '40rem' }} />

      {/*<TextField*/}
      {/*  fullWidth*/}
      {/*  placeholder="Enter your email"*/}
      {/*  InputProps={{*/}
      {/*    endAdornment: (*/}
      {/*      <InputAdornment position="end">*/}
      {/*        <Button variant="contained" size="large">*/}
      {/*          Notify Me*/}
      {/*        </Button>*/}
      {/*      </InputAdornment>*/}
      {/*    ),*/}
      {/*    sx: {*/}
      {/*      pr: 0.5,*/}
      {/*      [`&.${outlinedInputClasses.focused}`]: {*/}
      {/*        boxShadow: (theme) => theme.customShadows.z20,*/}
      {/*        transition: (theme) =>*/}
      {/*          theme.transitions.create(['box-shadow'], {*/}
      {/*            duration: theme.transitions.duration.shorter,*/}
      {/*          }),*/}
      {/*        [`& .${outlinedInputClasses.notchedOutline}`]: {*/}
      {/*          border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.32)}`,*/}
      {/*        },*/}
      {/*      },*/}
      {/*    },*/}
      {/*  }}*/}
      {/*  sx={{ my: 5 }}*/}
      {/*/>*/}

      {/*<Stack spacing={1} alignItems="center" justifyContent="center" direction="row">*/}
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
    </>
  );
}

// ----------------------------------------------------------------------

type TimeBlockProps = {
  label: string;
  value: string;
};

function TimeBlock({ label, value }: TimeBlockProps) {
  return (
    <div>
      <Box> {value} </Box>
      <Box sx={{ color: 'text.secondary', typography: 'body1' }}>{label}</Box>
    </div>
  );
}
