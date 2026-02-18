"use client";
import React from "react";
import Image from "next/image";
import Button from "../components/button/button";
import Forms from "../components/forms/forms";
import Input from "../components/input/input";
import Textarea from "../components/textarea/textarea";
import { useState, useEffect } from "react";
import Modal from "../components/modal/modal";
import Imagembutton from "../components/imagembutton/imagembutton";
import Combobox from "../components/combobox/combobox";
import { tiposangue } from "../components/combobox/comboboxdata";


export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [conttela, setConttela] = useState(0);
  const [lembrecard, setLembrecard] = useState([]);
  const [istemp, setIstemp] = useState(false);
  const [modalattperfil, setModalattperfil] = useState(false);
  const [etapa, setEtapa] = useState(1);
  const [sangue, setSangue] = useState([]);
  const [modalcriarremedio, setModalcriarremedio] = useState(false);
  const [modallembrete, setModallembrete] = useState(false);
  const [infolembrete, setInfolembrete] = useState(null);
  const [modaleditcard, setModaleditcard] = useState(false);
  var userinfo = {
    nome: "",
    email: "",
    telefone: "",
    tipodesangue: "",
    doencascronicas: "",
  };

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
              <a className="cursor-default" onClick={() => setConttela(0)}>
                <h1 className="text-4xl font-bold text-[var(--fundobranco)]">Healix</h1>
              </a>
              <button className="relative flex justify-center items-center bg-[var(--azulescuro)]  rounded-full text-[var(--fundobranco)] h-12 w-12 m-2" onClick={() => setConttela(2)}>
                <Image src="/Perfil.png" alt="Perfil" fill className="object-cover rounded-full bg-gray-300"></Image>
              </button>
            </div>
          )} {!isDesktop && ( // Navbar para mobile e tablet
            <div className="flex justify-between w-full h-12 fixed top-0 bg-[var(--azulescuro)]">
              <a className="flex justify-center items-center text-[var(--fundobranco)] w-[20%] pb-1 active:bg-[var(--fundobranco)] active:text-[var(--azulescuro)]" onClick={() => setConttela(0)}>
                <p className="text-lg font-bold">Healix</p>
              </a>
              <button className="flex justify-center items-center bg-[var(--azulescuro)] text-[var(--fundobranco)] w-12 h-12 rounded-full pb-1 active:bg-[var(--fundobranco)] active:text-[var(--azulescuro)]" onClick={() => setConttela(2)}>
                <Image src="/Perfil.png" alt="Perfil" width={24} height={24} className="object-contain rounded-full bg-gray-300"></Image>
              </button>

            </div>
          )}
        </>
      </div>
      <>
        {conttela === 0 && ( // Tela Home
          <div className="flex flex-col items-center justify-center h-screen pt-16 pb-12 bg-[var(--fundobranco)]">
            <h2 className="text-4xl md:text-5xl lg:text-3xl font-bold mb-10 lg:mb-4  mt-4 text-[var(--azulescuro)]">Home</h2>
            <Button className="bg-[var(--azulescuro)] self-end text-[var(--fundobranco)] w-full max-w-[60px] p-2 rounded-full m-6" onClick={() => setModalcriarremedio(true)}>
              + <i className="bi bi-capsule"></i>
            </Button>
            <div className="flex flex-col h-full gap-4 p-4 w-full cursor-default">
              {lembrecard.map((cards) => (
                <Forms key={cards.id} onClick={() => { setModallembrete(true); setInfolembrete(cards); }}>
                  <h2 className="text-lg font-semibold">{cards.titulo}</h2>
                  <p className="text-sm text-gray-600 mt-2">{cards.descricao}</p>
                </Forms>
              ))}
            </div>
            <Modal isOpen={modalcriarremedio} onClose={() => setModalcriarremedio(false)} className=" max-h-[95vh] w-full overflow-y-auto m-10">
              <div className="flex flex-col items-center mt-6 w-full p-4">
                {isDesktop ? (
                  <h1 className="text-2xl font-bold mb-6 mt-[-20px] text-[var(--azulescuro)]">Adicionar Medicamento</h1>
                ) : (
                  <h2 className="text-xl text-center font-bold mb-6 mt-[-20px] text-[var(--azulescuro)]">Adicionar Medicamento</h2>)}

                <Input type="text" texto={"Inserir Medicamento"} placeholder="Ex: Dipirona" className="mb-4 p-2 border border-[var(--cinza)] rounded" />
                <Textarea texto={"Descrição (opcinal)"} placeholder="Inserir descrição" className="mb-4 p-2 border border-[var(--cinza)] rounded" />
                <Input texto={"Horario do medicamento"} type="text" placeholder="Frequência" className="mb-4 p-2 border border-[var(--cinza)] rounded" />
                <div className="flex items-center justify-start w-full ">
                  <input type="checkbox" onChange={(e) => setIstemp(e.target.checked)} className="mb-4 accent-[var(--azulescuro)]" />
                  <label className="pl-2 mb-4">Medicamento de uso temporario</label>
                </div>
                <>
                  {istemp === true && (
                    <Input texto={"Tempo de uso (em dias)"} type="number" placeholder="Ex: 7" className="mb-4 p-2 border border-[var(--cinza)] rounded" />
                  )}
                </>
                <Button type="submit" className="bg-[var(--azulescuro)] text-[var(--fundobranco)] w-full p-2 rounded">Cadastrar</Button>
              </div>
            </Modal >
            <Modal isOpen={modallembrete} onClose={() => setModallembrete(false)} className=" max-h-[95vh] w-full overflow-y-auto m-10">
              <div className="flex flex-col items-center mt-6 w-full p-4">

                {modaleditcard ? (
                                    <>
                    <h2 className="text-xl font-bold mb-6 mt-[-20px] text-[var(--azulescuro)]">Editar Lembrete</h2>
                    <Input type="text" texto={"Título"} placeholder="Ex: Tomar remédio" className="mb-4 p-2 border border-[var(--cinza)] rounded" />
                    <Textarea texto={"Descrição (opcinal)"} placeholder="Inserir descrição" className="mb-4 p-2 border border-[var(--cinza)] rounded" />
                    <Input texto={"Horario do lembrete"} type="text" placeholder="Frequência" className="mb-4 p-2 border border-[var(--cinza)] rounded" />
                    <Button type="submit" className="bg-[var(--azulescuro)] text-[var(--fundobranco)] w-full p-2 rounded">Salvar</Button>
                  </>

                ) : (
                  <>
                    <h2 className="text-xl font-bold mb-6 mt-[-20px] text-[var(--azulescuro)]">{infolembrete?.titulo}</h2>
                    <p className="text-sm text-gray-600 mb-4">{infolembrete?.descricao}</p>
                    <Button type="button" className="bg-[var(--azulescuro)] mb-2 text-[var(--fundobranco)] w-full p-2 rounded" onClick={() => setModaleditcard(true)}>Editar</Button>
                    <Button type="button" className="bg-[var(--vermelho)] text-[var(--fundobranco)] w-full p-2 rounded" onClick={() => setModallembrete(false)}>Excluir</Button>
                  </>
                )}

              </div>
            </Modal>
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
            <Image src="/Perfil.png" alt="Perfil" width={128} height={128} className="object-contain mb-4 rounded-full bg-gray-300"></Image>
            <h2 className="text-2xl font-bold mb-2 text-[var(--azulescuro)]">Nome do Usuário</h2>
            <a className="text-[var(--azulescuro)] underline cursor-pointer" onClick={() => setModalattperfil(true)}>Editar Perfil</a>
            <Button className="mt-6 bg-[var(--azulescuro)] text-[var(--fundobranco)] w-full max-w-[200px] p-2 rounded">Logout</Button>


            <Modal isOpen={modalattperfil} onClose={() => { setModalattperfil(false); setEtapa(1); }} title="Perfil do Usuário"
              className=" max-h-[95vh] w-full overflow-y-auto m-10">
              <>
                <div className="flex flex-col">
                  <>
                    {etapa === 1 && (
                      <div className="w-full">
                        <Input
                          texto="Nome completo"
                          placeholder="Nome completo"
                          className="mb-4 p-2 border border-[var(--cinza)] rounded"
                          onChange={(e) => userinfo.nome = e.target.value}
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
                        <a onClick={() => setEtapa(1)} className="cursor-pointer text-[var(--azulescuro)] underline"><i className="bi bi-arrow-left"></i> voltar</a>

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
                          Atualizar
                        </Button>
                      </div>
                    )}
                  </>
                </div>
              </>
            </Modal>
          </div>)}
      </>

    </div>
  );
}
