import { CreatePostDto, Post } from '@/types';
import axiosInstance from './axios';

async function createPost(body: CreatePostDto) {
  const { data } = await axiosInstance.post('/posts', body);

  return data;
}

async function getPosts(page = 1): Promise<Post[]> {
  const { data } = await axiosInstance.get(`/posts?page=${page}`);

  return data;
}

async function deletePost(id: number): Promise<number> {
  const { data } = await axiosInstance.delete(`/posts/${id}`);

  return data;
}

async function getPost(id = 1): Promise<Post> {
  const { data } = await axiosInstance.get(`/posts/${id}`);

  return data;
}

export { createPost, deletePost, getPost, getPosts };
