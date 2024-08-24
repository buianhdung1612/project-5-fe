export default function BannerHome() {
    return (
        <>
            <div className="w-full flex items-center rounded-[15px] bg-cover" style={{ backgroundImage: "url('/demo/background-1.png')" }}>
                <div className="flex-1 ml-[30px] mr-[34px]">
                    <div className="text-[32px] font-[700] text-white mb-[6px ]">
                        Nhạc EDM
                    </div>
                    <div className="text-[14px] font-[500] text-white">
                        Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
                    </div>
                </div>
                <div className="w-[215px] mr-[22px] mt-[48px]">
                    <img src="/demo/image-2.png" alt="Nhạc EDM" className="w-full h-auto" />
                </div>
            </div>
        </>
    )
}