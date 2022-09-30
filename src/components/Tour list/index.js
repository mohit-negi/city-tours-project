import React,{Component} from "react";
import Tour from "../Tour/Tour"
import './tourlist.scss'
import {tourdata} from "../tourdata"
export default class Tourlist extends Component {
    state = {
        tours:tourdata
    }
    removetour = (id) => {
        const {tours} = this.state;
        const sortTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortTours
        });
    }
    render(){
        const {tours} = this.state;
        return(
            <section className="tourlist">
                {tours.map(tour => {
                    return <Tour key={tour.id} tour={tour} removetour = {this.removetour}/>;
                })}
            </section>
        )
    }
}