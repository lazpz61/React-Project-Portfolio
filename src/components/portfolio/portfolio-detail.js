import React, { Component } from 'react'
import axios from 'axios';


banner_image_url: null
category: "Fitness"
column_names_merged_with_images: (9) ["id", "name", "description", "url", "category", "position", "thumb_image", "banner_image", "logo"]
description: "Generates Workouts "
id: 26480
logo_url: null
name: "Laz's Workout Generator"
position: 1
thumb_image_url: "https://devcamp-space.s3.amazonaws.com/LFVzmEwPN4n7HzRQBmTdcoAr?response-content-disposition=inline%3B%20filename%3D%22logo.png%22%3B%20filename%2A%3DUTF-8%27%27logo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20210517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210517T202905Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=91dd5e947148f3fbe2c9192ad8a0d181eea78722b615bb97ccf4fb9ddc9a4031"
url: "https://laz-workout-generator.herokuapp.com"

export default class PortfolioDetail extends Component {
    constructor(props) {
       super(props);

       this.state = {
         portfolioItem: {}
       }
   }

   componentWillMount(){
     this.getPortfolioItem();
   }

   getPortfolioItem() {
    axios.get(`https://lazaroperez.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, {
        withCredentials: true}
    )
    .then(response => {
      this.setState({
        portfolioItem: response.data.portfolio_item
      })
    })
    .catch(error => {
      console.log("getportfolioitem error", error);
    });
  }

   render() {
     const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url

     } = this.state.portfolioItem;

     const bannerStyles = {
       backgroundImage: "url(" + thumb_image_url + ")",
       backgroundSize: "cover",
       backgroundRepeat: "no-repeat",
       backgroundPosition: "center center"
     }

     const logoStyles = {
       width: "200px"
     }

       return (
        <div className="portfolio-detail-wrapper">
            <div className="banner" style={bannerStyles}>
                <img  src={logo_url} style={logoStyles} />
            </div>

            <div className="portfolio-detail-description-wrapper">
              <div className="description">{description}</div>
            </div>

            <div className="bottom-content-wrapper">
              <a href={url} className="site-link" target="_blank">
                Visit {name}
              </a>
            </div>
        </div>
       )
   }
}