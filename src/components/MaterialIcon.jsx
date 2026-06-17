import {
  ArrowDown,
  BookOpen,
  Calendar,
  Clock,
  Flower2,
  GraduationCap,
  Home,
  Images,
  Map,
  MapPin,
  Menu,
} from "lucide-react";

const ICONS = {
  arrow_downward: ArrowDown,
  auto_stories: BookOpen,
  calendar_month: Calendar,
  home: Home,
  local_florist: Flower2,
  location_on: MapPin,
  map: Map,
  menu: Menu,
  photo_library: Images,
  schedule: Clock,
  school: GraduationCap,
};

export default function MaterialIcon({ name, className = "", filled = false }) {
  const Icon = ICONS[name];
  if (!Icon) return null;

  return (
    <Icon
      className={className}
      size="1em"
      strokeWidth={filled ? 2.5 : 2}
      fill={filled ? "currentColor" : "none"}
      aria-hidden="true"
    />
  );
}
