import { ToastProps } from "../../components/Toast";

interface cResponse {
  status: number;
  message?: string;
  toast?: ToastProps;
  payload?: unknown;
}

export default cResponse;
