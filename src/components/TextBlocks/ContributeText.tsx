import { Tabs, useTabs } from '@geist-ui/react';
import ReactMarkdown from 'react-markdown';

import DataMock from '../../../mocks/dogibo.json';
import AppStage from '../../utils/AppStage';

import styles from './styles.module.scss';
import { TextBlockProps } from './types';

import ContributionForm from './inputs/ContributionForm';
import TextButton from './inputs/TextButton';
import replaceWithComponents from '../../utils/replace-with-components';

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
      <span className={styles.highlight}>Danke für deine Unterstützung!</span>
      <div className={styles.contributeForm}>
        { LinkedContributionForm }
      </div>
      <TextButton text="Zurück" arrowed onClick={() => setStage(AppStage.MAIN)} position="bwd" />
    </>
  );

  const NewContributeText = (
    <>
      <span className={styles.highlight}>So funktioniert</span>
      <p>
        {
          replaceWithComponents(
            'In nur zwei einfachen Schritten wird die {name} danke dir zu einem super Geschenk!',
            [['{name}', <span className={styles.highlight}>{DataMock.name}</span>]],
          )
        }
      </p>
      <div className={styles.contributeForm}>
        <Tabs {...bindings}>
          <Tabs.Item label="Schritt 1" value="1">
            <ReactMarkdown linkTarget="_blank">{DataMock.instructions}</ReactMarkdown>
            <TextButton text="Geh zu Schritt 2" arrowed onClick={() => setState('2')} />
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
