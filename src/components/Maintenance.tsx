import { labels } from '../configs/labels';
import { FC } from 'react';

const Maintenance: FC = () => {
  return (
    <article className="bg-slate-600 h-full place-content-center grid">
      <h2 className="text-sky-400 text-3xl">{labels.maintainence.heading}</h2>
      <p>{labels.maintainence.para}</p>
    </article>
  );
};

export default Maintenance;
