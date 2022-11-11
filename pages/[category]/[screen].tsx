import { Layout } from '@components/common';
import GetScreen from '@components/common/GetScreen';
import { screenType } from '@utility/constants/enums';
import { URLtoScreen } from '@utility/functions/mappingFunctions';
import { useRouter } from 'next/router';

const Screen = () => {
  const router = useRouter();
  const screen = URLtoScreen(router.asPath) ?? screenType.dashboard;

  return (
    <Layout>
      <GetScreen screen={screen} />
    </Layout>
  );
};

export default Screen;
