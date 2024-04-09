"use client";

import React from "react";
import deleteUser from "@/lib/deleteUser";
import { useRouter } from "next/navigation";

type DeleteButtonProps = {
  userId: string;
};

export function DeleteButton({ userId }: DeleteButtonProps) {
  const router = useRouter();
  const handleDeleteUser = async () => {
    await deleteUser(userId);
    router.push("/users");
  };

  return (
    <button
      className="bg-red-700 text-white py-1 px-4 rounded mt-3"
      onClick={handleDeleteUser}
    >
      Delete
    </button>
  );
}
