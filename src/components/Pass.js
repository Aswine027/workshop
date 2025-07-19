// import { useState, useEffect } from 'react';
// import '../style/pass.css';

// function Pass() {
//   const [site, setSite] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [entries, setEntries] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem('passwords'));
//     if (saved) setEntries(saved);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('passwords', JSON.stringify(entries));
//   }, [entries]);

//   const handleAdd = (e) => {
//     e.preventDefault();
//     if (!site || !username || !password) {
//       alert("All fields are required!");
//       return;
//     }
//     const newEntry = {
//       id: Date.now(),
//       site,
//       username,
//       password,
//     };
//     setEntries([...entries, newEntry]);
//     setSite('');
//     setUsername('');
//     setPassword('');
//   };

//   const handleDelete = (id) => {
//     const filtered = entries.filter(entry => entry.id !== id);
//     setEntries(filtered);
//   };

//   return (
//     <div className="container">
//       <h2>Password Manager</h2>
//       <form onSubmit={handleAdd}>
//         <input
//           type="text"
//           placeholder="Website"
//           value={site}
//           onChange={(e) => setSite(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Username or Email"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Add Password</button>
//       </form>

//       <div className="entry-list">
//         {entries.length === 0 ? (
//           <p>No saved credentials.</p>
//         ) : (
//           entries.map((entry) => (
//             <div className="entry" key={entry.id}>
//               <div>
//                 <strong>{entry.site}</strong><br />
//                 <span>{entry.username}</span><br />
//                 <input
//                   type="password"
//                   readOnly
//                   value={entry.password}
//                   onFocus={(e) => (e.target.type = 'text')}
//                   onBlur={(e) => (e.target.type = 'password')}
//                 />
//               </div>
//               <button onClick={() => handleDelete(entry.id)}>Delete</button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Pass;


import { useState, useEffect } from 'react';
import '../style/pass.css';

function Pass() {
  const [site, setSite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('passwords'));
    if (saved) setEntries(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('passwords', JSON.stringify(entries));
  }, [entries]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!site || !username || !password) {
      alert("All fields are required!");
      return;
    }
    const newEntry = {
      id: Date.now(),
      site,
      username,
      password,
    };
    setEntries([...entries, newEntry]);
    setSite('');
    setUsername('');
    setPassword('');
  };

  const handleDelete = (id) => {
    const filtered = entries.filter(entry => entry.id !== id);
    setEntries(filtered);
  };

  // ✅ Function to generate random password
  const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]<>?";
    let pass = '';
    for (let i = 0; i < 12; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };

  return (
    <div className="container">
      <h2>Password Manager</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Website"
          value={site}
          onChange={(e) => setSite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="password-row">
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={generatePassword} className="generate-btn">Generate</button>
        </div>
        <button type="submit">Add Password</button>
      </form>

      <div className="entry-list">
        {entries.length === 0 ? (
          <p>No saved credentials.</p>
        ) : (
          entries.map((entry) => (
            <div className="entry" key={entry.id}>
              <div>
                <strong>{entry.site}</strong><br />
                <span>{entry.username}</span><br />
                <input
                  type="password"
                  readOnly
                  value={entry.password}
                  onFocus={(e) => (e.target.type = 'text')}
                  onBlur={(e) => (e.target.type = 'password')}
                />
              </div>
              <button onClick={() => handleDelete(entry.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Pass;
