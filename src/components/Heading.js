import { withTheme } from '../context/themeContext';
import { useEffect, useState } from 'react';
import { fetchName } from '../actions/fetchName';

export const Heading = (props) => {
  const { state } = props.themeContext;
  const [name, setName] = useState('');

  useEffect(() => {
    fetchName().then((data) => setName(data.name));
  }, []);

  const getName = () => (name !== '' ? <strong data-testid="name">{name}</strong> : null);

  return (
    <div>
      <h1 className="text-sky-400 text-3xl">
        Welcome to <a href="https://nextjs.org">Next.js!</a> {getName()}
      </h1>
      Current Theme : <strong data-testid="currentTheme">{state.currentTheme}</strong>
    </div>
  );
};

export default withTheme(Heading);
