import { Button } from "@/components/ui/button";
import { PawPrint, Heart, Search } from "lucide-react";
import SideBanner from "@/assets/home/side-pic-banner.jpg"

export default function HeroBanner() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <PawPrint className="h-24 w-24 text-amber-500" />
        </div>
        <div className="absolute top-40 right-20">
          <PawPrint className="h-16 w-16 text-rose-400" />
        </div>
        <div className="absolute bottom-10 left-1/4">
          <PawPrint className="h-20 w-20 text-amber-400" />
        </div>
        <div className="absolute bottom-20 right-1/3">
          <PawPrint className="h-12 w-12 text-rose-500" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-amber-800">
              <Heart className="mr-1 h-4 w-4" /> Encontre seu companheiro perfeito
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Dê um lar para sempre a um pet em um <span className="text-rose-500">Lar Permanente</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl cursor-pointer">
              Conecte-se com adoráveis pets aguardando adoção. Nossa plataforma facilita encontrar seu companheiro perfeito e oferecer a eles o lar carinhoso que merecem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600 cursor-pointer">
                <Search className="h-4 w-4" /> Encontrar um Pet
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-700 hover:bg-amber-50"
              >
                <PawPrint className="mr-2 h-4 w-4" /> Anunciar um Pet
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src={SideBanner}
              alt="Pets felizes prontos para adoção"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center">
                  <PawPrint className="h-6 w-6 text-rose-500" />
                </div>
                <div className="text-white">
                  <p className="text-sm font-medium">Mais de 1.000 pets</p>
                  <p className="text-xs opacity-80">
                    Buscando seu lar para sempre
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
              <Heart className="h-5 w-5 text-amber-600" />
            </div>
            <p className="text-sm font-medium">Processo de Adoção Fácil</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
              <PawPrint className="h-5 w-5 text-rose-600" />
            </div>
            <p className="text-sm font-medium">Perfis de Pets Verificados</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
              <Search className="h-5 w-5 text-amber-600" />
            </div>
            <p className="text-sm font-medium">Encontre Pets Próximos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
