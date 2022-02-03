import logo from '../../logo.svg';
import './App.css';
import api from '../../utils/Api.js';
import {Link, Switch, Route} from 'react-router-dom';
import {useEffect} from "react";
import {useState} from "react";
import Main from '../Main/Main';
import {Photo} from '../Photo/Photo';
import {CardContext} from '../../context/CardContext.js';

function App() {
  const [searchQuery, setSearchQuery] = useState('beach');
  /* тоже самое что дестр. мас
  const searchQuery = arr[0];
  const setSearchQuery = arr[1]; это функция 
  01:31 passed
  */
  const [cards,setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  /* в самом конце выполняется, как event loop очередь событий */
  useEffect(() => {
    const handleRequest = () => {   
      if (searchQuery !== '') {
        setIsLoading(true);

        api.search(searchQuery)
        .then(data => {
          setCards(data);
        }).catch(err => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
       
      }
    
     } 
    handleRequest(); /* только тут эта функция, тут и вызывается */
  }, [searchQuery]); /* когда поставила запрос срабатывает. эффект отслеживает изменение запроса. я его в функции поменяла, поэтому и эффект поменялся */
  


 /*
 const handleInputChange = (e) => {
   setSearchQuery(e.target.value);
 };
*/
 const onSubmit = (value) => {
   setSearchQuery(value);
   //e.preventDefault();
   //handleRequest(); больше не будет это вызывать
   //console.log('sfsdfsdf');
 }

  return (    
    <CardContext.Provider value={cards}>
    <Switch>
    <Route path="/search-pics-unspl" exact><Main onSubmit={onSubmit} isLoading={isLoading} cards={cards}
    initialValue={searchQuery}/></Route>
    <Route path="/search-pics-unspl/photos/:id"><Photo photos={cards} /></Route>
    <Route path="/search-pics-unspl/*">404 not found</Route>       
    </Switch>
    </CardContext.Provider>
);
}

export default App;
