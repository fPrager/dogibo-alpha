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
      {`Die ${DataMock.longName}`}
    </span>
    <p className={styles.inline}>
      {
        replaceWithComponents(
          '{name} ist eine virtuelle Spendenbox für einen guten Zweck, der von {presentee} ausgewählt wurde.',
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
          'Die {name} wird das Geschenk zum Geburstag. Wenn du also einen Beitrag in die Box wirfst, steigt die Menge der Spenden und du beteiligst dich gleichzeitig an einem passenden Geschenk.',
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
    <TextButton text="Zurück" arrowed onClick={() => setStage(AppStage.MAIN)} position="bwd" />
  </>
);

export default DoGiBoText;
