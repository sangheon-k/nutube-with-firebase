import React, { useEffect, useMemo, useState } from 'react';
import { Unsubscribe } from 'firebase/auth';
import { DocumentData, QuerySnapshot, onSnapshot } from 'firebase/firestore';

const useGetSnapshot = (query: any) => {
  const [data, setData] = useState<DocumentData>([]);

  const dataMemo = useMemo(() => data, [data]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fetchItems = async () => {
      unsubscribe = await onSnapshot(query, (snapshot: QuerySnapshot) => {
        const items = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setData(items);
      });
    };
    fetchItems();
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);

  return { data: dataMemo };
};

export default useGetSnapshot;
