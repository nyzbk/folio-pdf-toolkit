import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FileUp } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  multiple: boolean;
  disabled?: boolean;
  onFiles: (files: File[]) => void;
  hint?: string;
};

export function DropZone({ multiple, disabled, onFiles, hint }: Props) {
  const onDrop = useCallback(
    (accepted: File[]) => {
      const pdfs = accepted.filter(
        (f) => f.type === "application/pdf" || f.name.toLowerCase().endsWith(".pdf"),
      );
      if (pdfs.length) onFiles(pdfs);
    },
    [onFiles],
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    multiple,
    disabled,
    noClick: true,
    noKeyboard: true,
    accept: { "application/pdf": [".pdf"] },
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "rounded-xl border border-dashed border-line bg-surface px-4 py-10 text-center shadow-soft transition-colors",
        isDragActive && "border-copper bg-copper/5",
        disabled && "opacity-60",
      )}
    >
      <input {...getInputProps()} />
      <FileUp className="mx-auto mb-3 size-7 text-copper" strokeWidth={1.5} aria-hidden />
      <p className="font-medium text-ink">
        {isDragActive ? "Drop PDF files here" : multiple ? "Drop PDF files here" : "Drop a PDF here"}
      </p>
      <p className="mt-1 text-sm text-muted">{hint ?? "Everything stays in your browser."}</p>
      <button
        type="button"
        onClick={open}
        disabled={disabled}
        className="mt-5 inline-flex min-h-11 items-center rounded-md bg-ink px-5 text-sm font-medium text-paper hover:bg-copper disabled:opacity-40"
      >
        Choose files
      </button>
    </div>
  );
}
