import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatBytes } from "@/lib/utils";

export type ListedFile = {
  id: string;
  file: File;
  pageCount?: number;
  error?: string;
};

type Props = {
  items: ListedFile[];
  onRemove: (id: string) => void;
  onMove?: (id: string, dir: -1 | 1) => void;
};

export function FileList({ items, onRemove, onMove }: Props) {
  if (items.length === 0) return null;

  return (
    <ul className="mt-4 space-y-2">
      {items.map((item, index) => (
        <li
          key={item.id}
          className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2"
        >
          {onMove ? (
            <div className="flex flex-col">
              <button
                type="button"
                aria-label="Move up"
                disabled={index === 0}
                onClick={() => onMove(item.id, -1)}
                className="flex size-8 items-center justify-center rounded-sm text-muted hover:text-ink disabled:opacity-30"
              >
                <ChevronUp className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Move down"
                disabled={index === items.length - 1}
                onClick={() => onMove(item.id, 1)}
                className="flex size-8 items-center justify-center rounded-sm text-muted hover:text-ink disabled:opacity-30"
              >
                <ChevronDown className="size-4" />
              </button>
            </div>
          ) : null}
          <div className="min-w-0 flex-1 text-left">
            <p className="truncate text-sm font-medium">{item.file.name}</p>
            <p className="text-xs text-muted">
              {formatBytes(item.file.size)}
              {item.pageCount != null ? ` · ${item.pageCount} page${item.pageCount === 1 ? "" : "s"}` : ""}
              {item.error ? ` · ${item.error}` : ""}
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={`Remove ${item.file.name}`}
            onClick={() => onRemove(item.id)}
            className="size-11 shrink-0"
          >
            <X className="size-4" />
          </Button>
        </li>
      ))}
    </ul>
  );
}
