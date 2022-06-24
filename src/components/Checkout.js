import React from "react";
import { useSelector } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  console.log(cart);
  console.log("hello world");
  return (
    <div className="home-container">
      <div>
        <h2>Shopping Bill</h2>

        <table>
          <tbody>
            <tr>
              <td>Shipping fee</td>
              <td align="right">$5.43</td>
            </tr>

            <tr>
              <td>Price Total</td>
              <td align="right">$84.82</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td align="right">$88.36</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <fieldset>
        <legend>Payment Method</legend>
        <div className="form__radios">
          <div className="form__radio">
            <label for="paypal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-paypal"
                viewBox="0 0 16 16"
              >
                <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z" />
              </svg>
              PayPal
            </label>
            <input id="paypal" name="payment-method" type="radio" />
          </div>

          <div className="form__radio">
            <label for="mastercard">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-credit-card"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
              </svg>
              Master Card
            </label>
            <input id="mastercard" name="payment-method" type="radio" />
          </div>
        </div>
      </fieldset>

      <div>
        <button className="btn">But Now</button>
        <PayPalButton
          amount="0.01"
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);

            // OPTIONAL: Call your server to save the transaction
            return fetch("/paypal-transaction-complete", {
              method: "post",
              body: JSON.stringify({
                orderID: data.orderID,
              }),
            });
          }}
        />
      </div>
    </div>
  );
};

export default Checkout;