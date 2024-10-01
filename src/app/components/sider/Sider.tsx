import Link from "next/link";
import SiderMenu from "./SiderMenu";

export default function Sider() {
    return (
      <>
        <div className="bg-[#212121] h-[100vh] fixed w-[280px]">
            <div className="bg-[#1C1C1C] py-[25px] px-[20px] flex justify-centen items-center">
                <Link href="/">
                    <img src="/logo-2.jpg" alt="Logo" className="h-[60px] w-auto"/>
                </Link>
                <div className="text-primary ml-5 text-[30px] font-[900]">Jing mp3</div>
            </div>
            <SiderMenu/>
        </div>        
      </>
    );
}
  