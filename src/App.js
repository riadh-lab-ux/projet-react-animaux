import logo from './logo.svg';
import './App.css';
import { Navbar, Acceuil } from './components';
import { useState } from 'react';
import { FaCat, FaDog } from 'react-icons/fa';
import { FaShieldCat, FaShieldDog } from 'react-icons/fa6';


function App() {
  const [cats, setCats] = useState([])
  const [dogs, setDOgs] = useState([])
  const catDescription = "Les chats sont des animaux domestiques très populaires, connus pour leur indépendance et leur agilité. Ils possèdent une excellente vision nocturne et des griffes rétractiles, ce qui en fait des chasseurs naturels efficaces. Les chats peuvent former des liens affectifs forts avec leurs propriétaires, souvent démontrés par des comportements comme le ronronnement. Chaque chat a une personnalité unique, et les différentes races varient en taille, couleur et type de pelage, offrant une diversité fascinante pour les amateurs de félins."
  const dogDescription = 'Les chiens sont parmi les animaux domestiques les plus aimés et les plus répandus dans le monde. Ils descendent des loups et ont été domestiqués par les humains il y a environ 15 000 ans. Connu pour leur loyauté et leur capacité à former des liens étroits avec les humains, les chiens sont souvent appelés "les meilleurs amis de l\'homme".'
  const [description, setDescription] = useState('')
  const getCats = () => {
    setDOgs([])
    fetch(process.env.REACT_APP_CAT_API_URL)
      .then(response => response.json())
      .then(data => {
        setCats(data)
        setDescription(catDescription)
      })
  }
  const getDogs = () => {
    setDOgs([])
    fetch(process.env.REACT_APP_DOG_API_URL)
      .then(response => response.json())
      .then(data => {
        setCats(data)
        setDescription(dogDescription)
      })
  }
  return (
    <>
      <header>
        <Navbar
          dogsButton={<button onClick={() => getDogs()}><FaShieldDog /> get dogs</button>}
          catsButton={<button onClick={() => getCats()}><FaShieldCat /> get cats</button>}
        />
      </header>
      <Acceuil cats={cats} dogs={dogs} description={description}/>
    </>
  );
}

export default App;
