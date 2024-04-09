import CustomError from "@/app/CustomError";

export default async function createResource(resourceType: ResourceType) {
  try {
    const response = await fetch(
      `http://localhost:3001/api/1/${resourceType}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const error = new CustomError(`Failed to create`, response.status);
      throw error;
    }
  } catch (error: any) {
    throw new CustomError(error?.message, error!.statusCode || 500);
  }
}
