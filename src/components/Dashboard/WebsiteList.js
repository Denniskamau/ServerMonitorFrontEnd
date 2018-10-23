import React from 'react';

class WebsiteList extends React.Component {

    

    render () {
        const {site } = this.props
        return(
            <div>
                <ol>
                <h1>Website list</h1>
                {   site.sites.map((data)=>{
                    
                    return <div>
                        <h5>Name</h5>
                            <p> {data.Name}</p>
                        <h5>Url</h5>
                            <p> {data.URL}</p>
                        <h5>Status</h5>
                            <p> {data.Status}</p>
                        <hr></hr>
                    </div>
                })}   
                </ol>
 
            </div>
           
        )             
        
    }
}





export default WebsiteList