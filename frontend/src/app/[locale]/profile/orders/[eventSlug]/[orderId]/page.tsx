import Link from "next/link";

import { payOrder } from "../../actions";
import { graphql } from "@/__generated__";
import { PaymentStatus } from "@/__generated__/graphql";
import { getClient } from "@/apolloClient";
import { auth } from "@/auth";
import SignInRequired from "@/components/SignInRequired";
import ProductsTable from "@/components/tickets/ProductsTable";
import ViewContainer from "@/components/ViewContainer";
import ViewHeading from "@/components/ViewHeading";
import { getTranslations } from "@/translations";

const query = graphql(`
  query ProfileOrderDetail($eventSlug: String!, $orderId: String!) {
    profile {
      tickets {
        order(eventSlug: $eventSlug, id: $orderId) {
          id
          formattedOrderNumber
          createdAt
          totalPrice
          status
          electronicTicketsLink
          products {
            title
            quantity
            price
          }

          event {
            slug
            name
          }
        }
      }
    }
  }
`);

interface Props {
  params: {
    locale: string;
    eventSlug: string;
    orderId: string;
  };
}

export const revalidate = 0;

export default async function ProfileOrderPage({ params }: Props) {
  const { locale, eventSlug, orderId } = params;
  const translations = getTranslations(locale);
  const t = translations.Tickets.Order;
  const session = await auth();

  // TODO encap
  if (!session) {
    return <SignInRequired messages={translations.SignInRequired} />;
  }

  const { data } = await getClient().query({ query });
  if (!data.profile?.tickets?.order) {
    const error = t.errors.ORDER_NOT_FOUND;
    return (
      <ViewContainer>
        <ViewHeading>{error.title}</ViewHeading>
        <p>{error.message}</p>
        <Link className="btn btn-primary" href="/profile/orders">
          {error.actions.returnToOrderList}
        </Link>
      </ViewContainer>
    );
  }

  const order = data.profile.tickets.order;
  const { title, message } = t.attributes.status.choices[order.status];

  return (
    <ViewContainer>
      <ViewHeading>
        {t.singleTitle(order.formattedOrderNumber)}
        <ViewHeading.Sub>{t.forEvent(order.event.name)}</ViewHeading.Sub>
      </ViewHeading>

      <h2 className="mt-4">{title}</h2>
      <p>{message}</p>

      <ProductsTable order={order} messages={translations.Tickets} />

      {order.status === PaymentStatus.Paid && (
        <form action={payOrder.bind(null, locale, eventSlug, orderId)}>
          <div className="d-grid gap-2 mb-4">
            <button className="btn btn-primary btn-lg" type="submit">
              {t.actions.pay.title}
            </button>
          </div>
        </form>
      )}

      {order.status == PaymentStatus.Pending && order.electronicTicketsLink && (
        <div className="d-grid gap-2 mb-4">
          <Link className="btn btn-primary" href={order.electronicTicketsLink}>
            {t.actions.downloadTickets.title}
          </Link>
        </div>
      )}
    </ViewContainer>
  );
}
