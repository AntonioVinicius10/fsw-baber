import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { QuickSearchOpitions } from "../_constants/search";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const Header = () => {
  return (
    <Card className="min-w-full max-w-full">
      <CardContent className="flex flex-row items-center justify-between">
        <Image
          src="/logotipo.svg"
          alt="fws-baber"
          width={120}
          height={18}
        />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            {/* AVATAR DO USUARIO */}
            <div className="flex w-[350px] gap-1 py-5 itens-center border-b border-solid">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png"
                className="w-12 h-12 opacity-100 rounded-3xl"
                />
              
            </Avatar>
            <div>
              <p className="font-bold text-[16px] w-[125px] h-[22px]">Pedro Gonsalves</p>
              <p className="w-[152] h-[17] text-[12px] ">pedrogonsalves@gmail.com</p>
            </div>
            </div>

            <div className="flex flex-col gap-2 py-5 border-b border-solid">
              <SheetClose asChild>
                  <Button asChild className="justify-start gap-1" variant="outline">
                     <Link href="/" className="flex items-center gap-1">
                          <HomeIcon size={18} />
                          Início
                        </Link>
                  </Button>
              </SheetClose>
            <Button className="justify-start gap-2" variant="outline">
                <CalendarIcon size={18} />
                Agendamento
                </Button>
            </div>
            <div className="flex flex-col gap-2 py-5 border-b border-solid">
           {QuickSearchOpitions.map((option) => (
            <Button  className="justify-start gap-2" variant="ghost">
              <img src={option.imageUrl} 
              height={18}
               width={18} />
              {option.title}
            </Button>
           ))}
            </div>
            <div className="flex flex-col gap-2 py-5">
              <Button variant="ghost" className="justify-start gap-2">
                <LogOutIcon size={18} />
                Sair da conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
