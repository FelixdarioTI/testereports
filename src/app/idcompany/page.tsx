'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import cardsData from '../cardsData'


interface ModalProps {
    onClose: () => void;
    onAddCard: (card: CardProps) => void;
  }

interface CardProps {
    title: string;
    CNPJ: string;
    RazaoSocial: string;
    onDelete?: () => void;
    companyId: string;
  }

const Modal: React.FC<ModalProps> = ({ onClose, onAddCard }) => {
  const [formData, setFormData] = useState({
    title: "",
    CNPJ: "",
    RazaoSocial: "",
    companyId: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, CNPJ, RazaoSocial, companyId } = formData;
    if (!title || !CNPJ || !RazaoSocial || !companyId) {
      alert("Por favor, preencha todos os campos");
      return;
    }
    onAddCard(formData); 
    onClose();
  };
  
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
      <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
        <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-4">
          <div className="flex justify-between items-center mb-4 text-center ms-4">
            <div className="text-center">
              <h1 className="text-lg text-black dark:text-white">Adicione uma nova empresa</h1>
              <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Aqui você adiciona o nome da empresa, id e a descrição</p>
            </div>

            <div className="flex items-center">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center h-full ml-28">
  <form onSubmit={handleSubmit} className="w-full max-w-md">
    <label htmlFor="title" className="flex justify-start items-start  block text-blue-500 font-semibold text-sm m-2">Nome da Empresa</label>
    <div className="relative">
      <input
        placeholder="Nome da Empresa"
        className="rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:text-white dark:bg-gray-800"
        id="title"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
    </div>
    <label htmlFor="companyId" className="flex justify-start items-start  block text-blue-500 font-semibold text-sm m-2">Id Company</label>
    <div className="relative">
      <input
        placeholder="Id Company"
        className="rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:text-white dark:bg-gray-800"
        id="companyId"
        type="text"
        name="companyId"
        value={formData.companyId}
        onChange={handleChange}
      />
    </div>
    <label htmlFor="CNPJ" className="flex justify-start items-start  block text-blue-500 font-semibold text-sm m-2">CNPJ</label>
    <div className="relative">
      <input
        placeholder="CNPJ"
        className="rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:text-white dark:bg-gray-800"
        id="CNPJ"
        type="text"
        name="CNPJ"
        value={formData.CNPJ}
        onChange={handleChange}
      />
    </div>
    <label htmlFor="RazaoSocial" className="flex justify-start items-start  block text-blue-500 font-semibold text-sm m-2">Razão Social</label>
    <div className="relative">
      <input
        placeholder="RazaoSocial"
        className="rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:text-white dark:bg-gray-800"
        id="RazaoSocial"
        type="text"
        name="RazaoSocial"
        value={formData.RazaoSocial}
        onChange={handleChange}
      />
    </div>
    <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Adicionar Card</button>
  </form>
</div>

        </div>
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, CNPJ, RazaoSocial, onDelete, companyId }) => {

    function copyIDCompanystep(id: string) {
      const textElement = document.getElementById(id);
      if (textElement instanceof HTMLElement) {
        const range = document.createRange();
        range.selectNodeContents(textElement);
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
        document.execCommand('copy');
      }
    }
  
    return (
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mt-12 ml-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <label>Razão Social:</label>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {RazaoSocial}
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <label>CNPJ:</label>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {CNPJ}
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <label>ID Company:</label>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white" id={`idcompanycopy-${companyId}`}>
                    {companyId}
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <button
            onClick={() => copyIDCompanystep(`idcompanycopy-${companyId}`)}
            className="inline-flex font-medium items-center text-blue-600 hover:underline">
            Copie o Id Company
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </button>
  
          {onDelete && (
            <button className="inline-block mt-4 ml-8 text-red-600 hover:underline" onClick={onDelete}>
              Delete
            </button>
          )}
        </div>
      </div>
    );
  };

  const Home: React.FC = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const handleCloseModal = () => setisModalOpen(false);
  const OpenModal = () => setisModalOpen(true);
  const [cards, setCards] = useState<CardProps[]>([]);
      const handleAddCard = (newCard: CardProps) => {
        const updatedCards = [...cards, newCard];
        setCards(updatedCards);
        localStorage.setItem('cards', JSON.stringify(updatedCards));
    };
    const handleDeleteCard = (companyId: string) => {
        const updatedCards = cards.filter((card) => card.companyId !== companyId);
        setCards(updatedCards);
        localStorage.setItem('cards', JSON.stringify(updatedCards)); 
    };

    useEffect(() => {
        const storedCards = localStorage.getItem('cards');
        if (storedCards) {
            setCards(JSON.parse(storedCards)); 
        } else {
            setCards(cardsData); 
        }
    }, []); 
  return (
    <>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <a href="#">
      <Image
          src="/imgs/logo-form.png" 
          alt="Logo" 
          width={32} 
          height={26} 
        />
      </a>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FormsDevHelp</span>
    </div>
    <div className="hidden w-full md:flex md:items-center md:justify-end md:w-auto" id="navbar-solid-bg">
      <div className="flex items-center space-x-4">
        <a href="#" onClick={OpenModal} className="inline-flex font-medium items-center hover:underline">
          Adicionar Empresa
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ms-2.5 rtl:rotate-[270deg]">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12h8"/>
            <path d="M12 8v8"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</nav>

      <header className="mb-8 mt-8 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Lista de empresas</h1>
        <p className="text-gray-500 dark:text-gray-300 max-w-4xl mx-auto mt-2">Essa é a lista de empresas que utilizam a implantação</p>
        </header>
        {isModalOpen && <Modal onClose={handleCloseModal} onAddCard={handleAddCard} />}

<div className="flex flex-wrap gap-8 justify-center ">
    {cards.map((card) => (
        <Card
            key={card.companyId}
            title={card.title}
            CNPJ={card.CNPJ}
            RazaoSocial={card.RazaoSocial}
            companyId={card.companyId}
            onDelete={() => handleDeleteCard(card.companyId)}
        />
    ))}
      </div>
    </>
  );
};

export default Home;
