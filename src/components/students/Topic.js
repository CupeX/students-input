import { useParams } from 'react-router';

const Topic = () => {
  const { topicId } = useParams();
  console.log(useParams);
  console.log(topicId);
  return <h3>Requested topic ID: {topicId}</h3>;
};

export default Topic;
