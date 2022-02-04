import Card from '../Card/Card.js';
import Button from '../Button/Button.js';
import Input from '../Input/Input.js';
import Spinner from '../Spinner/Spinner.js';
import { useState, useContext } from "react";
import { CardContext } from '../../context/CardContext.js';

export const Main = ({
  onSubmit,
  isLoading,  
  initialValue
}) => {
  const [value, setValue] = useState(initialValue);
  const cards=useContext(CardContext);
  //console.log(cards);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  }


  return (
    <div className="app">
      <div className="app__content">
        <form onSubmit={handleFormSubmit} className="app__search">
          <Input placeholder="Search free high-resolution photos" onChange={handleInputChange} value={value}/>
          <Button text="Search" handleClick={() => console.log('Button worked')} />
        </form>
           {
             isLoading ? (
<Spinner />
             ) : (
              <div className="app__cards">
              {
                cards.map(item =>
                  <Card
                    key={item.id}
                    src={item.src}
                    title={item.title}
                    subtitle={item.subtitle}
                    alt={item.alt}
                    id={item.id}
                  />
                )
              }
              </div>
             )
          }
      </div>
      </div>
             );
        }

export default Main;