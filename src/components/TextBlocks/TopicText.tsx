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
    <span className={styles.highlight}>the cause</span>
    <p>
      {
        replaceWithComponents(
          'This {name} contains the donations for {donee}.',
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
                { `Here ${DataMock.presentee} tells why:` }
              </p>
              <ReactMarkdown linkTarget="_blank">{DataMock.background}</ReactMarkdown>
            </>
          )
        }
    <TextButton text="Back" arrowed onClick={() => setStage(AppStage.MAIN)} position="bwd" />
  </>
);

export default TopicText;
