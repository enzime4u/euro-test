"use client";

import React from "react";
import getAllBookings from "@/lib/getAllBookings";
import ErrorBoundary from "@/app/ErrorBoundary";
import { Modal } from "@/app/Modal";
import AddBookingButton from "./components/AddNewBookingButton";

import Link from "next/link";

function transformDate(date: string) {
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString("en-UK", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return formattedDate;
}

export default function BookingsPage() {
  const [bookings, setBookings] = React.useState<Booking[]>([]);
  const [error, setError] = React.useState<ErrorProps | null>(null);
  React.useEffect(() => {
    getAllBookings()
      .then((response) => {
        setBookings(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const content = (
    <ErrorBoundary>
      <section>
        {error && (
          <Modal isOpen={!!error} onClose={() => setError(null)}>
            <p>{`${error.statusCode} ${error.message}`}</p>
          </Modal>
        )}

        <h2>
          <Link href="/">Home</Link>
        </h2>

        <br />
        <AddBookingButton />
        <div className="p-4">
          {bookings?.map((booking) => {
            return (
              <div key={booking.id}>
                <Link className="p-3" href={`/bookings/${booking.id}`}>
                  <p>{transformDate(booking.bookingdate)}</p>
                  <p>{booking.user}</p>
                  <p>{booking.parc}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </ErrorBoundary>
  );
  return content;
}
