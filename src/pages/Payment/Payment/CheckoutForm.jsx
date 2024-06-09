import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import toastAlert from "../../../utils/toastAlert";
import Loader from "../../../components/Loader/Loader";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = () => {
  const location = useLocation();
  const { verify, pro } = queryString.parse(location.search);
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [singleTest, setSingleTest] = useState({});
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  // Discount Price For Pay
  let totalTestPrice = parseInt(singleTest.testPrice);
  // Check Discount Rate
  if (pro) {
    let discountPrice = (totalTestPrice * parseInt(pro)) / 100;
    totalTestPrice = totalTestPrice - discountPrice;
  }

  // Get Test Details
  useEffect(() => {
    const getTestDetails = async () => {
      const { data } = await axiosSecure.get(`/tests/${verify}`);
      if (data) {
        setSingleTest(data);
        setLoading(false);
      }
    };
    getTestDetails();
  }, [verify, axiosSecure]);

  // Request Send To Server With Price

  useEffect(() => {
    if (totalTestPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalTestPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalTestPrice]);

  // handleSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    // Manage Response
    if (error) {
      toastAlert(error.message, "error");
    }

    // Confirm Payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Anonymous",
          },
        },
      });

    // Hnadle Response
    if (confirmError) {
      let er = confirmError;
    } else {
      if (paymentIntent.status === "succeeded") {
        const bookingInfo = {
          testId: singleTest._id,
          testName: singleTest.name,
          slots: singleTest.slots,
          testPrice: totalTestPrice,
          bookingDate: new Date(),
          photo: singleTest.photo,
          details: singleTest.details,
          report: "Pending",
          transactionId: paymentMethod.id,
          patientInfo: {
            name: user?.displayName,
            email: user?.email,
          },
        };
        try {
          const { data } = await axiosSecure.post("/booking", bookingInfo);
          console.log(data);
        } catch (error) {
          console.log(error.message);
        }
        toastAlert("Payment Completed Successful", "success");
        navigate("/dashboard/upcoming-appointments");
      }
    }
  };
  if (loading) return <Loader />;
  return (
    <div className="container mx-auto my-10 md:my-20">
      <div className="text-center">
        <SectionTitle heading="Confirm Your Payment" />
      </div>

      <div className="max-w-md md:max-w-lg mx-auto">
        <div className="mb-1 md:mb-2">
          <p className="text-sm font-semibold">
            Test Price : ${singleTest?.testPrice}
          </p>
          {pro && (
            <p className="text-sm font-semibold">Discount Rate : %{pro}</p>
          )}

          <p className="text-sm font-semibold">Pay Total : ${totalTestPrice}</p>
        </div>
        <div className=" border border-primary rounded-lg p-3 md:p-5 shadow-lg">
          <form onSubmit={handleSubmit}>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
            <div className="text-center mt-3">
              <button
                type="submit"
                disabled={!stripe || !clientSecret}
                className="bg-primary md:py-2 md:px-16 py-2 px-10 font-semibold text-sm md:text-base text-white rounded-sm"
              >
                Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
