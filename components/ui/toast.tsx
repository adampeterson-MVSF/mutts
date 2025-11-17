import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./button";

type ToastType = "success" | "error";

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000); // Auto close after 5 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      data-testid={type === "success" ? "toast-success" : "toast-error"}
      role="status"
      aria-live="polite"
      className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-md shadow-lg ${
        type === "success"
          ? "bg-green-500 text-white"
          : "bg-red-500 text-white"
      }`}
    >
      <span className="flex-1">{message}</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={onClose}
        className="h-auto p-1 hover:bg-white/20"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}

export function useToast() {
  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
  } | null>(null);

  const showToast = (message: string, type: ToastType) => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  const ToastComponent = () =>
    toast ? (
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={hideToast}
      />
    ) : null;

  return { showToast, ToastComponent };
}
