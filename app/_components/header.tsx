import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image"


const  Header = () => {
    return ( 
        <Card className="p-1">
            <CardContent className="flex flex-row items-center justify-between">
             <Image src="/imagem/logotipo.svg" 
             alt="fws-baber"
              width={120} height={18} 
            />
            <Button size="icon" variant="outline">
                <MenuIcon />
            </Button>
            </CardContent>
        </Card>
        

     );
}
 
export default Header