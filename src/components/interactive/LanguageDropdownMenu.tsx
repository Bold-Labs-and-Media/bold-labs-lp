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
      <DropdownMenuTrigger className="flex cursor-pointer items-center gap-2.5">
        {label}
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-txt-100 border-txt-200 px-4 text-white">
        {languages.map(({ code, label }) => (
          <DropdownMenuItem key={code}>
            <a className="hover:text-primary duration-300" href={`/${code}`}>
              {label}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
