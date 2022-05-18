import KeyBoard from '../KeyBoard/KeyBoard';
import WordInput from '../WordInput/WordInput';
import styles from './MainSection.module.scss';
import { useState, useEffect } from 'react';

const MainSection = () => {
  const [input, setInput] = useState([]);
  const [pressedKeys, setPressedKeys] = useState([]);
  const [task, setTask] = useState(
    [
      'I met a traveller from an antique land',
      'Who said: Two vast and trunkless legs of stone',
      'Stand in the desert...Near them, on the sand,',
      'Half sunk, a shattered visage lies, whose frown,',
      'And wrinkled lip, and sneer of cold command,',
      'Tell that its sculptor well those passions read',
      'Which yet survive, stamped on these lifeless things,',
      'The hand that mocked them, and the heart that fed:',
      'And on the pedestal these words appear:',
      "'My name is Ozymandias, king of kings:",
      "Look on my works, ye Mighty, and despair!'",
      'Nothing beside remains. Round the decay',
      'Of that colossal wreck, boundless and bare',
      'The lone and level sands stretch far away.',
    ]
      .join('\n')
      .split('')
  );

  useEffect(() => {
    const getResource = async (url) => {
      let response = await fetch(
        'https://poetrydb.org/title/Ozymandias/lines.json'
      );
      if (!response.ok) {
        throw new Error(`Could not fetch, received ${response.status}`);
      }
      const text = await response.json();

      const parsed_text = text[0]['lines'].join('\n').split('');
      setTask(parsed_text);
    };

    task.length === 0 && getResource();

    const pressKey = (e) => {
      console.log('pressed', e.key);
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
        } else if (e.key === 'Enter' && task[0] === '\n') {
          setInput([...input, '\n']);
          setTask(task.slice(1));
        }
      } else {
        console.log(task);
      }
    };

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
  }, [task]);

  return (
    <div className={styles.main}>
      <h1>Typing Tutor</h1>
      <WordInput input={input} text={task} setInput={setInput} />
      <KeyBoard pressedKeys={pressedKeys} />
    </div>
  );
};

export default MainSection;
