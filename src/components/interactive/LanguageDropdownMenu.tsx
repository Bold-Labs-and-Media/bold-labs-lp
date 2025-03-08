import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

type Props = {
  label: string;
  languages: {
    code: string;
    label: string;
  }[];
};
export default function LanguageDropdownMenu({ label, languages }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2.5">
        {label}
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-txt-100 text-white border-txt-200 px-4">
        {languages.map(({ code, label }) => (
          <DropdownMenuItem key={code}>
            <a href={`/${code}`}>{label}</a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
