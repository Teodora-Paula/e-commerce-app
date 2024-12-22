import React from 'react';
import Layout from '../components/Layout/Layout';
// import products from '../utils/products.json';
import { apiService } from '../services/apiService';
import HomeCategory from '../components/HomeCategory';

class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            categories: [],
            products: []
        }
    }
    // getProducts = ()=>{
    //     apiService.getProducts()
    //     .then(this.setState())
    //    }
   async componentDidMount() {
        // const categories = Object.keys(products);
        let platforms = await apiService.getPlaftorms();
        this.setState({categories:platforms})
        let products = await apiService.getProducts();
        this.setState({products:products})

        // .then((platforms)=>this.setState({categories:{platforms}}))

        // apiService.getProducts()
        // .then((products)=>
        //     this.setState({products:{products}}))

        // this.setState({categories});
    }

    render() {
        return(
            <Layout>
                <div className="container-fluid container-min-max-width">
                    <div className="row">
                        {this.state.categories.map((category, index) =>
                            <HomeCategory
                                key={index}
                                route={category.name}
                                name={category.name}
                                description={category.description}
                                image={category.image}
                            />
                        )}
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Home;