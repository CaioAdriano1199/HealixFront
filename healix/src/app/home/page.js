"use client";
import React from "react";
import Button from "../components/button/button";
import Forms from "../components/forms/forms";
import Input from "../components/input/input";
import Textarea from "../components/textarea/textarea";
import { useState, useEffect } from "react";


export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [conttela, setConttela] = useState(0);
  const [lembrecard, setLembrecard] = useState([]);
  const [istemp, setIstemp] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    fetch("/mocks/cardsmocks.json")
      .then((res) => res.json())
      .then((data) => setLembrecard(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div>
        <>
          {isDesktop && ( // Navbar para desktop
            <div className="flex w-full fixed top-0 flex-row justify-between bg-[var(--azulescuro)] h-16 items-center pl-8">
              <h1 className="text-4xl font-bold text-[var(--fundobranco)]">Healix</h1>
              <div className="flex justify-around w-[40%] h-full bg-[var(--azulescuro)]">
                <button className="flex justify-center items-center bg-[var(--azulescuro)] text-[var(--fundobranco)] w-[33%] pb-1 active:bg-[var(--fundobranco)] active:text-[var(--azulescuro)]" onClick={() => setConttela(0)}>
                  <div className="flex flex-col">
                    <i className="bi bi-house"></i>
                    <a>Home</a>
                  </div>
                </button>
                <button className="flex justify-center items-center bg-[var(--azulescuro)] text-[var(--fundobranco)] w-[33%] pb-1 active:bg-[var(--fundobranco)] active:text-[var(--azulescuro)]" onClick={() => setConttela(1)}>
                  <div className="flex flex-col">
                    <i className="bi bi-capsule"></i>
                    <a>Medicamentos</a>
                  </div>
                </button>
                <button className="flex justify-center items-center bg-[var(--azulescuro)] text-[var(--fundobranco)] w-[33%] pb-1 active:bg-[var(--fundobranco)] active:text-[var(--azulescuro)]" onClick={() => setConttela(2)}>
                  <div className="flex flex-col">
                    <i className="bi bi-person"></i>
                    <a>Perfil</a>
                  </div>
                </button>
              </div>
            </div>
          )} {!isDesktop && ( // Navbar para mobile e tablet
            <div className="flex justify-around w-full h-12 fixed bottom-0 bg-[var(--azulescuro)]">
              <button className="flex justify-center items-center bg-[var(--azulescuro)] text-[var(--fundobranco)] w-[33%] pb-1 active:bg-[var(--fundobranco)] active:text-[var(--azulescuro)]" onClick={() => setConttela(0)}>
                <i className="bi bi-house"></i>
              </button>
              <button className="flex justify-center items-center bg-[var(--azulescuro)] text-[var(--fundobranco)] w-[33%] pb-1 active:bg-[var(--fundobranco)] active:text-[var(--azulescuro)]" onClick={() => setConttela(1)}>
                <i className="bi bi-capsule"></i>
              </button>
              <button className="flex justify-center items-center bg-[var(--azulescuro)] text-[var(--fundobranco)] w-[33%] pb-1 active:bg-[var(--fundobranco)] active:text-[var(--azulescuro)]" onClick={() => setConttela(2)}>
                <i className="bi bi-person"></i>
              </button>

            </div>
          )}
        </>
      </div>
      <>
        {conttela === 0 && ( // Tela Home
          <div className="flex flex-col items-center justify-center h-screen pt-16 pb-12 bg-[var(--fundobranco)]">
            <h2 className="text-4xl md:text-5xl lg:text-3xl font-bold mb-10 lg:mb-4  mt-4 text-[var(--azulescuro)]">Healix</h2>
            <div className="flex flex-col h-full gap-4 p-4 w-full">
              {lembrecard.map((cards) => (
                <Forms key={cards.id}>
                  <h2 className="text-lg font-semibold">{cards.titulo}</h2>
                  <p className="text-sm text-gray-600 mt-2">{cards.descricao}</p>
                </Forms>
              ))}
            </div>
          </div>)}
        {conttela === 1 && ( // Tela Medicamentos
          <div className="flex flex-col items-center justify-center h-screen  lg:pt-16 lg:mt-16 mb-12 pb-12 bg-[var(--fundobranco)]">
            <h1 className="text-4xl font-bold mb-4 lg:mt-10 text-[var(--azulescuro)]">Healix</h1>
            <h3 className="text-xl font-bold mb-4 text-[var(--azulescuro)]">Cadastre seu medicamento aqui:</h3>
            <Forms className="flex flex-col items-center mt-6 w-full max-w-[300px] p-4">
              <Input type="text" texto={"Inserir Medicamento"} placeholder="Ex: Dipirona" className="mb-4 p-2 border border-[var(--cinza)] rounded" />
              <Textarea texto={"Descrição (opcinal)"} placeholder="Inserir descrição" className="mb-4 p-2 border border-[var(--cinza)] rounded" />
              <Input texto={"Horario do medicamento"} type="text" placeholder="Frequência" className="mb-4 p-2 border border-[var(--cinza)] rounded" />
              <div className="flex items-center justify-around w-full ">
                <input type="checkbox" onChange={(e) => setIstemp(e.target.checked)} className="mb-4 accent-[var(--azulescuro)]" />
                <label className="mb-4">Medicamento de uso temporario</label>
              </div>
              <>
              {istemp === true && (
                <Input texto={"Tempo de uso (em dias)"} type="number" placeholder="Ex: 7" className="mb-4 p-2 border border-[var(--cinza)] rounded" />
              )}
              </>
              <Button type="submit" className="bg-[var(--azulescuro)] text-[var(--fundobranco)] w-full p-2 rounded">Cadastrar</Button>
            </Forms>
          </div>)}
        {conttela === 2 && ( // Tela Perfil
          <div className="flex flex-col items-center justify-center h-screen pt-16 pb-12 bg-[var(--fundobranco)]">
            <h2 className="text-2xl font-bold mb-4">Perfil</h2>
          </div>)}
      </>
    </div>
  );
}
