import Header from "../components/Header";
import SideBar from "../components/SideBar";
import CodeInput from "../components/CodeInput";
import { useState } from "react";
import path from "path";
import Task from "../components/Task";
import cl from "../styles/Home.module.css";
import CodeExample from "../components/CodeExample";

/**
 * Главная страница
 */
export default function Home() {
  const [ide, setIde] = useState("Visual Studio 2021");
  const data = [
    {
      theme: "Копирование/Вставка",
      defaultCode:
        'void drowCube(int res)\n{\nswitch (res){\ncase 1: cout << "@@@@@@@\\n"; \nbreak; \ncase 2: \n',
      exampleCode:
        'void drowCube(int res)\n{\nswitch (res){\ncase 1: cout << "@@@@@@@\\n"; \nbreak; \ncase 2: \ncout << "@@@@@@@\\n"; \ncout << "@ @@@@@\\n"; \ncout << "@@@@@@@\\n"; \ncout << "@@@@@ @\\n"; \ncout << "@@@@@@@\\n"; \nbreak; \n}',
      task: "Использовать комманды Ctrl+C Ctrl+V для ускорения генерации написания кода.\nCtl+C - скопировать строку (выделять строку не надо).\nCtrl+V = вставить строку перед текущей",
    },
    {
      theme: "Дубликация",
      defaultCode:
        'void drowCube(int res)\n{\nswitch (res){\ncase 1: cout << "@@@@@@@\\n"; \nbreak; \ncase 2: cout << "@@@@@@@\\n";',
      exampleCode:
        'void drowCube(int res)\n{\nswitch (res){\ncase 1: cout << "@@@@@@@\\n"; \nbreak; \ncase 2: \ncout << "@@@@@@@\\n"; \ncout << "@ @@@@@\\n"; \ncout << "@@@@@@@\\n"; \ncout << "@@@@@ @\\n"; \ncout << "@@@@@@@\\n"; \nbreak; \n} \n}',
      task: "Использовать комманду Ctrl+D для создания дубликата строки",
    },
  ];
  const [cur, setCur] = useState(data[0]);

  return (
    <>
      <SideBar
        themes={data.map((obj) => obj.theme)}
        setCur={setCur}
        data={data}
      />
      <div class={cl.grid}>
        <CodeInput
          defaultCode={cur.defaultCode}
          exampleCode={cur.exampleCode}
        />
        <CodeInput
          defaultCode={cur.exampleCode}
          exampleCode={cur.exampleCode}
          disabled
        />
      </div>
      <Task task={cur.task} />
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000/api`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   });

//   if (!res.ok) {
//     throw new Error(`Error: ${response.status}`);
//   }

//   const data = await res.json();
//   console.log(data);

//   return { props: { data } };
// }
