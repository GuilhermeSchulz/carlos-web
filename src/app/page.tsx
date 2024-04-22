'use client'

import { Banner } from '@/components/banner/Banner';
import MainHeader from '@/components/header/MainHeader';
import Marquee from '@/components/marquee/Marquee';

import { useRouter } from 'next/navigation';




export default function Home() {
  const router = useRouter();

  return (
    <>
      <MainHeader />
      <Marquee />
      <Banner />
    </>
  )
}
