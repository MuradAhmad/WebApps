import BookAPI from "./BookAPI";
import { BookInterface } from "../Modals/BookInterface";

const getPostList = async () => {
    const response = await BookAPI.get<BookInterface[]>('/books')
    console.log(`API:Data`,response.data)
    return response.data
}

const deletePost = async (bookId: number) => {
   const {data} = await BookAPI.delete<BookInterface[]>(`/books/${bookId}`)
   return data
  }
  

export {getPostList, deletePost}