
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const agent3d = document.querySelector('.agent-3d');
        const pauseBtn = document.querySelector('.pause-rotation');
        const leftBtn = document.querySelector('.rotate-left');
        const rightBtn = document.querySelector('.rotate-right');
        let rotationDegree = 0;
        let isPaused = false;

        // Pause/Reprendre la rotation
        pauseBtn.addEventListener('click', () => {
            isPaused = !isPaused;
            agent3d.classList.toggle('paused');
            pauseBtn.textContent = isPaused ? 'Play' : 'Pause';
        });

        // Rotation manuelle
        leftBtn.addEventListener('click', () => {
            rotationDegree -= 90;
            agent3d.style.transform = `rotateY(${rotationDegree}deg)`;
        });

        rightBtn.addEventListener('click', () => {
            rotationDegree += 90;
            agent3d.style.transform = `rotateY(${rotationDegree}deg)`;
        });
    });
</script>