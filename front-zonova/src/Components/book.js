import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter } from "mdbreact";
import { connect } from 'react-redux';
import { getBooks } from '../actions/bookActions.js';
import { FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';


class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
        book: []
    };  
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSortByName = this.handleChangeSortByName.bind(this);
    this.handleChangeSortByAuthor = this.handleChangeSortByAuthor.bind(this);
}

componentDidMount() {
  this.props.getBooks();
}

handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleChangeSortByName(e){
  e.preventDefault()
  const { books } = this.props.book;
  this.setState({
    livre: books.sort( (a, b) => {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    })
  })
  console.log(books);
}

handleChangeSortByAuthor(e){
  e.preventDefault()
  const { books } = this.props.book;
  this.setState({
    livre: books.sort( (a, b) => {
      var x = a.author.name.toLowerCase();
      var y = b.author.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    })
  })
}

render() {
  const { books } = this.props.book;

    return (
      <div>
         <MDBRow>
         <MDBCol md="1" className=""></MDBCol>
         <MDBCol md="3  " className="">
          <FormGroup>
              <Label for="exampleSelect">Select genre</Label>
              <Input type="select" name="select" onChange={this.handleChange} id="Select">
                <option value="all">All</option>
                <option value="Action">Action</option>
                <option value="Historical">Historical</option>
                <option value="Horror">Horror</option>
                <option value="Halloween">​Halloween Day and Horror</option>
                <option value="Finance">Finance ​and​ ​last​ ​Friday​ of​ ​any​ month</option>
                <option value="Romance">Romance</option>
                <option value="Comedy">Comedy</option>
              </Input>
            </FormGroup>
         </MDBCol>
         <MDBCol md="3" className="">
            <FormGroup>
              <Label for="exampleSelect">Select Author​ Gender</Label>
              <Input type="select" name="select" onChange={this.handleChange} id="Select2">
                <option value="all">All</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
              </Input>
            </FormGroup>
          </MDBCol>
          <MDBCol md="3" className="">
          <FormGroup>
            <Label for="exampleSelect">Sort by</Label>
            <Input type="select" name="select" onChange={this.handleChange} id="Select3">
              <option onClick={this.handleChangeSortByName}> -- </option>
              <option onClick={this.handleChangeSortByAuthor}>Author Name</option>
              <option onClick={this.handleChangeSortByName}>Name</option>
            </Input>
          </FormGroup>
          </MDBCol>
          <MDBCol md="1" className=""></MDBCol>
        </MDBRow>
        <MDBRow>
        <div className="">
         
        </div>
          {books.length>0 ?(books.filter(bok => {
      if(document.getElementById('Select').options[document.getElementById('Select').selectedIndex].value=="all" 
      && document.getElementById('Select2').options[document.getElementById('Select2').selectedIndex].value=="all"){ 
        return bok 

      }else if(document.getElementById('Select').options[document.getElementById('Select').selectedIndex].value !=="all"
      && document.getElementById('Select2').options[document.getElementById('Select2').selectedIndex].value=="all" &&
      document.getElementById('Select').options[document.getElementById('Select').selectedIndex].value !== "Halloween" &&
      document.getElementById('Select').options[document.getElementById('Select').selectedIndex].value !== "Finance" ){
        return bok.genre===document.getElementById('Select').options[document.getElementById('Select').selectedIndex].value 

      }else if(document.getElementById('Select2').options[document.getElementById('Select2').selectedIndex].value!=="all" 
      && document.getElementById('Select').options[document.getElementById('Select').selectedIndex].value=="all"){
        return bok.author.gender===document.getElementById('Select2').options[document.getElementById('Select2').selectedIndex].value 

      }else if(document.getElementById('Select').options[document.getElementById('Select').selectedIndex].value == "Halloween" 
      && document.getElementById('Select2').options[document.getElementById('Select2').selectedIndex].value=="all") {
        return bok.date.split("/")[1] == 10 && bok.date.split("/")[2] == 31 || bok.genre == "Horror"

      }else if(document.getElementById('Select').options[document.getElementById('Select').selectedIndex].value == "Halloween" 
      && document.getElementById('Select2').options[document.getElementById('Select2').selectedIndex].value=="all") {
        return bok.date.split("/")[1] == 10 && bok.date.split("/")[2] == 31 || bok.genre == "Horror"

      }else if(document.getElementById('Select').options[document.getElementById('Select').selectedIndex].value == "Finance" ){
        return new Date(bok.date).getDay() == 5 && new Date(new Date(bok.date).getFullYear(), new Date(bok.date).getMonth() + 1, 0).getDate() -7 < new Date(bok.date).getDate() || bok.genre == "Finance"

      }else{
        return bok.genre===document.getElementById('Select').options[document.getElementById('Select').selectedIndex].value 

        && bok.author.gender===document.getElementById('Select2').options[document.getElementById('Select2').selectedIndex].value;
      }}).map(list => {
      return( 

   <MDBCol lg="3" md="4" className="mb-lg-0">
        <MDBCard wide ecommerce id="border">
            <MDBCardBody cascade  placement="top"
                    tag="a"
                    component="i"
                    componentClass="fa fa-eye grey-text ml-3"
                    tooltipContent="Quick look"
                    className="text-center">
              <MDBCardTitle>
                <strong id="color">
                    <h2 id="tex">{list.titre}</h2>
                </strong>
                    <h2>Name: { list.name }</h2>
                    <p>Genre: { list.genre }</p>
                    <p>Publish​ ​date: {list.date}</p>
              </MDBCardTitle>
              <MDBCardText>
                <h6>{list.description}</h6>
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                    <p>Author: {list.author.name}</p>
                    <p>({list.author.gender})</p>
                </span>
                <span className="float-right">
                  
                </span>
              <div className="">

              </div>
              </MDBCardFooter>
                
            </MDBCardBody>
          </MDBCard>
                 
      </MDBCol>
      )})):""} 
    </MDBRow>
      </div>  
        )
    }
}

Book.propTypes = {
  getBooks: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  book: state.book
});

export default connect(
  mapStateToProps,
  { getBooks }
)(Book);