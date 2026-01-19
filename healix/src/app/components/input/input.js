"use client";
import React from "react";


export default function Input({
    texto,
    textocor = "preto",
    className = "",
    tipo = "text",
    placeholder = "",
}) {
    const corestexto = {
        azulescuro: "text-[var(--azulescuro)]",
        preto: "text-[var(--preto)]"
    };
    return (
        <div className="w-full">
            <p className={`${corestexto[textocor]} mb-1`}>{texto}</p>
            <input type={tipo} placeholder={placeholder} className={`w-full ${className}`} />
        </div>
    );
}