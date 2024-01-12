import {ThreeDots} from 'react-loader-spinner';
import s from './PreLoader.module.css';

export default function Preloader() {
  return (
    <div className={s.loader}>
      <ThreeDots  color="#00BFFF" height={80} width={80} />
    </div>
  );
}
