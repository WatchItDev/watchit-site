import { Helmet } from 'react-helmet-async';
// routes
import { useParams } from 'src/routes/hooks';
// sections
import { TourEditView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export default function TourEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Tour Edit</title>
      </Helmet>

      <TourEditView id={`${id}`} />
    </>
  );
}
