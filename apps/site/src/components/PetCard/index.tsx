
import { cn } from "@/lib/utils";
import { Calendar, Heart, MapPin } from "lucide-react";
import type { JSX } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import type { Pet } from "@/@types/pet";

type Props = {
  petInformation: Pet
}

export const PetCard = ({ petInformation }: Props): JSX.Element => {
  const photos = JSON.parse(petInformation.pet_photos);
  const [main] = photos;
  console.log(main);
  console.log(petInformation);
  return (
    <Link to="#" className="group">
      <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-200 hover:shadow-md">
        <div className="relative">
          {/* Pet Image */}
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={main.url}
              alt={`Foto de ${petInformation.name}`}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Favorite Button */}
          <button
            onClick={() => console.log("Favoritar pet")}
            className="absolute right-3 top-3 rounded-full bg-white/80 p-2 backdrop-blur-sm transition-all hover:bg-white"
            // aria-label={favorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          >
            <Heart
              className={cn(
                "h-5 w-5 transition-colors",
               "text-gray-600 hover:text-rose-500 cursor-pointer",
              )}
            />
          </button>

          {/* Gender Badge */}
          <div className="absolute bottom-3 left-3">
            <Badge
              className={cn("px-2 py-1", petInformation.gender === "M" ? "bg-blue-100 text-blue-700" : "bg-rose-100 text-rose-700")}
            >
              {petInformation.gender === "M" ? "Macho" : "Fêmea"}
            </Badge>
          </div>
        </div>

        {/* Pet Information */}
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-bold text-gray-900">{petInformation.name}</h3>
            <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-700">
              {petInformation.size === "Pequeno" ? "Pequeno" : petInformation.size === "Médio" ? "Médio" : "Grande"}
            </Badge>
          </div>

          <p className="text-sm text-gray-600">Raça</p>

          <div className="mt-3 flex flex-col gap-1.5">
            <div className="flex items-center text-xs text-gray-500">
              <Calendar className="mr-1.5 h-3.5 w-3.5" />
              <span>Idade</span>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <MapPin className="mr-1.5 h-3.5 w-3.5" />
              <span>Loction</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <Badge variant="secondary" className="bg-rose-50 text-rose-700 hover:bg-rose-100">
              Disponível para adoção
            </Badge>
            {/* <span className="text-xs font-medium text-gray-500">ID: {.slice(0, 6)}</span> */}
          </div>
        </div>
      </div>
    </Link>
  )
};
