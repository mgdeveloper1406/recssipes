import './styles.scss'
import image1 from '/imgs/image-tr1.png'
import image2 from '/imgs/image-tr2.png'
import image3 from '/imgs/image-tr3.png'


const tastyrecipeslist = [
    {image:{image1},
    title:'Chicken Meatballs with Cream chesse',
    autor:'By Andreas Paula'
    },
    {
    image:{image2},
    title:'Traditional Bolognaise Ragu',
    autor:'By Andreas Paula'
    },
    {
    image:{image3},
    title:'Pork and Chive Chinese Dumplings',
    autor:'By Andreas Paula'
    }
];

const TastyRecipes = () => {
return(
    <div>
        <section className='tasty-recipes-item'>
            {
            tastyrecipeslist.map(tastyrecipeslist => (
                <div className="itens-list">
                {tastyrecipeslist.image}
                {tastyrecipeslist.title}
                {tastyrecipeslist.autor}
                </div> 
            ))
            }
            
        </section>

    </div>
)
}

export default TastyRecipes;
