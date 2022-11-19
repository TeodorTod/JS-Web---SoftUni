import BookList from "./BookList";

export default function Book(props) {
    return (
        <>
            <h1>Author: {props.author}</h1>
            <h2>Price: {props.price}</h2>
        </>
    );
};
