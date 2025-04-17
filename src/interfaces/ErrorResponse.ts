import messageResponse from "./message_response";

export default interface ErrorMessage extends messageResponse {
  stack?: string;
}
