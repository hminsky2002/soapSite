
type ShopifyFetchParams = {
    query: string;
    variables?: any;
};

type ShopifyFetchResult = {
    status: number;
    body: any;
    error?: string;
};

export async function shopifyFetch({ query, variables }: ShopifyFetchParams): Promise<ShopifyFetchResult> {
    const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ?? "";
    const key = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN ?? "";
    try {
        const result = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': key
            },
            body: JSON.stringify({ query, variables })
        });
        return {
            status: result.status,
            body: await result.json()
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            status: 500,
            body: "",
            error: 'Error receiving data'
        };
    }
}

export async function createCart(quantity: number) {
    return shopifyFetch({
      query: `mutation{
        cartCreate(
            input: {
                lines: [
                    {
                        quantity:${quantity}
                        merchandiseId:"gid://shopify/ProductVariant/47954063720764"
                    }
                ]
            }
        ){
          cart {
            id
            createdAt
            updatedAt
            checkoutUrl
            lines(first: 10) {
              edges {
                node {
                  id
                  merchandise {
                    ... on ProductVariant {
                      id
                    }
                  }
                }
              }
            }
            attributes {
              key
              value
            }
            cost {
              totalAmount {
                amount
                currencyCode
              }
              subtotalAmount {
                amount
                currencyCode
              }
              totalTaxAmount {
                amount
                currencyCode
              }
              totalDutyAmount {
                amount
                currencyCode
              }
            }
          }
        }
      }`
    });
  }
