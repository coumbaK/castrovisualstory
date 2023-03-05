import React from "react";

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {search: "", results:[], active : {} };
    }
    handleSearch = (e) => {
        const results = this.props.stores.filter(store => 
           {
            if (e.target.value==="" ){
                return this.props.stores

            }
            return store.properties.business.toLowerCase().includes(e.target.value.toLowerCase())

           }) 
            
            
        this.setState({search: e.target.value})
        this.setState({results: results})
    }
    selectStore = (e) => {
        const name = e.target.innerText;
        console.log(name)
        this.e.parentElement.input.value = name;
        console.log(this.e.parentElement.input.value)
        this.props.updateActive();

        
        
    }

   

    render () {
        
        return (
            <div id="search"  onChange={this.handleSearch} value={this.state.search}>
                <input type="search" placeholder= "search" value="" />


                <ul> {this.state.search==="" ? <div> This map depicts businesses currently open in the Castro. Move around the map or type in the search bar to discover which are queer-owned, black-owned, and women-owned. </div> :
                    this.state.results.map(store => (

                        <li key={store.properties.key} onClick= {this.props.updateActive}> 
                            {store.properties.business}
                        </li> 
                    ))}
                

                </ul>
            </div>
                        

        )};

}
export default Search;