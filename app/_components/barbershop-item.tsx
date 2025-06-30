import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";

interface BarbershopItemProps {
    barbershop : Barbershop;
}



const BarbershopItem = ({barbershop}: BarbershopItemProps) => {
    return (
        <Card>
          <CardContent>
            {/* IMAGEM */}
            
          </CardContent>
        </Card>
    )
  
} 
 
export default BarbershopItem;