import Link from "next/link";
import ButtonPlay from "../button/ButtonPlay";
import ButtonHeart from "../button/ButtonHeart";

export default function SongItem(props: any) {
    const { id = "", image = "", title = "", singer = "", listen = "", audio = "" } = props;
    return (
        <>
            <div 
                className="bg-[#212121] rounded-[15px] flex items-center p-[10px]"
                song-id={id}
            >
                <div className="w-[76px] rounded-[10px] aspect-square truncate mr-[10px]">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <div className="mb-[2px]">
                        <Link href="" className="text-[16px] font-[600] text-white">{title}</Link>
                    </div>
                    <div className="text-[12px] font-[400] text-[#FFFFFF80] mb-[5px]">
                        {singer}
                    </div>
                    <div className="text-[12px] font-[400] text-white">
                        {listen.toLocaleString()} lượt nghe
                    </div>
                </div>
                <div className="">
                    <ButtonPlay {...props} className="w-[34px] h-[34px] rounded-full border border-white inline-flex justify-center items-center text-[15px] text-white ml-[10px]"/>
                    <ButtonHeart {...props}/>
                </div>
            </div>
        </>
    )
}