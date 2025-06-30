import { SearchIcon } from "lucide-react";
import Header from "./_components/header"
import { Button } from "./_components/ui/button";
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "@/components/ui/badge";
import { db } from "@/_lib/prisma"
import BarbershopItem from "./_components/barbershop-item";



const Home = async () => {
   // chamar meu banco de dados 
   const barbershops = await db.barbershop.findMany({});
   //console.log({ barbershops })
 return (
   <div>
      {/* header */}
      <Header />
   <div className="p-2">
      <h2 className="text-xl font-bold"> Olá, Antonio!</h2>
      <p>Sengunda-feira, 05 de Junho.</p>

      <div className="flex items-center gap-2 mt-2">
         <Input placeholder="Faça sua busca..." />
         <Button className="bg-indigo-700">
            <SearchIcon />
         </Button>
      </div>
      <div className="relative h-[150px] w-full mt-[5px]">
         <Image alt="imagem Agende com os melhores Barbeiros"
          src="/imagem/banner.svg" 
          fill className="object-cover rounded-[5px]"/>
      </div>
      {/* AGENDAMENTO*/ }
      <Card className="mt-2 p-1">
        <CardContent className="flex justify-between ">
         {/* ESQUERDA */}
         <div className="flex flex-col gap-2 ">
           <Badge className="w-fit bg-indigo-700">Confirmado</Badge>
            <h3 className="font-semibold">Corte de Cabelo</h3>

            <div className="flex items-center gap-2">
               <Avatar className="h-6 w-8 ">
                  <AvatarImage className="rounded-full" src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
               </Avatar>
               <p className="text-sm">Barbearia FSW</p>
            </div>
         </div>
         {/* DIREITA */}
         <div className="flex flex-col  items-center justify-center border-l-2 border-solid px-1">
            <p className="text-sm">Junho</p>
            <p className="text-2xl">27</p>
            <p className="text-sm">20:00</p>
         </div>
        </CardContent>
      </Card> 
      {/*Agendamento*/}
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
         Recomendados
      </h2>
      {barbershops.map(barbershop => ( <BarbershopItem key={barbershop.id} 
      barbershop={barbershop} />)) }
   </div>
 </div>
)
};

export default Home
