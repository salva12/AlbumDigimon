import React from 'react';
//importar los componentes
import Footer from '../components/Footer'
import Header from '../components/Header'
import Album from '../components/Album'
import Introduccion from '../components/Introduccion'


class Home extends React.Component{
    state= {
        loading: true,
        error: null,
        data:{
            personajes:[{}],
        }
        
    };
    
    componentDidMount(){
        this.getPersonajes();
    }
    getPersonajes = async() => {
        this.setState({loading:true,error:null});
        try{
            const response = await fetch('https://digimon-api.vercel.app/api/digimon');
            const data = await response.json();
            const datarecortada = data.slice(0,12);
            console.log(datarecortada); 
            this.setState({
                loading : false,
                data: {
                    personajes: datarecortada,
                },
            })
        }catch(error){
            console.log("Error en la pagina");
            this.setState({loading:false, error:error})
        }
    }
    

    render() {
        return (
            <React.Fragment>
            <Header />
                <Introduccion titulo="Recordando Digimon" descripcion="Algunos de los personajes mas queridos e importantes de esta serie y juego mundialmente conocido."/>
                <div class="album py-5 bg-light">
                        <div class="container">                              
                                <Album personajes={this.state.data.personajes}/>
                                {this.state.loading && <h6 className="text-center">Cargando...</h6>}                          
                            
                        </div>
                </div>
            <Footer />
        </React.Fragment> 
        );
      }
    
}
export default Home;