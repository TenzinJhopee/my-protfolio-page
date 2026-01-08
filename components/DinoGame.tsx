"use client";

import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";

const DinoGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [playMusic] = useSound("/sounds/dino-music.mp3", { loop: true, volume: 0.2 });
  const [playJump] = useSound("/sounds/jump.mp3", { volume: 0.5 });

  const dinoImg = useRef<HTMLImageElement>(new Image());
  const cactusImg = useRef<HTMLImageElement>(new Image());

  dinoImg.current.src = "/dino.png";
  cactusImg.current.src = "/cactus.png";

  useEffect(() => {
    if (!gameStarted) return;

    playMusic();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Dino state
    let dinoY = height - 50;
    let dinoVY = 0;
    let isJumping = false;
    const gravity = 0.8;

    // Game state
    const obstacles: { x: number; width: number }[] = [];
    let speed = 6;
    let gameScore = 0;

    // Spawn obstacle
    const spawnObstacle = () => obstacles.push({ x: width, width: 30 + Math.random() * 20 });
    spawnObstacle();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" && !isJumping && !gameOver) {
        dinoVY = -12;
        isJumping = true;
        playJump();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    const gameLoop = () => {
      if (gameOver) return;

      ctx.clearRect(0, 0, width, height);

      // Dino physics
      dinoY += dinoVY;
      dinoVY += gravity;
      if (dinoY >= height - 50) {
        dinoY = height - 50;
        dinoVY = 0;
        isJumping = false;
      }

      // Draw Dino
      ctx.drawImage(dinoImg.current, 50, dinoY, 50, 50);

      // Obstacles
      for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].x -= speed;
        ctx.drawImage(cactusImg.current, obstacles[i].x, height - 50, obstacles[i].width, 50);

        // Collision detection
        if (
          50 < obstacles[i].x + obstacles[i].width &&
          50 + 50 > obstacles[i].x &&
          dinoY + 50 > height - 50
        ) {
          setGameOver(true);
          setHighScore((prev) => Math.max(prev, gameScore));
        }
      }

      // Remove offscreen obstacles & spawn new
      if (obstacles[0].x + obstacles[0].width < 0) {
        obstacles.shift();
        spawnObstacle();
        gameScore += 1;
        setScore(gameScore);
        speed += 0.1; // increase speed gradually
      }

      // Draw Score
      ctx.font = "20px Arial";
      ctx.fillStyle = "black";
      ctx.fillText(`Score: ${gameScore}`, width - 120, 30);
      ctx.fillText(`High Score: ${Math.max(gameScore, highScore)}`, width - 240, 30);

      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameStarted, gameOver, playMusic, playJump, highScore]);

  const restartGame = () => {
    setGameOver(false);
    setScore(0);
    setGameStarted(true);
  };

  return (
    <div className="w-full flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg mb-8">
      <h2 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">
        Dino Game 🦖
      </h2>

      {!gameStarted && (
        <button
          onClick={() => setGameStarted(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition mb-2"
        >
          Start Game & Music
        </button>
      )}

      {gameOver && (
        <div className="flex flex-col items-center mb-2">
          <p className="text-red-600 dark:text-red-400 font-bold text-lg">Game Over!</p>
          <button
            onClick={restartGame}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition"
          >
            Restart
          </button>
        </div>
      )}

      <canvas
        ref={canvasRef}
        width={600}
        height={150}
        className="border border-black dark:border-white mt-2 rounded"
      />

      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
        Press <strong>Space</strong> to jump over obstacles! Score increases with each cactus.
      </p>
    </div>
  );
};

export default DinoGame;
