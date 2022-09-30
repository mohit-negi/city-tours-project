import React, { Component } from "react"
import "./Tour.scss"

export default class Tour extends Component
{
    state = {
        showinfo:false
    };
    handleInfo = () =>{
        this.setState({
            showinfo:!this.state.showinfo
        });
    };
    render(props)
    {
        const {id,place,img,name,info} = this.props.tour;
        const {removetour} = this.props;
        return(
                <article className="tour">
                <div className="image-container">
                    <img 
                    width="200px"
                    height="200px"
                    src={img}
                    />
                    <span className="close-btn" onClick={()=>{removetour(id)}}>
                    <i className="fa-solid fa-rectangle-xmark"></i>
                    </span>
                </div>
                <div className="image-info">
                    <h3>{place}</h3>
                    <h4>{name}</h4>
                    <h5>info{" "}
                        <span onClick={this.handleInfo}>
                        <i className="fa-solid fa-circle-chevron-down"></i>
                        </span>
                    </h5>
                    {this.state.showinfo && <p>{info}</p>}
                </div>
            </article>
        )
    }
}