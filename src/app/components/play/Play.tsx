import { FaBackwardStep, FaForwardStep, FaPlay, FaVolumeHigh } from "react-icons/fa6";
import PlayAudio from "./PlayAudio";
import PlayInfo from "./PlayInfo";
import PlayActions from "./PlayActions";
import PlayTime from "./PlayTime";
import PlayVolume from "./PlayVolume";

export default function Play() {
  return (
    <>
      <div className="bg-[#212121] boder-t border-[#494949] fixed bottom-0 left-0 w-full py-[20px] z-[999] play-audio hidden">
        <PlayAudio/>
        <div className="container mx-auto flex items-center justify-between">
          {/* Khối bên trái */}
          <PlayInfo/>
          {/* Khối ở giữa */}
          <div className="flex-1 mx-[66px]">
            {/* Các nút */}
            <PlayActions/>
            {/* Thanh trượt */}
            <PlayTime/>
          </div>
          {/* Khối bên phải */}
          <PlayVolume/>
        </div>
      </div>
    </>
  );
}
