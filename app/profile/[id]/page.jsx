'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import Profile from '@components/Profile';

const otherProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get('name');
  const id = params.id;
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    const res = await fetch(`/api/users/${id}/posts`);
    const data = await res.json();
    setPosts(data);
  };
  useEffect(() => {
    if (params?.id) {
      fetchPost();
    }
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={posts}
    />
  );
};

export default otherProfile;
