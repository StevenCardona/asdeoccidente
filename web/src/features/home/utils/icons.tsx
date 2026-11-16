import {
  CalendarDays,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Trophy,
  Horse: Trophy,
  Users,
  HeartHandshake,
  Landmark,
  GraduationCap,
  CalendarDays,
};

export function resolveLucideIcon(name?: string): LucideIcon | null {
  if (!name) return null;
  return iconMap[name] ?? null;
}
