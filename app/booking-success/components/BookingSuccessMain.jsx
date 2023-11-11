"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { LiaAngleLeftSolid } from "react-icons/lia";

const BookingSuccessMain = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");
  return (
    <div className="my-5 d-flex justify-content-center ">
      <div>
        <h5 className="fw-bold text-center">Thank you for your purchase!</h5>
        <div className="d-flex justify-content-center my-5">
          <img
            alt="Category"
            src="../../../img/final.svg"
            className="img-fluid"
          />
        </div>

        <p className="fw-semibold mb-1">Thanks for placing order</p>
        <p className="fw-semibold" style={{ color: "#AA9B14" }}>
          {bookingId}
        </p>
        <p className="fw-semibold">
          We will send you a notification within 5 days when <br /> it ships.
        </p>
        <p className="fw-semibold">
          If you have any question or queries then fell to get <br /> in contact
          us.
        </p>
        <p className="fw-semibold mt-5"> All the best,</p>

        <div className="d-flex justify-content-center my-5 ">
          <button
            type="button"
            className="continue-button fw-bold"
            onClick={() => router.push("/")}
          >
            <LiaAngleLeftSolid className="me-3" />
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccessMain;
