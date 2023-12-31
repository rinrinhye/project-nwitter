import { GithubAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function GithubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithRedirect(auth, provider);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={onClick}>Github</button>;
}
