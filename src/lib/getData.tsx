import CustomError from "@/app/CustomError";

export default async function getData(endpoint: string, id?: string) {
  try {
    const idParam = id ? `/${id}` : "";
    const res = await fetch(
      `http://localhost:3001/api/1/${endpoint}${idParam}`,
    );

    if (!res.ok) {
      const error = new CustomError(res.statusText, res.status);
      throw error;
    }

    const response = await res.json();

    return response;
  } catch (error: any) {
    throw new CustomError(error?.message, error!.status || 500);
  }
}
