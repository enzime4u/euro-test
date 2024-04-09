"use client";

import React, { useState } from "react";
import createResource from "@/lib/createResource";
import ErrorBoundary from "@/app/ErrorBoundary";
import { Modal } from "@/app/Modal";

export default function AddParcButton() {
  const [error, setError] = useState<any>(null);

  const handleAddParc = async () => {
    await createResource("parcs")
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
        onClick={handleAddParc}
        className="bg-white hover:bg-gray-100 text-black py-1 px-4 rounded"
      >
        Add parc
      </button>
    </ErrorBoundary>
  );
}
