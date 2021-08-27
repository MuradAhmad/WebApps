import React, { FC, useState }  from 'react'
import Hero from '../components/Header/Hero'
import AddToList from '../components/List/AddToList'
import PostsList from '../components/List/PostsList'
import {BookModal as IState} from '../components/Modals/Book'


const Home: FC = () => {
    
    const [book, setBook] = useState<IState["books"]>([
      {
          author: "",
          title: "",
          description: "",
      }
    ])

    return ( 
        <div className="App">
            <Hero />
            <PostsList />
            <AddToList book = {book} setBook = {setBook}/>
        </div>
    );
        
}

export default Home;