import DataMock from '../mocks/dogibo.json';

import styles from './Text.module.scss';

export interface TextProps {

}

export const Text: React.FC<TextProps> = () => (
  <div className={styles.text}>
    <div>This is a </div>
    <div>{ DataMock.instructions }</div>
  </div>
);
