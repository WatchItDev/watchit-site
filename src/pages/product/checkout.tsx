import { Helmet } from 'react-helmet-async';
// sections
import { CheckoutView } from 'src/sections/checkout/view';

// ----------------------------------------------------------------------

export default function CheckoutPage() {
  return (
    <>
      <Helmet>
        <title> Checkout</title>
      </Helmet>

      <CheckoutView />
    </>
  );
}
