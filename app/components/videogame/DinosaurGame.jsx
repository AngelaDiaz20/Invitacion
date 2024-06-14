// components/Game.jsx
"use client"
// components/Game.jsx
import { useEffect, useRef, useState } from 'react';

const DinosaurGame = () => {
  const canvasRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
    setIsGameOver(false);
    setIsGameFinished(false);
    setScore(0);
  };

  useEffect(() => {
    if (isRunning) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      let animationFrameId;
      const dinosaurImg = new Image();
      dinosaurImg.src = '/assets/img/game/peach.png';
      const obstacleImg = new Image();
      obstacleImg.src = '/assets/img/game/cake.png';
      const finishImg = new Image();
      finishImg.src = '/assets/img/game/mario.png';

      let dino = { x: 50, y: canvas.height - 80, width: 50, height: 50, dy: 0, jumpHeight: -10, gravity: 0.5 };
      let obstacles = [];
      let frame = 0;

      const handleJump = () => {
        if (dino.y === canvas.height - 80) {
          dino.dy = dino.jumpHeight;
        }
      };

      const addObstacle = () => {
        obstacles.push({ x: canvas.width, y: canvas.height - 80, width: 50, height: 50 });
      };

      const detectCollision = (dino, obstacle) => {
        return (
          dino.x < obstacle.x + obstacle.width &&
          dino.x + dino.width > obstacle.x &&
          dino.y < obstacle.y + obstacle.height &&
          dino.y + dino.height > obstacle.y
        );
      };

      const gameLoop = () => {
        frame++;
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Dinosaurio
        dino.y += dino.dy;
        if (dino.y + dino.height < canvas.height) {
          dino.dy += dino.gravity;
        } else {
          dino.y = canvas.height - dino.height;
          dino.dy = 0;
        }
        context.drawImage(dinosaurImg, dino.x, dino.y, dino.width, dino.height);

        // Obstáculos
        if (frame % 120 === 0) {
          addObstacle();
        }
        obstacles = obstacles.map(obstacle => {
          obstacle.x -= 5;
          context.drawImage(obstacleImg, obstacle.x, obstacle.y, obstacle.width, obstacle.height);

          if (detectCollision(dino, obstacle)) {
            setIsGameOver(true);
            setIsRunning(false);
          }

          if (obstacle.x + obstacle.width < 0) {
            setScore(prevScore => prevScore + 1);
          }

          return obstacle;
        }).filter(obstacle => obstacle.x + obstacle.width > 0);

        if (score >= 10) { // Número de obstáculos para finalizar el juego
          setIsGameFinished(true);
          setIsRunning(false);
        }

        if (isRunning) {
          animationFrameId = requestAnimationFrame(gameLoop);
        } else {
          if (isGameFinished) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(finishImg, canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100);
            context.font = "30px Arial";
            context.fillText("Congratulations!", canvas.width / 2 - 100, canvas.height / 2 + 80);
          } else {
            cancelAnimationFrame(animationFrameId);
          }
        }
      };

      const handleTapOrClick = () => {
        handleJump();
      };

      window.addEventListener('click', handleTapOrClick);
      window.addEventListener('touchstart', handleTapOrClick);

      gameLoop();

      return () => {
        window.removeEventListener('click', handleTapOrClick);
        window.removeEventListener('touchstart', handleTapOrClick);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [isRunning]);

  return (
    <div>
      <button onClick={handleStart} disabled={isRunning}>Start Game</button>
      <canvas ref={canvasRef} width="800" height="200"></canvas>
      <div>Score: {score}</div>
      {isGameOver && <div>Game Over! <button onClick={handleStart}>Restart</button></div>}
    </div>
  );
};

export default DinosaurGame;