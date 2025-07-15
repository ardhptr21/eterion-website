"use client";

import Container from "@/components/commons/Container";
import { useEffect, useRef, useState } from "react";

interface Cell {
  letter: string;
  number?: number;
  isBlocked: boolean;
  row: number;
  col: number;
  isCorrect?: boolean;
  isIncorrect?: boolean;
  showHighlight?: boolean;
}

interface Clue {
  number: number;
  text: string;
  direction: "across" | "down";
  startRow: number;
  startCol: number;
  length: number;
  answer: string;
}

const GRID_SIZE = 15;

export default function FunCorner() {
  const [grid, setGrid] = useState<Cell[][]>(() => {
    const initialGrid = Array(GRID_SIZE)
      .fill(null)
      .map((_, row) =>
        Array(GRID_SIZE)
          .fill(null)
          .map((_, col) => ({
            letter: "",
            number: undefined,
            isBlocked: true,
            row,
            col,
            isCorrect: false,
            isIncorrect: false,
            showHighlight: false,
          }))
      );
    return initialGrid;
  });

  const [mounted, setMounted] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(true);
  const [fireworks, setFireworks] = useState<
    Array<{ x: number; y: number; color: string; id: number }>
  >([]);
  const [stars, setStars] = useState<Array<{ top: string; left: string; animation: string }>>([]);
  const [sparkles, setSparkles] = useState<
    Array<{ top: string; left: string; fontSize: string; animation: string }>
  >([]);

  const inputRefs = useRef<(HTMLInputElement | null)[][]>(
    Array(GRID_SIZE)
      .fill(null)
      .map(() => Array(GRID_SIZE).fill(null))
  );

  const clues: Clue[] = [
    {
      number: 2,
      text: "Makrab Angkatan 2024 di ???",
      direction: "across",
      startRow: 3,
      startCol: 7,
      length: 4,
      answer: "BATU",
    },
    {
      number: 3,
      text: "Misi dari Eterion adalah membangun keluarga yang .... dan saling mendukung.",
      direction: "across",
      startRow: 5,
      startCol: 9,
      length: 5,
      answer: "SOLID",
    },
    {
      number: 4,
      text: "Visi dari Eterion adalah menjadi angkatan yang ....., berintegritas, dan menjadi penuntun perubahan menuju masa depan yang lebih cerah dan berkelanjutan.",
      direction: "across",
      startRow: 6,
      startCol: 4,
      length: 5,
      answer: "TEGUH",
    },
    {
      number: 8,
      text: "Siapa orang yang dikenal suka makan nasi goreng geprek gokil?",
      direction: "across",
      startRow: 8,
      startCol: 6,
      length: 6,
      answer: "KAISAR",
    },
    {
      number: 9,
      text: "Ardhi, Pujo, dan Afin dikenal sebagai jago?",
      direction: "across",
      startRow: 9,
      startCol: 0,
      length: 5,
      answer: "CYSEC",
    },
    {
      number: 10,
      text: "Eterion, E-nya adalah ...?",
      direction: "across",
      startRow: 11,
      startCol: 7,
      length: 7,
      answer: "ETERNAL",
    },

    {
      number: 1,
      text: "Siapa komting Angkatan 24?",
      direction: "down",
      startRow: 2,
      startCol: 10,
      length: 4,
      answer: "PUJO",
    },
    {
      number: 2,
      text: "Apa warna dominan dari website ini?",
      direction: "down",
      startRow: 3,
      startCol: 7,
      length: 4,
      answer: "BIRU",
    },
    {
      number: 4,
      text: "Apa warna yang melambangkan kesederhanaan?",
      direction: "down",
      startRow: 6,
      startCol: 4,
      length: 5,
      answer: "TOSCA",
    },
    {
      number: 5,
      text: "Apakah Ahsan, Oscar, dan Irul jomok?",
      direction: "down",
      startRow: 6,
      startCol: 6,
      length: 3,
      answer: "GAK",
    },
    {
      number: 6,
      text: "Salah satu yang praktikum paling ditakuti adalah ...?",
      direction: "down",
      startRow: 7,
      startCol: 2,
      length: 5,
      answer: "SISOP",
    },
    {
      number: 7,
      text: "Eterion, O-nya adalah ...?",
      direction: "down",
      startRow: 7,
      startCol: 11,
      length: 5,
      answer: "ORION",
    },
  ];

  useEffect(() => {
    const newGrid = Array(GRID_SIZE)
      .fill(null)
      .map((_, row) =>
        Array(GRID_SIZE)
          .fill(null)
          .map((_, col) => ({
            letter: "",
            number: undefined,
            isBlocked: true,
            row,
            col,
            isCorrect: false,
            isIncorrect: false,
            showHighlight: false,
          }))
      );

    clues.forEach((clue) => {
      const { startRow, startCol, length, direction, number } = clue;

      for (let i = 0; i < length; i++) {
        const row = direction === "across" ? startRow : startRow + i;
        const col = direction === "across" ? startCol + i : startCol;

        if (row < GRID_SIZE && col < GRID_SIZE) {
          newGrid[row][col].isBlocked = false;
          if (i === 0) {
            // @ts-expect-error this is fine
            newGrid[row][col].number = number;
          }
        }
      }
    });

    setGrid(newGrid);
    setMounted(true);

    const generatedStars = [...Array(50)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animation: `twinkle ${2 + Math.random() * 3}s infinite`,
    }));

    const generatedSparkles = [...Array(20)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      fontSize: `${8 + Math.random() * 8}px`,
      animation: `sparkle ${3 + Math.random() * 2}s infinite`,
    }));

    setStars(generatedStars);
    setSparkles(generatedSparkles);
  }, []);

  const handleCellChange = (row: number, col: number, value: string) => {
    const newGrid = [...grid];
    newGrid[row][col] = {
      ...newGrid[row][col],
      letter: value.toUpperCase(),
      isCorrect: false,
      isIncorrect: false,
      showHighlight: false,
    };
    setGrid(newGrid);

    if (value && value.length === 1) {
      moveToNextCell(row, col);
    }
  };

  const moveToNextCell = (row: number, col: number) => {
    if (col + 1 < GRID_SIZE && !grid[row][col + 1].isBlocked) {
      inputRefs.current[row][col + 1]?.focus();
    } else {
      if (row + 1 < GRID_SIZE && !grid[row + 1][col].isBlocked) {
        inputRefs.current[row + 1][col]?.focus();
      }
    }
  };

  const moveToPreviousCell = (row: number, col: number) => {
    if (col - 1 >= 0 && !grid[row][col - 1].isBlocked) {
      inputRefs.current[row][col - 1]?.focus();
    } else {
      if (row - 1 >= 0 && !grid[row - 1][col].isBlocked) {
        inputRefs.current[row - 1][col]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, row: number, col: number) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      const newGrid = [...grid];
      newGrid[row][col] = {
        ...newGrid[row][col],
        letter: "",
        isCorrect: false,
        isIncorrect: false,
        showHighlight: false,
      };
      setGrid(newGrid);

      if (e.key === "Backspace" && !grid[row][col].letter) {
        moveToPreviousCell(row, col);
      }
    } else if (e.key === "ArrowRight" && col + 1 < GRID_SIZE && !grid[row][col + 1].isBlocked) {
      inputRefs.current[row][col + 1]?.focus();
    } else if (e.key === "ArrowLeft" && col - 1 >= 0 && !grid[row][col - 1].isBlocked) {
      inputRefs.current[row][col - 1]?.focus();
    } else if (e.key === "ArrowDown" && row + 1 < GRID_SIZE && !grid[row + 1][col].isBlocked) {
      inputRefs.current[row + 1][col]?.focus();
    } else if (e.key === "ArrowUp" && row - 1 >= 0 && !grid[row - 1][col].isBlocked) {
      inputRefs.current[row - 1][col]?.focus();
    }
  };

  const handleInputFocus = (row: number, col: number) => {
    const input = inputRefs.current[row][col];
    if (input) {
      input.select();
    }
  };

  const createFirework = (x: number, y: number) => {
    const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#f0932b", "#eb4d4b", "#6c5ce7"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const id = Math.random();

    setFireworks((prev) => [...prev, { x, y, color, id }]);

    setTimeout(() => {
      setFireworks((prev) => prev.filter((fw) => fw.id !== id));
    }, 1000);
  };

  const checkAnswer = () => {
    let correct = 0;
    let total = 0;
    const newGrid = [...grid];

    newGrid.forEach((row) => {
      row.forEach((cell) => {
        if (!cell.isBlocked) {
          cell.isCorrect = false;
          cell.isIncorrect = false;
          cell.showHighlight = false;
        }
      });
    });

    clues.forEach((clue) => {
      const { startRow, startCol, length, direction, answer } = clue;
      let userAnswer = "";

      for (let i = 0; i < length; i++) {
        const row = direction === "across" ? startRow : startRow + i;
        const col = direction === "across" ? startCol + i : startCol;

        if (row < GRID_SIZE && col < GRID_SIZE) {
          userAnswer += newGrid[row][col].letter;
        }
      }

      total++;
      const isCorrect = userAnswer === answer;

      if (isCorrect) {
        correct++;
      }

      for (let i = 0; i < length; i++) {
        const row = direction === "across" ? startRow : startRow + i;
        const col = direction === "across" ? startCol + i : startCol;

        if (row < GRID_SIZE && col < GRID_SIZE) {
          if (isCorrect) {
            newGrid[row][col].isCorrect = true;
            newGrid[row][col].showHighlight = true;
          } else {
            newGrid[row][col].isIncorrect = true;
            newGrid[row][col].showHighlight = true;
          }
        }
      }
    });

    setGrid(newGrid);

    setTimeout(() => {
      setGrid((prevGrid) => {
        const updatedGrid = [...prevGrid];
        updatedGrid.forEach((row) => {
          row.forEach((cell) => {
            if (!cell.isBlocked) {
              cell.showHighlight = false;
            }
          });
        });
        return updatedGrid;
      });
    }, 500);

    if (correct === total) {
      setShowCongratulations(true);

      setTimeout(() => {
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            createFirework(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
          }, i * 200);
        }
      }, 500);
    }
  };

  const resetGame = () => {
    setShowCongratulations(false);
    setFireworks([]);
    const newGrid = [...grid];
    newGrid.forEach((row) => {
      row.forEach((cell) => {
        if (!cell.isBlocked) {
          cell.letter = "";
          cell.isCorrect = false;
          cell.isIncorrect = false;
          cell.showHighlight = false;
        }
      });
    });
    setGrid(newGrid);
  };

  return (
    <>
      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }

        @keyframes firework {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        @keyframes congratulations {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes buttonGlow {
          0% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.4);
          }
          100% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
          }
        }

        @keyframes buttonPulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .awesome-button {
          color: white;
          background-size: 300% 300%;
          animation: buttonGlow 2s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }

        .awesome-button::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: rotate(45deg);
          animation: shine 3s ease-in-out infinite;
        }

        .awesome-button:hover {
          animation: buttonPulse 0.3s ease-in-out, buttonGlow 2s ease-in-out infinite;
          background: linear-gradient(45deg, #2563eb, #1d4ed8, #3b82f6);
        }

        .awesome-button:active {
          transform: scale(0.95);
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          50% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
          100% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
        }

        .firework {
          animation: firework 1s ease-out forwards;
        }

        .congratulations {
          animation: congratulations 0.8s ease-out forwards;
        }
      `}</style>

      <div className="relative min-h-screen mt-72 overflow-hidden">
        {fireworks.map((firework) => (
          <div
            key={firework.id}
            className="fixed w-4 h-4 rounded-full firework z-50"
            style={{
              left: firework.x,
              top: firework.y,
              backgroundColor: firework.color,
              boxShadow: `0 0 20px ${firework.color}`,
            }}
          />
        ))}

        {showCongratulations && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-40 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 border border-purple-500/30 p-10 rounded-2xl text-center congratulations shadow-2xl">
              <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
                🎉 Congratulations! 🎉
              </h2>
              <p className="text-2xl text-gray-200 mb-8 drop-shadow-md">
                You completed the crossword perfectly!
              </p>
              <button
                onClick={resetGame}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-emerald-400/30"
              >
                Play Again
              </button>
            </div>
          </div>
        )}

        {mounted && (
          <div className="absolute inset-0">
            {stars.map((star, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                style={{
                  top: star.top,
                  left: star.left,
                  animation: star.animation,
                }}
              />
            ))}

            {sparkles.map((sparkle, i) => (
              <div
                key={`sparkle-${i}`}
                className="absolute text-white opacity-40"
                style={{
                  top: sparkle.top,
                  left: sparkle.left,
                  fontSize: sparkle.fontSize,
                  animation: sparkle.animation,
                }}
              >
                ✦
              </div>
            ))}
          </div>
        )}

        <Container as="main" className="relative z-10 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white text-center mb-12">Crossword</h1>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-shrink-0 flex justify-center">
                <div
                  className="inline-grid gap-0"
                  style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
                >
                  {grid.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`relative w-8 h-8 transition-all duration-300 ${
                          cell.isBlocked
                            ? "bg-transparent"
                            : cell.showHighlight
                            ? cell.isCorrect
                              ? "bg-green-500/60 border border-green-300"
                              : "bg-red-500/60 border border-red-300"
                            : "bg-white/10 backdrop-blur-sm border border-white/30"
                        }`}
                      >
                        {!cell.isBlocked && (
                          <>
                            {cell.number && (
                              <span className="absolute top-0.5 left-1 text-xs font-bold text-white leading-none z-10">
                                {cell.number}
                              </span>
                            )}
                            <input
                              ref={(el) => {
                                inputRefs.current[rowIndex][colIndex] = el;
                              }}
                              type="text"
                              value={cell.letter}
                              onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                              onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                              onFocus={() => handleInputFocus(rowIndex, colIndex)}
                              className={`w-full h-full text-center text-sm font-bold border-none outline-none bg-transparent placeholder-white/50 pt-2 transition-colors duration-300 ${
                                cell.showHighlight
                                  ? cell.isCorrect
                                    ? "text-green-100"
                                    : "text-red-100"
                                  : "text-white"
                              }`}
                              maxLength={1}
                              disabled={showCongratulations}
                            />
                          </>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Across</h2>
                  <div className="space-y-4">
                    {clues
                      .filter((clue) => clue.direction === "across")
                      .map((clue) => (
                        <div key={`across-${clue.number}`} className="text-sm leading-relaxed">
                          <span className="font-bold text-white">{clue.number}.</span>{" "}
                          <span className="text-gray-200">{clue.text}</span>
                        </div>
                      ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">Down</h2>
                  <div className="space-y-4">
                    {clues
                      .filter((clue) => clue.direction === "down")
                      .map((clue) => (
                        <div key={`down-${clue.number}`} className="text-sm leading-relaxed">
                          <span className="font-bold text-white">{clue.number}.</span>{" "}
                          <span className="text-gray-200">{clue.text}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={checkAnswer}
                disabled={showCongratulations}
                className="awesome-button px-10 py-5 text-white rounded-2xl font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-blue-400/30 relative z-10"
              >
                <span className="relative z-10">Check Answers</span>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
