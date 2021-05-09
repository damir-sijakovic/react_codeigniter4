import React from 'react';

class UserProfiles extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
        };

    this.getDataFromServer = this.getDataFromServer.bind(this);
    }

    componentDidMount() {
        console.log('Loaded');
    }

    getDataFromServer(){
        

        fetch('/api.php/example')
        .then(response => {
            if(response.ok) return response.json();
            throw new Error('Request failed.');
        })
        .then(data => {
            this.setState({
                name: data.success,
            });
        })
        .catch(error => {
            console.log(error);
        });
        
    }

    render() {
        return (
            <div className="w3-container">
            <h1>{`${this.state.name}`}</h1>
            <br/>
            <div  className="w3-button w3-deep-purple" onClick={this.getDataFromServer}> Get data from '/api.php/example' </div>
            </div>
        );
    }
}

export default UserProfiles;


