import "./card.css"
import React from "react";
class Card extends React.Component {
    render() {
      return(
          <div className="card">
            <img src={this.props.img} />
            <div className="card-body">
              <h2>{this.props.title}</h2>
              <p>My name is Priya Kaushik 
                  and i am a Student of Jk Lakshmipat University
              </p>
              <h5>{this.props.author}</h5>
            </div>
          </div>
      )
    }
  }
export default Card;