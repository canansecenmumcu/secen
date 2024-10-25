"use client"

import { motion } from 'framer-motion'
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: '400', // Normal ağırlık
  style: 'italic', // Italic stil
});

export default function Home() {
  const text = "Çok yakında karşınızda olacağız!";
  return (
    <div className="w-screen h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center " >
      <div className='w-[1500px] h-[400px] ' >
        <div className='flex flex-wrap items-center justify-center text-center leading-loose ' >
          <div className={`text-gray-700 ${playfair.className} h-full w-full flex items-center justify-center text-9xl pb-[300px]  `} >
            <div className="" >
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {letter}
                </motion.span>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* TEXT CONTAINER */}

    </div>
  );
}
