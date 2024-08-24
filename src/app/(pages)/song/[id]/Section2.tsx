import Title from "@/app/components/title/Title";

export default function Section2(props: { lyric : string }) {
    const { lyric } = props;
    return(
        <>
            <div className="mt-[30px]">
                <Title text="Lời Bài Hát"/>
                <div className="bg-[#212121] text-white p-[20px] rounded-[15px] whitespace-pre-line">
                    {lyric}
                </div>
            </div>
        </>
    )
}