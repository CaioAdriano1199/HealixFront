"use client";
import React from "react";
import Button from "../components/button/button";
import Forms from "../components/forms/forms";
import Input from "../components/input/input";

export default function Home() {
  return (
    <div>
        <div className="flex justify-around w-full h-12 fixed bottom-0 bg-[var(--azulescuro)]">
    <button className="flex justify-center items-center bg-[var(--azulescuro)] text-[var(--fundobranco)] w-[33%] pb-1 active:bg-[var(--fundobranco)] active:text-[var(--azulescuro)]">
      <i className="bi bi-house"></i>
    </button>
    <button className="flex justify-center items-center bg-[var(--azulescuro)] text-[var(--fundobranco)] w-[33%] pb-1 active:bg-[var(--fundobranco)] active:text-[var(--azulescuro)]">
      <i className="bi bi-capsule"></i>
    </button>
    <button className="flex justify-center items-center bg-[var(--azulescuro)] text-[var(--fundobranco)] w-[33%] pb-1 active:bg-[var(--fundobranco)] active:text-[var(--azulescuro)]">
      <i className="bi bi-person"></i>
    </button>

        </div>
    </div>
  );
}
