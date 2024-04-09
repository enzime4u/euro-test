"use client";

import React, { useState, useEffect } from "react";
import getUser from "../../../lib/getUser";
import ErrorBoundary from "@/app/ErrorBoundary";
import { Modal } from "@/app/Modal";
import { DeleteButton } from "../components/DeleteButton";

type Params = {
  params: {
    userId: string;
  };
};

export default function UserPage({ params: { userId } }: Params) {
  const [user, setUser] = useState<User | null>(null);

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getUser(userId)
      .then(setUser)
      .catch((err) => setError(err));
  }, [userId]);

  return (
    <ErrorBoundary>
      {error && (
        <Modal isOpen={!!error} onClose={() => setError(null)}>
          <p>{error.message}</p>
        </Modal>
      )}

      <div>
        <h3>{user?.name}</h3>
        <p>{user?.email}</p>

        <DeleteButton userId={userId} />
      </div>
    </ErrorBoundary>
  );
}
