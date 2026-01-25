"use client";
import React from "react";
import Button from "../components/button/button";
import Forms from "../components/forms/forms";
import Input from "../components/input/input";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div>
      <div>
        <>
          {isDesktop && (
            <div className="flex w-full fixed top-0 flex-row justify-between bg-[var(--azulescuro)] h-16 items-center pl-8">
              <h1 className="text-3xl font-bold text-[var(--fundobranco)]">Healix</h1>
              <div className="flex justify-around w-[40%] h-full bg-[var(--azulescuro)]">
                <button className="flex justify-center items-center bg-[var(--azulescuro)] text-[var(--fundobranco)] w-[33%] pb-1 active:bg-[var(--fundobranco)] active:text-[var(--azulescuro)]">
                  <div className="flex flex-col"> 
                    <i className="bi bi-house"></i>
                    <a>Home</a>
                  </div>
                </button>
                <button className="flex justify-center items-center bg-[var(--azulescuro)] text-[var(--fundobranco)] w-[33%] pb-1 active:bg-[var(--fundobranco)] active:text-[var(--azulescuro)]">
                  <div className="flex flex-col"> 
                  <i className="bi bi-capsule"></i>
                  <a>Medicamentos</a>
                  </div>
                </button>
                <button className="flex justify-center items-center bg-[var(--azulescuro)] text-[var(--fundobranco)] w-[33%] pb-1 active:bg-[var(--fundobranco)] active:text-[var(--azulescuro)]">
                  <div className="flex flex-col"> 
                    <i className="bi bi-person"></i>
                    <a>Perfil</a>
                  </div>
                </button>
              </div>
            </div>
          )} {!isDesktop && (
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
          )}
        </>
      </div>
    </div>
  );
}
