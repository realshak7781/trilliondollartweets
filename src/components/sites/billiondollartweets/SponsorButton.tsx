import React from "react";
import { RazorpayIcon } from "./Icons";

export function SponsorButton() {
  return (
    <form className="sponsor">
      <span className="razorpay-payment-button">
        <a
          href="https://razorpay.com/payment-button/pl_TQAWOz21tKhG8R/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button"
          target="_blank"
          rel="noreferrer"
          className="PaymentButton PaymentButton--light PaymentButton--rzpTheme PaymentButton--rzp-light-standard"
        >
          <RazorpayIcon />
          <div className="PaymentButton-contents">
            <span className="PaymentButton-text">Sponsor</span>
            <div className="PaymentButton-securedBy">Secured by Razorpay</div>
          </div>
        </a>
      </span>
    </form>
  );
}

