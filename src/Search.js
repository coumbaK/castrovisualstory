import React from "react";

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {search: "", results:[] };
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
        this.setState({search: name})
        this.props.updateActive(e);
       
     

        
        
    }

   

    render () {
        
        return (
            <div id="search">
                <input type="search" onChange={this.handleSearch} placeholder= "search" value={this.state.search} />


                <ul> {this.state.search==="" ? this.props.stores.map(store => ( <li key={store.properties.key} onClick= {this.selectStore} value={store.properties.name}> 
                            {store.properties.business}
                        </li> )) :
                    this.state.results.map(store => (

                        <li key={store.properties.key} onClick= {this.selectStore} value={store.properties.name}> 
                            {store.properties.business}
                        </li> 
                    ))}
                

                </ul>
            </div>
                        

        )};

}
export default Search;