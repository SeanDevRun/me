<template>
    <div class="typing-container">
      <h1><span class="typed-text">{{ text }}</span><span class="cursor">|</span></h1>
    </div>
  </template>
  
  <script>
  export default {
    name: "TypingText",
    props: {
      text: {
        type: String,
        required: true,
      },
      speed: {
        type: Number,
        default: 3.5, // default duration for typing animation
      },
    },
  };
  </script>
  
  <style scoped>
  .typing-container {
    display: inline-block;
  }
  
  .typed-text {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    border-right: 0.15em solid black; /* Text caret */
    font-size: 3rem;
    font-family: monospace;
    width: 0; /* Initially hidden */
    animation: typing var(--typing-duration) steps(var(--typing-steps), end),
      blink-caret 0.75s step-end infinite;
  }
  
  .cursor {
    font-weight: bold;
    font-size: 3rem;
    color: black;
    animation: blink-cursor 0.75s step-end infinite;
  }
  
  /* Typing effect animation */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%; /* Expand to full text width */
    }
  }
  
  /* Cursor blinking effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: black;
    }
  }
  
  @keyframes blink-cursor {
    50% {
      opacity: 0;
    }
  }
  </style>
  