
export const Footer = () => {
  return (
    <footer className="flex flex-col min-h-[110px] justify-center text-gray-100 bg-gradient-to-r from-amber-50 to-rose-50 border border-t-2 border-gray-200">
      <div className="flex items-start flex-col">
        {/* <div className="flex flex-wrap justify-center md:justify-between items-center md:pr-6 md:pl-6">
          <Link to="/" className="flex items-center justify-center gap-2">
            <div className="flex items-center">
              <PawPrint className="w-8 h-8 text-rose-600 mr-2" />
              <span className="text-2xl font-bold mt-1 text-rose-600">Caminho</span>
              <span className="text-2xl font-bold mt-1 text-rose-600 text-primary-700 ml-2">do Lar</span>
            </div>
          </Link>
        </div> */}
        <p className="text-sm text-gray-600 self-center mt-8 font-semibold">
         @2025 Caminho Do Lar. Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};
