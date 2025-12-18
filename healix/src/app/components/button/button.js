"use client";
import React from "react";
import Text from "../text/text";

export default function Button({
    children,
    className = "",
    onClick = () => {},
}) {

    return (
        <button className={`${className}`} onClick={onClick}>
            <Text color="red" size="small">
                {children}
            </Text>
        </button>
    );
}