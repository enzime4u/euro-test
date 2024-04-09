"use client";

import React from "react";
import deleteParc from "@/lib/deleteParc";
import { useRouter } from "next/navigation";

type DeleteParcButtonProps = {
  parcId: string;
};

export function DeleteParcButton({ parcId }: DeleteParcButtonProps) {
  const router = useRouter();
  const handleDeleteParc = async () => {
    await deleteParc(parcId);
    router.push("/parcs");
  };

  return (
    <button
      className="bg-red-700 text-white py-1 px-4 rounded mt-3"
      onClick={handleDeleteParc}
    >
      Delete
    </button>
  );
}
