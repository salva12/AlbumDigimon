import React from 'react';
//importar los componentes
import Footer from '../components/Footer'
import Header from '../components/Header'
import Album from '../components/Album'
import Introduccion from '../components/Introduccion'
import Pagination from '../components/Pagination';
import LoadingPage from '../components/LoadingPage';

class Home extends React.Component{
    state= {
        loading: false,
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
                data: {
                    personajes: datarecortada,
                }
            });

            setTimeout(() => {
                this.setState({
                    loading: false
                });
              }, "300");


        }catch(error){
            console.log("Error en la pagina");
            this.setState({loading:false, error:error})
        }

    }
    

    render() {
        return (
            <React.Fragment>
            <Header />
                <Introduccion titulo="Digimon memories" descripcion="Some of the most iconic characters from this globally recognized series and game."/>
                
                
                <div class="album py-0 bg-light">
                        <div class="container">          
                        {this.state.loading ?                     
                                <LoadingPage />    
                                :
                                <Album personajes={this.state.data.personajes}/>
                        }
                        </div>
                        
                </div>
                
                
                {/* <LoadingPage /> */}
                <Pagination currentPage={this.state.currentPage} totalPages={this.state.totalPages} onPageChange={this.handlePageChange} />

            <Footer />
        </React.Fragment> 
        );
      }
    
}
export default Home;