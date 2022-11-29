import { useSelector } from 'react-redux';
import HomeArea from './Home-area';
import TaskArea from './task-area';

const Area = () => {
  const area = useSelector((state) => state.areaCurrent);
  const Home = ['Home'];
  const Task = ['Task'];
  switch (area) {
    case Home:
      console.log('HomeSeen');
      return <HomeArea />;
    case Task:
      console.log('TaskSeen');
      return <TaskArea />;
    default:
      return <></>;
  }
};

export default Area;
