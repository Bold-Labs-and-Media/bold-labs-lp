import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function LanguageDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2.5">
        Idioma
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-txt-100 text-white border-txt-200 px-4">
        <DropdownMenuItem>
          <a href="#pt">Português</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="#en">English</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
