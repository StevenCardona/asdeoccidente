import {
  Compass,
  Dumbbell,
  Focus,
  Scale,
  type LucideIcon,
} from "lucide-react";

const iconMap = {
  Compass,
  Dumbbell,
  Focus,
  Scale,
} as const satisfies Record<string, LucideIcon>;

export type SchoolIconName = keyof typeof iconMap;

export function resolveSchoolIcon(name: string): LucideIcon | null {
  if (name in iconMap) {
    return iconMap[name as SchoolIconName];
  }
  return null;
}
