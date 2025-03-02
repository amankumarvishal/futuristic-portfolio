<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aman Kumar - Animated Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Header -->
  <header>
    <h1 class="glow">Portfolio</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <!-- Hero Section -->
  <section id="hero">
    <h1 class="glow">Aman Kumar</h1>
    <p>Data Analyst & Creative Coder</p>
  </section>

  <!-- About Section -->
  <section id="about">
    <h2 class="glow">About Me</h2>
    <p>
      I’m a passionate math tutor and developer, blending logic with creativity. 
      With 500+ students taught, I craft engaging lessons and innovative tools 
      like AI tutors and Bible apps.
    </p>
  </section>

  <!-- Projects Section -->
  <section id="projects">
    <h2 class="glow">Projects</h2>
    <div class="project-grid">
      <div class="card">
        <h3 class="glow">Project 1</h3>
        <p>Animated scripture reader with search.</p>
      </div>
      <div class="card">
        <h3 class="glow">Project 2</h3>
        <p>Interactive lessons with AI support.</p>
      </div>
      <div class="card">
        <h3 class="glow">Project 3</h3>
        <p>This animated masterpiece!</p>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <h2 class="glow">Contact Me</h2>
    <form id="contact-form">
      <input type="text" name="name" placeholder="Name" required>
      <input type="email" name="email" placeholder="Email" required>
      <textarea name="message" placeholder="Message" required></textarea>
      <button type="submit">Send</button>
    </form>
    <p id="form-message" class="form-message"></p>
  </section>

  <!-- Script -->
  <script src="script.js"></script>
</body>
</html>
