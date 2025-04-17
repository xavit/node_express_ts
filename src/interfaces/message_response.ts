export default interface messageResponse {
  status: string;
  message: string;
  data?: any;
  error?: string;
  code?: number;
  success?: boolean;
}
