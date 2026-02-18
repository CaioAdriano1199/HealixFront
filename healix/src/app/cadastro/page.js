"use client";
import Button from "../components/button/button";
import Forms from "../components/forms/forms";
import Input from "../components/input/input";
import Imagembutton from "../components/imagembutton/imagembutton";
import Textarea from "../components/textarea/textarea";
import { useState, useEffect } from "react";
import Combobox from "../components/combobox/combobox";
import { tiposangue } from "../components/combobox/comboboxdata";
import { useRouter } from "next/navigation";

export default function Cadastro() {
    const [etapa, setEtapa] = useState(1);
    const [isDesktop, setIsDesktop] = useState(false);
    const [sangue, setSangue] = useState(null);
    const [fotoUsuario, setfotoUsuario] = useState("");
    const [mensagem, setMensagem] = useState("");
    const router = useRouter();
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        senha: "",
        confirmarSenha: "",
        tipoSanguineo: "",
        contatoEmergenciaNome: "",
        contatoEmergenciaTelefone: "",
        doencasCronicas: "",
        fotoUsuario: "",
    });

    useEffect(() => {
        const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
        checkScreen();

        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.sucesso) {
                localStorage.setItem("token", data.token);
                router.push("/login");
            } else {

                console.log(data.mensagem || "Erro no Cadastro");
            }
        } catch (error) {
            console.log("Erro ao conectar com o servidor");
        }
    };

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
                        <Forms onSubmit={handleSubmit} className="flex flex-col items-center mt-6 w-full max-w-[300px] p-4">
                            <>
                                {etapa === 1 && (
                                    <div className="w-full">
                                        <Input
                                            texto="Nome completo"
                                            placeholder="Nome completo"
                                            className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                            onChange={(e) => setFormData((prev) => ({ ...prev, nome: e.target.value }))}
                                        />
                                        <Input
                                            texto="Email"
                                            placeholder="email@email.com"
                                            className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                                        />
                                        <Input
                                            texto="Telefone"
                                            placeholder="(00) 00000-0000"
                                            className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                            onChange={(e) => setFormData((prev) => ({ ...prev, telefone: e.target.value }))}
                                        />
                                        <Input
                                            texto="Senha"
                                            tipo="password"
                                            placeholder="Inserir senha"
                                            className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                            onChange={(e) => setFormData((prev) => ({ ...prev, senha: e.target.value }))}
                                        />
                                        <Input
                                            texto="Confirmar senha"
                                            tipo="password"
                                            placeholder="confirmar senha"
                                            className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                            onChange={(e) => setFormData((prev) => ({ ...prev, confirmarSenha: e.target.value }))}
                                        />
                                        <Imagembutton textolabel="Foto de perfil" className="mb-4" onImageChange={(base64) => setFormData((prev) => ({ ...prev, fotoUsuario: base64 }))} />

                                        <Button onClick={() => setEtapa(2)} className="bg-[var(--azulescuro)] text-[var(--fundobranco)] mt-4 w-full p-2 rounded">
                                            Continuar
                                        </Button>
                                    </div>
                                )}
                                {etapa === 2 && (
                                    <div className=" w-full">
                                        <a onClick={() => setEtapa(1)} className="inline-block cursor-pointer text-[var(--azulescuro)] underline pb-2"><i className="bi bi-arrow-left "></i> voltar</a>

                                        <Combobox
                                            label="Tipo sanguíneo"
                                            options={tiposangue} value={sangue} onChange={(v) => { setSangue(v); setFormData((prev) => ({ ...prev, tipoSanguineo: v?.value })); }}
                                            placeholder="Tipo sanguíneo"

                                        />
                                        <Input
                                            texto="Nome do contato de emergência"
                                            placeholder="Nome completo"
                                            className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                            onChange={(e) => setFormData((prev) => ({ ...prev, contatoEmergenciaNome: e.target.value }))}
                                        />
                                        <Input
                                            texto="Contato de emergência (telefone)"
                                            placeholder="(00) 00000-0000"
                                            className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                            onChange={(e) => setFormData((prev) => ({ ...prev, contatoEmergenciaTelefone: e.target.value }))}
                                        />
                                        <Textarea
                                            texto="Doenças cronicas"
                                            linhas={4}
                                            placeholder="Ex: Diabetes, Hipertensão, etc."
                                            className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                            onChange={(e) => setFormData((prev) => ({ ...prev, doencasCronicas: e.target.value }))}
                                        />

                                        <Button className="bg-[var(--azulescuro)] text-[var(--fundobranco)] w-full p-2 rounded" tipo="submit">
                                            Cadastrar
                                        </Button>
                                    </div>
                                )}
                            </>
                        </Forms>
                    )}
                    {isDesktop && (
                        <Forms onSubmit={handleSubmit}>
                            <div className="w-full grid grid-cols-2 gap-x-6 gap-y-4">
                                <Input
                                    texto="Nome completo"
                                    placeholder="Nome completo"
                                    className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                    gridColumn="col-span 1"
                                    onChange={(e) => setFormData((prev) => ({ ...prev, nome: e.target.value }))}
                                />
                                <Input
                                    texto="Email"
                                    placeholder="email@email.com"
                                    className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                    gridColumn="col-span 1"
                                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                                />
                                <Input
                                    texto="Telefone"
                                    placeholder="(00) 00000-0000"
                                    className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                    gridColumn="col-span 1"
                                    onChange={(e) => setFormData((prev) => ({ ...prev, telefone: e.target.value }))}
                                />
                                <Input
                                    texto="Senha"
                                    tipo="password"
                                    placeholder="Inserir senha"
                                    className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                    gridColumn="col-span 2"
                                    onChange={(e) => setFormData((prev) => ({ ...prev, senha: e.target.value }))}
                                />
                                <Input
                                    texto="Confirmar senha"
                                    tipo="password"
                                    placeholder="confirmar senha"
                                    className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                    gridColumn="col-span 2"
                                    onChange={(e) => setFormData((prev) => ({ ...prev, confirmarSenha: e.target.value }))}
                                />
                                <Combobox
                                    label="Tipo sanguíneo"
                                    options={tiposangue} value={sangue} onChange={(v) => { setSangue(v); setFormData((prev) => ({ ...prev, tipoSanguineo: v?.value })); }}
                                    gridColumn="col-span 2"
                                    placeholder="Tipo sanguíneo"
                                />
                                <Imagembutton textolabel="Foto de perfil" className="mb-4" gridColumn="col-span 2" onImageChange={(base64) => setFormData((prev) => ({ ...prev, fotoUsuario: base64 }))} />
                                <Textarea
                                    texto="Doenças cronicas"
                                    linhas={4}
                                    placeholder="Ex: Diabetes, Hipertensão, etc."
                                    className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                    gridColumn="col-span 2"
                                    onChange={(e) => setFormData((prev) => ({ ...prev, doencasCronicas: e.target.value }))}
                                />
                                <Input
                                    texto="Nome do contato de emergência"
                                    placeholder="Nome completo"
                                    className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                    gridColumn="col-span 2"
                                    onChange={(e) => setFormData((prev) => ({ ...prev, contatoEmergenciaNome: e.target.value }))}
                                />
                                <Input
                                    texto="Contato de emergência (telefone)"
                                    placeholder="(00) 00000-0000"
                                    className="mb-4 p-2 border border-[var(--cinza)] rounded"
                                    gridColumn="col-span 2"
                                    onChange={(e) => setFormData((prev) => ({ ...prev, contatoEmergenciaTelefone: e.target.value }))}
                                />

                                <div className="col-span-2 flex justify-center mt-2">
                                    <Button className="bg-[var(--azulescuro)] text-[var(--fundobranco)] w-[45%] p-2 rounded" gridColumn="col-span 2" tipo="submit">
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
