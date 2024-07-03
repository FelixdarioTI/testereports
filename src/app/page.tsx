'use client'
import { Eye, EyeOff } from "lucide-react";
import Logo from './imgs/logo-form.png'
import { useState, useEffect } from "react";
import { ModeToggle } from './components/toggle';
import { useRouter } from 'next/navigation';
import './globals.css'
type User = {
  email: string;
  password: string;
  rememberMe: boolean;
};



function Home() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function() {
      const passwordInputs = document.querySelectorAll('input[type="password"]');
      passwordInputs.forEach(input => {
        input.setAttribute('autocomplete', 'new-password');
        input.addEventListener('focus', () => {
          input.removeAttribute('type');
          input.setAttribute('type', 'password');
        });
      });
    });
  },[])
  useEffect(() => {
    const registeredEmail = localStorage.getItem('registeredEmail');
    if (registeredEmail) {
      setEmail(registeredEmail);
      localStorage.removeItem('registeredEmail');
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allowedCredentials: User[] = JSON.parse(localStorage.getItem('allowedCredentials') || '[]');

    const found = allowedCredentials.some(
      cred => cred.email === email && cred.password === password
    );

    if (found) {
      router.push('/inicio');
    } else {
      setError("Falha no login: Credenciais inválidas");
    }
  };

  return (
    <div className="">
      <div className="flex flex-row justify-end">
        <div className="flex items-center mr-48">
        <img src={Logo.src} width={90} className="ml-12 mt-8" alt="logo" />
          <span className="text-3xl font-semibold whitespace-nowrap dark:text-white mt-8 ml-2">
            <h1>FormsDevHelp</h1>
          </span>
        </div>

        <div className="pr-8 pt-8"> 
          <ModeToggle/>
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
              <h1 className="text-2xl font-bold sm:text-3xl dark:text-white">Login</h1>
              <p className="mt-4 text-gray-600 dark:text-slate-400">Acesse sua conta</p>
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

              <div className="relative">
              <label className="text-blue-500 font-semibold text-sm m-2">Senha</label>
                <input
                  name="password"
                  placeholder="Senha"
                  className="rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:text-white dark:bg-gray-800 w-full"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <button
                    type="button"
                    className="text-gray-500 mt-6 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </span>

              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <span className="ml-2 text-sm text-black dark:text-white"><a href="/registro">Não tem conta?</a></span>
                </label>
                <button className="inline-block rounded-lg bg-blue-500 ml-4 px-24 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
