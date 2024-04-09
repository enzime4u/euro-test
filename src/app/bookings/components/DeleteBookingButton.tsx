"use client";

import React from "react";
import deleteBooking from "@/lib/deleteParc";
import { useRouter } from "next/navigation";

type DeleteBookingButtonProps = {
  bookingId: string;
};

export function DeleteBookingButton({ bookingId }: DeleteBookingButtonProps) {
  const router = useRouter();
  const handleDeleteBooking = async () => {
    await deleteBooking(bookingId);
    router.push("/bookings");
  };

  return (
    <button
      className="bg-red-700 text-white py-1 px-4 rounded mt-3"
      onClick={handleDeleteBooking}
    >
      Delete
    </button>
  );
}
