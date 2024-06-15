import Card from '../card/card'
import './gallery.modules.css'

const Gallery = (props) => {

    return (
        <section className='cards'>
            {
                props.animals.map((animal) => {
                    return <Card key={animal.id} image={animal.url} alt={animal.id} description={props.description}/>
                })
            }
        </section>
    )
}

export default Gallery
