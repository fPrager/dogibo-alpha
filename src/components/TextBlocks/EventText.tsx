import DataMock from '../../../mocks/dogibo.json';
import AppStage from '../../utils/AppStage';
import replaceWithComponents from '../../utils/replace-with-components';

import { TextBlockProps } from './types';
import styles from './styles.module.scss';

import TextButton from './inputs/TextButton';

const EventText: React.FC<TextBlockProps> = ({
  setStage, days2Event,
}) => {
  const whenText = days2Event === 1 ? 'morgen' : `in ${days2Event} Tagen`;
  return (
    <>
      <span className={styles.highlight}>Das Geschenk</span>
      <p>
        { replaceWithComponents(
          `Für {presentee} ist die ${DataMock.name} bis zum Geburtstag am {when} verschlossen.`,
          [
            ['{presentee}', <span className={styles.highlight}>{DataMock.presentee}</span>],
            ['{when}', <span className={styles.highlight}>{whenText}</span>],
          ],
        )}
      </p>
      <p>
        { `Bis dahin ist es für dich möglich in die ${DataMock.name} "einzuzahlen" und die zu befüllen.` }
      </p>
      <p>
        { replaceWithComponents(
          `Für {presentee} wird es dann eine Überraschung, wieviel Spenden mit der ${DataMock.name} gesammelt wurden.`,
          [
            ['{presentee}', <span className={styles.highlight}>{DataMock.presentee}</span>],
          ],
        )}
      </p>
      <TextButton text="Zurück" arrowed onClick={() => setStage(AppStage.MAIN)} position="bwd" />
    </>
  );
};

export default EventText;
