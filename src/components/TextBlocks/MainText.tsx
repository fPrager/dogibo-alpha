import { Spinner } from '@geist-ui/react';

import DataMock from '../../../mocks/dogibo.json';
import AppStage from '../../utils/AppStage';

import { TextBlockProps } from './types';
import styles from './styles.module.scss';

import TextButton from './inputs/TextButton';

const MainText: React.FC<TextBlockProps> = ({
  setStage, loading, days2Event, newDonation,
}) => {
  const ContributeButton = (
    <TextButton
      text={
          newDonation
            ? 'Und hier kannst du mitmachen'
            : 'Hier kannst du nochmal was ändern'
       }
      arrowed
      onClick={() => setStage(AppStage.CONTRIBUTE)}
    />
  );

  return (
    <>
      <div className={styles.block}>
        Das ist eine
        <TextButton text="DoGiBo" onClick={() => setStage(AppStage.DOGIBO)} />
      </div>
      <div className={styles.block}>
        Für
        {' '}
        {DataMock.presentee}
        s Geburtstag
        <TextButton text={days2Event === 1 ? 'morgen' : `in ${days2Event} Tagen`} onClick={() => setStage(AppStage.EVENT)} />
      </div>
      <div className={styles.block}>
        und für
        <TextButton text={DataMock.donee} onClick={() => setStage(AppStage.TOPIC)} />
      </div>
      <div className={styles.contribution}>
        {
            loading ? <Spinner /> : ContributeButton
          }
      </div>
    </>
  );
};

export default MainText;
