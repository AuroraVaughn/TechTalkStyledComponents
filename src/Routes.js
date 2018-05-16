import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import FruitView from "./FruitView";
import StyledWithObjects from "./StyledWithObjects";

const melons = [
  "https://media.istockphoto.com/photos/slices-of-fresh-juicy-watermelon-on-a-paper-closeup-picture-id485277300?k=6&m=485277300&s=612x612&w=0&h=PEw5kEAOdJwISdRBCtl80c3VeUGdtT3ZnWdgyxSDnB8=",
  "http://www.supercutekawaii.com/wp-content/uploads/636x460design_01-2-400x289.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMw5DvSF56SnWexqMVXLEsU7aqq8WdcsxXPDU7Vyx0uQbYzUkH",
  "https://m.popkey.co/2fd636/ZmaY8.gif",
  "https://www.cat-gifs.com/w3/CAT-GIF-Adorable-Persian-Kitten-eating-his-watermelon-on-the-dining-table-so-funny-Kitty.gif",
  "https://i.pinimg.com/564x/2f/96/ae/2f96ae1b4b83e2a8e3a05aab68aecc60.jpg",
  "https://i.stack.imgur.com/dltW4.jpg"
];

const lemons = [
  "https://thumbs.dreamstime.com/b/kawaii-fruit-icon-lemon-over-pink-background-colorful-design-illustration-89173980.jpg",
  "https://i.ytimg.com/vi/dNkB6vI5vwg/maxresdefault.jpg",
  "https://i.redd.it/ogary0moq8uz.jpg",
  "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/80/S6e28_Lemon_People_sowing_field.png/revision/latest?cb=20150214191539",
  "https://orig00.deviantart.net/99bf/f/2010/271/5/1/kawaii_lemons_by_destinywolf102-d2zp67m.png",
  "http://images.neopets.com/pets/happy/chia_lemon_baby.gif"
];

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={StyledWithObjects} />
        <Route path="/melons" component={() => <FruitView images={melons} />} />
        <Route path="/lemons" component={() => <FruitView images={lemons} />} />
      </Switch>
    );
  }
}
export default withRouter(Routes);
