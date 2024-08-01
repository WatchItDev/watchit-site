import { Helmet } from 'react-helmet-async';
// routes
import { useParams } from 'src/routes/hooks';
// sections
import { JobEditView } from 'src/sections/job/view';

// ----------------------------------------------------------------------

export default function JobEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Dashboard: Job Edit</title>
      </Helmet>

      <JobEditView id={`${id}`} />
    </>
  );
}
