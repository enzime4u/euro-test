"use client";
import React from "react";
import getAllUsers from "@/lib/getAllUsers";
import AddUserButton from "./components/AddUserButton";
import ErrorBoundary from "@/app/ErrorBoundary";
import { Modal } from "@/app/Modal";

import Link from "next/link";

export default function UsersPage() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [error, setError] = React.useState<ErrorProps | null>(null);

  React.useEffect(() => {
    getAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => setError(err));
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
        <div>
          <AddUserButton />
        </div>
        <br />
        <div className="p-4">
          {users?.map((user) => {
            return (
              <p key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </p>
            );
          })}
        </div>
      </section>
    </ErrorBoundary>
  );

  return content;
}
