import React, { useEffect, useRef } from "react";
import Phaser from "phaser";

const TanDjent: React.FC = () => {
  const gameContainer = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (gameRef.current) return; // Prevent duplicate game instances

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: gameContainer.current as HTMLDivElement,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { x: 0, y: 300 },
        },
      },
      scene: {
        preload: function () {
          this.load.image(
            "ball",
            "https://phaser.io/content/tutorials/making-your-first-phaser-game/part5/assets/sprites/pangball.png"
          );
        },
        create: function () {
          const ball = this.physics.add.image(400, 100, "ball");
          ball.setVelocity(200, 200);
          ball.setBounce(1, 1);
          ball.setCollideWorldBounds(true);
        },
      },
    };

    gameRef.current = new Phaser.Game(config);

    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return <div ref={gameContainer} />;
};

export default TanDjent;
