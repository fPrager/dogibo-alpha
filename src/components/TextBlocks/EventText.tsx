import DataMock from '../../../mocks/dogibo.json';
import AppStage from '../../utils/AppStage';

import { TextBlockProps } from './types';
import styles from './styles.module.scss';

import TextButton from './inputs/TextButton';

const EventText: React.FC<TextBlockProps> = ({
  setStage, days2Event,
}) => (
  <>
    <span className={styles.highlight}>Das Geschenk</span>
    <p>
      Für
      {' '}
      <span className={styles.highlight}>{DataMock.presentee}</span>
      {' '}
      ist die
      {' '}
      {DataMock.name}
      {' '}
      bis zum Geburtstag
      {' '}
      <span className={styles.highlight}>
        {
            days2Event === 1 ? 'morgen' : `in ${days2Event} Tagen`
          }
      </span>
      {' '}
      verschlossen.
    </p>
    <p>
      Bis dahin ist es für dich möglich in die
      {' '}
      {DataMock.name}
      {' '}
      einzuzahlen und sie zu befüllen.
    </p>
    <p>
      Für
      {' '}
      <span className={styles.highlight}>{DataMock.presentee}</span>
      {' '}
      wird es dann eine Überraschung,
      wieviele Spenden mit der
      {' '}
      {DataMock.name}
      {' '}
      gesammelt werden konnte.
    </p>
    <TextButton text="Zurück" arrowed onClick={() => setStage(AppStage.MAIN)} position="bwd" />
  </>
);

export default EventText;
