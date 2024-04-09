"use client";
import React, { useState, useEffect } from "react";
import ErrorBoundary from "@/app/ErrorBoundary";
import getParc from "@/lib/getParc";
import { Modal } from "@/app/Modal";
import { DeleteParcButton } from "../components/DeleteParcButton";
interface ParcPageProps {
  params: {
    parcId: string;
  };
}

export default function ParcPage({ params: { parcId } }: ParcPageProps) {
  const [parc, setParc] = React.useState<Parc | null>(null);

  const [error, setError] = useState<ErrorProps | null>(null);

  useEffect(() => {
    getParc(parcId)
      .then(setParc)
      .catch((err) => setError(err));
  }, [parcId]);

  return (
    <ErrorBoundary>
      {error && (
        <Modal isOpen={!!error} onClose={() => setError(null)}>
          <p>An error occurred: {`${error.statusCode} ${error.message}`}</p>
        </Modal>
      )}
      <div>
        <h3>{parc?.name}</h3>
        <p>{parc?.description}</p>
        <DeleteParcButton parcId={parcId} />
      </div>
    </ErrorBoundary>
  );
}
