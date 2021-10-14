import DataMock from '../../../mocks/dogibo.json';
import AppStage from '../../utils/AppStage';
import replaceWithComponents from '../../utils/replace-with-components';

import { TextBlockProps } from './types';
import styles from './styles.module.scss';

import TextButton from './inputs/TextButton';

const EventText: React.FC<TextBlockProps> = ({
  setStage, days2Event,
}) => {
  const whenText = days2Event === 1 ? 'tomorrow' : `in ${days2Event} days`;
  return (
    <>
      <span className={styles.highlight}>The gift</span>
      <p>
        { replaceWithComponents(
          `This ${DataMock.name} is locked for {presentee} until the birthday {when}.`,
          [
            ['{presentee}', <span className={styles.highlight}>{DataMock.presentee}</span>],
            ['{when}', <span className={styles.highlight}>{whenText}</span>],
          ],
        )}
      </p>
      <p>
        { `Util than you can add your contribution to the gift and fill the ${DataMock.name}.` }
      </p>
      <p>
        { replaceWithComponents(
          `It will be a great surprise for {presentee} how many donations were collected with this ${DataMock.name}.`,
          [
            ['{presentee}', <span className={styles.highlight}>{DataMock.presentee}</span>],
          ],
        )}
      </p>
      <TextButton text="Back" arrowed onClick={() => setStage(AppStage.MAIN)} position="bwd" />
    </>
  );
};

export default EventText;
