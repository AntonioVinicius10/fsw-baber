import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Badge } from "@/components/ui/badge";

// TODO: Receber agendamento como prop

const BookingItem = () => {
    return ( 
    <>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase
         text-gray-400">
            Agendamentos
         </h2>

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
    </> 
    );
}
 
export default BookingItem;