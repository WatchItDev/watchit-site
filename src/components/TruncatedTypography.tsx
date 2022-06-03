// MUI IMPORTS
import { styled, Typography, TypographyProps } from '@mui/material'

// ===========================|| TRUNCATED TYPOGRAPHY ||=========================== //

export const TruncatedTypography = styled(Typography)<TypographyProps & { lines: number }>(({ lines }) => ({
  marginTop: '1rem',
  overflow: 'hidden',
  display: '-webkit-box',
  width: '100%',
  WebkitLineClamp: lines,
  WebkitBoxOrient: 'vertical'
}))

export default TruncatedTypography
