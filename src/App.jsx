import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Frown, Sparkles, Smile, PartyPopper, Video } from 'lucide-react'

// Reusable animated card container
const Card = ({ children, color }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0, y: 50 }}
    animate={{ scale: 1, opacity: 1, y: 0 }}
    exit={{ scale: 1.1, opacity: 0, y: -50, transition: { duration: 0.3 } }}
    className={`w-80 md:w-96 p-8 rounded-3xl shadow-2xl border border-white/60 flex flex-col items-center justify-center text-center transform-gpu ${color} backdrop-blur-md bg-opacity-90 min-h-[28rem]`}
  >
    {children}
  </motion.div>
)

export default function App() {
  const [step, setStep] = useState(1);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  // Escape mechanism for the "No" button
  const handleNoHover = () => {
    // Generate random coordinates between -100 and +100 for X and Y
    const currentX = noPosition.x;
    const currentY = noPosition.y;

    // Make sure it jumps far enough
    const nextX = currentX + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 100 + 50);
    const nextY = currentY + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 100 + 50);

    setNoPosition({ x: nextX, y: nextY });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative p-4 overflow-hidden">
      <div className="absolute top-10 text-center z-10 w-full px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-pink-800 drop-shadow-md mb-2">
          {step === 7 || step === 8 ? "HEY THANKS FOR YOUR KINDESS ON THIS SMALL INOCENT CHILD!" : "Hey You..."}
        </h1>
      </div>

      <div className="relative z-20 mt-16">
        <AnimatePresence mode="wait">

          {step === 1 && (
            <Card key="1" color="bg-red-50">
              <Frown className="w-16 h-16 text-red-500 mb-6" />
              <p className="text-2xl font-bold text-gray-800 mb-8 whitespace-pre-line leading-relaxed">
                Are you mad at me? 😠
              </p>
              <button
                onClick={() => setStep(2)}
                className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 w-full"
              >
                Yes
              </button>
            </Card>
          )}

          {step === 2 && (
            <Card key="2" color="bg-yellow-50">
              <Smile className="w-16 h-16 text-yellow-500 mb-6" />
              <p className="text-2xl font-bold text-gray-800 mb-8 whitespace-pre-line leading-relaxed">
                Think again... are you sure you're angry? 🤔
              </p>
              <button
                onClick={() => setStep(3)}
                className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 w-full"
              >
                Yes
              </button>
            </Card>
          )}

          {step === 3 && (
            <Card key="3" color="bg-blue-50">
              <Heart className="w-16 h-16 text-blue-500 mb-6 animate-pulse" />
              <p className="text-2xl font-bold text-gray-800 mb-8 whitespace-pre-line leading-relaxed">
                I'm really sorry! Please accept my apology? 🥺
              </p>
              <div className="flex flex-col space-y-4 w-full">
                <button
                  onClick={() => setStep(7)}
                  className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 w-full"
                >
                  Accept
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 w-full"
                >
                  No
                </button>
              </div>
            </Card>
          )}

          {step === 4 && (
            <Card key="4" color="bg-orange-50">
              <Sparkles className="w-16 h-16 text-orange-500 mb-6" />
              <p className="text-2xl font-bold text-gray-800 mb-8 whitespace-pre-line leading-relaxed">
                You are bhalu 🐻, maan bhi jao warna I'll kidnap you! 😤
              </p>
              <button
                onClick={() => setStep(5)}
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 w-full"
              >
                Proceed
              </button>
            </Card>
          )}

          {step === 5 && (
            <Card key="5" color="bg-purple-50">
              <div className="w-full h-48 md:h-64 mb-6 rounded-xl overflow-hidden shadow-inner border border-gray-200 relative group">
                <iframe
                  src="https://www.youtube.com/embed/xO_4-VRdkig?autoplay=1&mute=0&loop=1&playlist=xO_4-VRdkig"
                  title="YouTube Shorts"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-xl font-bold text-gray-800 mb-6 whitespace-pre-line leading-relaxed">
                Watch this and maybe reconsider? 😇
              </p>
              <div className="flex space-x-4 w-full">
                <button
                  onClick={() => setStep(7)}
                  className="flex-1 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
                >
                  Accept
                </button>
                <button
                  onClick={() => setStep(6)}
                  className="flex-1 py-3 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
                >
                  Reject
                </button>
              </div>
            </Card>
          )}

          {step === 6 && (
            <Card key="6" color="bg-pink-50">
              <Heart className="w-16 h-16 text-pink-500 mb-6" />
              <p className="text-2xl font-bold text-gray-800 mb-8 whitespace-pre-line leading-relaxed">
                Maan bhi jaoo plz 🥺
              </p>
              <div className="flex w-full space-x-4 relative">
                <button
                  onClick={() => setStep(7)}
                  className="flex-1 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 z-30"
                >
                  Yes
                </button>

                <div className="flex-1 relative">
                  {/* Invisible placeholder to keep the flex-1 width/height structure stable */}
                  <div className="w-full py-3 invisible">No</div>

                  <motion.button
                    onClick={handleNoHover}
                    onMouseEnter={handleNoHover}
                    animate={{ x: noPosition.x, y: noPosition.y }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute inset-0 w-full h-full bg-rose-500 text-white font-bold rounded-full shadow-lg z-50 pointer-events-auto"
                    style={{ position: 'absolute' }}
                  >
                    No
                  </motion.button>
                </div>
              </div>
            </Card>
          )}

          {step === 7 && (
            <Card key="7" color="bg-white/90">
              <PartyPopper className="w-24 h-24 text-pink-500 mb-6 animate-bounce" />
              <p className="text-3xl font-extrabold text-gray-800 mb-4 whitespace-pre-line leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Yay! Thank you! 💕
              </p>
              <p className="text-xl text-gray-700 font-bold mb-4">
                Thanks bhalu! 🐻
              </p>
              <p className="text-lg text-gray-600 font-medium mb-8">
                I promise I won't annoy you... until tomorrow anyway.
              </p>
              <button
                onClick={() => setStep(8)}
                className="px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center space-x-2"
              >
                <span>Something more? 🎁</span>
              </button>
            </Card>
          )}

          {step === 8 && (
            <Card key="8" color="bg-gradient-to-b from-rose-50 to-pink-50">
              <div className="w-full h-48 md:h-64 mb-6 rounded-xl overflow-hidden shadow-inner border border-gray-200 relative group">
                <iframe
                  src="https://www.youtube.com/embed/NnA0Xhc11uM?autoplay=1&mute=0&loop=1&playlist=NnA0Xhc11uM"
                  title="YouTube Movie"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-2xl font-extrabold text-pink-600 mb-6">
                Just for you! 😅😅😅😅
              </p>
              <button
                onClick={() => { setStep(1); setNoPosition({ x: 0, y: 0 }); }}
                className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-full shadow transition-transform hover:scale-105 active:scale-95"
              >
                Restart
              </button>
            </Card>
          )}

        </AnimatePresence>
      </div>
    </div>
  )
}
