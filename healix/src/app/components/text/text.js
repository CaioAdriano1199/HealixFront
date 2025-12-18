"use client";

export default function Text({
    children,
    color = "red",
    size = "medium",
    className = "",

}) {
    const colors = { red: "text-red-500", blue: "text-blue-500", green: "text-green-500" };
    const sizes = { small: "text-sm", medium: "text-base", large: "text-lg" };


    return (
        <p className={`${colors[color]} ${sizes[size]} ${className}`}>
            {children}
        </p>
    );
}