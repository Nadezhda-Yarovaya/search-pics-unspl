import logo from '../../logo.svg';
import './App.css';
import api from '../../utils/Api.js';
import {Link, Switch, Route} from 'react-router-dom';
import {useEffect} from "react";
import {useState} from "react";
import Main from '../Main/Main';
import {Photo} from '../Photo/Photo';

function App() {
  const [searchQuery, setSearchQuery] = useState('cats');
  /* тоже самое что дестр. мас
  const searchQuery = arr[0];
  const setSearchQuery = arr[1]; это функция 
  */
  const [cards,setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  /* в самом конце выполняется, как event loop очередь событий */
  useEffect(() => {
    handleRequest();
  }, [searchQuery]); /* когда поставила запрос срабатывает. эффект отслеживает изменение запроса. я его в функции поменяла, поэтому и эффект поменялся */
  

 const handleRequest = () => {   
  if (searchQuery !== '') {
    setIsLoading(true);
    api.search(searchQuery)
    .then(data => {
      console.log(data);
      const cards = data.results.map(item => {
        return {
          id: item.id,
          src: item.urls.regular,
          alt: item.alt_description,
          title: item.user.name,
          subtitle: item.description
        };
      });      
      console.log(cards);
      setCards(cards);
    }).catch(err => console.log(err))
    .finally(() => {
      setIsLoading(false);
    });
   
  }

 } 
 const handleInputChange = (e) => {
   setSearchQuery(e.target.value);
 };

 const onSubmit = (value) => {
   setSearchQuery(value);
   //e.preventDefault();
   //handleRequest(); больше не будет это вызывать
   //console.log('sfsdfsdf');

 }

  return (    
    <Switch>
    <Route path="/" exact><Main onSubmit={onSubmit} isLoading={isLoading} cards={cards}/></Route>
    <Route path="/photos/:id"><Photo photos={cards} /></Route>
    <Route path="*">404 not found</Route>       
    </Switch>
);
}

export default App;
