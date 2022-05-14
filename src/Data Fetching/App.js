import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div>
      <DataFetch />
    </div>
  );
}

function DataFetch() {
  const [{ dogs, loading, error }, setOpts] = useState({
    dogs: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    async function fetchDogs() {
      // here is where we get our fruits data from the server.
      try {
        const data = await axios.get(
          "https://627f6e73be1ccb0a465fa1dc.mockapi.io/dogs"
        );
        setOpts({ dogs: data.data, loading: false });
      } catch (error) {
        setOpts({ error: true, loading: false });
      }
    }
    fetchDogs();
  }, []);

  if (error) {
    return <p>Something went wrong ...</p>;
  }
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (dogs.length === 0) {
    return <p>No dogs yet.</p>;
  }
  return dogs.map((dog) => {
    return (
      <div>
        <p>{dog.name}</p>
        <img src={dog.avatar} alt={dog.avatar} />
      </div>
    );
  });
}

// class _DataFetch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dogs: [],
//       loading: true,
//       error: false,
//     };
//   }

//   async componentDidMount() {
//     // here is where we get our fruits data from the server.
//     try {
//       const data = await axios.get(
//         "https://627f6e73be1ccb0a465fa1dc.mockapi.io/dogs"
//       );
//       this.setState({ dogs: data.data, loading: false });
//     } catch (error) {
//       this.setState({ error: true, loading: false });
//     }
//   }

//   render() {
//     const dogs = this.state.dogs;
//     if (this.state.error) {
//       return <p>Something went wrong ...</p>;
//     }
//     if (this.state.loading) {
//       return <p>Loading ...</p>;
//     }
//     if (dogs.length === 0) {
//       return <p>No dogs yet.</p>;
//     }
//     return dogs.map((dog) => {
//       return (
//         <div>
//           <p>{dog.name}</p>
//           <img src={dog.avatar} alt={dog.avatar} />
//         </div>
//       );
//     });
//   }
// }

export default App;
