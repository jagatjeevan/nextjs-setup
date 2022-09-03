import Heading from '../components/Heading';
import { setInitialConfig } from '../configs/appConfig';

export default function Home(props) {
  setInitialConfig(props.envValues);

  return (
    <article className="bg-slate-600 h-full place-content-center grid">
      <Heading />
    </article>
  );
}

export async function getStaticProps() {
  return {
    props: { envValues: { SECRET_KEY: process.env.SECRET_KEY } },
  };
}
