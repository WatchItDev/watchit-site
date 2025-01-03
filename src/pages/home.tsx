import { Helmet } from 'react-helmet-async';
// sections
import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Watchit: A New Era of Video Content with Web3 x AI</title>
      </Helmet>

      <HomeView />
    </>
  );
}
