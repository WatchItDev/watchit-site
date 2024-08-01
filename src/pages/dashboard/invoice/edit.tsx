import { Helmet } from 'react-helmet-async';
// routes
import { useParams } from 'src/routes/hooks';
// sections
import { InvoiceEditView } from 'src/sections/invoice/view';

// ----------------------------------------------------------------------

export default function InvoiceEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Invoice Edit</title>
      </Helmet>

      <InvoiceEditView id={`${id}`} />
    </>
  );
}
