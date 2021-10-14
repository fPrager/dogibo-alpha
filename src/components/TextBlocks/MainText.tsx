import { Spinner } from '@geist-ui/react';

import DataMock from '../../../mocks/dogibo.json';
import AppStage from '../../utils/AppStage';

import { TextBlockProps } from './types';
import styles from './styles.module.scss';

import TextButton from './inputs/TextButton';
import replaceWithComponents from '../../utils/replace-with-components';

const MainText: React.FC<TextBlockProps> = ({
  setStage, loading, days2Event, newDonation,
}) => {
  const ContributeButton = (
    <TextButton
      text={
          newDonation
            ? 'Contribute now!'
            : 'You can change your donation!'
       }
      arrowed
      onClick={() => setStage(AppStage.CONTRIBUTE)}
    />
  );

  const whenText = days2Event === 1 ? 'tomorrow' : `in ${days2Event} days`;

  return (
    <>
      <div className={styles.block}>
        { replaceWithComponents('This is a {name}', [['{name}', <TextButton text="DoGiBo" onClick={() => setStage(AppStage.DOGIBO)} />]])}
      </div>
      <div className={styles.block}>
        {
        replaceWithComponents(`A gift to ${DataMock.presentee}'s birthday {when}.`,
          [['{when}', <TextButton text={whenText} onClick={() => setStage(AppStage.EVENT)} />]])
        }
      </div>
      <div className={styles.block}>
        {
        replaceWithComponents('and for {donee}',
          [['{donee}', <TextButton text={DataMock.donee} onClick={() => setStage(AppStage.TOPIC)} />]])
        }
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
