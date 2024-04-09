import CustomError from "@/app/CustomError";

export default async function getAllUsers() {
  try {
    const res = await fetch("http://localhost:3001/api/1/users");
    const response = await res.json();

    if (!res.ok) {
      const error = new CustomError(res.statusText, res.status);

      throw error;
    }

    return response;
  } catch (error: any) {
    throw new CustomError(error?.message, error!.statusCode || 500);
  }
}
