// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useEffect, useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://sites.brown.edu/songlab/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="p-8 font-inter">
      <h1 className="text-3xl font-bold mb-6">Song Lab News</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{post.title.rendered}</h2>

            <div
              className="mt-2 text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </article>
        ))}
      </div>
    </div>
  );
}
