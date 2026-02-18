"use client";
import React from "react";
import { useState } from "react";
import Button from "../components/button/button";
import Forms from "../components/forms/forms";
import Input from "../components/input/input";

export default function Login() {
  const [mostrarErro, setMostrarErro] = useState(false);
  const [infologin, setInfologin] = useState({
    email: "",
    senha: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(infologin),
      });

      const data = await res.json();

      if (data.sucesso) {
        setLblock(true);
        setLoading("Carregando...");
        localStorage.setItem("token", data.token);
        router.push("/home");
      } else {
        setMostrarErro(true);
        setMensagem(data.mensagem || "Erro no login");
      }
    } catch (error) {
      setMensagem("Erro ao conectar com o servidor");
    }
  };

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

        <Forms onSubmit={handleSubmit} className="flex flex-col items-center p-4 lg:mt-6 mt-4 w-full max-w-[360px] md:max-w-[420px] lg:max-w-[300px]">
                {mostrarErro && (
      <p className="cursor-default bg-[var(--branco)] rounded-lg font-semibold text-sm text-6xl text-center mb-4 text-red-500">
        Email ou senha incorretos!</p>)}
          <Input
            texto="Email"
            placeholder="Inserir email"
            className="mb-4 p-2 border border-[var(--cinza)] rounded"
            onChange={(e) => setInfologin({...infologin, email: e.target.value})}
          />
          <Input
            texto="Senha"
            tipo="password"
            placeholder="Inserir senha"
            className="mb-4 p-2 border border-[var(--cinza)] rounded"
            onChange={(e) => setInfologin({...infologin, senha: e.target.value})}
          />
          <Button className="bg-[var(--azulescuro)] text-[var(--fundobranco)] w-full p-2 rounded" tipo="submit">
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
