import React, { Component } from "react";
import Modal from 'react-modal';
import axios from "../../api/axios";
import './routine.css';

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      border                : '1px solid black'
    }
  };
   
  Modal.setAppElement('#root')
   
  class routine extends Component {
    constructor() {
      super();
   
      this.state = {
        modalIsOpen: false
      };
   
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
   
    openModal() {
      this.setState({modalIsOpen: true});
    }
   
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#f00';
    }
   
    closeModal() {
      this.setState({modalIsOpen: false});
    }

    onClick = (event) => {
      event.preventDefault();
      var description = this.refs.description.value;
      var bodyChoice = this.refs.bodyChoice.value;
      var weight = this.refs.weight.value;
      var sets = this.refs.sets.value;
      var reps = this.refs.reps.value;
      console.log(this.refs.bodyChoice.value);
      axios.post("/newExercise", {
        description: description,
        bodyGroup: bodyChoice,
        weight: weight,
        sets: sets,
        reps: reps
      }).then(function(res) {
        alert("Today, you weigh in at " + description + " lbs.");
        window.location.href="/";
      })
      .catch(function (error) {
        console.log(error);
      });
    };
   
    render() {
      return (
        <div>
          <button id="new" className="btn btn-outline-dark" onClick={this.openModal}>ADD NEW EXERCISE</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
   
            <h2 ref={subtitle => this.subtitle = subtitle}>Something New, eh?</h2>
            <form>
            <h8 className="labels">Exercise Description:</h8>
              <input type="text" ref="description" id="newExercise"/><br/>       
              <h8 className="labels">Weight:</h8>
              <input type="number" ref="weight" id="weight"/><br/>
              <h8 className="labelsTwo">Sets:</h8>
              <select className="custom-select sets" ref="sets" id="sets" name="bodyChoice">
                <option value="3">3</option>
                <option value="5">1</option>
              </select>
              <h8 className="labelsTwo">Reps:</h8><input type="text" ref="reps" className="reps" id="reps"/><br/><br/>
              <input type="hidden" ref="bodyChoice" value={this.props.part} />
                  <button className="btn btn-outline-dark" onClick={this.onClick.bind(this)}>SUBMIT</button>
              {/* <button className="btn btn-outline-dark" onClick={this.closeModal}>CANCEL</button> */}
            </form>
          </Modal>
        </div>
      );
    }
  }

export default routine;
