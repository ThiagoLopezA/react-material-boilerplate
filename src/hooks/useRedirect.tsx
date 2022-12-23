import { useNavigate } from 'react-router-dom';

export default function useRedirect() {
  const navigate = useNavigate();
  const handleRedirect = (link: string) => navigate(link);
  return handleRedirect;
}
