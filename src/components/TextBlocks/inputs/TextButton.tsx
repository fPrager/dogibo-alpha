import styles from './TextButton.module.scss';

interface TextButtonProps {
  text: string,
  onClick?: Function,
  position?: 'bwd' | 'fwd',
  arrowed?: boolean,
}

const TextButton: React.FC<TextButtonProps> = ({
  text, onClick = () => {}, position = 'fwd', arrowed = false,
}) => (
  <div className={`${styles.btn} ${styles[position]} ${arrowed ? styles.arrowed : ''}`} onClick={() => onClick()} aria-hidden="true">
    {`${text}`}
  </div>
);

export default TextButton;
