// @mui
import Box from '@mui/material/Box';
// routes
import { usePathname } from 'src/routes/hooks';
//
import Footer from './footer';
import Header from './header';
import AnnouncementBar from "./AnnouncementBar";
import {SHOULD_SHOW_ANNOUNCEMENT_BAR} from "../config-layout";

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
        <AnnouncementBar />
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
