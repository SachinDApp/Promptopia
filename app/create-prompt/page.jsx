'use client';
import Form from '@components/Form';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const CreatePrompt = () => {
  const router = useRouter();

  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });
  async function createPost(e) {
    e.preventDefault();
    setSubmitting(true);
    console.log(post);
    try {
      const res = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });
      if (res.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <Form
      type="create"
      setPost={setPost}
      post={post}
      submitting={submitting}
      handleSubmit={createPost}
    />
  );
};

export default CreatePrompt;
