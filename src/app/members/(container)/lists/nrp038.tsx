"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const data = {
  name: "Rizki Nasrullah",
  nrp: "502724101038",
  image: "038.jpg",
  funfact: "Ulang Tahunku Bukan 1 Januari",
  hobby: "Main Wordle",
  origin: "Lebak, Banten",
};

export default function NRP038() {
  const [open, setOpen] = useState(false);
  const [wordleOpen, setWordleOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <div className="absolute -top-6 left-20 rotate-330 transform -translate-x-1/2 z-20">
          <Image
            src="/images/members/038_2.png"
            alt="Rainbow decoration"
            width={120}
            height={60}
            className="object-contain"
          />
        </div>
        
        <div
          className="cursor-pointer w-full shrink-0 p-8 rounded-2xl border-3 border-gradient relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FFE5E5 0%, #E5F3FF 25%, #F0E5FF 50%, #E5FFE5 75%, #FFEAA7 100%)',
            borderImage: 'linear-gradient(45deg, #FF6B9D, #45B7D1, #96CEB4, #FFEAA7, #DDA0DD) 1'
          }}
          onClick={() => setOpen(true)}
        >
          
          
          <div className="aspect-[4/5] bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl z-10 relative overflow-hidden shadow-lg border-2 border-white/50">
            <Image
              src={`/images/members/${data.image}`}
              alt={data.name}
              fill
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="mt-6 z-10 relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
              <h4 className="text-xl font-nexa font-bold text-gray-800 mb-1">{data.name}</h4>
              <h6 className="font-nexa text-gray-600 mb-3">{data.nrp}</h6>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setWordleOpen(true);
                }}
                className="w-full px-4 py-3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white rounded-xl font-nexa font-bold hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Play Wordle ✨
              </button>
            </div>
          </div>
          
          <div className="absolute top-4 left-4 w-3 h-3 bg-pink-300 rounded-full opacity-60"></div>
          <div className="absolute top-8 right-8 w-2 h-2 bg-blue-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-20 left-6 w-4 h-4 bg-purple-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-32 right-4 w-2 h-2 bg-green-300 rounded-full opacity-60"></div>
        </div>
      </div>

      <MemberDialog open={open} onOpenChange={setOpen} />
      <WordleDialog open={wordleOpen} onOpenChange={setWordleOpen} />
    </>
  );
}

function MemberDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 border-2 border-white/50 relative">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="absolute -top-6 left-20 rotate-330 transform -translate-x-1/2 z-20">
              <Image
                src="/images/members/038_2.png"
                alt="Rainbow decoration"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>

           

            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative shadow-lg border-2 border-white/50 z-10">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 relative z-10">
              <h2 className="text-3xl font-bold font-nexa text-gray-800 mb-2">{data.name}</h2>
              <p className="text-lg font-nexa text-gray-600 mb-4">{data.nrp}</p>

              <hr className="my-6 border-t border-gray-300/50" />

              <div className="space-y-3 text-gray-700 font-nexa text-base">
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-3">
                  <p><strong className="text-pink-600">Asal:</strong> {data.origin}</p>
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-3">
                  <p><strong className="text-purple-600">Hobi:</strong> {data.hobby}</p>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-3">
                  <p><strong className="text-blue-600">Funfact:</strong> {data.funfact}</p>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

interface WordleData {
  id: number;
  solution: string;
  print_date: string;
}

function WordleDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [gameData, setGameData] = useState<WordleData | null>(null);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");
  const [loading, setLoading] = useState(false);

  const handleGuess = useCallback(() => {
    if (currentGuess.length !== 5 || !gameData || gameStatus !== "playing") return;

    const newGuesses = [...guesses, currentGuess.toUpperCase()];
    setGuesses(newGuesses);

    if (currentGuess.toUpperCase() === gameData.solution.toUpperCase()) {
      setGameStatus("won");
    } else if (newGuesses.length >= 6) {
      setGameStatus("lost");
    }

    setCurrentGuess("");
  }, [currentGuess, gameData, gameStatus, guesses]);

  useEffect(() => {
    if (open) {
      fetchWordleData();
      setTimeout(() => {
        const content = document.querySelector('[role="dialog"]') as HTMLElement;
        if (content) {
          content.focus();
        }
      }, 100);
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!open || gameStatus !== "playing" || !gameData) return;
      
      const key = event.key.toUpperCase();
      
      if (key === 'ENTER' || key === 'BACKSPACE' || key.match(/^[A-Z]$/)) {
        event.preventDefault();
        event.stopPropagation();
        
        if (key === 'ENTER') {
          if (currentGuess.length === 5) {
            handleGuess();
          }
        } else if (key === 'BACKSPACE') {
          setCurrentGuess(prev => prev.slice(0, -1));
        } else if (key.match(/^[A-Z]$/) && currentGuess.length < 5) {
          setCurrentGuess(prev => prev + key);
        }
      }
    };

    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, currentGuess, gameStatus, gameData, handleGuess]);

  const fetchWordleData = async () => {
    setLoading(true);
    try {
      const today = new Date();
      const todayStr = today.toISOString().split('T')[0];
      
      const response = await fetch(`/api/wordle/v2/${todayStr}.json`);
      
      if (response.ok) {
        const data = await response.json();
        setGameData(data);
        setGuesses([]);
        setCurrentGuess("");
        setGameStatus("playing");
      }
    } catch (error) {
      console.error("Error fetching Wordle data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (key: string) => {
    if (gameStatus !== "playing") return;

    if (key === "ENTER") {
      if (currentGuess.length === 5 && gameData) {
        handleGuess();
      }
    } else if (key === "BACKSPACE") {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (key.match(/[A-Z]/) && currentGuess.length < 5) {
      setCurrentGuess(prev => prev + key);
    }
  };

  const getLetterColor = (letter: string, position: number) => {
    if (!gameData) return "bg-gray-200";
    
    const solution = gameData.solution.toUpperCase();
    const guessLetter = letter.toUpperCase();
    
    if (solution[position] === guessLetter) {
      return "bg-gradient-to-br from-green-300 to-green-400";
    } else if (solution.includes(guessLetter)) {
      return "bg-gradient-to-br from-yellow-300 to-yellow-400";
    } else {
      return "bg-gradient-to-br from-gray-300 to-gray-400";
    }
  };

  const getKeyboardLetterColor = (letter: string) => {
    if (!gameData) return "bg-gradient-to-br from-gray-200 to-gray-300";
    
    const solution = gameData.solution.toUpperCase();
    let hasCorrectPosition = false;
    let hasWrongPosition = false;
    let isNotInWord = false;

    for (const guess of guesses) {
      for (let i = 0; i < guess.length; i++) {
        if (guess[i] === letter) {
          if (solution[i] === letter) {
            hasCorrectPosition = true;
          } else if (solution.includes(letter)) {
            hasWrongPosition = true;
          } else {
            isNotInWord = true;
          }
        }
      }
    }

    if (hasCorrectPosition) {
      return "bg-gradient-to-br from-green-300 to-green-400";
    } else if (hasWrongPosition) {
      return "bg-gradient-to-br from-yellow-300 to-yellow-400";
    } else if (isNotInWord) {
      return "bg-gradient-to-br from-gray-300 to-gray-400";
    } else {
      return "bg-gradient-to-br from-gray-200 to-gray-300";
    }
  };

  const resetGame = () => {
    fetchWordleData();
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content 
            className="w-full max-w-md max-h-[95vh] bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-6 border-2 border-white/50 relative"
            onOpenAutoFocus={(e) => e.preventDefault()}
            tabIndex={-1}
          >
            <Dialog.Title className="text-2xl font-bold font-nexa text-gray-800 mb-4 text-center">
              Wordle Game ✨
            </Dialog.Title>

            {/* Rainbow element at the top */}
            <div className="absolute -top-6 left-20 rotate-330 transform -translate-x-1/2 z-20">
              <Image
                src="/images/members/038_2.png"
                alt="Rainbow decoration"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>

            {loading ? (
              <div className="text-center relative z-10">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                <p className="text-gray-600 mt-2">Loading...</p>
              </div>
            ) : gameData ? (
              <div className="relative z-10">
                <div className="text-center mb-4">
                  <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-green-200 to-blue-200 text-gray-700 shadow-lg">
                    NYTimes Wordle #{gameData.id} ({gameData.print_date})
                  </div>
                </div>
                
                <div className="grid grid-rows-6 gap-2 mb-4">
                  {Array.from({ length: 6 }, (_, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-5 gap-2">
                      {Array.from({ length: 5 }, (_, colIndex) => {
                        const guess = guesses[rowIndex];
                        const isCurrentRow = rowIndex === guesses.length && gameStatus === "playing";
                        const letter = guess ? guess[colIndex] : (isCurrentRow ? currentGuess[colIndex] || "" : "");
                        
                        let bgColor = "bg-gray-100";
                        if (guess) {
                          bgColor = getLetterColor(letter, colIndex);
                        } else if (isCurrentRow && letter) {
                          bgColor = "bg-blue-100 border-blue-300";
                        } else if (isCurrentRow) {
                          bgColor = "bg-gray-50 border-gray-300";
                        }
                        
                        return (
                          <div
                            key={colIndex}
                            className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center text-gray-800 font-bold text-lg transition-all duration-300 shadow-lg ${bgColor}`}
                          >
                            {letter || ""}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"].map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center gap-1">
                      {rowIndex === 2 && (
                        <button
                          onClick={() => handleKeyPress("ENTER")}
                          className="px-3 py-2 bg-gradient-to-r from-green-300 to-blue-300 text-gray-800 rounded-lg text-sm font-semibold hover:from-green-400 hover:to-blue-400 transition-all duration-300 shadow-lg"
                          disabled={gameStatus !== "playing"}
                        >
                          ENTER
                        </button>
                      )}
                      {row.split("").map((letter) => (
                        <button
                          key={letter}
                          onClick={() => handleKeyPress(letter)}
                          className={`w-8 h-10 text-gray-800 rounded-lg text-sm font-semibold hover:scale-105 disabled:opacity-50 transition-all duration-300 shadow-lg ${getKeyboardLetterColor(letter)}`}
                          disabled={gameStatus !== "playing"}
                        >
                          {letter}
                        </button>
                      ))}
                      {rowIndex === 2 && (
                        <button
                          onClick={() => handleKeyPress("BACKSPACE")}
                          className="px-3 py-2 bg-gradient-to-r from-pink-300 to-purple-300 text-gray-800 rounded-lg text-sm font-semibold hover:from-pink-400 hover:to-purple-400 transition-all duration-300 shadow-lg"
                          disabled={gameStatus !== "playing"}
                        >
                          ⌫
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {gameStatus === "won" && (
                  <div className="text-center mt-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-4 shadow-lg">
                    <div className="text-4xl mb-2">🎉</div>
                    <p className="text-green-600 font-bold text-lg">Congratulations! You won!</p>
                    <p className="text-gray-700 font-semibold">The word was: {gameData?.solution}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      NYTimes Wordle #{gameData.id} ({gameData.print_date})
                    </p>
                  </div>
                )}
                
                {gameStatus === "lost" && (
                  <div className="text-center mt-6 bg-gradient-to-r from-pink-100 to-red-100 rounded-2xl p-4 shadow-lg">
                    <div className="text-4xl mb-2">😔</div>
                    <p className="text-red-600 font-bold text-lg">Game Over!</p>
                    <p className="text-gray-700 font-semibold">The word was: {gameData?.solution}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      NYTimes Wordle #{gameData.id} ({gameData.print_date})
                    </p>
                  </div>
                )}

                {gameStatus !== "playing" && (
                  <div className="text-center mt-4">
                    <button
                      onClick={resetGame}
                      className="px-6 py-3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white rounded-xl font-nexa font-bold hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg transform hover:scale-105"
                    >
                      Play Again ✨
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center relative z-10">
                <div className="text-4xl mb-4">😕</div>
                <p className="text-gray-600">Failed to load game data</p>
              </div>
            )}
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
