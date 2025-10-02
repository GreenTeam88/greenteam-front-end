import { shopifyAdminRequest } from './query-tools';

const CREATE_CHECKOUT = `
  mutation checkoutCreate($lineItems: [CheckoutLineItemInput!]!) {
    checkoutCreate(input: { lineItems: $lineItems }) {
      checkout {
        webUrl
        id
      }
      checkoutUserErrors {
        code
        message
      }
    }
  }
`;

export async function createCheckout(variantId: string, quantity: number = 1) {
  const data = await shopifyAdminRequest(CREATE_CHECKOUT, {
    lineItems: [{ variantId, quantity }],
  });
  console.log('data', data);
  return data;
}
