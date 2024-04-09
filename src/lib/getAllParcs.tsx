import CustomError from "@/app/CustomError";
export default async function getAllParcs() {
  try {
    const res = await fetch("http://localhost:3001/api/1/parcs");
    const response = await res.json();

    if (!res.ok) {
      const error = new CustomError(response.statusText, res.status);
      throw error;
    }
    return response;
  } catch (error: any) {
    throw new CustomError(error?.message, error!.statusCode || 500);
  }
}
