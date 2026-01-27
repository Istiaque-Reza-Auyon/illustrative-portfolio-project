import Header from "./components/Header";
import About from "./components/About";
import Image from "next/image";
import boy from "../public/boy.svg"

export default function Home() {
  return (
    <div className='bg-white h-screen overflow-auto'>
      <Header />
      <About />
    </div>
  );
}
