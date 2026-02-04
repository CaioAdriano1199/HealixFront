"use client";
import React from "react";
import Button from "../components/button/button";
import Forms from "../components/forms/forms";
import Input from "../components/input/input";
import Imagembutton from "../components/imagembutton/imagembutton";
import Textarea from "../components/textarea/textarea";
import { useState, useEffect } from "react";
import Combobox from "../components/combobox/combobox";
import { tiposangue } from "../components/combobox/comboboxdata";

export default function Cadastro() {
    const [etapa, setEtapa] = useState(1);
    const [isDesktop, setIsDesktop] = useState(false);
    const [sangue, setSangue] = useState([]);

    useEffect(() => {
        const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
        checkScreen();

        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center bg-[var(--fundobranco)] font-sans">
            <main className="flex flex-col items-center">
                <div className="flex flex-col items-center ">
                    <h1 className="mb-8 text-6xl font-bold text-[var(--azulescuro)]">
                        Healix
                    </h1>
                    <p className="text-[var(--azulescuro)] text-center px-4 lg:pb-4">
                        Tecnologia que cuida do seu tempo e da sua saúde
                    </p>
                </div>
                <>
                    {!isDesktop && (
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

                                        <Button onClick={() => setEtapa(2)} className="bg-[var(--azulescuro)] text-[var(--fundobranco)] mt-4 w-full p-2 rounded">
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
                    )}
                    {isDesktop && (
                        <Forms>
                            <div className="w-full grid grid-cols-2 gap-x-6 gap-y-4">
                                <Input
                                    texto="Nome completo"
                                    placeholder="Nome completo"
                                    className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                    gridColumn="col-span 1"
                                />
                                <Input
                                    texto="Email"
                                    placeholder="email@email.com"
                                    className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                    gridColumn="col-span 1"
                                />
                                <Input
                                    texto="Telefone"
                                    placeholder="(00) 00000-0000"
                                    className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                    gridColumn="col-span 1"
                                />
                                <Input
                                    texto="Senha"
                                    tipo="password"
                                    placeholder="Inserir senha"
                                    className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                    gridColumn="col-span 2"
                                />
                                <Input
                                    texto="Confirmar senha"
                                    tipo="password"
                                    placeholder="confirmar senha"
                                    className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                    gridColumn="col-span 2"
                                />
                                <Combobox
                                    label="Tipo sanguíneo"
                                    options={tiposangue} value={sangue} onChange={(v) => setSangue(v)}
                                    gridColumn="col-span 2"
                                    placeholder="Tipo sanguíneo"

                                />
                                <Imagembutton textolabel="Foto de perfil" className="mb-4" gridColumn="col-span 2" onImageChange={(base64) => setfotoUsuario(base64)} />
                                <Textarea
                                    texto="Doenças cronicas"
                                    linhas={4}
                                    placeholder="Ex: Diabetes, Hipertensão, etc."
                                    className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                    gridColumn="col-span 2"
                                />
                                <Input
                                    texto="Nome do contato de emergência"
                                    placeholder="Nome completo"
                                    className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                    gridColumn="col-span 2"
                                />
                                <Input
                                    texto="Contato de emergência (telefone)"
                                    placeholder="(00) 00000-0000"
                                    className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                    gridColumn="col-span 2"
                                />

                                <div className="col-span-2 flex justify-center mt-2">
                                    <Button className="bg-[var(--azulescuro)] text-[var(--fundobranco)] w-[45%] p-2 rounded" gridColumn="col-span 2">
                                        Cadastrar
                                    </Button>
                                </div>
                            </div>
                        </Forms>
                    )}
                </>
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
