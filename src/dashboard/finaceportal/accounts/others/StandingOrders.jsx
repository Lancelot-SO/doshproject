import pendingImg from "../../../../images/dashboard/claims/pendingImg.png";

export default function StandingOrders() {


    return (
        <div className="w-[1260px] h-[630px] max-w-full mx-auto border border-gray-500 bg-gray-900 rounded-[36px] relative overflow-hidden overflow-x-hidden">
            {/* Gradient overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "linear-gradient(86.17deg, rgba(162, 135, 95, 0.5) 11.32%, rgba(255, 255, 255, 0.05) 113.26%)",
                    backgroundBlendMode: "overlay",
                }}
            ></div>

            {/* Content */}
            <div className="flex items-center justify-center h-full">
                {/* Show this section only when popup is not open */}
                <div
                    className="text-center relative z-10 w-[184px] h-[233px] bg-[#161717] bg-opacity-[20%] rounded-[29px] p-4 flex flex-col items-center justify-center cursor-pointer"
                >
                    <div className="inline-flex items-center justify-center w-24 h-24 mb-4">
                        <img src={pendingImg} className="w-full h-full" alt="pending" />
                    </div>
                    <div className="w-[131px] h-[35px] flex flex-col items-center justify-center">
                        <h2 className="text-[9px] font-bold text-[#F4F4F4] leading-[12px]">
                            No standing order
                        </h2>
                        <p className="text-[9px] font-bold text-[#F4F4F4] leading-[11px] text-center">
                            Get started by creating a

                        </p>
                        <p className="text-[9px] font-bold text-white leading-[11px] text-center">
                            new standing orders
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}