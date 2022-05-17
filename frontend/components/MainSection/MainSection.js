import KeyBoard from '../KeyBoard/KeyBoard';
import WordInput from '../WordInput/WordInput';
import styles from './MainSection.module.scss';
import { useState, useEffect } from 'react';

const MainSection = () => {
  const [input, setInput] = useState('');
  const [index, setIndex] = useState(0);
  const [pressedKeys, setPressedKeys] = useState([]);

  const getResource = async (url) => {
    let response = await fetch(
      'https://poetrydb.org/title/Ozymandias/lines.json'
    );
    if (!response.ok) {
      throw new Error(`Could not fetch, received ${response.status}`);
    }
    const text = await response.json();
    console.log(text[0]['lines'][0]);
    return text;
  };

  const pressKey = (e) => {
    console.log('pressed', e.key);
    setPressedKeys((pressedKeys) =>
      Array.from(new Set([...pressedKeys, e.key.toUpperCase()]))
    );
  };

  useEffect(() => {
    const releaseKey = (e) => {
      console.log('release', e.key);
      setPressedKeys((pressedKeys) =>
        pressedKeys.filter((el) => el !== e.key.toUpperCase())
      );
    };

    window.addEventListener('keydown', pressKey);
    window.addEventListener('keyup', releaseKey);

    return () => {
      window.removeEventListener('keydown', pressKey);
      window.removeEventListener('keyup', releaseKey);
    };
  }, []);

  return (
    <div className={styles.main}>
      <h1>Typing Tutor</h1>
      <WordInput input={input} text={() => getResource()} setInput={setInput} />
      <KeyBoard pressedKeys={pressedKeys} />
    </div>
  );
};

export default MainSection;
