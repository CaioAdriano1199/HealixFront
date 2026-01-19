"use client";
import React from "react";
import Button from "../components/button/button";
import Forms from "../components/forms/forms";
import Input from "../components/input/input";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--fundobranco)] font-sans">
      <main className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="mb-8 text-6xl font-bold text-[var(--azulescuro)]">
            Healix
          </h1>
          <p className="text-[var(--azulescuro)] text-center px-4">
            Tecnologia que cuida do seu tempo e da sua saúde
          </p>
        </div>

        <Forms className="flex flex-col items-center p-4 lg:mt-6 mt-4 w-full max-w-[360px] md:max-w-[420px] lg:max-w-[300px]">
          <Input
            texto="Email"
            placeholder="Inserir email"
            className="mb-4 p-2 border border-[var(--cinza)] rounded"
          />
          <Input
            texto="Senha"
            tipo="password"
            placeholder="Inserir senha"
            className="mb-4 p-2 border border-[var(--cinza)] rounded"
          />
          <Button className="bg-[var(--azulescuro)] text-[var(--fundobranco)] w-full p-2 rounded">
            Login
          </Button>
        </Forms>

        <div className="flex flex-col items-center mt-4">
          <p>
            Não tem conta? Cadastre-se{" "}
            <a href="/cadastro" className="font-bold italic">aqui!</a>
          </p>
        </div>
      </main>
    </div>
  );
}
