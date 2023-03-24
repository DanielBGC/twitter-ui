import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

type DefaultPropsType = {};

export default function Default(props: DefaultPropsType) {
  return (
    <div className='layout'>
      <Sidebar />
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
}
