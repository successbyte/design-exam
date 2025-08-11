import bg from "@/assets/bg.svg";

export default function Home() {
  return (
    <main className="relative h-full w-full min-h-screen mx-auto p-4">
      <img
        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover"
        src={bg}
        alt="background"
      />
      <h1 className="text-center my-8 md:my-12 lg:my-16 font-bold text-2xl text-[#8800C8] dark:text-[#2FC1FF]">
        Frequently Asked Questions
      </h1>

      {/* <footer className="fixed bottom-4 inset-x-0 text-center text-gray-500 dark:text-gray-400">
        Made with ❤️ by SuccessByte (Ehsanullah)
      </footer> */}
    </main>
  );
}
