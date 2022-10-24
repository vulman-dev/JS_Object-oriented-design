import yup from 'yup';

const genres = [
    'drama', 'horror', 'fantasy', 'classic',
];

// BEGIN (write your solution here)
const getInvalidBooks = (books) => {
    const validBookScheme = yup.object().shape({
        name: yup.string().required(),
        author: yup.string().required(),
        pagesCount: yup.number().positive().notRequired(),
        link: yup.string().url().min(1).notRequired(),
        genre: yup.string().oneOf(genres),
    });
    const invalidBooks = books.filter((book) => !validBookScheme.isValidSync(book));
    return invalidBooks;
};

export default getInvalidBooks;
// END


// TEACHER SOLUTION
const getInvalidBooks1 = (books) => {
    const schema = yup.object().shape({
        name: yup.string().required(),
        author: yup.string().required(),
        pagesCount: yup.number().positive(),
        link: yup.string().min(1).url(),
        genre: yup.string().oneOf(genres),
    });

    return books.filter((book) => !schema.isValidSync(book));
}
// END TEACHER SOLUTION

