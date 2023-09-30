"use client"
import Head from 'next/head';
import ReactQuillEditor from './components/ReactQuillEditor';

const Home = () => (
  <div>
    <Head>
      <title>React Quill Editor Example</title>
      <meta name="description" content="React Quill Editor Example in Next.js" />
    </Head>

    <main>
      <ReactQuillEditor />
    </main>


  </div>
);

export default Home;

