import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Scrollbars } from 'react-custom-scrollbars';
import { Spinner, Tabs, useTabs } from '@geist-ui/react';

import DataMock from '../mocks/dogibo.json';
import AppStage from '../utils/AppStage';
import getDaysTo from '../utils/get-days-to';
import styles from './Text.module.scss';
import { ContributionForm } from './ContributionForm';
import { Donation } from '.prisma/client';

interface TextButtonProps {
  text: string,
  onClick?: Function,
  position?: 'bwd' | 'fwd',
  arrowed?: boolean,
}

const TextButton: React.FC<TextButtonProps> = ({
  text, onClick = () => {}, position = 'fwd', arrowed = false,
}) => (
  <div className={`${styles.textButton} ${styles[position]} ${arrowed ? styles.arrowed : ''}`} onClick={() => onClick()} aria-hidden="true">
    {`${text}`}
  </div>
);

export interface TextProps {
  donation: Donation,
  newDonation: boolean,
  loading: boolean,
  updateDonation: Function,
  stage: AppStage
  setStage: Function,
}

export const Text: React.FC<TextProps> = ({
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

  const { setState, bindings } = useTabs('1');
  const [height, setHeight] = useState('99%');
  useEffect(() => {
    setHeight('100%');
  }, []);

  const ContributeButton = (
    <TextButton
      text={
        newDonation
          ? 'Und hier kannst du mitmachen'
          : 'Hier kannst du nochmal was ändern'
     }
      arrowed
      onClick={() => setStage(AppStage.CONTRIBUTE)}
    />
  );

  const MainText = (
    <>
      <div className={styles.block}>
        Das ist eine
        <TextButton text="DoGiBo" onClick={() => setStage(AppStage.DOGIBO)} />
      </div>
      <div className={styles.block}>
        Für
        {' '}
        {DataMock.presentee}
        s Geburtstag
        <TextButton text={days2Event === 1 ? 'morgen' : `in ${days2Event} Tagen`} onClick={() => setStage(AppStage.EVENT)} />
      </div>
      <div className={styles.block}>
        und für
        <TextButton text={DataMock.donee} onClick={() => setStage(AppStage.TOPIC)} />
      </div>
      <div className={styles.contribution}>
        {
          loading ? <Spinner /> : ContributeButton
        }
      </div>
    </>
  );

  const DoGiBoText = (
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

  const EventText = (
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

  const TopicText = (
    <>
      <span className={styles.highlight}>Das Anliegen</span>
      <p>
        In dieser
        {' '}
        <span className={styles.highlight}>{DataMock.name}</span>
        {' '}
        werden Spenden für
        {' '}
        <span className={styles.highlight}>{DataMock.donee}</span>
        {' '}
        gesammelt.
      </p>
      {
          DataMock.background && (
            <>
              <p>
                Hier sagt
                {' '}
                {DataMock.presentee}
                {' '}
                warum:
              </p>
              <p>
                <ReactMarkdown linkTarget="_blank">{DataMock.background}</ReactMarkdown>
              </p>
            </>
          )
        }
      <TextButton text="Zurück" arrowed onClick={() => setStage(AppStage.MAIN)} position="bwd" />
    </>
  );

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
      SelectedText = newDonation ? NewContributeText : ExistingContributeText;
      break;
    default:
      SelectedText = MainText;
  }

  return (
    <div key={`text-${stage}`} className={`${styles.text} ${styles.fadeIn}`}>
      <Scrollbars key={`scroll-${height}`} style={{ height, width: '100%' }}>
        <div className={styles.textContent}>
          {SelectedText}
        </div>
      </Scrollbars>
    </div>
  );
};
