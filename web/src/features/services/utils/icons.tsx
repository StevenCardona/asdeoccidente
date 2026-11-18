import {
  ArrowLeftRight,
  CalendarDays,
  ClipboardCheck,
  Copy,
  FileText,
  FolderOpen,
  HeartHandshake,
  Stamp,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  ArrowLeftRight,
  ClipboardCheck,
  Copy,
  HeartHandshake,
  CalendarDays,
  Stamp,
  FolderOpen,
};

export function resolveServiceIcon(name?: string): LucideIcon {
  if (!name) return FileText;
  return iconMap[name] ?? FileText;
}
