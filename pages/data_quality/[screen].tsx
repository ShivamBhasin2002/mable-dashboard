import { Layout } from '@components/common';
import GetScreen from '@components/common/GetScreen';
import { useRouter } from 'next/router';

const Screen = () => {
  const router = useRouter();
  const { screen } = router.query;

  return (
    <Layout>
      <GetScreen screen={screen} />
    </Layout>
  );
};

export default Screen;
