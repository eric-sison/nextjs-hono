export type ErrorCode = 'code1' | 'code2';

export type ErrorResponse = {
  code: ErrorCode;
  message: string;
  status: number;
  description?: string;
  stack?: string | undefined;
};

export class MyError extends Error {
  constructor(
    public readonly code: ErrorCode,
    public readonly message: string,
    public readonly status: number,
    public description?: string,
    public readonly stack?: string | undefined,
  ) {
    super(message);
    this.name = 'MyError';
  }

  public toJSON(): ErrorResponse {
    const response: ErrorResponse = {
      code: this.code,
      message: this.message,
      status: this.status,
    };

    if (this.description) {
      response.description = this.description;
    }

    if (this.stack) {
      response.stack = this.stack;
    }

    return response;
  }
}
