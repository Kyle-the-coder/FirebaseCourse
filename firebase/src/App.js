import { useEffect, useState } from 'react';
import './App.css';
import { Auth } from './components/auth';
import { db } from "./config/Firebase"
import { getDocs, collection, addDoc } from "firebase/firestore"

function App() {
  const [movieList, setMovieList] = useState([])
  const [movieTitle, setMovieTitle] = useState(0)
  const [movieYear, setMovieYear] = useState('')
  const [oscar, setOscar] = useState(false)
  const moviesCollectionRef = collection(db, "movies")
  const getMovieList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      console.log(filteredData)
      setMovieList(filteredData)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getMovieList()
  }, [])

  const onSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title: movieTitle,
        releaseDate: movieYear,
        receivedAnOscar: oscar
      });
      getMovieList()
    } catch (error) {
      console.log(error)
    }

  }



  return (
    <div className="App">
      <h1>Firebase Course</h1>
      <Auth />

      <div>
        <input placeholder='movie title..' onChange={(e) => setMovieTitle(e.target.value)} />
        <input type="number" placeholder='release year' onChange={(e) => setMovieYear(Number(e.target.value))} />
        <input type="checkbox" checked={oscar} onChange={(e) => setOscar(e.target.checked)} />
        <label>Received An Oscar</label>
        <button onClick={onSubmitMovie}>Submit Movie</button>
      </div>

      <div>
        {movieList.map((movie, i) => {
          return (
            <div key={i}>

              <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>{movie.title}</h1>
              <p>{movie.releaseDate}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
