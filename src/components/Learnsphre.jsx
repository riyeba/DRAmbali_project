<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LearnSphere - Revolutionary Tutorial Platform</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            overflow-x: hidden;
        }

        /* Animated Background Particles */
        .bg-particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.1;
        }

        .particle {
            position: absolute;
            background: white;
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }

        /* Glassmorphism Header */
        .header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            z-index: 1000;
            padding: 1rem 2rem;
            transition: all 0.3s ease;
        }

        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1400px;
            margin: 0 auto;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 800;
            color: white;
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 0.5rem 1rem;
            border-radius: 25px;
        }

        .nav-links a:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }

        /* Hero Section with 3D Elements */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero-content {
            z-index: 10;
            color: white;
            max-width: 800px;
            padding: 0 2rem;
        }

        .hero h1 {
            font-size: clamp(3rem, 8vw, 6rem);
            font-weight: 900;
            margin-bottom: 1.5rem;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            background-size: 400% 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientShift 4s ease-in-out infinite;
        }

        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .hero p {
            font-size: 1.5rem;
            margin-bottom: 3rem;
            opacity: 0.9;
            line-height: 1.6;
        }

        /* Floating 3D Cards */
        .floating-cards {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        .floating-card {
            position: absolute;
            width: 120px;
            height: 80px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            animation: floatCard 8s ease-in-out infinite;
        }

        .floating-card:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
        .floating-card:nth-child(2) { top: 30%; right: 15%; animation-delay: 2s; }
        .floating-card:nth-child(3) { bottom: 25%; left: 15%; animation-delay: 4s; }
        .floating-card:nth-child(4) { bottom: 35%; right: 10%; animation-delay: 6s; }

        @keyframes floatCard {
            0%, 100% { transform: translateY(0px) rotateY(0deg); }
            25% { transform: translateY(-30px) rotateY(10deg); }
            50% { transform: translateY(-60px) rotateY(0deg); }
            75% { transform: translateY(-30px) rotateY(-10deg); }
        }

        /* Revolutionary Search Bar */
        .search-container {
            position: relative;
            margin-top: 2rem;
        }

        .search-bar {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(20px);
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 50px;
            padding: 1.5rem 6rem 1.5rem 2rem;
            font-size: 1.2rem;
            color: white;
            width: 100%;
            max-width: 600px;
            outline: none;
            transition: all 0.3s ease;
        }

        .search-bar::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }

        .search-bar:focus {
            border-color: #4ecdc4;
            box-shadow: 0 0 30px rgba(78, 205, 196, 0.3);
            transform: scale(1.02);
        }

        .search-btn {
            position: absolute;
            right: 8px;
            top: 50%;
            transform: translateY(-50%);
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .search-btn:hover {
            transform: translateY(-50%) scale(1.1) rotate(360deg);
        }

        /* Features Section */
        .features {
            padding: 8rem 2rem;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 3rem;
            max-width: 1400px;
            margin: 0 auto;
        }

        .feature-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border-radius: 25px;
            padding: 3rem 2rem;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transition: all 0.6s ease;
        }

        .feature-card:hover::before {
            left: 100%;
        }

        .feature-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .feature-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 2rem;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        .feature-card h3 {
            color: white;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }

        .feature-card p {
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.6;
        }

        /* Interactive Categories */
        .categories {
            padding: 8rem 2rem;
        }

        .categories h2 {
            text-align: center;
            color: white;
            font-size: 3rem;
            margin-bottom: 4rem;
            font-weight: 800;
        }

        .category-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .category-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 2rem;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.2);
            position: relative;
        }

        .category-card:hover {
            transform: translateY(-5px) rotateY(5deg);
            background: rgba(255, 255, 255, 0.2);
        }

        .category-emoji {
            font-size: 3rem;
            margin-bottom: 1rem;
            display: block;
        }

        .category-card h3 {
            color: white;
            font-size: 1.2rem;
            font-weight: 600;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .hero h1 {
                font-size: 3rem;
            }
            
            .hero p {
                font-size: 1.2rem;
            }
            
            .floating-cards {
                display: none;
            }
            
            .features-grid {
                grid-template-columns: 1fr;
            }
            
            .category-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        /* CTA Button */
        .cta-button {
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            color: white;
            padding: 1rem 3rem;
            border: none;
            border-radius: 50px;
            font-size: 1.2rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            position: relative;
            overflow: hidden;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: all 0.5s ease;
        }

        .cta-button:hover::before {
            left: 100%;
        }
    </style>
</head>
<body>
    <!-- Animated Background -->
    <div class="bg-particles" id="particles"></div>

    <!-- Glassmorphism Header -->
    <header class="header">
        <nav class="nav">
            <div class="logo">LearnSphere</div>
            <ul class="nav-links">
                <li><a href="#courses">Courses</a></li>
                <li><a href="#tutors">Tutors</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="floating-cards">
            <div class="floating-card">🎨 Design</div>
            <div class="floating-card">💻 Code</div>
            <div class="floating-card">📊 Data</div>
            <div class="floating-card">🎵 Music</div>
        </div>
        
        <div class="hero-content">
            <h1>Learn Beyond Limits</h1>
            <p>Experience the future of learning with AI-powered tutorials, immersive 3D lessons, and personalized learning paths that adapt to your unique style.</p>
            
            <div class="search-container">
                <input type="text" class="search-bar" placeholder="What would you like to master today?">
                <button class="search-btn">🔍</button>
            </div>
            
            <a href="#features" class="cta-button" style="margin-top: 2rem;">Start Your Journey</a>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">🧠</div>
                <h3>AI-Powered Learning</h3>
                <p>Our advanced AI analyzes your learning patterns and creates personalized curricula that evolve with your progress.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">🥽</div>
                <h3>3D Immersive Lessons</h3>
                <p>Step into virtual laboratories, historical events, and complex concepts through cutting-edge 3D visualization.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">⚡</div>
                <h3>Real-time Collaboration</h3>
                <p>Learn together in virtual spaces with peers worldwide, sharing ideas and solving problems in real-time.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">🎯</div>
                <h3>Skill Mastery Tracking</h3>
                <p>Advanced analytics track your skill development and provide actionable insights to optimize your learning journey.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">🌟</div>
                <h3>Gamified Progress</h3>
                <p>Earn achievements, compete in challenges, and unlock new content as you progress through your learning adventure.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">🔄</div>
                <h3>Adaptive Content</h3>
                <p>Content automatically adjusts difficulty, pace, and style based on your performance and preferences.</p>
            </div>
        </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
        <h2>Explore Infinite Possibilities</h2>
        <div class="category-grid">
            <div class="category-card">
                <span class="category-emoji">💻</span>
                <h3>Programming</h3>
            </div>
            <div class="category-card">
                <span class="category-emoji">🎨</span>
                <h3>Design</h3>
            </div>
            <div class="category-card">
                <span class="category-emoji">📊</span>
                <h3>Data Science</h3>
            </div>
            <div class="category-card">
                <span class="category-emoji">🎵</span>
                <h3>Music</h3>
            </div>
            <div class="category-card">
                <span class="category-emoji">🧪</span>
                <h3>Science</h3>
            </div>
            <div class="category-card">
                <span class="category-emoji">💼</span>
                <h3>Business</h3>
            </div>
            <div class="category-card">
                <span class="category-emoji">🌍</span>
                <h3>Languages</h3>
            </div>
            <div class="category-card">
                <span class="category-emoji">🏃</span>
                <h3>Fitness</h3>
            </div>
        </div>
    </section>

    <script>
        // Create animated particles
        function createParticles() {
            const container = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.width = Math.random() * 4 + 2 + 'px';
                particle.style.height = particle.style.width;
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                container.appendChild(particle);
            }
        }

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.15)';
                header.style.backdropFilter = 'blur(25px)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.1)';
                header.style.backdropFilter = 'blur(20px)';
            }
        });

        // Initialize particles
        createParticles();

        // Interactive search functionality
        const searchBar = document.querySelector('.search-bar');
        const searchBtn = document.querySelector('.search-btn');

        searchBtn.addEventListener('click', () => {
            const query = searchBar.value;
            if (query.trim()) {
                alert(`Searching for: ${query}\n\nThis would redirect to search results!`);
            }
        });

        searchBar.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });

        // Category interaction
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const category = card.querySelector('h3').textContent;
                alert(`Exploring ${category} courses!\n\nThis would navigate to the ${category} section.`);
            });
        });
    </script>
</body>
</html>