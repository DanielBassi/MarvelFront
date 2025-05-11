export interface ApiResponse<T> {
  isSuccessful: boolean;
  isError: boolean;
  message: string;
  data: T;
}