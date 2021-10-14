import DataMock from '../../../mocks/dogibo.json';
import AppStage from '../../utils/AppStage';

import styles from './styles.module.scss';
import { TextBlockProps } from './types';

import TextButton from './inputs/TextButton';

const DoGiBoText: React.FC<TextBlockProps> = ({
  setStage,
}) => (
  <>
    <span className={styles.highlight}>
      Die
      {' '}
      {DataMock.longName}
      {' '}
    </span>
    <p className={styles.inline}>
      <span className={styles.highlight}>{DataMock.name}</span>
      {' '}
      ist eine virtuelle Spendenbox für einen guten Zweck,
      den
      {' '}
      <span className={styles.highlight}>{DataMock.presentee}</span>
      {' '}
      gern unterstützen möchte.
    </p>
    <p>
      Die Spendenbox erhält
      {' '}
      <span className={styles.highlight}>{DataMock.presentee}</span>
      {' '}
      dann zu seinem Geburtstag.
      Wenn du also einen Beitrag in die Box wirfst,
      steigt die Menge der Spenden und du beteiligst dich
      gleichzeitig an einem passenden Geschenk.
    </p>
    <p>
      <span className={styles.highlight}>
        {DataMock.name}
        {' '}
        - giving wise, giving twice.
      </span>
    </p>
    <TextButton text="Zurück" arrowed onClick={() => setStage(AppStage.MAIN)} position="bwd" />
  </>
);

export default DoGiBoText;
