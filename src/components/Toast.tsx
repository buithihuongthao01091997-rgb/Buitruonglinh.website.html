import { CheckCircle2, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export function Toast() {
  const { toastMessage, dismissToast } = useStore();

  if (!toastMessage) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-[#0b1220] border border-[#b8dcff]/40 text-white px-4 py-3 rounded-lg shadow-2xl max-w-[340px]"
    >
      <CheckCircle2 className="w-4 h-4 text-[#b8dcff] shrink-0" />
      <span className="text-xs font-medium leading-snug">{toastMessage}</span>
      <button
        type="button"
        onClick={dismissToast}
        aria-label="Đóng thông báo"
        className="text-[#a9adc1] hover:text-white p-0.5 cursor-pointer bg-transparent border-0 shrink-0"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
