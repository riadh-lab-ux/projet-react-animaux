import { Gallery } from '..'

const Acceuil = (props) => {
    
    return (
        <main>
            {
                props.cats.length>0 &&
                <Gallery animals={props.cats} description={props.description}/>

            }
            {
                props.dogs.length>0 &&
                <Gallery animals={props.dogs} description={props.descri}/>

            }

        </main>

    )
}

export default Acceuil
