import Book from "./Book";

export default function BookList(props) {
    return (
        <ul>
            <Book
                title="IT"
                author="Stephen King"
                price="20"
            />
            <Book
                title="The Hunger Games"
                author="Suzanne Collins"
                price="10"
            />
        </ul>
    );

};