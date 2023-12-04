"use client";
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const initialOptions = {
  clientId: "test",
  currency: "USD",
  intent: "capture",
};
const PayPalPayment = () => {
  return (
    <div className="mt-3 -z-50" style={{ zIndex: "-20" }}>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{ layout: "horizontal", zIndex: "-20", display: "none" }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default PayPalPayment;
