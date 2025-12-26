
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

    <main className="grow p-6 overflow-auto z-0 shadow-inner/2 bg-[#f9f9f9]">
      {children}
    </main>

  );
}