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
            ? 'Jetzt mitmachen!'
            : 'Du kannst deinen Spendengruß noch anpassen!'
       }
      arrowed
      onClick={() => setStage(AppStage.CONTRIBUTE)}
    />
  );

  const whenText = days2Event === 1 ? 'morgen' : `in ${days2Event} Tagen`;

  return (
    <>
      <div className={styles.block}>
        { replaceWithComponents('Das ist eine {name}', [['{name}', <TextButton text="DoGiBo" onClick={() => setStage(AppStage.DOGIBO)} />]])}
      </div>
      <div className={styles.block}>
        {
        replaceWithComponents(
          `Ein Geschenk für ${DataMock.presentee}s Geburtstag in Familie {when}.`,
          [['{when}', <TextButton text={whenText} onClick={() => setStage(AppStage.EVENT)} />]],
        )
        }
      </div>
      <div className={styles.block}>
        {
        replaceWithComponents(
          'und für {donee}',
          [['{donee}', <TextButton text={DataMock.donee} onClick={() => setStage(AppStage.TOPIC)} />]],
        )
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
