import React, { Component } from 'react'
import './dictionary.scss'

export default class dictionary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      editDictionaryItem: false,
      keyItemVal: '',
      valItemVal: ''
    }
  }

  saveDataDictionary() {
    let keyData = document.getElementsByName('key')[0].value;
    let valueData = document.getElementsByName('value')[0].value;
    let productdataTable = [];
    if (keyData === "" || valueData === "") {
      alert("Two fields must be filled");
      return false;
    } else if ((JSON.parse(localStorage.getItem('myDictionary')) && JSON.parse(localStorage.getItem('myDictionary').indexOf(keyData)) > -1) || (JSON.parse(localStorage.getItem('myDictionary')) && JSON.parse(localStorage.getItem('myDictionary').indexOf(valueData)) > -1)) {
      alert("Values should be unique");
    } else if (keyData === valueData) {
      alert("Key and values should be unique");
    } else {
      productdataTable.push({ [keyData]: valueData });
      this.setState(prev => ({ data: [...prev.data, ...productdataTable] }))
      document.getElementById('reset').click()
    }
  }

  componentDidMount() {
    if (localStorage.getItem('myDictionary')) {
      this.setState({ data: JSON.parse(localStorage.getItem('myDictionary')) })
    }
  }

  deleteDictionaryItems() {
    document.querySelectorAll(".delete-item").forEach((item, index, leng) => {
      let itemIndex = leng.length - index - 1;
      item.setAttribute('key', itemIndex)
      item.addEventListener("click", function (e) {
        let currentItem = e.target.closest('div');
        currentItem.remove();
        let modifiedDictionary = JSON.parse(localStorage.getItem('myDictionary'))
        delete modifiedDictionary[e.target.getAttribute('key')];
        modifiedDictionary = modifiedDictionary.filter(function () { return true });
        localStorage.setItem("myDictionary", JSON.stringify(modifiedDictionary))
      })
    })
  }

  handleChange(event) {
    this.setState({ keyItemVal: event.target.value, valItemVal: event.target.value, });
  }

  editDictionaryItems() {
    let editDictionaryItem = !this.state.editDictionaryItem
    this.setState({
      editDictionaryItem: editDictionaryItem
    }, () =>
      document.querySelectorAll(".edit-item").forEach((item, index, leng) => {
        let itemIndex = leng.length - index - 1;
        item.setAttribute('key', itemIndex)
        item.addEventListener("click", function (e) {
          let currentItem = e.target.previousSibling.childNodes;
          currentItem.forEach(item => { item.removeAttribute('readonly') })
          console.log(currentItem, 'currentItem');
          if (e.target.innerText === 'Edit') {
            e.target.innerText = 'Done'
          } else {
            e.target.innerText = 'Edit'
          }
          // currentItem.innerHTML('<input type="text" value="hi"/>')
          // currentItem.remove();
          // let modifiedDictionary = JSON.parse(localStorage.getItem('myDictionary'))
          // delete modifiedDictionary[e.target.getAttribute('key')];
          // modifiedDictionary = modifiedDictionary.filter(function () { return true });
          // localStorage.setItem("myDictionary", JSON.stringify(modifiedDictionary))
        })
      })
    )
  }

  render() {
    let finalData = this.state.data && this.state.data ? this.state.data : [];
    let getDictionaryItems = JSON.stringify(finalData);

    if (finalData != '') {
      localStorage.setItem('myDictionary', JSON.stringify(finalData));
    }
    if (localStorage.getItem('myDictionary')) {
      getDictionaryItems = localStorage.getItem('myDictionary') ? localStorage.getItem('myDictionary') : ''
    }
    let dictionaryItems = getDictionaryItems && getDictionaryItems !== undefined ? JSON.parse(getDictionaryItems) : '';
    // let allowEditing = this.state.editDictionaryItem
    return (
      <div className="dictionary-wrapper">
        Welcome to Dictionary Management system
        <form className="dictionary-box">
          <input type="text" name="key" placeholder="Domain" />
          <input type="text" name="value" placeholder="Range" />
          <span onClick={() => this.saveDataDictionary()} className="submit">Submit</span>
          <button type="reset" id="reset">Reset</button>
        </form>
        <div className="dictionary-container">
          <div className="productdata">
            {dictionaryItems.reverse().map((data, index) => {
              this.state.keyItemVal = Object.keys(data);
              this.state.valItemVal = Object.values(data);
              return (
                <div key={index}>
                  <p>
                    <input readOnly type="text" value={this.state.keyItemVal} onChange={this.handleChange} />
                    <input readOnly type="text" value={this.state.valItemVal} onChange={this.handleChange} />
                  </p>
                  <span className="edit-item" onClick={() => this.editDictionaryItems()}>Edit</span>
                  <span className="delete-item" onClick={() => this.deleteDictionaryItems()}>Delete</span>
                </div>
              )
            })}
          </div>
          <div className="help-note"></div>
        </div>
      </div >
    )
  }
}