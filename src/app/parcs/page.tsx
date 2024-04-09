"use client";
import React from "react";
import getAllParcs from "@/lib/getAllParcs";
import Link from "next/link";
import ErrorBoundary from "../ErrorBoundary";
import { Modal } from "../Modal";
import AddParcButton from "./components/AddNewParcButton";

export default function ParcsPage() {
  const [parcs, setParcs] = React.useState<Parc[]>([]);
  const [error, setError] = React.useState<ErrorProps | null>(null);

  React.useEffect(() => {
    getAllParcs()
      .then((response) => {
        setParcs(response.data);
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
        <AddParcButton />
        <br />
        <div className="p-4">
          {parcs?.map((parc) => {
            return (
              <p key={parc.id}>
                <Link href={`/parcs/${parc.id}`}>{parc.name}</Link>
              </p>
            );
          })}
        </div>
      </section>
    </ErrorBoundary>
  );
  return content;
}
