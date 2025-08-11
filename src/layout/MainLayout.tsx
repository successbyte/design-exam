import bg from "@/assets/bg.svg";
import Card from "@/components/ui/Card";
import Content from "@/components/ui/Content";
import HeroImage from "@/components/ui/HeroImage";

export default function Home() {
  return (
    <main className="relative w-full h-screen mx-auto z-0">
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative p-32 z-10 w-full h-full min-h-full flex justify-between items-start gap-8">
        <Content />
        <HeroImage />
        {/* <Card /> */}
      </div>

      {/* <h1 className="text-center  font-bold text-2xl text-[#8800C8] dark:text-[#2FC1FF]">
          Frequently Asked Questions
        </h1> */}
      {/* <footer className="fixed bottom-4 inset-x-0 text-center text-gray-500 dark:text-gray-400">
        Made with ❤️ by SuccessByte (Ehsanullah)
      </footer> */}
    </main>
  );
}
