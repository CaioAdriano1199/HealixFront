"use client";
import React from "react";


export default function Textarea({
    texto,
    linhas = 4,
    textocor = "preto",
    className = "",
    placeholder = "",
}) {
    const corestexto = {
        azulescuro: "text-[var(--azulescuro)]",
        preto: "text-[var(--preto)]"
    };
    return (
        <div className="w-full">
            <p className={`${corestexto[textocor]} mb-1`}>{texto}</p>
            <textarea rows={linhas} placeholder={placeholder} className={`w-full resize-none ${className}`} />
        </div>
    );
}