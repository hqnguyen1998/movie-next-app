import { auth } from '../auth';

export const getServerSideProps = async (context) => {
  const session = await auth(context);
  if (session)
    // Do something with the session

    return { props: { session } };
};
