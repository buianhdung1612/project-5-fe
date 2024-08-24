export default function FormInput(props: any) {
    const {
        label = "",
        type = "text",
        id = "",
        name = "",
        placeholder = "",
        required = false

    } = props;
    return (
        <>
            <div className="mb-[15px]">
                {label && (
                    <label className="block mb-[5px] font-[600] text-[14px]" htmlFor={id}>
                        <span className="text-white">{label}</span>
                        <span className="text-red-500 ml-[5px]">*</span>
                    </label>
                )}
                <input
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    className="h-[50px] w-full px-[16px] rounded-[6px] bg-white font-[600] text-[14px] outline-none"
                    required={required}
                />
            </div>
        </>
    )
}