import CustomError from "@/app/CustomError";

export default async function getParc(parcId: string) {
  try {
    const response = await fetch(`http://localhost:3001/api/1/parcs/${parcId}`);

    if (!response.ok) {
      const error = new CustomError(response.statusText, response.status);

      throw error;
    }
    return response.json();
  } catch (error: any) {
    throw new CustomError(error?.message, error!.statusCode || 500);
  }
}
