import KeyBoard from "../KeyBoard/KeyBoard";
import WordInput from "../WordInput/WordInput";
import styles from "./MainSection.module.scss";
import { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const MainSection = () => {
  const [input, setInput] = useState([]);
  const [pressedKeys, setPressedKeys] = useState([]);
  const [task, setTask] = useState("Loading...".split(""));
  const [authors, setAuthors] = useState(["Loading..."]);
  const [author, setAuthor] = useState("");
  const [titles, setTitles] = useState(["Loading..."]);
  const [title, setTitle] = useState("");

  const AUTHORS = "author";
  const TITLES = "title";

  const getResource = async (url, mode) => {
    mode === title && setTask("Loading".split(""));
    const response = await fetch(`${url}/${mode}`);
    if (!response.ok) {
      throw new Error(`Could not fetch, received ${response.status}`);
    }
    const obj = await response.json();
    // data = text['authors']
    // const parsed_text = text[0]["lines"].slice(0, 14).join("\n").split("");
    if (mode === AUTHORS) {
      setAuthor(
        obj["authors"][Math.floor(Math.random() * obj["authors"].length)]
      );
    } else if (mode === TITLES) {
      const title =
        obj["titles"][Math.floor(Math.random() * obj["titles"].length)];
      console.log(title);
      console.log(`${url}/${mode}/${title}`);
      const response = await fetch(`${url}/${mode}/${title}`);
      const poem_obj = await response.json();
      setTask(poem_obj[0]["lines"].slice(0, 10).join("\n").split(""));
    }
  };

  useEffect(() => {
    task.join("") === "Loading..." &&
      getResource("https://poetrydb.org", TITLES);

    const pressKey = (e) => {
      console.log("pressed", e.key);
      setPressedKeys((pressedKeys) =>
        Array.from(new Set([...pressedKeys, e.key.toUpperCase()]))
      );
      // highlight(e);

      if (task.length > 0) {
        console.log(
          e.key,
          task[input.length],
          input.length,
          task.length,
          e.key.toUpperCase() === task[0].toString().toUpperCase()
        );
        if (e.key.toUpperCase() === task[0].toUpperCase()) {
          setInput([...input, task.slice(0, 1)]);
          setTask(task.slice(1));
        } else if (e.key === "Enter" && task[0] === "\n") {
          setInput([...input, "\n"]);
          setTask(task.slice(1));
        }
      } else {
        console.log(task);
      }
    };

    const releaseKey = (e) => {
      console.log("release", e.key);
      setPressedKeys((pressedKeys) =>
        pressedKeys.filter((el) => el !== e.key.toUpperCase())
      );
    };

    window.addEventListener("keydown", pressKey);
    window.addEventListener("keyup", releaseKey);

    return () => {
      window.removeEventListener("keydown", pressKey);
      window.removeEventListener("keyup", releaseKey);
    };
  }, [task]);

  return (
    <div className={styles.main}>
      {/* <h1>Typing Tutor</h1> */}
      {/* <Autocomplete
        disablePortal
        id="author-search"
        options={authors}
        sx={{
          width: 300,
          height: 40,
          marginRight: 15,
          border: "1px solid darkgrey",
          color: "#fff",
        }}
        renderInput={(params) => <TextField {...params} label="Author" />}
      /> */}
      <WordInput input={input} text={task} setInput={setInput} />
      <KeyBoard pressedKeys={pressedKeys} />
      <button
        className={styles.newText}
        onClick={() => getResource("https://poetrydb.org", TITLES)}
      >
        Next
      </button>
    </div>
  );
};

export default MainSection;
