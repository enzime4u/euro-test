class CustomError extends Error {
  statusCode;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "CustomError";
    this.statusCode = statusCode;
  }
}

export default CustomError;
