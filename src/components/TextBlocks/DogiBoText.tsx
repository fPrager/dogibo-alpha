import DataMock from '../../../mocks/dogibo.json';
import AppStage from '../../utils/AppStage';

import styles from './styles.module.scss';
import { TextBlockProps } from './types';

import TextButton from './inputs/TextButton';
import replaceWithComponents from '../../utils/replace-with-components';

const DoGiBoText = ({
  setStage,
}: TextBlockProps) => (
  <>
    <span className={styles.highlight}>
      {`The ${DataMock.longName}`}
    </span>
    <p className={styles.inline}>
      {
        replaceWithComponents(
          '{name} is a virtual donation box for a good cause, that has been chosen by {presentee}.',
          [
            ['{name}', <span className={styles.highlight}>{DataMock.name}</span>],
            ['{presentee}', <span className={styles.highlight}>{DataMock.presentee}</span>],
          ],
        )
      }
    </p>
    <p>
      {
        replaceWithComponents(
          'The {name} will be a gift for his birthday. If you contribute to the gift, you not only increase the amount of donations but also join a great, meaningful present.',
          [
            ['{name}', <span className={styles.highlight}>{DataMock.name}</span>],
          ],
        )
      }
    </p>
    <p>
      <span className={styles.highlight}>
        {`${DataMock.name} - giving wise, giving twice.`}
      </span>
    </p>
    <TextButton text="Back" arrowed onClick={() => setStage(AppStage.MAIN)} position="bwd" />
  </>
);

export default DoGiBoText;
