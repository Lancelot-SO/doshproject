import React from "react";

export default function PaymentDetails({
    debitingFrom = "Jerry Sam",
    paymentMode = "Dosh",
    paymentMethod = "Yearly",
    amountPerYear = "GHS365",
    initialCharges = "GHS0.00",
    fixFeeCharges = "GHS0.00",
    total = "GHS365.00",
    onClose,
    onContinue,
}) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg min-w-[350px] smallS8:h-full w-full p-4 mt-[40px]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Confirmation</h2>
                    <button
                        className="text-gray-500 hover:text-gray-800"
                        onClick={onClose}
                    >
                        ✖
                    </button>
                </div>
                <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 rounded-full bg-[#B69676] flex items-center justify-center">
                        <span className="text-white text-2xl">✔</span>
                    </div>
                </div>
                <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-1">Thank you!</h3>
                    <p className="text-gray-600">You are debiting from {debitingFrom}</p>
                </div>
                <div className="bg-[#FDF8F6] rounded-lg p-4 space-y-3 mb-6">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Payment mode</span>
                        <span>{paymentMode}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Payment method</span>
                        <span>{paymentMethod}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Amount per year</span>
                        <span>{amountPerYear}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Initial charges</span>
                        <span>{initialCharges}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Fix fee charges</span>
                        <span>{fixFeeCharges}</span>
                    </div>
                </div>
                <div className="flex justify-between font-semibold mb-6">
                    <span>Total</span>
                    <span>{total}</span>
                </div>
                <div className="flex gap-3">
                    <button
                        className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-100"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    <button
                        className="flex-1 bg-[#B69676] text-white py-2 rounded-md hover:bg-[#A68666]"
                        onClick={onContinue}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
