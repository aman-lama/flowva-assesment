
export default function RootLayout({ children }: { children: React.ReactNode }) {



  return (
    <html lang="en" className="scroll-smooth" >
      <body className="  text-gray-900 font-sans">
        
          
              <main className="grow p-6 overflow-auto z-0 shadow-inner/2 bg-[#f9f9f9]">
                {children}
              </main>
           
      </body>
    </html>
  );
}