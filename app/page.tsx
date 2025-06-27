import { SearchIcon } from "lucide-react";
import Header from "./_components/header"
import { Button } from "./_components/ui/button";
import { Input } from "@/components/ui/input"
import Image from "next/image"

const Home = () => {
 return (
   <div>
      {/* header */}
      <Header />
   <div className="p-5">
      <h2 className="text-xl font-bold"> Olá, Antonio!</h2>
      <p>Sengunda-feira, 05 de Junho.</p>

      <div className="flex items-center gap-2 mt-6">
         <Input placeholder="Faça sua busca..." />
         <Button>
            <SearchIcon />
         </Button>
      </div>
      <div className="relative h-[150px] w-full mt-[5px]">
         <Image alt="imagem Agende com os melhores Barbeiros"
          src="/imagem/banner.svg" 
          fill className="object-cover rounded-[5px]"/>
      </div>
   </div>
 </div>
)
};

export default Home
