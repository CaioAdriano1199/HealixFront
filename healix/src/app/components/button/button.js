"use client";
import React from "react";


export default function Button({
    tipo = "button",
    children,
    className = "",
    onClick = () => {},
}) {

    return (
        <button type={tipo} className={`${className}`} onClick={onClick}>

                {children}

        </button>
    );
}