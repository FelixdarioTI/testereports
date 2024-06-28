'use client';

import { useEffect, useState } from 'react';
import { ModeToggle } from '../components/toggle';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import Image from 'next/image';
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false, 
});

function gerarGuid() {
   return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
       var r = Math.random() * 16 | 0,
           v = c === 'x' ? r : (r & 0x3 | 0x8);
       return v.toString(16);
   });
}

function mostrarGuid() {
   const numGuidsInput = document.getElementById('numGuids') as HTMLInputElement; 
   const guidsText = document.getElementById('guidsText') as HTMLTextAreaElement;
   let guids = '';

   const numGuids = parseInt(numGuidsInput.value, 10); 
  
   for (let i = 0; i < numGuids; i++) {
       guids += gerarGuid() + '\n';
   }

   guidsText.value = guids;
}
function copiarTexto() {
   const guidsText = document.getElementById('guidsText') as HTMLTextAreaElement;
   guidsText.select();
   document.execCommand('copy');
 }
function copyFormstep() {
  const text = document.getElementById('formstep') as HTMLElement;
  const range = document.createRange();
  range.selectNode(text);
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }
}
function copyOptionstep() {
  const text = document.getElementById('optionstep') as HTMLElement;
  const range = document.createRange();
  range.selectNode(text);
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }
}
function copySIFstep() {
  const text = document.getElementById('SIFstep') as HTMLElement;
  const range = document.createRange();
  range.selectNode(text);
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }
}
function copyTextFieldstep() {
  const text = document.getElementById('TextFieldstep') as HTMLElement;
  const range = document.createRange();
  range.selectNode(text);
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }
}
function copyMaskedFieldstep() {
  const text = document.getElementById('MaskedFieldstep') as HTMLElement;
  const range = document.createRange();
  range.selectNode(text);
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }
}
function copyNumberFieldstep() {
  const text = document.getElementById('NumberFieldstep') as HTMLElement;
  const range = document.createRange();
  range.selectNode(text);
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }
}
function copyTermFieldstep() {
  const text = document.getElementById('TermFieldstep') as HTMLElement;
  const range = document.createRange();
  range.selectNode(text);
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }
  
}
function copyDateFieldstep() {
  const text = document.getElementById('DateFieldstep') as HTMLElement;
  const range = document.createRange();
  range.selectNode(text);
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }
}
function copyCheckboxFieldstep() {
  const text = document.getElementById('CheckboxFieldstep') as HTMLElement;
  const range = document.createRange();
  range.selectNode(text);
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }
}
function copyRadioListFieldstep() {
  const text = document.getElementById('RadioListFieldstep') as HTMLElement;
  const range = document.createRange();
  range.selectNode(text);
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }
}
function copyDependentListFieldstep() {
  const text = document.getElementById('DependentListFieldstep') as HTMLElement;
  const range = document.createRange();
  range.selectNode(text);
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }
}
function copySelectFieldstep() {
  const text = document.getElementById('SelectFieldstep') as HTMLElement;
  const range = document.createRange();
  range.selectNode(text);
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }
}
function copyButtonFieldstep() {
  const text = document.getElementById('ButtonFieldstep') as HTMLElement;
  const range = document.createRange();
  range.selectNode(text);
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }
}
function copyShareWithDependentListFieldstep() {
  const text = document.getElementById('ShareWithDependentListFieldstep') as HTMLElement;
  const range = document.createRange();
  range.selectNode(text);
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }
}

function CopyGlobal() {
  const text = document.getElementById('CopyGlobal') as HTMLElement;
  
  const originalDisplay = text.style.display;
  text.style.display = 'block'; 

  const range = document.createRange();
  range.selectNode(text);
  const selection = window.getSelection();
  
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }

  text.style.display = originalDisplay;
}



export default function Home() {
  const [dropdownNavbarOpen1, setDropdownNavbarOpen1] = useState(false);
  const [dropdownNavbarOpen2, setDropdownNavbarOpen2] = useState(false);
  const [dropdownNavbarOpen3, setDropdownNavbarOpen3] = useState(false);
  const [dropdownNavbarOpen4, setDropdownNavbarOpen4] = useState(false);
  const [OpencontHTML, setOpencontHTML] = useState(true);
  const [OpencontJSON, setOpencontJSON] = useState(false);
  const [isModalOpen1, setisModalOpen1] = useState(false);
  const ModalOpen1 = () => setisModalOpen1(!isModalOpen1);
  const [isModalOpen2, setisModalOpen2] = useState(false);
  const ModalOpen2 = () => setisModalOpen2(!isModalOpen2);
  const [isModalOpen3, setisModalOpen3] = useState(false);
  const ModalOpen3 = () => setisModalOpen3(!isModalOpen3);
  const [isModalOpen4, setisModalOpen4] = useState(false);
  const ModalOpen4 = () => setisModalOpen4(!isModalOpen4);
  const [isModalOpen5, setisModalOpen5] = useState(false);
  const ModalOpen5 = () => setisModalOpen5(!isModalOpen5);
  const [isModalOpen6, setisModalOpen6] = useState(false);
  const ModalOpen6 = () => setisModalOpen6(!isModalOpen6);
  const [isModalOpen7, setisModalOpen7] = useState(false);
  const ModalOpen7 = () => setisModalOpen7(!isModalOpen7);
  const [isModalOpen8, setisModalOpen8] = useState(false);
  const ModalOpen8 = () => setisModalOpen8(!isModalOpen8);
  const [isModalOpen9, setisModalOpen9] = useState(false);
  const ModalOpen9 = () => setisModalOpen9(!isModalOpen9);
  const [isModalOpen10, setisModalOpen10] = useState(false);
  const ModalOpen10 = () => setisModalOpen10(!isModalOpen10);
  const [isModalOpen11, setisModalOpen11] = useState(false);
  const ModalOpen11 = () => setisModalOpen11(!isModalOpen11);
  const [isModalOpen12, setisModalOpen12] = useState(false);
  const ModalOpen12 = () => setisModalOpen12(!isModalOpen12);
  const [isModalOpen13, setisModalOpen13] = useState(false);
  const ModalOpen13 = () => setisModalOpen13(!isModalOpen13);
  const [isModalOpen14, setisModalOpen14] = useState(false);
  const ModalOpen14 = () => setisModalOpen14(!isModalOpen14);

  const toggleDropdown1 = () => setDropdownNavbarOpen1(!dropdownNavbarOpen1);
  const toggleDropdown2 = () => setDropdownNavbarOpen2(!dropdownNavbarOpen2);
  const toggleDropdown3 = () => setDropdownNavbarOpen3(!dropdownNavbarOpen3);
  const toggleDropdown4 = () => setDropdownNavbarOpen4(!dropdownNavbarOpen4);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const labelDropdown1 = () => setDropdownOpen1(!dropdownOpen1);
  const labelDropdown2 = () => setDropdownOpen2(!dropdownOpen2);

  const [inputJSON, setinputJSON] = useState(true);
const [inputJSON2, setinputJSON2] = useState(false);
const [inputJSON3, setinputJSON3] = useState(false);
const [inputJSON4, setinputJSON4] = useState(false);
const [inputJSON5, setinputJSON5] = useState(false);
const toggleinputJSON = () => {
  setinputJSON(true);
  setinputJSON2(false);
  setinputJSON3(false);
  setinputJSON4(false);
  setinputJSON5(false);
};

const toggleinputJSON2 = () => {
  setinputJSON(false);
  setinputJSON2(true);
  setinputJSON3(false);
  setinputJSON4(false);
  setinputJSON5(false);
};

const toggleinputJSON3 = () => {
  setinputJSON(false);
  setinputJSON2(false);
  setinputJSON3(true);
  setinputJSON4(false);
  setinputJSON5(false);
};

const toggleinputJSON4 = () => {
  setinputJSON(false);
  setinputJSON2(false);
  setinputJSON3(false);
  setinputJSON4(true);
  setinputJSON5(false);
};
const toggleinputJSON5 = () => {
  setinputJSON(false);
  setinputJSON2(false);
  setinputJSON3(false);
  setinputJSON4(false);
  setinputJSON5(true);
};
const [input, setinput] = useState(true);
const [input2, setinput2] = useState(false);
const [input3, setinput3] = useState(false);
const [input4, setinput4] = useState(false);
const [input5, setinput5] = useState(false);
const toggleinput = () => {
  setinput(true);
  setinput2(false);
  setinput3(false);
  setinput4(false);
  setinput5(false);
};

const toggleinput2 = () => {
  setinput(false);
  setinput2(true);
  setinput3(false);
  setinput4(false);
  setinput5(false);
};

const toggleinput3 = () => {
  setinput(false);
  setinput2(false);
  setinput3(true);
  setinput4(false);
  setinput5(false);
};

const toggleinput4 = () => {
  setinput(false);
  setinput2(false);
  setinput3(false);
  setinput4(true);
  setinput5(false);
};
const toggleinput5 = () => {
  setinput(false);
  setinput2(false);
  setinput3(false);
  setinput4(false);
  setinput5(true);
};
  const toggleOpenContHTML = () => {
   setOpencontHTML(true);
   setOpencontJSON(false);
 };

 const toggleOpenContJSON = () => {
   setOpencontHTML(false);
   setOpencontJSON(true);
 };
 const [pasta, setPasta] = useState('');
 const [idCompany, setIdCompany] = useState('');
 const [id, setId] = useState('');
 const [templateId, setTemplateId] = useState('');
 const [acronym, setAcronym] = useState('');
 const [json, setJson] = useState({
   "$type": "LugaRh.Domain.Models.Flows.BenefitsForms.FormConfiguration, LugaRh.Domain.Models",
   "Id": "",
   "IdCompany": "",
   "Description": "",
   "Steps": {
     "$type": "System.Collections.Generic.List`1[[LugaRh.Domain.Models.Flows.Step, LugaRh.Domain.Models]], System.Private.CoreLib",
     "$values": []
   },
   "Acronym": "", 
   "Blocked": false,
   "Htmls": {
       "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib",
       "default": "",
       "html01": "",
       "html02": ""
   },
   "HtmlAdditional":{
       "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib",
       "dependentList": ""
   },
   "PayloadField": {
     "$type": "System.Collections.Generic.List`1[[LugaRh.Domain.Models.Shares.Export.ShareExportMappingField, LugaRh.Domain.Models]], System.Private.CoreLib",
     "$values": []
   },
   "PayloadFieldGroups": {
     "$type": "LugaRh.Domain.Models.Shares.Export.ShareExportMappingGroup, LugaRh.Domain.Models",
     "Name": "dependent",
     "KnotName": "DadosPessoais",
     "Fields": {
       "$type": "System.Collections.Generic.List`1[[LugaRh.Domain.Models.Shares.Export.ShareExportMappingField, LugaRh.Domain.Models]], System.Private.CoreLib",
       "$values": []
     }
   },
   "FormType": 1,
   "TemplateId": "",
   "Global": true,
   "WorkspaceList": {
     "$type": "System.Collections.Generic.List`1[[System.Guid, System.Private.CoreLib]], System.Private CoreLib",
     "$values": []
   },
   "EnableNewFingerprint": true
 });

 const CopyHTML = () => {
   const jsonText = JSON.stringify(json, null, 2);
   navigator.clipboard.writeText(jsonText);
 };

 const handleEditorChange = (value: string | undefined) => {
   if (value !== undefined) {
     try {
       setJson(JSON.parse(value));
     } catch (e) {
       console.error('Invalid JSON format.');
     }
   }
 };

 const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   setAcronym(event.target.value);
 };

 const handleInputIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   setId(event.target.value);
 };

 const handleInputIDCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   setIdCompany(event.target.value);
 };

 const handleInputChangeIDTemplate = (event: React.ChangeEvent<HTMLInputElement>) => {
   setTemplateId(event.target.value);
 };

 const handleInputChangePasta = (event: React.ChangeEvent<HTMLInputElement>) => {
   setPasta(event.target.value);
 };
 const handleInsertClickPasta = () => {
  console.log(`Nome da pasta definido: ${pasta}`);
};
 const handleInsertIDClick = () => {
   setJson(prevJson => ({
     ...prevJson,
     Id: id,
   }));
 };

 const handleInsertClick = () => {
   setJson(prevJson => ({
     ...prevJson,
     Acronym: acronym,
   }));
 };

 const handleInsertIDCompanyClick = () => {
   setJson(prevJson => ({
     ...prevJson,
     IdCompany: idCompany,
   }));
 };

 const handleInsertClickIDTemplate = () => {
   setJson(prevJson => ({
     ...prevJson,
     TemplateId: templateId,
   }));
 };
 useEffect(() => {
  setJson(prevJson => ({
    ...prevJson,
    Acronym: acronym,
    Id: id,
    IdCompany: idCompany,
    TemplateId: templateId,
  }));
}, [acronym, id, idCompany, templateId]);

const handleDownloadHTMLZip = () => {
  const zip = new JSZip();
  const textJSON = JSON.stringify(json, null, 2);

  const folder = zip.folder(pasta || 'default-folder');
  if (folder) {
    folder.file(json.Id + '.json', textJSON);
  }

  zip.generateAsync({ type: 'blob' }).then((content) => {
    saveAs(content, `${pasta || 'default-folder'}.zip`);
  }).catch((err) => {
    console.error('Erro ao gerar o arquivo zip:', err);
  });
};



 const [pastaJSON, setPastaJSON] = useState('');
 const [idCompanyJSON, setIdCompanyJSON] = useState('');
 const [idJSON, setIdJSON] = useState('');
 const [templateidJSON, setTemplateIdJSON] = useState('');
 const [acronymJSON, setAcronymJSON] = useState('');
 const [jsonJSON, setJsonJSON] = useState({
   "$type": "LugaRh.Domain.Models.Flows.BenefitsForms.FormConfiguration, LugaRh.Domain.Models",
   "Id": "GERAR GUID E COLAR AQUI",
   "IdCompany": "COLAR ID DA COMPANY DE TESTE",
   "Description": "",
   "Steps": {
     "$type": "System.Collections.Generic.List`1[[LugaRh.Domain.Models.Flows.Step, LugaRh.Domain.Models]], System.Private.CoreLib",
     "$values": []
   },
   "Acronym": "NOME DO FORMULÁRIO",
   "Blocked": false,
   "PayloadField": {
     "$type": "System.Collections.Generic.List`1[[LugaRh.Domain.Models.Shares.Export.ShareExportMappingField, LugaRh.Domain.Models]], System.Private.CoreLib",
     "$values": []
   },
   "PayloadFieldGroups": {
     "$type": "LugaRh.Domain.Models.Shares.Export.ShareExportMappingGroup, LugaRh.Domain.Models",
     "Name": "dependent",
     "KnotName": "DadosPessoais",
     "Fields": {
       "$type": "System.Collections.Generic.List`1[[LugaRh.Domain.Models.Shares.Export.ShareExportMappingField, LugaRh.Domain.Models]], System.Private.CoreLib",
       "$values": []
     }
   },
   "FormType": 1,
   "TemplateId": "Colar GUID do template aqui",
   "Global": true,
   "WorkspaceList": {
     "$type": "System.Collections.Generic.List`1[[System.Guid, System.Private.CoreLib]], System.Private.CoreLib",
     "$values": []
   },
   "EnableNewFingerprint": true
 });

 const CopyJSON = () => {
   const jsonText = JSON.stringify(jsonJSON, null, 2);
   navigator.clipboard.writeText(jsonText);
 };

 const handleEditorChangeJSON = (value: string | undefined) => {
   if (value !== undefined) {
     try {
       setJsonJSON(JSON.parse(value));
     } catch (e) {
       console.error('Invalid JSON format.');
     }
   }
 };

 const handleInputChangeJSON = (event: React.ChangeEvent<HTMLInputElement>) => {
   setAcronymJSON(event.target.value);
 };

 const handleInputIDChangeJSON = (event: React.ChangeEvent<HTMLInputElement>) => {
   setIdJSON(event.target.value);
 };

 const handleInputIDComapanyChangeJSON = (event: React.ChangeEvent<HTMLInputElement>) => {
   setIdCompanyJSON(event.target.value);
 };

 const handleInputChangeIDTemplateJSON = (event: React.ChangeEvent<HTMLInputElement>) => {
   setTemplateIdJSON(event.target.value);
 };

 const handleInputChangePastaJSON = (event: React.ChangeEvent<HTMLInputElement>) => {
   setPastaJSON(event.target.value);
 };

 const handleInsertClickPastaJSON = () => {
   console.log(`Nome da pasta definido: ${pastaJSON}`);
 };

 const handleInsertIDClickJSON = () => {
   setJsonJSON(prevJson => ({
     ...prevJson,
     Id: idJSON,
   }));
 };

 const handleInsertClickJSON = () => {
   setJsonJSON(prevJson => ({
     ...prevJson,
     Acronym: acronymJSON,
   }));
 };

 const handleInsertIDCompanyClickJSON = () => {
   setJsonJSON(prevJson => ({
     ...prevJson,
     IdCompany: idCompanyJSON,
   }));
 };

 const handleInsertClickIDTemplateJSON = () => {
   setJsonJSON(prevJson => ({
     ...prevJson,
     TemplateId: templateidJSON,
   }));
 };
 useEffect(() => {
  setJsonJSON(prevJson => ({
    ...prevJson,
    Acronym: acronymJSON,
    Id: idJSON,
    IdCompany: idCompanyJSON,
    TemplateId: templateidJSON,
  }));
}, [acronymJSON, idJSON, idCompanyJSON, templateidJSON]);

 const handleDownloadJSONZip = () => {
  const zip = new JSZip();
  const textjsonJSON = JSON.stringify(jsonJSON, null, 2);

  const folder = zip.folder(pastaJSON || 'default-folder');
  if (folder) {
    folder.file(jsonJSON.Id + '.json', textjsonJSON);
  }

  zip.generateAsync({ type: 'blob' }).then((content) => {
    saveAs(content, `${pastaJSON || 'default-folder'}.zip`);
  }).catch((err) => {
    console.error('Erro ao gerar o arquivo zip:', err);
  });
}



 const { theme } = useTheme();
const [editorTheme, setEditorTheme] = useState("vs-light");

useEffect(() => {
  if (theme === "dark") {
    setEditorTheme("vs-dark");
  } else {
    setEditorTheme("vs-light");
  }
}, [theme]);

const [editorWidth, setEditorWidth] = useState<string>('1070px'); 
  const [editorHeight, setEditorHeight] = useState<string>('600px'); 

  const increaseEditorSize = () => {
    const sidebar = document.getElementById('logo-sidebar') as HTMLElement;
    const HTML = document.getElementById('HTML') as HTMLElement;
    const jsonehtml = document.getElementById('json-html') as HTMLElement;
    const input = document.getElementById('input') as HTMLElement;
    const maximizar = document.getElementById('maximizar') as HTMLElement;
    const minimizar = document.getElementById('minimizar') as HTMLElement;

    if (sidebar) {
      sidebar.style.display = 'none';
    }

    if (HTML) {
      HTML.style.position = 'absolute'; 
      HTML.style.right = '0'; 
      HTML.style.marginRight = '20px';
      HTML.style.zIndex = '1000';
      HTML.style.marginTop = '-100px';
    }
    if (jsonehtml) {
      jsonehtml.style.display = 'none';
    }
    if (input) {
      input.style.display = 'none';
    }
    if (maximizar) {
      maximizar.style.display = 'none';
    }
    if (minimizar) {
      minimizar.style.display = 'block';
    }
    setEditorWidth('1400px');
    setEditorHeight('800px');
  };

  const toggleEditorSize = () => {
    const sidebar = document.getElementById('logo-sidebar') as HTMLElement;
    const HTML = document.getElementById('HTML') as HTMLElement;
    const jsonehtml = document.getElementById('json-html') as HTMLElement;
    const input = document.getElementById('input') as HTMLElement;
    const maximizar = document.getElementById('maximizar') as HTMLElement;
    const minimizar = document.getElementById('minimizar') as HTMLElement;

    if (sidebar) {
      sidebar.style.display = ''; 
    }

    if (HTML) {
      HTML.style.position = ''; 
      HTML.style.right = ''; 
      HTML.style.marginRight = ''; 
      HTML.style.zIndex = ''; 
      HTML.style.marginTop = ''; 
    }

    if (jsonehtml) {
      jsonehtml.style.display = ''; 
    }

    if (input) {
      input.style.display = ''; 
    }

    if (maximizar) {
      maximizar.style.display = ''; 
    }

    if (minimizar) {
      minimizar.style.display = ''; 
    }

    setEditorWidth('1070px'); 
    setEditorHeight('600px'); 
  };

  const increaseEditorSizeJSON = () => {
    const sidebar = document.getElementById('logo-sidebar') as HTMLElement;
    const JSON = document.getElementById('JSON') as HTMLElement;
    const jsonehtml = document.getElementById('json-html') as HTMLElement;
    const input = document.getElementById('input-json') as HTMLElement;
    const maximizar = document.getElementById('maximizar') as HTMLElement;
    const minimizar = document.getElementById('minimizar') as HTMLElement;

    if (sidebar) {
      sidebar.style.display = 'none';
    }

    if (JSON) {
      JSON.style.position = 'absolute'; 
      JSON.style.right = '0'; 
      JSON.style.marginRight = '20px';
      JSON.style.zIndex = '1000';
      JSON.style.marginTop = '-100px';
    }
    if (jsonehtml) {
      jsonehtml.style.display = 'none';
    }
    if (input) {
      input.style.display = 'none';
    }
    if (maximizar) {
      maximizar.style.display = 'none';
    }
    if (minimizar) {
      minimizar.style.display = 'block';
    }
    setEditorWidth('1400px');
    setEditorHeight('800px');
  };

  const toggleEditorSizeJSON = () => {
    const sidebar = document.getElementById('logo-sidebar') as HTMLElement;
    const JSON = document.getElementById('JSON') as HTMLElement;
    const jsonehtml = document.getElementById('json-html') as HTMLElement;
    const input = document.getElementById('input-json') as HTMLElement;
    const maximizar = document.getElementById('maximizar') as HTMLElement;
    const minimizar = document.getElementById('minimizar') as HTMLElement;

    if (sidebar) {
      sidebar.style.display = ''; 
    }

    if (JSON) {
      JSON.style.position = ''; 
      JSON.style.right = ''; 
      JSON.style.marginRight = ''; 
      JSON.style.zIndex = ''; 
      JSON.style.marginTop = ''; 
    }

    if (jsonehtml) {
      jsonehtml.style.display = ''; 
    }

    if (input) {
      input.style.display = ''; 
    }

    if (maximizar) {
      maximizar.style.display = ''; 
    }

    if (minimizar) {
      minimizar.style.display = ''; 
    }

    setEditorWidth('1070px'); 
    setEditorHeight('600px'); 
  };


  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a href="#" className="flex items-center ps-2.5 mb-5">
          <Image
          src="/imgs/logo-form.png" 
          alt="Logo" 
          width={32} 
          height={26} 
          className="h-6 me-3 sm:h-7" 
        />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              FormsDevHelp
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                onClick={toggleDropdown1}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                <span className="ms-3">Página</span>
                <span className="inline-flex items-center justify-center  text-sm font-medium" style={{marginLeft:'102px'}}>
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                  
                </span>
              </a>
            </li>
            {dropdownNavbarOpen1 && (
              <div
                id="dropdownNavbar1"
                className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li onClick={ModalOpen1}>
                    <a
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                     >
                      FormStep
                    </a>
                  </li>
                  <li onClick={ModalOpen2}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      OptionStep
                    </a>
                  </li>
                </ul>
              </div>
            )}
            


            <li>
              <a
                href="#"
                onClick={toggleDropdown2}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><path d="M10 11h.01"/><path d="M14 6h.01"/><path d="M18 6h.01"/><path d="M6.5 13.1h.01"/><path d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"/><path d="M17.4 9.9c-.8.8-2 .8-2.8 0"/><path d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"/><path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"/></svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Campos</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium">
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </span>
              </a>
            </li>
            {dropdownNavbarOpen2 && (
              <div
                id="dropdownNavbar2"
                className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                   <li onClick={ModalOpen3}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      SimpleStructionField - SIF
                    </a>
                  </li>
                  <li onClick={ModalOpen4}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      TextField
                    </a>
                  </li>
                  <li onClick={ModalOpen5}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      MaskedField
                    </a>
                  </li>
                  <li onClick={ModalOpen6}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      NumberField
                    </a>
                  </li>
                  <li onClick={ModalOpen7}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      TermField
                    </a>
                  </li>
                </ul>
              </div>
            )}
            <li>
              <a
                href="#"
                onClick={toggleDropdown3}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/></svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Campos - 2</span>
               <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium "><svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
               </svg></span>
                
              </a>
            </li>
            {dropdownNavbarOpen3 && (
              <div
                id="dropdownNavbar3"
                className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  
                  <li onClick={ModalOpen8}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      DateField
                    </a>
                  </li>
                  <li onClick={ModalOpen9}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      CheckBoxField
                    </a>
                  </li>
                  <li onClick={ModalOpen10}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      RadioListField
                    </a>
                  </li>
                </ul>
              </div>
            )}
            <li>
              <a
                href="#"
                onClick={toggleDropdown4}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Campos - 3</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium">
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </span>
              </a>
            </li>
            {dropdownNavbarOpen4 && (
              <div
                id="dropdownNavbar4"
                className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li onClick={ModalOpen11}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      SelectField
                    </a>
                  </li>
                  <li onClick={ModalOpen12}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      DependentsList
                    </a>
                  </li>
                  <li  onClick={ModalOpen13}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      ButtonField
                    </a>
                  </li>
                  <li onClick={ModalOpen14}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      ShareWithDependentList
                    </a>
                  </li>
                  <li onClick={CopyGlobal}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      GlobalField
                    </a>
                  </li>
                </ul>
              </div>
            )}
              <li>
              <a
                href="/idcompany" target="_blank"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8v8"/><path d="m8.5 14 7-4"/><path d="m8.5 10 7 4"/></svg>
               <span className="flex-1 ms-3 whitespace-nowrap">ID Company</span>
               
              </a>
            </li>
            <li>
              <a
                href="https://testsigma.com/free-tools/html-minify" target="_blank"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" x2="21" y1="10" y2="3"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Minify</span>
                
              </a>
            </li>
            <li>
              <a
                href="https://selectpdf.com/" target="_blank"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Converter Pdf</span>
                
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">

      <div className="flex justify-between items-start ml-5" id='json-html'>
  <div className="inline-flex rounded-md shadow-sm" role="group">
    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-300 focus:bg-blue-600 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-blue-900" onClick={toggleOpenContHTML}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-3 h-3 me-2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      HTML
    </button>
    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-300 focus:bg-blue-600 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-blue-900" onClick={toggleOpenContJSON}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 me-3"><path d="M10 12.5 8 15l2 2.5"/><path d="m14 12.5 2 2.5-2 2.5"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/></svg>
      JSON
    </button>
  </div>
  <div className="flex items-end w-9/12 mx-auto ml-80">
    <div className="w-11/12 bg-white p-1 rounded shadow-md dark:bg-gray-800 dark:text-white">
    <div className="grid gap-1 mb-1">
  <label className="flex items-center ml-2 relative w-full">
    <span>GUIDs Gerados:</span>
    <div className="relative w-3/4 ml-2">
      <textarea id="guidsText" className="border border-blue-600 rounded-md h-8 p-1 pr-8 overflow-hidden resize-none dark:bg-gray-700 dark:border-blue-400 dark:text-white" style={{ width: '400px' }}></textarea>
      <button className="absolute top-2 right-4 flex items-center group" onClick={copiarTexto}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex items-end justify-end">
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
        <span className="absolute hidden top-5 left-1/2 -translate-x-1/2 z-20 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
          Copiar
        </span>
      </button>
    </div>
  </label>
</div>
        <div id="check-html" className="flex items-center">
            <label className="ml-2">Quantidade de GUIDs:</label>
            <input type="number" id="numGuids" min="1" className="border border-gray-300 p-1 rounded-md mb-1 ml-2 w-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
            <button className=" bg-blue-500 text-white p-1 rounded-md ml-36 mb-1 dark:bg-blue-700" onClick={mostrarGuid} style={{ width: '170px' }}>Gerar +</button>
        </div>
    </div>
</div>
            <div className='mr-2'>
                  <ModeToggle/>
               </div>

</div>

{OpencontHTML && (
      <div className="p-4 mt-14">
        <div className="flex mb-6">
        {input &&(
        <div id='input'>
            <span className="inline-flex items-center  text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" onClick={labelDropdown1}>
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
               </svg>
            <label className='px-3 py-2.5'>Nome do Formulário [Acronym]: </label>
          </span>
          <input
            type="text"
            id="website-admin"
            className="rounded-none bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            style={{ width: '732px' }}
            value={acronym}
            onChange={handleInputChange}
          />
          <button
            className="absolute inset-y-0 top-44 px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-r-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:bg-gray-600 dark:text-gray-400 dark:focus:ring-gray-500"
            style={{ width: '112px', height: '41.5px'}}
            onClick={handleInsertClick}
            type="button"
          >
            Inserir
          </button>
        </div>
    )}
    {input2 &&(
        <div>
            <span className="inline-flex items-center  text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" onClick={labelDropdown1}>
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
               </svg>
              <label className='px-3 py-2.5'>ID: </label>
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none  bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              style={{ width: '925px' }} value={id}
              onChange={handleInputIDChange}
              />
             <button className="absolute inset-y-0 top-44 px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-r-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:bg-gray-600 dark:text-gray-400 dark:focus:ring-gray-500" style={{ width: '112px',height:'41.5px' }} onClick={handleInsertIDClick} type="button">
      Inserir
    </button>
        </div>
    )}
    {input3 &&(
        <div>
            <span className="inline-flex items-center  text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" onClick={labelDropdown1}>
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
               </svg>
              <label className='px-3 py-2.5'>ID Company: </label>
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none  bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              style={{ width: '860px' }} value={idCompany}
              onChange={handleInputIDCompanyChange}
              />
             <button className="absolute inset-y-0 top-44 px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-r-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:bg-gray-600 dark:text-gray-400 dark:focus:ring-gray-500" style={{ width: '112px',height:'41.5px' }} onClick={handleInsertIDCompanyClick} type="button">
      Inserir
    </button>
        </div>
    )}
    
    {input4 &&(
        <div>
            <span className="inline-flex items-center  text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" onClick={labelDropdown1}>
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
               </svg>
              <label className='px-3 py-2.5'>Template ID: </label>
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none  bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              style={{ width: '862px' }} value={templateId}
              onChange={handleInputChangeIDTemplate}
              />
             <button className="absolute inset-y-0 top-44 px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-r-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:bg-gray-600 dark:text-gray-400 dark:focus:ring-gray-500" style={{ width: '112px',height:'41.5px' }} onClick={handleInsertClickIDTemplate} type="button">
      Inserir
    </button>
        </div>
    )}
    {input5 &&(
        <div>
            <span className="inline-flex items-center text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" onClick={labelDropdown1}>
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
               </svg>
              <label className='px-3 py-2.5 '>Nome da Pasta: </label>
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none  bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              style={{ width: '838px' }} onChange={handleInputChangePasta} value={pasta}
              />
             <button className="absolute inset-y-0 top-44 px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-r-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:bg-gray-600 dark:text-gray-400 dark:focus:ring-gray-500" style={{ width: '112px',height:'41.5px' }} onClick={handleInsertClickPasta} type="button">
      Inserir
    </button>
        </div>
    )}   
          
        </div>
        {dropdownOpen1 && (
          <div
            id="dropdown2"
            className="z-20 font-normal mb-2 w-64 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute"
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
            <li onClick={toggleinput}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Acronym
                </a>
              </li>
              <li onClick={toggleinput2}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  ID
                </a>
              </li>
              <li onClick={toggleinput3}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  ID Company
                </a>
              </li>
              <li onClick={toggleinput4}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Template Id
                </a>
              </li>
              <li onClick={toggleinput5}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Nome da Pasta
                </a>
              </li>
            </ul>
          </div>
        )}
        <div className="flex items-start justify-start mb-4 rounded">
          <div id="HTML" className="max-w-max max-h-max p-4 bg-white dark:bg-gray-800 rounded shadow-md">
            <div className="flex justify-end">
            <button
              className="relative flex items-center group hidden"
              onClick={toggleEditorSize}
              id='minimizar'
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex items-end justify-end mr-2"
              >
                <polyline points="4 14 10 14 10 20" />
                <polyline points="20 10 14 10 14 4" />
                <line x1="14" x2="21" y1="10" y2="3" />
                <line x1="3" x2="10" y1="21" y2="14" />
              </svg>
              <span className="absolute hidden top-8 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Minimizar
              </span>
            </button>

            <button className="relative flex items-center group"  onClick={increaseEditorSize} id='maximizar'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex items-end justify-end mr-2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
                    <span className="absolute hidden top-8 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                      Maximizar
                    </span>
                  </button>
              <button className="relative flex items-center group mr-2" onClick={handleDownloadHTMLZip}>
                <svg
                  className="flex items-end justify-end"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                  />
                </svg>
                <span className="absolute hidden top-8 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                  Download
                </span>
              </button>

              <button className="relative flex items-center group" onClick={CopyHTML}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="flex items-end justify-end"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                <span className="absolute hidden top-8 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                  Copiar
                </span>
              </button>
            </div>
            <MonacoEditor
            width={editorWidth}
            height={editorHeight}
        defaultLanguage="json"
        defaultValue={JSON.stringify(json, null, 2)}
        onChange={handleEditorChange}
         theme={editorTheme}
        options={{
          automaticLayout: true,
        }}
        className='textHTML pt-8'
        
        
      />
          </div>
        </div>
      </div>
    )}
    
{OpencontJSON && (
        <div className="p-4 mt-14">
          <div className="flex mb-6">
    {inputJSON &&(
        <div id='input-json'>
            <span className="inline-flex items-center  text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" onClick={labelDropdown2}>
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
               </svg>
              <label className='px-3 py-2.5'>Nome do Formulário [Acronym]: </label>
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none  bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              style={{ width: '746px' }} value={acronymJSON}
              onChange={handleInputChangeJSON}
              />
             <button className="absolute inset-y-0 top-44 px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-r-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:bg-gray-600 dark:text-gray-400 dark:focus:ring-gray-500" style={{ width: '112px',height:'41.5px' }} onClick={handleInsertClickJSON} type="button">
      Inserir
    </button>
        </div>
    )}
    {inputJSON2 &&(
        <div>
            <span className="inline-flex items-center text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" onClick={labelDropdown2}>
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
               </svg>
              <label className=' px-3 py-2.5'>ID: </label>
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none  bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              style={{ width: '932px' }} value={idJSON}
              onChange={handleInputIDChangeJSON}
              />
             <button className="absolute inset-y-0 top-44 px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-r-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:bg-gray-600 dark:text-gray-400 dark:focus:ring-gray-500" style={{ width: '112px',height:'41.5px' }} onClick={handleInsertIDClickJSON} type="button">
      Inserir
    </button>
        </div>
    )}
    {inputJSON3 &&(
        <div>
            <span className="inline-flex items-center  text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" onClick={labelDropdown2}>
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
               </svg>
              <label className='px-3 py-2.5'>ID Company: </label>
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none  bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              style={{ width: '865px' }} value={idCompanyJSON}
              onChange={handleInputIDComapanyChangeJSON}
              />
             <button className="absolute inset-y-0 top-44 px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-r-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:bg-gray-600 dark:text-gray-400 dark:focus:ring-gray-500" style={{ width: '112px',height:'41.5px' }} onClick={handleInsertIDCompanyClickJSON} type="button">
      Inserir
    </button>
        </div>
    )}
    {inputJSON4 &&(
        <div>
            <span className="inline-flex items-center text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" onClick={labelDropdown2}>
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
               </svg>
              <label className=' px-3 py-2.5'>Template ID: </label>
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none  bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              style={{ width: '868px' }} value={templateidJSON}
              onChange={handleInputChangeIDTemplateJSON}
              />
             <button className="absolute inset-y-0 top-44 px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-r-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:bg-gray-600 dark:text-gray-400 dark:focus:ring-gray-500" style={{ width: '112px',height:'41.5px' }} onClick={handleInsertClickIDTemplateJSON} type="button">
      Inserir
    </button>
        </div>
        
    )}
    {inputJSON5 &&(
        <div>
            <span className="inline-flex items-center text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" onClick={labelDropdown2}>
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
               </svg>
              <label className=' px-3 py-2.5'>Nome da Pasta: </label>
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none  bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              style={{ width: '845px' }} onChange={handleInputChangePastaJSON} value={pastaJSON}
              />
             <button className="absolute inset-y-0 top-44 px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-r-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:bg-gray-600 dark:text-gray-400 dark:focus:ring-gray-500" style={{ width: '112px',height:'41.5px' }} onClick={handleInsertClickPastaJSON} type="button">
      Inserir
    </button>
        </div>
    )}
            
          </div>
          {dropdownOpen2 && (
          <div
            id="dropdown2"
            className="z-20 font-normal mb-2 w-64 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute"
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
            <li onClick={toggleinputJSON}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Acronym
                </a>
              </li>
              <li onClick={toggleinputJSON2}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  ID
                </a>
              </li>
              <li onClick={toggleinputJSON3}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  ID Company
                </a>
              </li>
              <li onClick={toggleinputJSON4}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Template Id
                </a>
              </li>
              <li onClick={toggleinputJSON5}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Nome da Pasta
                </a>
              </li>
            </ul>
          </div>
        )}
        
          <div className="flex items-start justify-start mb-4 rounded">
            <div id="JSON" className="max-w-max max-h-max p-4 bg-white dark:bg-gray-800 rounded shadow-md" >
              <div className="flex justify-end items-center">

                <div className="flex space-x-2">
                <button
              className="relative flex items-center group hidden"
              onClick={toggleEditorSizeJSON}
              id='minimizar'
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex items-end justify-end "
              >
                <polyline points="4 14 10 14 10 20" />
                <polyline points="20 10 14 10 14 4" />
                <line x1="14" x2="21" y1="10" y2="3" />
                <line x1="3" x2="10" y1="21" y2="14" />
              </svg>
              <span className="absolute hidden top-8 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Minimizar
              </span>
            </button>

            <button className="relative flex items-center group"  onClick={increaseEditorSizeJSON} id='maximizar'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex items-end justify-end "><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
                    <span className="absolute hidden top-8 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                      Maximizar
                    </span>
                  </button>

                  <button className="relative flex items-center group" onClick={handleDownloadJSONZip}>
                    <svg className="flex items-end justify-end" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
                    </svg>
                    <span className="absolute hidden top-8 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                      Download
                    </span>
                  </button>

                  <button className="relative flex items-center group" onClick={CopyJSON}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex items-end justify-end">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                    <span className="absolute hidden top-8 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                      Copiar
                    </span>
                  </button>
                </div>
              </div>

              <MonacoEditor
          width={editorWidth}
          height={editorHeight}
          defaultLanguage="json"
          defaultValue={JSON.stringify(jsonJSON, null, 2)}
          onChange={handleEditorChangeJSON}
          theme={editorTheme}
          options={{
            automaticLayout: true,
          }}
          className="textJSON pt-8"
        />
            </div>
          </div>
        </div>
      )}
      {isModalOpen1 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-4">
        <div className="flex justify-between items-center mb-4 ml-96">
          <div className="text-center">
            <h1 className="text-lg text-black dark:text-white">FormStep</h1>
            <p className="text-gray-500 dark:text-gray-300">Cria uma página em branco no WebApp.</p>
          </div>
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyFormstep}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen1(false)}
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
        <div>
          <pre id='formstep' className="text-xs">
            {JSON.stringify(
              {
                "$type": "LugaRh.Domain.Models.Flows.Steps.FormStep.FormStep, LugaRh.Domain.Models",
                "Label": "Título da tela",
                "Fields": {
                  "$type": "System.Collections.Generic.List`1[[LugaRh.Domain.Models.Flows.Steps.FormStep.Fields.FormField, LugaRh.Domain.Models]], System.Private.CoreLib",
                  "$values": []
                },
                "Id": "guid"
              },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  </div>
)}
      {isModalOpen2 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-4">
        <div className="flex justify-between items-center mb-4 text-center ml-48">
          <div className="text-center">
            <h1 className="text-lg text-black dark:text-white">OptionStep</h1>
            <p className="text-gray-500 dark:text-gray-300">Apresenta várias opções para o usuário, cada uma com suas próprias páginas (formsteps) e fluxo. </p>
          </div>
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyOptionstep}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen2(false)}
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
        <div>
          <pre id='optionstep' className="text-xs">
            {JSON.stringify(
              {
                "$type": "LugaRh.Domain.Models.Flows.Steps.OptionsStep.StringSingleOptionStep, LugaRh.Domain.Models",
                "Label": "Título da Janela.",
                "Property": "form_nomeDoForm.chamadaDoCampo",
                "Value": null,
                "Options": {
                    "$type": "System.Collections.Generic.List`1[[LugaRh.Domain.Models.Flows.Steps.Option`1[[System.String, System.Private.CoreLib]], LugaRh.Domain.Models]], System.Private.CoreLib",
                    "$values": [
                        {
                            "$type": "LugaRh.Domain.Models.Flows.Steps.Option`1[[System.String, System.Private.CoreLib]], LugaRh.Domain.Models",
                            "Label": "SIM(Ou texto equivalente)",
                            "Value": true,
                            "Steps": {
                                "$type": "System.Collections.Generic.List`1[[LugaRh.Domain.Models.Flows.Step, LugaRh.Domain.Models]], System.Private.CoreLib",
                                "$values": "[Colocar um formstep aqui]"
                            }
                        },
                        {
                            "$type": "LugaRh.Domain.Models.Flows.Steps.Option`1[[System.String, System.Private.CoreLib]], LugaRh.Domain.Models",
                            "Label": "Não(Ou texto equivalente)",
                            "Value": false,
                            "Steps": {
                                "$type": "System.Collections.Generic.List`1[[LugaRh.Domain.Models.Flows.Step, LugaRh.Domain.Models]], System.Private.CoreLib",
                                "$values": "[Colocar um formstep aqui]"
                            }
                        }
                    ]
                },
                "Id": ""
            },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  </div>
)}

{isModalOpen3 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-4">
        <div className="flex justify-between items-center mb-4 text-center ">
          <div className="text-center">
            <h1 className="text-lg text-black dark:text-white">SimpleInstructionField (SIF)</h1>
            <p className="text-gray-500 dark:text-gray-300">Campo simples para apresentar texto na tela, possui título e corpo e aceita algumas tags de html. </p>
          </div>
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copySIFstep}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen3(false)}
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
        <div>
          <pre id='SIFstep' className="text-xs">
            {JSON.stringify(
              {
                "$type": "LugaRh.Domain.Models.Flows.Steps.FormStep.Fields.SimpleInstructionField, LugaRh.Domain.Models",
                "Property": "form_nomeDoForm.chamadaDoCampo",
                "DescriptionTitle": "Título do campo. ",
                 "Description": "<br>Texto de uma linha<br>Texto em outra linha<br>texto em outra linha."
              },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  </div>
)}

{isModalOpen4 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-4">
        <div className="flex justify-between items-center mb-4 text-center ">
          <div className="text-center">
            <h1 className="text-lg text-black dark:text-white">TextField</h1>
            <p className="text-gray-500 dark:text-gray-300">Campo de entrada de dados, o texto digitado nesse campo será o valor da property.</p>
          </div>
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyTextFieldstep}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen4(false)}
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
        <div>
          <pre id='TextFieldstep' className="text-xs">
            {JSON.stringify(
              {
                "$type": "LugaRh.Domain.Models.Flows.Steps.FormStep.Fields.TextField, LugaRh.Domain.Models",
                "Value": null,
                "MaxLength": 15,
                "Property": "form_nomedoform.chamadadoCampo",
                "Required": false,
                "Label": "Nome do campo"
            },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen5 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-4">
        <div className="flex justify-between items-center mb-4 text-center ">
          <div className="text-center">
            <h1 className="text-lg text-black dark:text-white">MaskedField</h1>
            <p className="text-gray-500 dark:text-gray-300">Similar ao NumberField é um campo para inserção de valores numéricos, porém aplica uma máscara que formata o valor digitado para o formato da máscara.</p>
          </div>
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyMaskedFieldstep}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen5(false)}
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
        <div>
          <pre id='MaskedFieldstep' className="text-xs">
            {JSON.stringify(
              {
                "$type": "LugaRh.Domain.Models.Flows.Steps.FormStep.Fields.MaskedField, LugaRh.Domain.Models",
                "Value": null,
                "Mask": "999.999.999-99",
                "Property": "form_nomedoform.chamadadocampo",
                "Required": false,
                "Label": "CPF: "
            },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen6 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-4">
        <div className="flex justify-between items-center mb-4 text-center ">
          <div className="text-center">
            <h1 className="text-lg text-black dark:text-white">NumberField</h1>
            <p className="text-gray-500 dark:text-gray-300">Campo de entrada de dados, o número digitado nesse campo será o valor da property.</p>
          </div>
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyNumberFieldstep}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen6(false)}
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
        <div>
          <pre id='NumberFieldstep' className="text-xs">
            {JSON.stringify(
              {
                "$type": "LugaRh.Domain.Models.Flows.Steps.FormStep.Fields.NumberField, LugaRh.Domain.Models",
                "Value": null,
                "Property": "form_nomedoForm.chamadaDoCampo",
                "Label": "Título do campo na página",
                "Required": false,
                "IsMonetary": false,
                "ValidateTotalPercent": false,
                "MaxLength": 15,
                "MinValue": 1,
                "MaxValue": 99
              },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen7 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-4">
        <div className="flex justify-center items-center mb-4 text-center ">
          <div className="text-center">
            <h1 className="text-lg text-black dark:text-white">TermField</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Gera um termo que o usuário precisa aceitar para continuar, geralmente cada formulário possui suas condições e regras que devem ser inseridas nesse campo, mas no caso de não possuir utilizar o termo do LugaRh.</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyTermFieldstep}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen7(false)}
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
        <div>
          <pre id='TermFieldstep' className="text-xs">
            {JSON.stringify(
              {
                "$type": "LugaRh.Domain.Models.Flows.Steps.FormStep.Fields.TermField, LugaRh.Domain.Models", 
                "Property": "form_nomeDoForm.chamadaDoCampo",
                "Label": "Conteúdo mostrado no título do termo (se vazio, virá o texto padrão)",
                "TermText": "\nOs documentos eletrônicos produzidos e geridos no âmbito do Lugarh terão garantias de autoria, autenticidade e integridade asseguradas mediante a utilização de assinatura eletrônica.",
                "AcceptanceText": "Texto de aceite (deixar null para texto padrão)"
            },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen8 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-4">
        <div className="flex justify-center items-center mb-4 text-center ">
          <div className="text-center">
            <h1 className="text-lg text-black dark:text-white">DateField</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Campo de inserir dados que só aceita números e os formata para formato de data.</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyDateFieldstep}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen8(false)}
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
        <div>
          <pre id='DateFieldstep' className="text-xs">
            {JSON.stringify(
              {
                "$type": "LugaRh.Domain.Models.Flows.Steps.FormStep.Fields.DateField, LugaRh.Domain.Models",
                "Value": "2017-07-21T21:06:50.373Z",
                "Property": "form_nomedoform.chamadadocampo",
                "Required": false,
                "Label": "Título do Campo",
                "Helper": null
            },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen9 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-4">
        <div className="flex justify-center items-center mb-4 text-center ">
          <div className="text-center">
            <h1 className="text-lg text-black dark:text-white">CheckboxField</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Cria um checkbox no formulário que tem dois estados: selecionado e não selecionado.</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyCheckboxFieldstep}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen9(false)}
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
        <div>
          <pre id='CheckboxFieldstep' className="text-xs">
            {JSON.stringify(
              {
                "$type": "LugaRh.Domain.Models.Flows.Steps.FormStep.Fields.CheckboxField, LugaRh.Domain.Models",
                "Value": false,
                "Property": "form_nomedoform.chamadadocampo",
                "Required": false,
                "Label": "Descrição do campo"
            },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen10 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-4">
        <div className="flex justify-between items-center mb-4 text-center ml-72">
          <div className="text-center">
            <h1 className="text-lg text-black dark:text-white">RadioListField</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Apresenta uma lista de opções ao usuário onde apenas uma pode ser selecionada.</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyRadioListFieldstep}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen10(false)}
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
        <div>
          <pre id='RadioListFieldstep' className="text-xs">
            {JSON.stringify(
              {
                "$type": "LugaRh.Domain.Models.Flows.Steps.FormStep.Fields.RadioListField, LugaRh.Domain.Models",
                "Options": {
                    "$type": "System.Collections.Generic.List`1[[LugaRh.Domain.Models.Flows.Steps.Option`1[[System.String, System.Private.CoreLib]], LugaRh.Domain.Models]], System.Private.CoreLib",
                    "$values": [
                        {
                            "$type": "LugaRh.Domain.Models.Flows.Steps.Option`1[[System.String, System.Private.CoreLib]], LugaRh.Domain.Models",
                            "Label": "Opção A",
                            "Value": "A"
                        },
                        {
                            "$type": "LugaRh.Domain.Models.Flows.Steps.Option`1[[System.String, System.Private.CoreLib]], LugaRh.Domain.Models",
                            "Label": "Opção B",
                            "Value": "B"
                        },
                        {
                            "$type": "LugaRh.Domain.Models.Flows.Steps.Option`1[[System.String, System.Private.CoreLib]], LugaRh.Domain.Models",
                            "Label": "Opção C",
                            "Value": "C"
                        },
                        {
                            "$type": "LugaRh.Domain.Models.Flows.Steps.Option`1[[System.String, System.Private.CoreLib]], LugaRh.Domain.Models",
                            "Label": "Opção D",
                            "Value": "D"
                        }
                    ]
                },
                "Property": "form_nomedoform.chamadadocampo",
                "Required": true,
                "Label": "Título do campo"
            },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen11 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-4">
        <div className="flex justify-between items-center mb-4 text-center ml-36">
          <div className="text-center">
            <h1 className="text-lg text-black dark:text-white">SelectField</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Esse campo apresenta uma lista de opções para o usuário e ele só pode escolher uma, a função do campo é parecida porém a aparência no webapp é diferente.</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copySelectFieldstep}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen11(false)}
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
        <div>
          <pre id='SelectFieldstep' className="text-xs">
            {JSON.stringify(
              {
                "$type": "LugaRh.Domain.Models.Flows.Steps.FormStep.Fields.SelectField, LugaRh.Domain.Models",
                "Options": {
                    "$type": "System.Collections.Generic.List`1[[LugaRh.Domain.Models.Flows.Steps.Option`1[[System.String, System.Private.CoreLib]], LugaRh.Domain.Models]], System.Private.CoreLib",
                    "$values": [
                        {
                            "$type": "LugaRh.Domain.Models.Flows.Steps.Option`1[[System.String, System.Private.CoreLib]], LugaRh.Domain.Models",
                            "Label": "Opção 1",
                            "Value": "1"
                        },
                        {
                            "$type": "LugaRh.Domain.Models.Flows.Steps.Option`1[[System.String, System.Private.CoreLib]], LugaRh.Domain.Models",
                            "Label": "Opção 2",
                            "Value": "2"
                        }
                    ]
                },
                "Property": "form_nomedoform.chamadadocampo",
                "Required": false,
                "Label": "Título do campo"
            },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen12 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-4">
        <div className="flex justify-between items-center mb-4 text-center ml-36">
          <div className="text-center">
            <h1 className="text-lg text-black dark:text-white">DependentListField</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Cria um campo no WebApp onde pede para o Share selecionar os seus dependentes.</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyDependentListFieldstep}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen12(false)}
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
        <div>
          <pre id='DependentListFieldstep' className="text-xs">
            {JSON.stringify(
              {
                "$type": "LugaRh.Domain.Models.Flows.Steps.FormStep.Fields.DependentsListField, LugaRh.Domain.Models",
                "AffirmativeLabel": "Sim(ou qualquer outro texto)",
                "NegativeLabel": "Não(ou qualquer outro texto)",
                "SubProperty": "form_nomedoform.dependentsNames",
                "Property": "form_nomedoform.dependentsList",
                "Value": null,
                "IrDependentsOnly": false,
                "KinshipFilter": null,
                "Required": true,
                "Label": "Deseja incluir dependentes?",
                "MaxAge": null
              },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen13 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-4">
        <div className="flex justify-between items-center mb-4 text-center ml-36">
          <div className="text-center">
            <h1 className="text-lg text-black dark:text-white">ButtonField</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Campo em formato de botão para documentos longos que acompanham o formulário, ou qualquer outro item que seja necessário abrir em outro local fora do WebApp.</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyButtonFieldstep}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen13(false)}
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
        <div>
          <pre id='ButtonFieldstep' className="text-xs">
            {JSON.stringify(
              {
                "$type": "LugaRh.Domain.Models.Flows.Steps.FormStep.Fields.ButtonField, LugaRh.Domain.Models",
                "Property": "form_termo.button", 
                "Url": "https:lugarhhom1.blob.core.windows.net/uteis/812e2368-956a-4972-8ddc-66b515599c3e/Manual%20de%20Conduta%202021_abcdpdf_pdf_para_word%20(2).pdf",
                "Label": "Ver manual de conduta"
             },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen14 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-4">
        <div className="flex justify-between items-center mb-4 text-center ml-20">
          <div className="text-center">
            <h1 className="text-lg text-black dark:text-white">ShareWithDependentListField</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Apresenta uma lista de perguntas (ou apenas uma pergunta) de sim e não (ou equivalente) onde se a pessoa responder sim, abrirá outro(s) campo(s).</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyShareWithDependentListFieldstep}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen14(false)}
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
        <div>
          <pre id='ShareWithDependentListFieldstep' className="text-xs">
            {JSON.stringify(
              {
                "$type": "LugaRh.Domain.Models.Flows.Steps.FormStep.Fields.ShareWithDependentsListField, LugaRh.Domain.Models",
                "QuestionList": {
                  "$type": "System.Collections.Generic.List`1[[LugaRh.Domain.Models.Flows.Steps.FormStep.Fields.SubfieldField, LugaRh.Domain.Models]], System.Private.CoreLib",
                  "$values": [
                    {
                      "$type": "LugaRh.Domain.Models.Flows.Steps.FormStep.Fields.SubfieldField, LugaRh.Domain.Models",
                      "Field": {
                        "$type": "LugaRh.Domain.Models.Flows.Steps.FormStep.Fields.QuestionField, LugaRh.Domain.Models",
                        "AffirmativeLabel": "Sim",
                        "NegativeLabel": "Não",
                        "SubProperty": "form_nomedoForm.subPQ1",
                        "Property": "form_nomedoForm.PQ1",
                        "Value": null,
                        "Required": true,
                        "Label": "Você é preguiçoso?"
                      },
                      "SubFields": "[ADICIONAR QUALQUER CAMPO]",
                      "Property": "form_nomedoForm.Q1",
                      "Required": true
                    }
                  ]
                },
                "Property": "form_nomedoForm.L1",
                "Required": true
              },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  </div>
)}
<pre id='CopyGlobal' style={{display: 'none'}}>
{JSON.stringify(
       {
        "$type": "System.Collections.Generic.List`1[[LugaRh.Domain.Models.Shares.Export.ShareExportMappingField, LugaRh.Domain.Models]], System.Private.CoreLib",
        "$values": [
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Name",
            "DstName": "empresa_nome",
            "Source": "company",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Nome da empresa"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "CNPJ",
            "DstName": "empresa_cnpj",
            "Source": "company",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "CNPJ da empresa"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.ConcatExportMappingField, LugaRh.Domain.Models",
            "Delimiter": "",
            "SrcName": "",
            "DstName": "workspace_endereco_completo",
            "Source": "workspace",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": [
                "Data.Address.streetType",
                " ",
                "Data.Address.streetName",
                ", ",
                "Data.Address.number",
                " - ",
                "Data.Address.complement",
                " - ",
                "Data.Address.neighborhood",
                " - ",
                "Data.Address.city",
                " - CEP ",
                "Data.Address.zipCode"
              ]
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "Substitution": 0,
            "DefaultValue": "_____________________________________________________________________________________",
            "Label": "Endereço completo do workspace"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.RegexReplaceMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.Address.city",
            "DstName": "workspace_estado",
            "Source": "workspace",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "RegexValue": ".*\\/",
            "Replace": "",
            "Label": "UF do workspace"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.RegexReplaceMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.Address.city",
            "DstName": "workspace_cidade",
            "Source": "workspace",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "RegexValue": "\\/.*",
            "Replace": "",
            "Label": "Cidade do workspace"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.Address.city",
            "DstName": "workspace_cidade_uf",
            "Source": "workspace",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Cidade/UF do workspace"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.RegexReplaceMappingField, LugaRh.Domain.Models",
            "RegexValue": "\\.",
            "Replace": "",
            "SrcName": "Data.Address.zipCode",
            "DstName": "workspace_cep",
            "Source": "workspace",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "CEP do workspace"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.Address.number",
            "DstName": "workspace_numero",
            "Source": "workspace",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Número do endereço do workspace"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.Address.neighborhood",
            "DstName": "workspace_bairro",
            "Source": "workspace",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Bairro do endereço do workspace"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.Address.streetName",
            "DstName": "workspace_logradouro",
            "Source": "workspace",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Logradouro do endereço do workspace"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.Address.streetType",
            "DstName": "workspace_tipo_rua",
            "Source": "workspace",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Tipo de logradouro do endereço do workspace (Descontinuar)"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.Address.streetType",
            "DstName": "workspace_tipo",
            "Source": "workspace",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Tipo de logradouro do endereço do workspace"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.Address.complement",
            "DstName": "workspace_complemento",
            "Source": "workspace",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Complemento do endereço do workspace"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.Address.streetName",
            "DstName": "workspace_rua",
            "Source": "workspace",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Rua do endereço do workspace (Descontinuar)"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.CpfCnpjFormatStringMappingField, LugaRh.Domain.Models",
            "SrcName": "CNPJ",
            "DstName": "workspace_cnpj",
            "Source": "workspace",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "CNPJ do workspace"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.name",
            "DstName": "share_nome",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Nome do colaborador"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.maritalStatus",
            "DstName": "share_estado_civil",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Estado civíl do colaborador"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.city",
            "DstName": "share_cidade",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_________________________________",
            "Label": "Cidade"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.RegexReplaceMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.city",
            "DstName": "share_cidade_sem_uf",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "RegexValue": "\\/.*",
            "Replace": "",
            "Label": "Cidade sem UF"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.gender",
            "DstName": "share_sexo",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_________________________________",
            "Label": "Sexo"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.GenderCheckMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.gender",
            "DstName": "share_sexo_m",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Gender": "M",
            "Label": "Sexo Masculino"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.GenderCheckMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.gender",
            "DstName": "share_sexo_f",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Gender": "F",
            "Label": "Sexo Feminino"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.ApplyMaskExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.a835c0bf-839b-48cc-a9be-322381570f0d.Fields.pispasep",
            "DstName": "share_pispasep",
            "Source": "share",
            "FormatType": 0,
            "Culture": "pt-BR",
            "Mask": "000\\.00000\\.00-0",
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "PIS PASEP"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.MultiMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents",
            "DstName": "share_CTPS_numero",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": [
                "7b526f64-413e-4dca-8120-22ab98b33ab8.Fields.numero",
                "31f7fd3c-bb5c-4f2d-92de-d24f6bd38f0a.Fields.numero",
                "1529a034-7d14-4feb-98cb-b31a76b26ab0.Fields.numero"
              ]
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Número CTPS"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.MultiMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents",
            "DstName": "share_CTPS_serie",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": [
                "7b526f64-413e-4dca-8120-22ab98b33ab8.Fields.serie",
                "31f7fd3c-bb5c-4f2d-92de-d24f6bd38f0a.Fields.serie",
                "1529a034-7d14-4feb-98cb-b31a76b26ab0.Fields.serie"
              ]
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Série CTPS"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.MultiMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents",
            "DstName": "share_CTPS_data",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": [
                "7b526f64-413e-4dca-8120-22ab98b33ab8.Fields.Emissao",
                "31f7fd3c-bb5c-4f2d-92de-d24f6bd38f0a.Fields.Emissao",
                "1529a034-7d14-4feb-98cb-b31a76b26ab0.Fields.Emissao"
              ]
            },
            "SrcDateFormat": "yyyy-MM-ddThh:mm:ss",
            "DstDateFormat": "dd/MM/yyyy",
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Data CTPS"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.MultiMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents",
            "DstName": "share_CTPS_uf",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": [
                "7b526f64-413e-4dca-8120-22ab98b33ab8.Fields.uf",
                "31f7fd3c-bb5c-4f2d-92de-d24f6bd38f0a.Fields.uf",
                "1529a034-7d14-4feb-98cb-b31a76b26ab0.Fields.uf"
              ]
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "UF CTPS"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.7b526f64-413e-4dca-8120-22ab98b33ab8.Fields.numero",
            "DstName": "share_CTPSnormal_numero",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Número CTPS normal (Descontinuar)"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.7b526f64-413e-4dca-8120-22ab98b33ab8.Fields.serie",
            "DstName": "share_CTPSnormal_serie",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Série CTPS normal (Descontinuar)"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.7b526f64-413e-4dca-8120-22ab98b33ab8.Fields.uf",
            "DstName": "share_CTPSnormal_uf",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "UF CTPS normal (Descontinuar)"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.BrazilianDateExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.7b526f64-413e-4dca-8120-22ab98b33ab8.Fields.Emissao",
            "DstName": "share_CTPSnormal_data",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Data CTPS normal (Descontinuar)"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.016f208f-803a-44a0-b5e3-6fd19802d794.Fields.numero",
            "DstName": "share_cnh_numero",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Número CNH"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.016f208f-803a-44a0-b5e3-6fd19802d794.Fields.categoria",
            "DstName": "share_cnh_categoria",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Categoria CNH"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.BrazilianDateExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.016f208f-803a-44a0-b5e3-6fd19802d794.Fields.dataEmissao",
            "DstName": "share_cnh_data",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Data CNH"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.ba86b58b-1899-4289-b191-b638586eddf9.Fields.NumeroInscricao",
            "DstName": "share_titulo_numero",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Número título"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.ba86b58b-1899-4289-b191-b638586eddf9.Fields.Zona",
            "DstName": "share_titulo_zona",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Zona do título"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.ba86b58b-1899-4289-b191-b638586eddf9.Fields.Secao",
            "DstName": "share_titulo_secao",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Seção do título"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.BrazilianDateExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.ba86b58b-1899-4289-b191-b638586eddf9.Fields.Emissao",
            "DstName": "share_titulo_data",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Data do título"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.4bd90885-4bd6-4eea-a862-9334089babfa.Fields.cns",
            "DstName": "share_cns",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "CNS"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.BrazilianDateExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.birthdate",
            "DstName": "share_data_nasc",
            "Source": "share",
            "FormatType": 3,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Data de nascimento do colaborador"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.BrazilianDateExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.foreignInfo.arrivalDate",
            "DstName": "share_data_chegadaBR",
            "Source": "share",
            "FormatType": 3,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Data de chegada ao Brasil"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.education",
            "DstName": "share_escolaridade",
            "Source": "share",
            "FormatType": 3,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Escolaridade do colaborador"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.AgeMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.birthdate",
            "DstName": "share_idade",
            "Source": "share",
            "FormatType": 3,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Idade do colaborador"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.brazilianInfo.birthCity",
            "DstName": "share_cidadeUF_nasc",
            "Source": "share",
            "FormatType": 3,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Cidade e UF de nascimento"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.RegexReplaceMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.brazilianInfo.birthCity",
            "DstName": "share_UF_nasc",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "RegexValue": ".*\\/",
            "Replace": "",
            "Label": "UF de nascimento"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.RegexReplaceMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.brazilianInfo.birthCity",
            "DstName": "share_cidade_nasc",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "RegexValue": "\\/.*",
            "Replace": "",
            "Label": "Cidade de nascimento"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.CpfCnpjFormatStringMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.edc17b99-d956-4300-8b0e-8aa60f9cdb94.Fields.numero",
            "DstName": "share_cpf",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "CPF"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.WebFopagDocIdExtractorMappingField, LugaRh.Domain.Models",
            "SrcName": "",
            "DstName": "share_rg_numero",
            "Source": "share",
            "FormatType": 12,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "source": "numero",
              "type": "rg",
              "doc_id": "b93acc29-f93c-4968-903c-6fa961497969"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "RG"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.BrazilianDateExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.b93acc29-f93c-4968-903c-6fa961497969.Fields.expedicao",
            "DstName": "share_rg_data",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Data RG"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.RegexReplaceMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.b93acc29-f93c-4968-903c-6fa961497969.Fields.orgaoEmissor",
            "DstName": "share_rg_orgao_emissor",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "RegexValue": "\\ .*",
            "Replace": "",
            "Label": "Órgão emissor RG"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.b93acc29-f93c-4968-903c-6fa961497969.Fields.estadoEmissor",
            "DstName": "share_rg_uf",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "UF RG"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Name",
            "DstName": "occupation",
            "Source": "occupation",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Ocupação (nome do perfil de contratação)"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.email",
            "DstName": "share_email",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "E-mail"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.parents.fatherName",
            "DstName": "share_nome_pai",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Nome do pai"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.parents.motherName",
            "DstName": "share_nome_mae",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Nome da mãe"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.telephone",
            "DstName": "share_tel_fixo",
            "Source": "share",
            "FormatType": 1,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Telefone fixo"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.RegexReplaceMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.telephone",
            "DstName": "share_tel_ddd",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "RegexValue": "\\ .*",
            "Replace": "",
            "Label": "Telefone ddd"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.RegexReplaceMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.telephone",
            "DstName": "share_tel_numero",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "RegexValue": ".*\\)",
            "Replace": "",
            "Label": "Número de telefone"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.cellphone",
            "DstName": "share_celular",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Número de celular"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.RegexReplaceMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.cellphone",
            "DstName": "share_cel_ddd",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "RegexValue": "\\ .*",
            "Replace": "",
            "Label": "Número de celular ddd"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.RegexReplaceMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.cellphone",
            "DstName": "share_cel_numero",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "RegexValue": ".*\\)",
            "Replace": "",
            "Label": "Número de telefone"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.zipCode",
            "DstName": "share_cep",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "CEP"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.ad206578-01cf-402c-8c9f-eaa32da8a5b9.Fields.nome",
            "DstName": "share_plano_saude_nome",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Plano de saúde"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.birthCountry",
            "DstName": "share_pais_nasc",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "País de nascimento"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.foreignInfo.birthCountry",
            "DstName": "foreign_pais_nasc",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "País de nascimento estrangeiro"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.BooleanToStringMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.foreign",
            "DstName": "share_foreign",
            "AffirmativeValue": "Estrangeiro",
            "NegativeValue": "Brasileiro",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Estrangeiro"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Name",
            "DstName": "workspace_nome",
            "Source": "workspace",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Nome do workspace"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.ConcatExportMappingField, LugaRh.Domain.Models",
            "Delimiter": "",
            "SrcName": "",
            "DstName": "share_endereco_completo",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": [
                "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.streetType",
                " ",
                "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.streetName",
                ", ",
                "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.number",
                " - ",
                "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.complement",
                " - ",
                "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.neighborhood",
                " - ",
                "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.city",
                " - CEP ",
                "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.zipCode"
              ]
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "Substitution": 0,
            "DefaultValue": "_____________________________________________________________________________________",
            "Label": "Endereço completo do share"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.streetType",
            "DstName": "share_endereco_tipo",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Tipo de logradouro"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.streetName",
            "DstName": "share_endereco_logradouro",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "logradouro do endereço"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.streetName",
            "DstName": "share_endereco_rua",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Logradouro do endereço  (Descontinuar)"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.RegexReplaceMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.city",
            "DstName": "share_endereco_estado",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "RegexValue": ".*\\/",
            "Replace": "",
            "Label": "UF do endereço"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.RegexReplaceMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.city",
            "DstName": "share_endereco_cidade",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "RegexValue": "\\/.*",
            "Replace": "",
            "Label": "Cidade do endereço"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.neighborhood",
            "DstName": "share_endereco_bairro",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Bairro do endereço"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.number",
            "DstName": "share_endereco_numero",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Número do endereço"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.RegexReplaceMappingField, LugaRh.Domain.Models",
            "RegexValue": "\\.",
            "Replace": "",
            "SrcName": "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.zipCode",
            "DstName": "share_endereco_cep",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "CEP do endereço"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.8dfc2491-dab0-4d36-8f1a-bf96d4002e91.Fields.complement",
            "DstName": "share_endereco_complemento",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Complemento do endereço"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.8a3fbed5-1102-4fe1-9f91-ef862c6bf362.Fields.ra",
            "DstName": "share_reservista",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Reservista"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.ActualDateTimeExportMappingField, LugaRh.Domain.Models",
            "DateFormat": "NoWeekDay",
            "SrcName": "",
            "DstName": "data_extenso",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Data por extenso"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.ActualDateTimeExportMappingField, LugaRh.Domain.Models",
            "DateFormat": "FullDate",
            "SrcName": "",
            "DstName": "data_completo",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Data completa"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.ActualDateTimeExportMappingField, LugaRh.Domain.Models",
            "DateFormat": "OnlyDate",
            "SrcName": "",
            "DstName": "data_atual",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Data atual"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.ActualDateTimeExportMappingField, LugaRh.Domain.Models",
            "DateFormat": "NoWeekDay",
            "SrcName": "",
            "DstName": "data_atual_extenso",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Data atual por extenso"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.ActualDateTimeExportMappingField, LugaRh.Domain.Models",
            "DateFormat": "OnlyTime",
            "SrcName": "",
            "DstName": "data_horas",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Horas da data"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DictionaryMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.foreignInfo.brazilianSons",
            "DstName": "share_filhosBR_select",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "true": " X ",
              "false": "   "
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Filhos Brasileiros Seleção (x)"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DictionaryMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.foreignInfo.marriedWithBrazilian",
            "DstName": "share_casadoBR_select",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "true": " X ",
              "false": "   "
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "casado com Brasileiro(a) Seleção (x)"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.SelectMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.maritalStatus",
            "DstName": "share_estado_civil",
            "OptionsNames": [
              {
                "casado": "X"
              },
              {
                "solteiro": "X"
              },
              {
                "uniao": "X"
              },
              {
                "separado": "X"
              },
              {
                "divorciado": "X"
              },
              {
                "viuvo": "X"
              },
              {
                "amasiado": "X"
              },
              {
                "outros": "X"
              }
            ],
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Select de estado civíl"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DictionaryMappingField, LugaRh.Domain.Models",
            "SrcName": "Data.foreign",
            "DstName": "share_nacionalidade",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "false": "Brasileira",
              "true": "Estrangeira"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Nacionalidade do Colaborador"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.afefc626-1308-44b0-9871-7fbdd8aa9d5e.Fields.Banco",
            "DstName": "share_Banco_nome",
            "Source": "share",
            "FormatType": 0,
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Nome do Banco do colaborador"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.afefc626-1308-44b0-9871-7fbdd8aa9d5e.Fields.Banco",
            "DstName": "share_Banco_cod",
            "Source": "share",
            "FormatType": 0,
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Codigo do Banco do colaborador"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.afefc626-1308-44b0-9871-7fbdd8aa9d5e.Fields.nAgencia",
            "DstName": "share_Banco_agencia",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Agencia do Colaborador"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.afefc626-1308-44b0-9871-7fbdd8aa9d5e.Fields.nConta",
            "DstName": "share_Banco_conta",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Conta do Colaborador"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Documents.afefc626-1308-44b0-9871-7fbdd8aa9d5e.Fields.digitoVerificador",
            "DstName": "share_Banco_dig",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "digito da conta do Colaborador"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.MultiMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData",
            "DstName": "share_data_admissao",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": [
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.dataadmissao",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.dataAdmissao",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.dataadimissao",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.datadeadmissao"
              ]
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "__/__/____",
            "Label": "Dados de contratação - Data admissão"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.MultiMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData",
            "DstName": "share_data_demissao",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": [
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.datademissao",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.dataDemissao",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.datadedemissao"
              ]
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "__/__/____",
            "Label": "Dados de contratação - Data demissão"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.MultiMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData",
            "DstName": "share_data_admissao_ext",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": [
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.dataadmissao",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.dataAdmissao",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.dataadimissao",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.datadeadmissao"
              ]
            },
            "SrcDateFormat": "dd/MM/yyyy",
            "DstDateFormat": "fulldate",
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "__/__/____",
            "Label": "Dados de contratação - Data admissão por extenso"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.funcao",
            "DstName": "share_schema_ocupacao",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - Função"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.localTrabalho",
            "DstName": "share_schema_local",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - local de trabalho"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.MultiMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData",
            "DstName": "share_schema_cargo",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": [
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.cargo",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.Cargo.name"
              ]
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - Cargo"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.tpPonto",
            "DstName": "share_schema_tipoPonto",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - tipo ponto"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.salarioExtenso",
            "DstName": "share_schema_salario_extenso",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - salário por extenso"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.tpsalario",
            "DstName": "share_schema_tipo_salario",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - Tipo de salário"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.ApplyMaskExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.salario",
            "DstName": "share_schema_salario",
            "Source": "share",
            "FormatType": 0,
            "Culture": "pt-BR",
            "Mask": "0,0.00",
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - salário"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.ApplyMaskExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Salario",
            "DstName": "share_schema_Salario",
            "Source": "share",
            "FormatType": 0,
            "Culture": "pt-BR",
            "Mask": "0,0.00",
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - Salário"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.MultiMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData",
            "DstName": "share_matricula",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": [
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.matricula",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.matricularegistro"
              ]
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "__________",
            "Label": "Dados de contratação - matrícula"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.matricularegistro",
            "DstName": "share_matricula_reg",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_________________________________",
            "Label": "Dados de contratação - matrícula  (Descontinuar)"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.vinculo",
            "DstName": "share_vinculo",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - Vínculo"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.unidade",
            "DstName": "share_unidade",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - Unidade"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.areaSubAreaRH",
            "DstName": "share_areaSubAreaRH",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - área e subárea RH"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.horassemana",
            "DstName": "share_schema_horassemana",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - horas da semana"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.horasmes",
            "DstName": "share_schema_horasmes",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - horas da mês"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.MultiMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData",
            "DstName": "share_schema_diaexperiencia",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": [
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.diaexperiencia",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.diasExperiencia",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.diascontrato"
              ]
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - Dias de Experiência"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.MultiMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData",
            "DstName": "share_schema_diaprorrogacao",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": [
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.diasprorrog",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.diasProrrogacao"
              ]
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - Dias de Prorrogação"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.diaexperienciatotal",
            "DstName": "share_schema_diaexperienciatotal",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - Total dias de Experiência"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.MultiMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData",
            "DstName": "share_schema_dtiniprorrogacao",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": [
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.dtiniprorrogacao",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.datavenccontrato"
              ]
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - Data de inicio de prorrogação de Experiência"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.MultiMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData",
            "DstName": "share_schema_dtfimprorrogacao",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": [
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.dtfimprorrogacao",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.datavencprorrog",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.dataTerminoProrrogacao"
              ]
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - Data de fim de prorrogação de Experiência"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.MultiMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData",
            "DstName": "share_schema_horario",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": [
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.codhorario",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.deshorario",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.name"
              ]
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "__________",
            "Label": "Dados de contratação - horário"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.MultiMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData",
            "DstName": "share_schema_secao",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": [
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.secao",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.centrocusto",
                "01c6cdb6-e059-4c8f-8396-3e5fab18d259.Centrocusto.name"
              ]
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - Seção/centro de custo"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Cliente.value",
            "DstName": "share_schema_codcliente",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "__________",
            "Label": "Dados de contratação - Código do Cliente"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Cliente.name",
            "DstName": "share_schema_cliente",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "__________",
            "Label": "Dados de contratação - Nome do Cliente"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.RegexReplaceMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.des_odonto",
            "DstName": "share_schema_desconto_Odonto",
            "RegexValue": "\\.",
            "Replace": ",",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - Desconto Odonto"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.RegexReplaceMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.ben_va",
            "DstName": "share_schema_beneficio_va",
            "RegexValue": "\\.",
            "Replace": ",",
            "Source": "share",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - Benefício Vale Alimentação"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HSegEntrada",
            "DstName": "share_schema_horario_segE",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - entrada segunda"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HSegIntervIni",
            "DstName": "share_schema_horario_segintE",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - intervalo entrada segunda"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HSegIntervFin",
            "DstName": "share_schema_horario_segintS",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - intervalo saida segunda"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HSegSaida",
            "DstName": "share_schema_horario_segS",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - saida segunda"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HTerEntrada",
            "DstName": "share_schema_horario_terE",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - entrada terça"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HTerIntervIni",
            "DstName": "share_schema_horario_terintE",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - intervalo entrada terça"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HTerIntervFin",
            "DstName": "share_schema_horario_terintS",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - intervalo saida terça"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HTerSaida",
            "DstName": "share_schema_horario_terS",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - saida terça"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HQuaEntrada",
            "DstName": "share_schema_horario_quaE",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - entrada quarta"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HQuaIntervIni",
            "DstName": "share_schema_horario_quaintE",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - intervalo entrada quarta"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HQuaIntervFin",
            "DstName": "share_schema_horario_quaintS",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - intervalo saida quarta"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HQuaSaida",
            "DstName": "share_schema_horario_quaS",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - saida quarta"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HQuiEntrada",
            "DstName": "share_schema_horario_quiE",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - entrada quinta"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HQuiIntervIni",
            "DstName": "share_schema_horario_quiintE",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - intervalo entrada quinta"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HQuiIntervFin",
            "DstName": "share_schema_horario_quiintS",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - intervalo saida quinta"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HQuiSaida",
            "DstName": "share_schema_horario_quiS",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - saida quinta"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HSexEntrada",
            "DstName": "share_schema_horario_sexE",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - entrada sexta"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HSexIntervIni",
            "DstName": "share_schema_horario_sexintE",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - intervalo entrada sexta"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HSexIntervFin",
            "DstName": "share_schema_horario_sexintS",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - intervalo saida sexta"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HSexSaida",
            "DstName": "share_schema_horario_sexS",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - saida sexta"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HSabEntrada",
            "DstName": "share_schema_horario_sabE",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação -"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HSabIntervIni",
            "DstName": "share_schema_horario_sabintE",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - intervalo entrada sabado"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HSabIntervFin",
            "DstName": "share_schema_horario_sabintS",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - intervalo saida sabado"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HSabSaida",
            "DstName": "share_schema_horario_sabS",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - saida sabado"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HDomEntrada",
            "DstName": "share_schema_horario_domE",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - entrada domingo"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HDomIntervIni",
            "DstName": "share_schema_horario_domintE",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - intervalo entrada domingo"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HDomIntervFin",
            "DstName": "share_schema_horario_domintS",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - intervalo saida domingo"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.Horario.value.HDomSaida",
            "DstName": "share_schema_horario_domS",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "_____",
            "Label": "Dados de contratação - saida domingo"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.pInsalub",
            "DstName": "share_schema_pInsalub",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - Percentual Insalubridade"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.pPeric",
            "DstName": "share_schema_pPeric",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - Percentual Periculosidade"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "SchemaData.01c6cdb6-e059-4c8f-8396-3e5fab18d259.flexcard",
            "DstName": "share_schema_flexcard",
            "Source": "share",
            "FormatType": 0,
            "ValuesFrom": {
              "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
              "$values": []
            },
            "Size": 0,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label": "Dados de contratação - Cartão Flex"
          },
          {
            "$type": "LugaRh.Domain.Models.Shares.Export.Fields.DefaultExportMappingField, LugaRh.Domain.Models",
            "SrcName": "Acronym",
            "DstName": "form_acronimo",
            "Source": "formconfiguration",
            "FormatType": 0,
            "ValuesFromTo": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
            },
            "Size": 0,
            "CharSize": null,
            "Position": 0,
            "AppConfiguration": null,
            "DefaultValue": "",
            "Label":"Nome do formulário de benefício"
            }
          ]
       },
       null,
       2
     )}
  </pre>
      </div>
    </>
  );
}
