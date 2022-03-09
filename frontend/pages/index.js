import Header from "../components/Header";
import SideBar from "../components/SideBar";
import CodeInput from "../components/CodeInput";
import { useState } from "react";
import path from "path";
import Task from "../components/Task";
import cl from "../styles/Home.module.css";

export default function Home({ data }) {
  const [ide, setIde] = useState("Visual Studio 2021");
  const [cur, setCur] = useState(data[0]);

  return (
    <>
      <Header theme={cur.theme} />
      <SideBar
        themes={data.map((obj) => obj.theme)}
        setCur={setCur}
        data={data}
      />
      <div class={cl.grid}>
        <CodeInput initCode={cur.init_code} desiredCode={cur.desired_code} />
        <CodeInput initCode={cur.desired_code} disabled />
      </div>
      <Task task={cur.task} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await res.json();
  console.log(data);

  return { props: { data } };
}
