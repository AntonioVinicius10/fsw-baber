import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPin, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";




interface BarbershopPageProps {
  params: {
    id: string;
  };
}

const barbershopPage = async ({ params }: BarbershopPageProps) => {

    // chamar o meu banco de dados 

    const barbershop = await db.barbershop.findUnique({

        where: {
            id: params.id
        },
    })

      if (!barbershop) {
        return notFound()
      }

    return (
    <div>
      {/*IMAGE*/}
      <div className="relative">
        <img 
        alt={barbershop?.name}
        src={barbershop?.imageUrl}
        
        className="h-full w-full"
         />

          <button
          className="absolute left-4 top-4 bg-black rounded-md">
            <Link href="/">
            <ChevronLeftIcon/>
            </Link>
            
          </button>

          <button
          className="absolute right-4  top-4 bg-black rounded-md"
          >
            <MenuIcon/>
          </button>

      </div>

      {/*TEXTO*/}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon className="text-primary " size={18}/>
          <p className="text-sm">{barbershop?.address}</p>
        </div>

          <div className="mb-2 flex items-center gap-1">
          <StarIcon className="fill-primary text-primary " size={18}/>
          <p className="text-sm">5,0 (499 avaliações)</p>
        </div>

      </div>
      {/* DESCRIÇÃO*/}
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Sobre nos</h2>
        <p className="text-sm text-justify">{barbershop?.description}</p>
      </div>



    </div>
) }
 
export default barbershopPage; 