import  { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useCard = () => {
  const {user} = useContext(AuthContext);

  const {data : card = [], refetch} = useQuery({
    queryKey: ['card', user?.email],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/card?email=${user?.email}`)
      return response.json()
    },
  })

  return [card, refetch];
};

export default useCard;