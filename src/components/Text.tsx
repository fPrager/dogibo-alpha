import { useState, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { Donation } from '.prisma/client';
import DataMock from '../../mocks/dogibo.json';
import AppStage from '../utils/AppStage';
import getDaysTo from '../utils/get-days-to';

import styles from './Text.module.scss';

import {
  MainText,
  DoGiBoText,
  EventText,
  ContributeText,
  TopicText,
} from './TextBlocks';

export interface TextProps {
  donation: Donation,
  newDonation: boolean,
  loading: boolean,
  updateDonation: Function,
  stage: AppStage
  setStage: Function,
}

const Text: React.FC<TextProps> = ({
  stage,
  setStage,
  loading,
  donation,
  newDonation,
  updateDonation,
}) => {
  const days2Event = getDaysTo(
    Number.parseInt(DataMock.birthday.split('/')[1], 10),
    Number.parseInt(DataMock.birthday.split('/')[0], 10),
    Number.parseInt(DataMock.birthday.split('/')[2], 10),
  );

  const [height, setHeight] = useState('99%');
  useEffect(() => {
    setHeight('100%');
  }, []);

  let SelectedText;
  switch (stage) {
    case AppStage.MAIN:
      SelectedText = MainText;
      break;
    case AppStage.DOGIBO:
      SelectedText = DoGiBoText;
      break;
    case AppStage.EVENT:
      SelectedText = EventText;
      break;
    case AppStage.TOPIC:
      SelectedText = TopicText;
      break;
    case AppStage.CONTRIBUTE:
      SelectedText = ContributeText;
      break;
    default:
      SelectedText = MainText;
  }

  return (
    <div key={`text-${stage}`} className={`${styles.text} ${styles.fadeIn}`}>
      <Scrollbars key={`scroll-${height}`} style={{ height: '100%', width: '100%' }} universal>
        <div className={styles.textContent}>
          <SelectedText
            setStage={setStage}
            loading={loading}
            days2Event={days2Event}
            donation={donation}
            newDonation={newDonation}
            updateDonation={updateDonation}
          />
        </div>
      </Scrollbars>
    </div>
  );
};

export default Text;
