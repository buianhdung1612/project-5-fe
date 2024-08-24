export default function FormButton(props: { text: string}) {
    const { text="" } = props;
    return (
        <>
            <button type="submit" className="h-[50px] w-full bg-primary rounded-[6px] font-[700] text-[16px] text-white">
                {text}
            </button>
        </>
    )
}