"use client"

import { SmartphoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface Phoneitemprops {
    phone: string
}

const phoneItem = ({ phone}: Phoneitemprops) => {
    const handCopyPhoneClick = (phone: string) => {
        navigator.clipboard.writeText(phone)
        toast.success("Telefone copiado com sucesso!!!")
    }
    return ( 
        
    <div className="flex justify-between" key={phone}>
            {/*ESQUERDA*/}
            <div className="flex items-center gap-2">
                <SmartphoneIcon />
                <p className="text-sn">{phone}</p>
            </div>
            {/* DIREITA */}
            <Button variant="outline" 
            size= "sm"
            onClick={()=> handCopyPhoneClick(phone)}
            className="cursor-pointer">
                Copiar
            </Button>
    </div>  
                
    );
}
 
export default phoneItem ;