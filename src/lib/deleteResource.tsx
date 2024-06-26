import CustomError from "@/app/CustomError";

export default async function deleteResource(
  resourceType: ResourceType,
  resourceId: string
): Promise<Response> {
  try {
    const response = await fetch(
      `http://localhost:3001/api/1/${resourceType}/${resourceId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      const error = new CustomError(response.statusText, response.status);
      throw error;
    }

    return response;
  } catch (error: any) {
    throw new CustomError(error?.message, error.statusCode || 500);
  }
}
