import { Link } from 'umi'
import { login } from '@/api/getuserinfo'
import styles from './index.less';

export default function IndexPage() {

  const getuserinfo = async () => {
    const data = await login({ name: 'liz' })
    console.log('data', data)
  }

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to="/login">login</Link>
      <button onClick={() => getuserinfo()}>getuserinfo</button>
      <Link to="/vue">vue</Link>
      <Link to="/umi">umi</Link>
      <Link to="/react">react</Link>
    </div>
  );
}
