import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Charry's Tech Notes",
  description: "Code + Side Hustles",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'DSA & LeetCode', link: '/dsa-notes/' },
      { text: 'ML Notes', link: '/ml-notes/' },
      { text: 'Fullstack', link: '/fullstack/' },
      { text: 'Misc', link: '/misc/' },
    ],

    sidebar: [
      {
        text: 'DSA & LeetCode',
        link: '/dsa-notes/',
        items: [
          {
            text: 'Backtracking',
            link: '/dsa-notes/backtracking/',
            collapsed: true,
            items: [
              { text: 'Permutations', link: '/dsa-notes/backtracking/permutations' },
              { text: 'Subsets', link: '/dsa-notes/backtracking/subsets' },
              { text: 'Combinations', link: '/dsa-notes/backtracking/combinations' },
            ]
          },
          {
            text: 'Binary Search',
            link: '/dsa-notes/binary-search/',
            collapsed: true,
            items: [
            ]
          },
          {
            text: 'Stack',
            link: '/dsa-notes/stack/',
          },
        ]
      },
      {
        text: 'ML Notes',
        link: '/ml-notes/',
        items: [
          {
            text: 'DLAI Prompt Engineering',
            link: '/ml-notes/dlai-prompt-engineering/',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/ml-notes/dlai-prompt-engineering/' },
              { text: 'Basics', link: '/ml-notes/dlai-prompt-engineering/Basics' },
              { text: 'Prompt Development', link: '/ml-notes/dlai-prompt-engineering/Prompt-Development' },
              { text: 'Summarizing', link: '/ml-notes/dlai-prompt-engineering/Summarizing' },
              { text: 'Inferring', link: '/ml-notes/dlai-prompt-engineering/Inferring' },
              { text: 'Transforming', link: '/ml-notes/dlai-prompt-engineering/Transforming' },
              { text: 'Expanding', link: '/ml-notes/dlai-prompt-engineering/Expanding' },
              { text: 'Chatbot', link: '/ml-notes/dlai-prompt-engineering/Chatbot' },
              { text: 'Temperature of LLM', link: '/ml-notes/dlai-prompt-engineering/Temperature-LLM' },
              { text: 'Boilerplate', link: '/ml-notes/dlai-prompt-engineering/Boilerplate' },
            ]
          },
        ]
      },
      {
        text: 'Tech Designs',
        link: '/fullstack/',
        items: [
          {
            text: 'Implement promise.all',
            link: '/fullstack/implement-promise-all/',
          },
          {
            text: 'How browser works',
            link: '/fullstack/how-browser-works/',
          },
          {
            text: 'Video on Demand',
            link: '/fullstack/video-on-demand/',
          },
        ]
      },
      {
        text: 'Misc',
        link: '/misc/',
        items: [
          {
            text: 'Fundraising',
            items: [
              { text: 'Equity Crowdfunding Legals', link: '/misc/fundraising/equity-crowdfunding-legals' },
            ]
          },
          {
            text: 'SaaStr 2023 Notes',
            link:'/misc/saastr23/f500aiadoption',
            items: [
              { text: 'How the F500 is buying AI', link: '/misc/saastr23/f500aiadoption' }
            ]
          },
          { text: 'Docker Setup LinuxMint 21.1', link: '/misc/docker-linuxmint/' },
          {
            text: 'Common ffmpeg commands',
            link: '/misc/ffmpeg/',
            collapsed: true,
            items: [
              {
                text: 'Speedup',
                link: '/misc/ffmpeg/speedup',
              },
              {
                text: 'Trimming',
                link: '/misc/ffmpeg/trimming',
              },
              {
                text: 'Cropping',
                link: '/misc/ffmpeg/cropping',
              },
              {
                text: 'Count frames',
                link: '/misc/ffmpeg/count-frames',
              },
              {
                text: 'Extract frames',
                link: '/misc/ffmpeg/extract-frames',
              }
            ]
          }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CharryWu' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/charrywu/' },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="leetcode"><path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"></path><path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path></svg>'
      }, link: 'https://leetcode.com/CharryWu/' },
    ]
  }
})
