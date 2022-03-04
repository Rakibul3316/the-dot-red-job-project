import Head from 'next/head'
import Sidebar from '../Components/Sidebar';
import Dashboard from '../Components/Dashboard';

export default function Home() {
  return (
    <div className='wrapper'>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      <Dashboard />
    </div>
  )
}
