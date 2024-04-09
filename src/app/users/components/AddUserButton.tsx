"use client";

import React, { useState } from "react";
import createResource from "@/lib/createResource";
import ErrorBoundary from "@/app/ErrorBoundary";
import { Modal } from "@/app/Modal";

export default function AddUserButton() {
  const [error, setError] = useState<any>(null);

  const handleAddUser = async () => {
    await createResource("users")
      .then(() => {
        alert("User created successfully");
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
        onClick={handleAddUser}
        className="bg-white hover:bg-gray-100 text-black py-1 px-4 rounded"
      >
        Add user
      </button>
    </ErrorBoundary>
  );
}
