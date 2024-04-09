"use client";

import React, { useState, useEffect } from "react";
import getBooking from "@/lib/getBooking";
import ErrorBoundary from "@/app/ErrorBoundary";
import { Modal } from "@/app/Modal";

import { DeleteBookingButton } from "../components/DeleteBookingButton";

type Params = {
  params: {
    bookingId: string;
  };
};

export default function BookingPage({ params: { bookingId } }: Params) {
  const [booking, setBooking] = useState<Booking | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getBooking(bookingId).then((data) => {
      data.id ? setBooking(data) : setError(data);
    });
  }, [bookingId]);

  return (
    <ErrorBoundary>
      {error && (
        <Modal isOpen={!!error} onClose={() => setError(null)}>
          <p>{error.message}</p>
        </Modal>
      )}

      <div>
        <h3>{booking?.user}</h3>
        <p>{booking?.bookingdate}</p>
        <p>{booking?.parc}</p>
        <DeleteBookingButton bookingId={bookingId} />
      </div>
    </ErrorBoundary>
  );
}
