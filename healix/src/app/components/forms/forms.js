"use client";
import React from "react";


export default function Forms({
    className = "",
    children,
}) {

    return (
        <form className={`border border-[var(--cinza)] bg-[var(--fundoforms)] p-2 rounded ${className}`}>
            {children}

        </form>
    );
}