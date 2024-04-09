"use client";

import React, { useState } from "react";
import createBooking from "../../../lib/createParc";
import ErrorBoundary from "@/app/ErrorBoundary";
import { Modal } from "@/app/Modal";

export default function AddBookingButton() {
  const [error, setError] = useState<any>(null);

  const handleAddBooking = async () => {
    await createBooking()
      .then(() => {
        alert("Parc created successfully");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <ErrorBoundary>
      {error && (
        <Modal isOpen={!!error} onClose={() => setError(null)}>
          <p>{`${error.statusCode} ${error.message}`}</p>
        </Modal>
      )}
      <button
        onClick={handleAddBooking}
        className="bg-white hover:bg-gray-100 text-black py-1 px-4 rounded"
      >
        Add booking
      </button>
    </ErrorBoundary>
  );
}
