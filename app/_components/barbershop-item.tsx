import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge, StarIcon } from "lucide-react";
import { Star } from "lucide-react";
import Link from "next/link";

interface BarbershopItemProps {
    barbershop : Barbershop
}



const BarbershopItem = ({barbershop}: BarbershopItemProps) => {
    return (
        <Card className="p-0">
          <CardContent className="p-0">
            {/* IMAGEM */}
            <div className="relative w-[159px] p-[2px] ">
             <img
        src={barbershop.imageUrl}
        alt={barbershop.name}
        className="object-cover rounded-2xl"
      />

            {/* AVALIÇÕES  */}
            
            <div className=" absolute left-2 top-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                <Star className="w-4 
                  h-4 mr-1
                 fill-yellow-500
                 text-yellow-500" 
                 />
                4.8 / 5
              </div>


            </div>
      {/* {TEXTO} */}
        <div className="p-2 w-[150px]">
          <h3 className="font-semibold truncate">{barbershop.name}</h3>
          <p className="text-sm text-gray-400 truncate">{barbershop.address}</p>
          <Button className=" cursor-pointer " asChild>
          <Link href= {`/barbershop/${barbershop.id}`}>
               Reservar
          </Link> 
            </Button>
        </div>
             
          </CardContent>
        </Card>
    )
  
} 
 
export default BarbershopItem;