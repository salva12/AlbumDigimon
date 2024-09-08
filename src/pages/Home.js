import React from 'react';
//importar los componentes
import Footer from '../components/Footer'
import Header from '../components/Header'
import Album from '../components/Album'
import Introduccion from '../components/Introduccion'
import Pagination from '../components/Pagination';


class Home extends React.Component{
    state= {
        loading: true,
        error: null,
        data:{
            personajes:[{}],
        },
        currentPage:1,
        totalPages:70
    };
    
    componentDidMount(){
        this.getPersonajes();
    }

  
    handlePageChange = (page) => {
        console.log('cambie de pagina')
        this.setState({currentPage : page})
      // Perform other actions like fetching data for the new page
        this.getPersonajes(page);
    };

    getPersonajes = async() => {
        this.setState({loading:true,error:null});

        try{
            const response = await fetch('https://digimon-api.vercel.app/api/digimon');
            const data = await response.json();
            const datarecortada = data.slice((this.state.currentPage-1)*3,((this.state.currentPage-1)*3)+3);
            console.log(datarecortada); 
            this.setState({
                loading : false,
                data: {
                    personajes: datarecortada,
                }
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
                <Introduccion titulo="Recordando Digimon" descripcion="Algunos de los personajes más icónicos de esta serie y juego mundialmente reconocido."/>
                <div class="album py-5 bg-light">
                        <div class="container">                              
                                <Album personajes={this.state.data.personajes}/>
                                {this.state.loading && <h6 className="text-center">Cargando...</h6>}                          
                            
                        </div>
                </div>
                <Pagination currentPage={this.state.currentPage} totalPages={this.state.totalPages} onPageChange={this.handlePageChange} />

            <Footer />
        </React.Fragment> 
        );
      }
    
}
export default Home;