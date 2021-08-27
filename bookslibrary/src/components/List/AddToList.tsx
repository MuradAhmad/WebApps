import React, { useState, FC} from 'react'
import {BookModal as Props} from '../Modals/Book'
import BookAPI from '../API/BookAPI';

interface IProps {
    book: Props["books"]
    setBook: React.Dispatch<React.SetStateAction<Props["books"]>>
}

const AddToList: FC<IProps> = ({ book, setBook}) => {

    const [input, setInput] = useState({
        id: "",
        title: "",
        author: "",
        description: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

     const handleClick = async () => {

        if(
            !input.id ||
            !input.title ||
            !input.author ||
            !input.description
        ) {
        return
        }

        setBook([
            ...book,
            {
                id: Number(input.id),
                title: input.title,
                author: input.author,
                description: input.description
            }
        ]);
        
        const response = await BookAPI.post("/books", {
            id: Number(input.id),
            title: input.title,
            author: input.author,
            description: input.description
          }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        setInput({
            id: "",
            title: "",
            author: "",
            description: ""
        })

    } 


    return (
        <div className="AddToList">
            <h2>Add to Library</h2>
            <input
            type="text"
            placeholder="Id"
            className="AddToList-input"
            value={input.id}
            onChange={handleChange}
            name="id"
            />
            <input
            type="text"
            placeholder="Title"
            className="AddToList-input"
            value={input.title}
            onChange={handleChange}
            name="title"
            />
            <input
            type="text"
            placeholder="Author"
            className="AddToList-input"
            value={input.author}
            onChange={handleChange}
            name="author"
            />
            <textarea
            placeholder="Description"
            className="AddToList-input"
            value={input.description}
            onChange={handleChange}
            name="description"
            />
            <button className="AddToList-btn" onClick={handleClick}>
                Save
            </button>
        
        </div>
    )
}

export default AddToList;
