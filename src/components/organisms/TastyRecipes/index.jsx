import './styles.scss'
import image1 from '/imgs/image-tr1.png'
import image2 from '/imgs/image-tr2.png'
import image3 from '/imgs/image-tr3.png'

const tastyrecipeslist = [
    {
    id:'1',
    src:image1,
    title:'Chicken Meatballs with Cream Cheese',
    autor:'By Andreas Paula'
    },
    {
    id:'2',
    src:image2,
    title:'Traditional Bolognaise Ragu',
    autor:'By Andreas Paula'
    },
    {
    id:'3',    
    src:image3,
    title:'Pork and Chive Chinese Dumplings',
    autor:'By Andreas Paula'
    }
];

const TastyRecipes = () => {
    
return(
        <section className='TastyRecipes_container'>
            <h1 className='TastyRecipes_title_section'>
                    Tasty Recipes
            </h1>
            <ul className='TastyRecipes_list'>
                {tastyrecipeslist.map((tastyrecipe) => {
                return(
                <li key={tastyrecipe.id} className='TastyRecipes_list-item'>
                <img src={tastyrecipe.src} alt={tastyrecipe.title} className="TastyRecipes_image" />
                <div className='TastyRecipes_title_autor_container'>
                <h3 className='TastyRecipes_title'>
                {tastyrecipe.title}
                </h3>
                <p className='TastyRecipes_autor'>
                {tastyrecipe.autor}
                </p>
                </div>
                </li>
               
                )
                
                })}
           </ul>     
        </section>        
 
        
            
            
        

    
)
}

export default TastyRecipes;
