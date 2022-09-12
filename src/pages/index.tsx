import type { NextPage } from 'next';
import Heading from '../components/Heading';
import { setInitialConfig } from '../configs/appConfig';
import Maintenance from '../components/Maintenance';

const Home: NextPage = (props: any) => {
  setInitialConfig(props.envValues);

  if (process.env.NEXT_PUBLIC_FEATURE_SHOW_APP === 'true') {
    return (
      <article className="bg-slate-600 h-full place-content-center grid">
        <Heading />
      </article>
    );
  }
  return <Maintenance />;
};

export async function getStaticProps() {
  return {
    props: { envValues: { SECRET_KEY: process.env.SECRET_KEY } },
  };
}

export default Home;
