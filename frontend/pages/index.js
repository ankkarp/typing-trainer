import MainSection from "../components/MainSection/MainSection";
import SideBar from "../components/SideBar/SideBar";

/**
 * Главная страница
 */
export default function Home() {
  return (
    <>
      <SideBar />
      <MainSection />
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
