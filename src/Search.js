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
   

    render () {
        
        return (
            <div id="search" value={this.state.search} onChange={this.handleSearch}>
                <input type="search" placeholder="Search" />

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