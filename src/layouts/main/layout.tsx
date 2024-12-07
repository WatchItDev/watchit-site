// @mui
import Box from '@mui/material/Box';
// routes
import { usePathname } from 'src/routes/hooks';
//
import Footer from './footer';
import Header from './header';
import AnnouncementBar from "./AnnouncementBar";
import HideOnScroll from 'src/components/hide-on-scroll';
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {SHOULD_SHOW_ANNOUNCEMENT_BAR} from "../config-layout";
import Link from "@mui/material/Link";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  const pathname = usePathname();

  const isHome = pathname === '/';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      {SHOULD_SHOW_ANNOUNCEMENT_BAR && (
        <HideOnScroll>
            <AppBar
                position="static"
                sx={{
                    background: 'linear-gradient(90deg,#13a5d3,#1b6bec 32.29%,#9824cf)!important',
                    zIndex: 1,
                    p: 0.5
                }}
            >
                <Container>
                    <Typography variant="body2" sx={{ color: '#fff', textAlign: 'center' }}>
                        🎙️ Discord AMA: Wednesday, December 11, 2024 at 17:00 GMT-6.{' '}
                        <Link
                            href="https://discord.com/invite/2sUA8Ysq"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ textDecoration: 'underline', color: '#fff', fontWeight: 'bold' }}
                        >
                            Click here to join
                        </Link>
                    </Typography>
                </Container>
            </AppBar>
        </HideOnScroll>
      )}

      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ...(!isHome && {
            pt: { xs: 8, md: 10 },
          }),
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
}
