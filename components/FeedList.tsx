import { colors } from '@/constants';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import FeedItem from './FeedItem';

const dummyData = [
  {
    id: 1,
    userId: 1,
    title: '더미 제목 입니다.',
    description: '더미 내용 입니다.',
    createdAt: '2023-01-01T00:00:00.000Z',
    author: {
      id: 1,
      nickname: '더미 닉네임',
    },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
  {
    id: 2,
    userId: 2,
    title: '더미 제목 입니다.',
    description: '더미 내용 입니다.',
    createdAt: '2023-01-01T00:00:00.000Z',
    author: {
      id: 2,
      nickname: '더미 닉네임',
    },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 2,
    commentCount: 2,
    viewCount: 2,
  },
  {
    id: 3,
    userId: 3,
    title: '더미 제목 입니다.',
    description: '더미 내용 입니다.',
    createdAt: '2023-01-01T00:00:00.000Z',
    author: {
      id: 3,
      nickname: '더미 닉네임',
    },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 2,
    commentCount: 2,
    viewCount: 2,
  },
];

function FeedList() {
  return (
    <FlatList
      data={dummyData}
      renderItem={(item) => {
        return <FeedItem post={item.item} />;
      }}
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: colors.GRAY_200,
    gap: 12,
  },
});

export default FeedList;
