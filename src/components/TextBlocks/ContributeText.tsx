import { Tabs, useTabs } from '@geist-ui/react';
import ReactMarkdown from 'react-markdown';

import DataMock from '../../../mocks/dogibo.json';
import AppStage from '../../utils/AppStage';

import styles from './styles.module.scss';
import { TextBlockProps } from './types';

import ContributionForm from './inputs/ContributionForm';
import TextButton from './inputs/TextButton';

const ContributeText: React.FC<TextBlockProps> = ({
  setStage, newDonation, donation, updateDonation,
}) => {
  const { setState, bindings } = useTabs('1');

  const LinkedContributionForm = (
    <ContributionForm
      donation={donation}
      updateDonation={updateDonation}
      newDonation={newDonation}
    />
  );

  const ExistingContributeText = (
    <>
      <span className={styles.highlight}>Danke für deine Spende!</span>
      <div className={styles.contributeForm}>
        { LinkedContributionForm }
      </div>
      <TextButton text="Zurück" arrowed onClick={() => setStage(AppStage.MAIN)} position="bwd" />
    </>
  );

  const NewContributeText = (
    <>
      <span className={styles.highlight}>So machst du mit</span>
      <p>
        Mit nur zwei einfachen Schritten wird die
        {' '}
        <span className={styles.highlight}>{DataMock.name}</span>
        {' '}
        dank dir zu einem tollen Geschenk!
      </p>
      <div className={styles.contributeForm}>
        <Tabs {...bindings}>
          <Tabs.Item label="Schritt 1" value="1">
            <ReactMarkdown linkTarget="_blank">{DataMock.instructions}</ReactMarkdown>
            <TextButton text="Zu Schritt 2" arrowed onClick={() => setState('2')} />
          </Tabs.Item>
          <Tabs.Item label="Schritt 2" value="2">{ LinkedContributionForm }</Tabs.Item>
        </Tabs>
      </div>
      <TextButton text="Zurück" arrowed onClick={() => setStage(AppStage.MAIN)} position="bwd" />
    </>
  );

  return newDonation ? NewContributeText : ExistingContributeText;
};

export default ContributeText;
