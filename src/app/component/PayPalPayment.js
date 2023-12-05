"use client";
import React from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const initialOptions = {
  clientId: "test",
  currency: "USD",
  components: "buttons",
  "disable-funding": "card,p24",
};
const PayPalPayment = () => {
  const style = { layout: "horizontal" };

  function createOrder() {
    // replace this url with your server
    return fetch(
      "https://react-paypal-js-storybook.fly.dev/api/paypal/create-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // use the "body" param to optionally pass additional order information
        // like product ids and quantities
        body: JSON.stringify({
          cart: [
            {
              sku: "1blwyeo8",
              quantity: 2,
            },
          ],
        }),
      }
    )
      .then((response) => response.json())
      .then((order) => {
        // Your code here after create the order
        return order.id;
      });
  }
  function onApprove(data) {
    // replace this url with your server
    return fetch(
      "https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: data.orderID,
        }),
      }
    )
      .then((response) => response.json())
      .then((orderData) => {
        // Your code here after capture the order
      });
  }

  const ButtonWrapper = ({ showSpinner }) => {
    const [{ isPending }] = usePayPalScriptReducer();

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <div style={{ position: "relative", zIndex: 9 }}>
          <PayPalButtons
            style={style}
            disabled={false}
            forceReRender={[style]}
            fundingSource={undefined}
            createOrder={createOrder}
            onApprove={onApprove}
          />
        </div>
      </>
    );
  };

  return (
    <div className="mt-3 -z-50" style={{ zIndex: "-20" }}>
      <PayPalScriptProvider options={initialOptions}>
        {/* <PayPalButtons
          style={{ layout: "horizontal", zIndex: "-20", display: "none" }}
        /> */}
        <ButtonWrapper />
      </PayPalScriptProvider>
    </div>
  );
};

export default PayPalPayment;
