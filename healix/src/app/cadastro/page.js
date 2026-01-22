"use client";
import React from "react";
import Button from "../components/button/button";
import Forms from "../components/forms/forms";
import Input from "../components/input/input";
import Imagembutton from "../components/imagembutton/imagembutton";
import Textarea from "../components/textarea/textarea";
import { useState } from "react";
import Combobox from "../components/combobox/combobox";
import { tiposangue } from "../components/combobox/comboboxdata";

export default function Cadastro() {
    const [etapa, setEtapa] = useState(1);
    const [sangue, setSangue] = useState([]);

    function segcad() {
        setEtapa(2);
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

                <Forms className="flex flex-col items-center mt-6 w-full max-w-[300px] p-4">
                    <>
                    {etapa === 1 && (
                    <div className="w-full">
                        <Input
                            texto="Nome completo"
                            placeholder="Nome completo"
                            className="mb-4 p-2 border border-[var(--cinza)] rounded"
                        />
                        <Input
                            texto="Email"
                            placeholder="email@email.com"
                            className="mb-4 p-2 border border-[var(--cinza)] rounded"
                        />
                        <Input
                            texto="Telefone"
                            placeholder="(00) 00000-0000"
                            className="mb-4 p-2 border border-[var(--cinza)] rounded"
                        />
                        <Input
                            texto="Senha"
                            tipo="password"
                            placeholder="Inserir senha"
                            className="mb-4 p-2 border border-[var(--cinza)] rounded"
                        />
                        <Input
                            texto="Confirmar senha"
                            tipo="password"
                            placeholder="confirmar senha"
                            className="mb-4 p-2 border border-[var(--cinza)] rounded"
                        />
                        <Imagembutton textolabel="Foto de perfil" className="mb-4" /*onImageChange={(base64) => setfotoUsuario(base64)}*/ />

                        <Button onClick={segcad} className="bg-[var(--azulescuro)] text-[var(--fundobranco)] mt-4 w-full p-2 rounded">
                            Continuar
                        </Button>
                    </div>
                    )}
                    {etapa === 2 && (
                    <div className=" w-full">
                        <Combobox
                            label="Tipo sanguíneo"
                            options={tiposangue} value={sangue} onChange={(v) => setSangue(v)}
                            
                            placeholder="Tipo sanguíneo"
                            
                        />
                        <Input
                            texto="Nome do contato de emergência"
                            placeholder="Nome completo"
                            className="mb-4 p-2 border border-[var(--cinza)] rounded"
                        />
                        <Input
                            texto="Contato de emergência (telefone)"
                            placeholder="(00) 00000-0000"
                            className="mb-4 p-2 border border-[var(--cinza)] rounded"
                        />
                        <Textarea
                            texto="Doenças cronicas"
                            linhas={4}
                            placeholder="Ex: Diabetes, Hipertensão, etc."
                            className="mb-4 p-2 border border-[var(--cinza)] rounded"
                        />

                        <Button className="bg-[var(--azulescuro)] text-[var(--fundobranco)] w-full p-2 rounded">
                            Cadastrar
                        </Button>
                    </div>
                    )}
                    </>
                </Forms>

                <div className="flex flex-col items-center mt-4 mb-8">
                    <p>
                        Já tem uma conta? Faça seu login{" "}
                        <a href="/login" className="font-bold italic">aqui!</a>
                    </p>
                </div>
            </main>
        </div>
    );
}
