import { withTheme } from '../context/themeContext';

export const Heading = (props) => {
  const { state } = props.themeContext;
  return (
    <div>
      <h1 className="text-sky-400 text-3xl">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      Current Theme : <strong data-testid="currentTheme">{state.currentTheme}</strong>
    </div>
  );
};

export default withTheme(Heading);
