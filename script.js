    document.addEventListener('DOMContentLoaded', () => {
        const features = document.querySelectorAll('.feature');
        let currentIndex = 0;
        const totalFeatures = features.length;
        const slideInterval = 3000; // Interval time in milliseconds

        const showFeatures = (index) => {
            features.forEach((feature, i) => {
                feature.classList.remove('visible');
                if (i >= index && i < index + 3) {
                    feature.style.display = 'block';
                    setTimeout(() => {
                        feature.classList.add('visible');
                    }, 10); // Adding a slight delay to ensure transition is visible
                } else {
                    setTimeout(() => {
                        feature.style.display = 'none';
                    }, 1000); // Timeout should match the transition duration
                }
            });
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % totalFeatures;
            if (currentIndex + 3 > totalFeatures) currentIndex = 0;
            showFeatures(currentIndex);
        };

        // Initialize
        showFeatures(currentIndex);
        setInterval(nextSlide, slideInterval);
    });