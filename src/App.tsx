import { RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './styles/global-styles';
import { router } from './util/router';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import Loading from './pages/loading';

function App() {
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <GlobalStyles />
      {/* <RouterProvider router={router}></RouterProvider> */}
      {/* 바로 RouterProvider 를 보여주게되면 사용자가 있는지 없는지 판단하지않고 
      바로 없다고 해버린다? */}
      {isLoading ? (
        <Loading />
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
    </>
  );
}

export default App;
