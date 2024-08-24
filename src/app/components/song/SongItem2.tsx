import Link from "next/link";
import ButtonPlay from "../button/ButtonPlay";
import ButtonHeart2 from "../button/ButtonHeart2";

export default function SongItem2(props: any) {
    const { image = "", title = "", singer = "", time = "", link = "" } = props;
    return (
        <>
            <div className="flex items-center justify-between bg-[#212121] px-[18px] pt-[10px] rounded-[15px]">
                {/* Left */}
                <div className="w-[40%] flex items-center">
                    <ButtonPlay {...props} className="text-white text-[24px]"/>
                    <div className="w-[42px] aspect-square truncate rounded-[8px] mx-[12px]">
                        <img src={image} alt={title} className="w-full h-full object-cover"/>
                    </div>
                    <div className="font-[700] text-[14px] text-white">
                        <Link href={link}>
                            {title}
                        </Link>                       
                    </div>
                </div>
                {/* Center */}
                <div className="w-[30%] text-center">
                    <div className="font-[400] text-[14px] text-white">
                        {singer}
                    </div>
                </div>
                {/* Right */}
                <div className="w-[30%] flex justify-end">
                    <div className="font-[400] text-[14px] text-white mr-[18px]">{time}</div>
                    <ButtonHeart2 {...props}/>
                </div>
            </div>
        </>
    )
}