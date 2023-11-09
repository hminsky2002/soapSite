import Image from "next/image";
import Button from "../components/Button";
export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <Button />
        <div className="flex justify-center ">
          <Image src="/soapSlide1.png" alt="picture of soap magazine" width={1000} height={1000} />
        </div>
    </main>
  );
}
