import { ThemeContext, withTheme } from '../context/themeContext';
import { FC, useEffect, useState } from 'react';
import { fetchName } from '../actions/fetchName';
import { getConfig } from '../configs/appConfig';

interface HeadingPropsType {
  themeContext: ThemeContext;
}

export const Heading: FC<HeadingPropsType> = (props: HeadingPropsType) => {
  const { state } = props.themeContext;
  const [name, setName] = useState('');
  const [err, setError] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    fetchName()
      .then((data) => {
        setName(data.data.name);
      })
      .catch((err) => {
        setError(true);
        setErrMsg(err.message);
      });
  }, []);

  const getName = () => {
    if (err) return <strong data-testid="errorMsg">{errMsg}</strong>;
    return <strong data-testid="name">{name}</strong>;
  };

  return (
    <div>
      <h1 className="text-sky-400 text-3xl">
        Welcome to <a href="https://nextjs.org">Next.js!</a> {getName()}
      </h1>
      Current Theme : <strong data-testid="currentTheme">{state.currentTheme}</strong>
      <p>My SECRET_KEY : {getConfig('SECRET_KEY')}</p>
      My public key : {process.env.NEXT_PUBLIC_ANALYTICS_KEY}
    </div>
  );
};

export default withTheme(Heading);
