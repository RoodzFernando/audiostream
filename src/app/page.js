'use client'

import CallToAction from "@/components/cta";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="h-[88.2vh] bg-indigo-500 flex flex-col justify-between p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p className="flex-auto text-white">
        AudioStream is a web application built with React that enables real-time peer-to-peer audio streaming between two users. The app allows users to manipulate the audio stream with basic controls. Perfect for voice chats or collaborative audio experiences.
      </p>

      <div className="self-center">
        <CallToAction
          title="Start Streaming"
          backgroundColor='green'
          handleClick={() => router.replace('/stream')}
        />
      </div>
    </div>
  );
}
