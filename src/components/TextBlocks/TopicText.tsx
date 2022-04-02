import ReactMarkdown from 'react-markdown';

import DataMock from '../../../mocks/dogibo.json';
import AppStage from '../../utils/AppStage';

import { TextBlockProps } from './types';
import styles from './styles.module.scss';

import TextButton from './inputs/TextButton';
import replaceWithComponents from '../../utils/replace-with-components';

const TopicText: React.FC<TextBlockProps> = ({
  setStage,
}) => (
  <>
    <span className={styles.highlight}>Das Anliegen</span>
    <p>
      {
        replaceWithComponents(
          'In dieser {name} werden die Spenden für {donee} gesammelt.',
          [
            ['{name}', <span className={styles.highlight}>{DataMock.name}</span>],
            ['{donee}', <span className={styles.highlight}>{DataMock.donee}</span>],
          ],
        )
      }
    </p>
    {
          DataMock.background && (
            <>
              <p>
                { `Hier sagt ${DataMock.presentee} warum:` }
              </p>
              <ReactMarkdown linkTarget="_blank">{DataMock.background}</ReactMarkdown>
            </>
          )
        }
    <TextButton text="Zurück" arrowed onClick={() => setStage(AppStage.MAIN)} position="bwd" />
  </>
);

export default TopicText;
