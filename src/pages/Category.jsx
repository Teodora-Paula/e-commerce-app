import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
// import products from '../utils/products.json';
import ProductList from '../components/ProductList';
import { apiService } from '../services/apiService';
import { useParams } from "react-router-dom";
function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {},
            items: []
        }
    }

    async componentDidMount() {
        const categoryName = this.props.params.categoryName;

        let categories = await apiService.getPlaftorms()
        let category = categories.filter(c=>c.name == categoryName)[0]
        let items = await apiService.getProductsByPlatform(category.id);
        this.setState({
            category: category,
            items: items
        });
    }

    render() {
        return (
            <Layout>
                <div className="container-fluid container-min-max-width">
                    <h2>{ this.state.category.name }</h2>
                    {this.state.items &&
                    <ProductList products={this.state.items} /> }
                    
                </div>
            </Layout>
        );
    }
}

export default withParams(Category);