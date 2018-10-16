import React from 'react';
import store from '../../store'
import { connect } from 'react-redux'
import {showSavedWebsite} from '../../actions/websiteAction'
class WebsiteList extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = { 
           website: [ { name:'test',url:'www.test.com',status:'online'} ,
           {  name:'test2',url:'www.test2.com',status:'offline'} ,
           {  name:'test3',url:'www.test3.com',status:'online'}]     
         }
    }

componentDidMount() {
    store.dispatch(showSavedWebsite())
    console.log('did mount called',this.props.website)
  //  this.setState({website:this.props.website})
   
    // var test = store.getState()
    // console.log('test',test)
}
    
componentDidUpdate() {
    // var test2 = store.getState()
    // console.log("state", test2)
    // console.log("state", this.props)
}

displayWebsite(){
    // console.log('state data', this.props.website.state)
    // console.log('type of', typeof this.props.website.state)
    // if(this.props.website.state){
    //     var websites = this.props.website.state 
    //     console.log('websites', websites.state)
    // }
    console.log('data',typeof this.props.website)
    console.log('data', this.props.website)
    //this.setState({website:this.props.website})
    console.log('state', this.state.website)
    Object.entries(this.props.website).forEach(element => {
        var data = element[1]
        console.log('name',data)
        console.log(typeof data)
    });
// for(let i=0; i<this.state.website.length; i++){
//     console.log('name',this.state.website[i])
// }
// this.state.website.forEach((element)=>{
//     console.log('names:', element.name)
//     return element.url
// })

}
    render () {

        return(
            <div>
            <p>Website list</p>
    <p>{this.displayWebsite()}</p>
    
            <div>
                {this.state.website.map((d,idx)=>{
                    return(<ol>
                        <h4>name</h4>
                        <li key={idx}>{d.name}</li>
                        <h4>url</h4>
                        <li key={idx}>{d.url}</li>
                        <h4>status</h4>
                        <li key={idx}>{d.status}</li>
                    </ol>)
                })}
            </div>
            </div>
           
        ) 

            
        
    }
}

const mapStateToProps = state => {
    return {
      website:state.website
    }
  }
const List = connect(
    mapStateToProps
)(WebsiteList)
export default List