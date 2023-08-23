
    public void actionPerformed(ActionEvent e) {
        if (!gameOver) {
            for (int i = 0; i < pipesX.size(); i++) {
                int pipeX = pipesX.get(i);
                pipeX -= 5;
                pipesX.set(i, pipeX);

                if (pipeX == WIDTH / 2) {
                    pipesX.add(WIDTH);
                }

                if (pipeX == 100) {
                    if (birdY < 0 || birdY > HEIGHT) {
                        gameOver = true;
                        timer.stop();
                    }
                }

                if (pipeX == 130) {
                    score++;
                }
            }

            birdVelocity += 1;
            birdY += birdVelocity;

            repaint();
        }
    }

    public void keyTyped(KeyEvent e) {
    }

    public void keyPressed(KeyEvent e) {
        if (e.getKeyCode() == KeyEvent.VK_SPACE && !gameOver) {
            birdVelocity = -15;
        }
    }

    public void keyReleased(KeyEvent e) {
    }

    public static void main(String[] args) {
        new FlappyBirdGame();
    }
}
