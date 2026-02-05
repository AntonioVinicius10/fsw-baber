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
import { QuickSearchOpitions } from "./_constants/search";
import BookingItem from "./_components/booking-item";




const Home = async () => {
   // chamar meu banco de dados 
   const barbershops = await db.barbershop.findMany({});
   //console.log({ barbershops })
   const popularBarbershops = await db.barbershop.findMany({
      orderBy:{
         name: "desc",
      }
   })
   return (
      <div>
      {/* header */}
         <Header />
   <div className="p-2">
      <h2 className="text-xl font-bold"> Olá, Antonio</h2>
      <p>Sengunda-feira, 05 de Junho.</p>
      </div>


         {/* BUSCA  */}
      <div className="flex items-center gap-2 mt-2">
         <Input placeholder="Faça sua busca..." />
         <Button className="bg-indigo-700">
            <SearchIcon />
         </Button>
      </div>

         {/* BUSCA RAPIDA  */}
         <div className="mt-6 gap-3 space-x-[4px] overflow-x-scroll flex
         [&::-webkit-scrollbar]:hidden">
             {QuickSearchOpitions.map((option) => (
               <Button className="gap-2 " key={option.title}>
                  <img src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                  />
                 {option.title}
               </Button>
            ))}

         </div>

            {/* IMAGEM  */}
      <div className="relative h-[150px] w-full mt-[5px]">
         <Image alt="imagem Agende com os melhores Barbeiros"
          src="/banner.svg" 
          fill className="object-cover rounded-[5px]"/>
      </div>
      {/* AGENDAMENTO*/ }
      <BookingItem />
      
      {/*Agendamento*/}
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
         Recomendados
      </h2>
      
         <div className=" flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
         {popularBarbershops.map(barbershop => ( <BarbershopItem key={barbershop.id} 
          barbershop={barbershop} />)) }
      </div>
<br></br>
 </div>
)
};

export default Home
