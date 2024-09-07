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
        totalPages:5 
    };
    
    componentDidMount(){
        this.getPersonajes(1);
    }

  
    handlePageChange = (page) => {
        console.log('cambie de pagina')
        this.setState({currentPage : page})
      // Perform other actions like fetching data for the new page
        this.getPersonajes(page);
    };

    getPersonajes = async(page) => {
        this.setState({loading:true,error:null});
        let inf=0;
        let sup=0;
        switch (page) {
            case 1:
                inf=0
                sup=9
                break;
            case 2:
                inf=10
                sup=19
                break;
            case 3:
                inf=20
                sup=29
                break;
            case 4:
                inf=30
                sup=39
                break;
            case 5:
                inf=40
                sup=49
                break;
            default:
                break;
        }
        try{
            const response = await fetch('https://digimon-api.vercel.app/api/digimon');
            const data = await response.json();
            const datarecortada = data.slice(inf,sup);
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