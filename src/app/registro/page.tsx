'use client'
import { useState } from "react";
import { ModeToggle } from '../components/toggle';
import Image from "next/image";

type User = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type UserAdmin = {
  email: string;
  password: string;
  rememberMe: boolean;
  isAdmin: boolean;
};

function Register() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const storedCredentials: User[] = JSON.parse(localStorage.getItem('allowedCredentials') || '[]');
    const storedCredentialsAdmin: UserAdmin[] = JSON.parse(localStorage.getItem('allowedCredentialsAdmin') || '[]');

    const emailExists = storedCredentials.some(cred => cred.email === email);
    const emailExistsAdmin = storedCredentialsAdmin.some(cred => cred.email === email);

    if (emailExists) {
      setError("Email já cadastrado.");
      return;
    }

    if (!emailExistsAdmin && email !== "stefany@bne.empregos.com") {
      setError("Você não tem permissão para acessar as funcionalidades de admin.");
      return;
    }

    const newUser: User = {
      email,
      password: "senha123",
      rememberMe: true,
    };

    const newAdminUser: UserAdmin = {
      email: "stefany@bne.empregos.com",
      password: "senha123",
      rememberMe: true,
      isAdmin: true
    };

    const updatedCredentials = [...storedCredentials, newUser];
    const updatedCredentialsAdmin = [...storedCredentialsAdmin, newAdminUser];

    localStorage.setItem('allowedCredentials', JSON.stringify(updatedCredentials));
    localStorage.setItem('allowedCredentialsAdmin', JSON.stringify(updatedCredentialsAdmin));

    console.log('Novo usuário registrado:', newUser);
    console.log('Lista de usuários atualizada:', updatedCredentials);
    console.log('Lista de administradores atualizada:', updatedCredentialsAdmin);

    localStorage.setItem('registeredEmail', email);

    window.location.href = 'http://localhost:3000';
  };

  return (
    <div className="">
      <div className="flex flex-row justify-end">
        <div className="flex items-center mr-48">
        <Image
          src="/imgs/logo-form.png" 
          alt="Logo" 
          width={90} 
          height={180} 
          className="ml-16 mt-8"
        />
          <span className="text-3xl font-semibold whitespace-nowrap dark:text-white mt-8 ml-2">
            <h1>FormsDevHelp</h1>
          </span>
        </div>

        <div className="pr-8 pt-8"> 
          <ModeToggle />
        </div>
      </div>
      <main className="font-mono flex flex-row justify-around" id="modal-body"> 
        <div className="rounded-r-2xl bg-blue-500 p-2 dark:bg-blue-700 shadow-lg" style={{ width: '840px', height: '798px',marginLeft:'-120px',marginTop:'-115px',}}>
          <div className="mt-5 ml-8 space-y-1.5 px-12 py-16">
            <pre className="text-sm text-black dark:text-white">
              {`
{
  "Acronym": "NOME DO FORMULÁRIO",
  "Blocked": false,
  "PayloadField": {
    "$type": "System.Collections.Generic.List\`1, System.Private.CoreLib",
    "$values": []
  },
  "PayloadFieldGroups": {
    "$type": "LugaRh.Domain.Models.Shares.Export.ShareExportMappingGroup, LugaRh.Domain.Models",
    "Name": "dependent",
    "KnotName": "DadosPessoais",
    "Fields": {
      "$type": "System.Collections.Generic.List\`1, System.Private.CoreLib",
      "$values": []
    }
  },
  "FormType": 1,
  "TemplateId": "Colar GUID do template aqui",
  "Global": true,
  "WorkspaceList": {
    "$type": "System.Collections.Generic.List\`1, System.Private CoreLib",
    "$values": []
  },
  "EnableNewFingerprint": true
}
              `}
            </pre>
          </div>
        </div>

        <div className="mt-24 mr-36 " id="modal-login">
          <div className="">
            <div className="mx-auto text-center">
              <h1 className="text-2xl font-bold sm:text-3xl dark:text-white">Registre-se</h1>
              <p className="mt-4 text-gray-600 dark:text-slate-400">Crie uma nova conta!</p>
            </div>
            <form className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit}>
              <div>
                {error && (
                  <div className="relative">
                    <div className="rounded-lg border border-red-400 bg-red-100 text-red-700 px-4 py-3" role="alert">
                      <span className="block sm:inline">{error}</span>
                    </div>
                  </div>
                )}
                <div className="relative">
                  <label className="text-blue-500 font-semibold text-sm m-2">Email</label>
                  <input
                    name="email"
                    placeholder="exemplo@exemplo.com"
                    className="rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:text-white dark:bg-gray-800 w-full"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button className="inline-block rounded-lg bg-blue-500 ml-4 px-24 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" type="submit">Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;
