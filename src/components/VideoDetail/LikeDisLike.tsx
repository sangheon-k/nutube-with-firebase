import React, { SetStateAction, useEffect, useState } from 'react';
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from 'react-icons/ai';
import { auth, db } from '../../../firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';
import useGetSnapshot from '@/hooks/useGetSnapshot';
import { IDisLike, ILike } from '@/types';
import { useRecoilValue } from 'recoil';
import { channelState } from '@/recoil/channel';
import { message } from 'antd';

interface Props {
  videoId: string;
}

const LikeDisLike = ({ videoId }: Props) => {
  const user = auth.currentUser;
  const { id: channelId } = useRecoilValue(channelState);
  const [likeAction, setLikeAction] = useState(false);
  const [disLikeAction, setDisLikeAction] = useState(false);
  const [likeFromMeId, setLikeFromMeId] = useState('');
  const [disLikeFromMeId, setDisLikeFromMeId] = useState('');
  const isLoggedIn = channelId !== '';

  const { data: like } = useGetSnapshot(
    query(collection(db, 'likes'), where('videoId', '==', videoId)),
  );
  const { data: disLike } = useGetSnapshot(
    query(collection(db, 'dislikes'), where('videoId', '==', videoId)),
  );

  console.log('like', like);
  console.log('disLike', disLike);

  const onLikeClick = async () => {
    if (!isLoggedIn) return message.error('로그인이 필요합니다.');
    try {
      if (!likeAction) {
        await addLIkeDisLikeDoc('likes', setLikeAction); // Like 추가

        if (disLikeAction) {
          await deleteLikeDisLikeDoc(
            'dislikes',
            disLikeFromMeId,
            setDisLikeAction,
            setDisLikeFromMeId,
          ); // DisLike 삭제
        }
      } else {
        await deleteLikeDisLikeDoc(
          'likes',
          likeFromMeId,
          setLikeAction,
          setLikeFromMeId,
        ); // Like 삭제
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onDisLikeClick = async () => {
    if (!isLoggedIn) return message.error('로그인이 필요합니다.');
    try {
      if (!disLikeAction) {
        await addLIkeDisLikeDoc('dislikes', setDisLikeAction); // DisLike 추가
        if (likeAction) {
          await deleteLikeDisLikeDoc(
            'likes',
            likeFromMeId,
            setLikeAction,
            setLikeFromMeId,
          ); // Like 삭제
        }
      } else {
        await deleteLikeDisLikeDoc(
          'dislikes',
          disLikeFromMeId,
          setDisLikeAction,
          setDisLikeFromMeId,
        ); // DisLike 삭제
      }
    } catch (e) {
      console.error(e);
    }
  };

  const addLIkeDisLikeDoc = async (
    name: string,
    setActionState: React.Dispatch<SetStateAction<boolean>>,
  ) => {
    await addDoc(collection(db, name), {
      videoId: videoId,
      userId: user?.uid,
      createdAt: Date.now(),
    });
    setActionState(true);
  };

  const deleteLikeDisLikeDoc = async (
    name: string,
    userId: string,
    setActionState: React.Dispatch<SetStateAction<boolean>>,
    setUserIdState: React.Dispatch<SetStateAction<string>>,
  ) => {
    await deleteDoc(doc(db, name, userId));
    setActionState(false);
    setUserIdState('');
  };

  useEffect(() => {
    const likeFromMe = like.find((item: ILike) => item.userId === user?.uid);
    const disLikeFromMe = disLike.find(
      (item: IDisLike) => item.userId === user?.uid,
    );
    if (likeFromMe) {
      setLikeAction(likeFromMe);
      setLikeFromMeId(likeFromMe.id);
    }
    if (disLikeFromMe) {
      setDisLikeAction(disLikeFromMe);
      setDisLikeFromMeId(disLikeFromMe.id);
    }
  }, [like, disLike]);

  return (
    <div className="flex gap-4">
      <button
        type="button"
        className="flex items-end gap-2 text-gray-500 hover:text-red-600"
        name="like"
        onClick={onLikeClick}
      >
        {likeAction ? (
          <AiFillLike className="text-2xl" />
        ) : (
          <AiOutlineLike className="text-2xl" />
        )}
        <span>{like.length}</span>
      </button>

      <button
        type="button"
        className="flex items-end gap-2 text-gray-500 hover:text-red-600"
        name="disLike"
        onClick={onDisLikeClick}
      >
        {disLikeAction ? (
          <AiFillDislike className="text-2xl" />
        ) : (
          <AiOutlineDislike className="text-2xl" />
        )}
        <span>{disLike.length}</span>
      </button>
    </div>
  );
};

export default LikeDisLike;
