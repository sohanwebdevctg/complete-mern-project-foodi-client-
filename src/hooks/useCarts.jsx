import  { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useCarts = () => {
  const {user} = useContext(AuthContext);

  const {data : carts = [], refetch} = useQuery({
    queryKey: ['card', user?.email],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/card?email=${user?.email}`)
      return response.json()
    },
  })

  return [carts, refetch];
};

export default useCarts;