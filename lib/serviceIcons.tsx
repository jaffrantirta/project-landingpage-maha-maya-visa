import {
  PaperAirplaneIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  HomeModernIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  tourist: PaperAirplaneIcon,
  business: BriefcaseIcon,
  working: BuildingOfficeIcon,
  family: UserGroupIcon,
  retirement: HomeModernIcon,
  others: DocumentTextIcon,
};
