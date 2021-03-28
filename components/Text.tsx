import { useState } from 'react';
import DataMock from '../mocks/dogibo.json';
import styles from './Text.module.scss';

const STAGES = {
  main: 'main',
  dogibo: 'dogibo',
  event: 'event',
  topic: 'topic',
};

interface TextButtonProps {
  text: string,
  onClick: Function,
  position: 'before' | 'after',
}

const TextButton: React.FC<TextButtonProps> = ({ text, onClick, position = 'after' }) => (
  <div className={`${styles.textButton} ${position}`} onClick={() => onClick()} aria-hidden="true">
    {`${text}`}
  </div>
);

export interface TextProps {

}

export const Text: React.FC<TextProps> = () => {
  const [stage, setStage] = useState(STAGES.main);

  const diffDays1 = (function () {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const secondDate = new Date(new Date().getFullYear(), 3, 3);
    const firstDate = new Date();
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
  }());

  const MainText = (
    <div className={styles.text}>
      <div className={styles.block}>
        Das ist eine
        <TextButton text="DoGiBo" onClick={() => setStage(STAGES.dogibo)} />
      </div>
      <div className={styles.block}>
        Für
        {' '}
        {DataMock.presentee}
        s Geburtstag
        <TextButton text={`in ${diffDays1} Tagen`} />
      </div>
      <div className={styles.block}>
        und für
        <TextButton text={DataMock.donee} />
      </div>
      <div className={styles.block}>
        <TextButton text="Mach mit!" />
      </div>
    </div>
  );

  const DoGiBoText = (
    <div className={styles.text}>
      <TextButton text="DoGiBo" onClick={() => setStage(STAGES.main)} position="before" />
      <p> ist eine virtuelle Spendenbox.</p>
    </div>
  );

  switch (stage) {
    case STAGES.main:
      return MainText;
    case STAGES.dogibo:
    default:
      return DoGiBoText;
  }
};
