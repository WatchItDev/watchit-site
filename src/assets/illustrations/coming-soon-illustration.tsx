import { memo } from 'react';
// @mui
import {alpha, useTheme} from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
//
import BackgroundShape from './background-shape';
import {m} from "framer-motion";
import {varFade} from "../../components/animate";

// ----------------------------------------------------------------------

function ComingSoonIllustration({ ...other }: BoxProps) {
  const theme = useTheme();

  return (
      <Box
          component={m.img}
          src="/assets/images/home/app_complete.webp"
          variants={varFade().in}
          sx={{
            height: 'auto',
            width: { xs: '100%', md: '60vw' },
            maxWidth: 'max-content',
            borderRadius: '1rem',
            mt: { xs: '26px', md: '5rem' },
            objectFit: 'cover',
            // left: { xs: 0, md: 'auto' },
            // position: 'absolute',
            boxShadow: `-80px 80px 80px ${
                theme.palette.mode === 'light'
                    ? alpha(theme.palette.grey[500], 0.48)
                    : alpha(theme.palette.common.black, 0.24)
            }`,
          }}
      />
  );
}

export default memo(ComingSoonIllustration);
