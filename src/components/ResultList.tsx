import { Donation } from '.prisma/client';
import { Button, Grid } from '@geist-ui/react';
import html2PDF from 'jspdf-html2canvas';
import Banknote from './Banknote';
import AppStage from '../utils/AppStage';

type ResultListProps = {
  donations: Donation[],
};

const ResultList = ({ donations }: ResultListProps) => {
  const printPdf = () => {
    const pages = document.getElementsByClassName('note-page');
    html2PDF(pages, {
      jsPDF: {
        format: 'a4',
      },
      imageType: 'image/jpeg',
      output: './pdf/generate.pdf',
      margin: {
        top: 100,
        right: 100,
        bottom: 100,
        left: 100,
      },
    });
  };

  const notes = donations.map((donation) => (
    <Grid>
      <Banknote
        stage={AppStage.CONTRIBUTE}
        donation={donation}
        listed
      />
    </Grid>
  )).reduce((groups: JSX.Element[][], donation): JSX.Element[][] => {
    const lastGroup = groups.pop() || [];
    if (lastGroup.length >= 3) {
      groups.push(lastGroup);
      groups.push([donation]);
    } else {
      lastGroup.push(donation);
      groups.push(lastGroup);
    }
    return groups;
  }, []).map((group) => (<div className="note-page">{group}</div>));
  return (
    <div className="result">
      <Button type="success" onClick={printPdf}>TO PDF</Button>
      <Grid.Container gap={2} justify="center" height="100px" id="donation-grid" style={{ height: 'fit-content' }}>
        { notes }
      </Grid.Container>
    </div>
  );
};

export default ResultList;
