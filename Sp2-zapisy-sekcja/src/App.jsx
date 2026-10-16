import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const sekcje = ['Piłka nożna', 'Szachy', 'Robotyka', 'Pływanie'];

  const [imieNazwisko, setImieNazwisko] = useState('');
  const [numerSekcji, setNumerSekcji] = useState('');

  function obsluzZapis(event) {
    event.preventDefault();

    const numer = Number(numerSekcji);

    let nazwaSekcji = 'Nieprawidłowy numer sekcji';

    if (
      numerSekcji !== '' &&
      Number.isInteger(numer) &&
      numer >= 1 &&
      numer <= sekcje.length
    ) {
      nazwaSekcji = sekcje[numer - 1];
    }

    console.log(`Imię i nazwisko: ${imieNazwisko}`);
    console.log(`Sekcja: ${nazwaSekcji}`);
  }

  return (
    <main>
      <h2>Liczba sekcji: {sekcje.length}</h2>

      <ol>
        {sekcje.map((sekcja) => (
          <li key={sekcja}>{sekcja}</li>
        ))}
      </ol>

      <form onSubmit={obsluzZapis}>
        <div className="mb-3">
          <label htmlFor="imieNazwisko" className="form-label">
            Imię i nazwisko:
          </label>
          <input
            type="text"
            className="form-control"
            id="imieNazwisko"
            value={imieNazwisko}
            onChange={(event) =>
              setImieNazwisko(event.target.value)
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="numerSekcji" className="form-label">
            Numer sekcji:
          </label>
          <input
            type="number"
            className="form-control"
            id="numerSekcji"
            value={numerSekcji}
            onChange={(event) =>
              setNumerSekcji(event.target.value)
            }
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Zapisz
        </button>
      </form>
    </main>
  );
}

export default App;