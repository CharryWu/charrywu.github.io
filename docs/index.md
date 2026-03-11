---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Charry's Tech Notes"
  text: "Web dev (JS & Python) · Rust & CUDA for AI"

features:
  # Software projects with thumbnails - direct links to each project
  - title: ferris-compute-cuda
    details: Remote-execution CLI for CUDA programming. Write CUDA code locally and run it on a remote GPU server. Rust + gRPC.
    link: https://github.com/CharryWu/ferris-compute-cuda
    linkText: View on GitHub
    icon:
      src: /ferris-cuda.svg
      alt: Ferris + NVIDIA
      width: "128"
      height: "128"
  - title: Text to Long Image
    details: Transform texts to article images for mobile screens. Convert text into long-form graphics for social posts.
    link: https://charrywu.github.io/webtools/text2longimage/
    linkText: View Demo
    icon:
      src: https://charrywu.github.io/webtools/text2longimage/text2longimage1.png
      alt: Text to Long Image
      width: "128"
      height: "128"
  - title: Snake Game (Rust + WASM)
    details: Classic snake game built with Rust and WebAssembly for high-performance browser gaming.
    link: https://charrywu.github.io/snake_game/index.html
    linkText: Play Game
    icon:
      src: https://charrywu.github.io/webtools/snake_game/snake_game.png
      alt: Snake Game
      width: "128"
      height: "128"
  # Notes hub - single tile for all documentation
  - title: Notes
    details: DSA, ML/AI, Fullstack interview knowledge, and miscellaneous articles.
    link: /notes/
    linkText: Browse Notes
    icon: 📝
---
