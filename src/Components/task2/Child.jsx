export default function Child({updateOne, updateTwo}){
    return(
        <>
            <h1>{updateOne()}</h1>
            <h1>{updateTwo()}</h1>
        </>
    );
}