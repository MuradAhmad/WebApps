import React, { FC, useState, useEffect }  from 'react'
import { deletePost, getPostList } from '../API/PostsAPI';
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import { BookInterface } from '../Modals/BookInterface';


const PostsList: FC = () => {
    
    const [books, setBooks] = useState<BookInterface[] | null>(null); 

    useEffect(() => {
        const fetchAllPosts = async () => {
        try {
            const booksList = await getPostList();
            setBooks(booksList)
            console.log(`Data TEsting:`, booksList)
        } catch (err) {
            if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else {
            console.log(`Error: ${err.message}`)
        }}}

        fetchAllPosts();

    }, [])

    const onDelete = async (event: React.MouseEvent<HTMLButtonElement>, bookId: number) => {
        event.stopPropagation();
        const listAfterDelete = await deletePost(bookId)
        setBooks(listAfterDelete)
    }

    return (
        <>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell >#</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Author</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {books && books.map((book) => {
                    return (
                    <TableRow key={book.id}>
                        <TableCell>
                            {book.id}
                        </TableCell>
                        <TableCell>
                            {book.title}
                        </TableCell>
                        <TableCell>
                            {book.author}
                        </TableCell>
                        <TableCell>
                            {book.description}
                        </TableCell>
                        <TableCell>
                            <IconButton onClick={(event) => onDelete(event, book.id)} aria-label='delete' disabled color='primary'>
                                <Delete/> 
                            </IconButton> 
                        </TableCell>
                    </TableRow>
                )} )}
            </TableBody>
        </Table>
        </>
    );
    
}

export default PostsList;