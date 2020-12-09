import React, {Component} from "react";
import {BrowserRouter as Router,
				Route,
    		Switch,
    		useParams} from "react-router-dom";

import {Header} from "./Header";
import {Footer} from "./Footer";
import {Jumbotron} from "./Jumbotron";
import {Data} from "./Data"

import {BuyerView} from "./BuyerView";
import {SellerView} from "./SellerView";
import {ContentView} from "./ContentView";
import {ItemView} from "./ItemView";

class App extends Component {

  state = {
    itemCount:0,
    totalPrice:0,
    addedItems:[],
    checkout: false,
    buyerItems : Data.BuyerItemList.Chairs ,
    sellerItems : Data.SellerItemList.Chairs,
    displayAddItem: false,
    itemEdited : null,
    currentPath : "/"
  };

  setCurrentPath = (event, newpath) => {
    this.setState({
      currentPath : window.location.pathname
    })
  };

  /********************************************
  *
  * Functions in use for Buyer View
  *
  *********************************************/
  /** 
   * Toggle item for purchase
   */
   toggleItemAddition = index => {
      console.log("index: " + index)
      this.setState({
        items: this.state.buyerItems.map((item, itemIndex) => {
         if(itemIndex === index) {
          if (item.isAdded) {
            console.log("Removed " + index)
            this.setState({itemCount : this.state.itemCount - 1})
            this.setState({totalPrice : this.state.totalPrice - parseInt(item.price)})
            var filteredItems = this.state.addedItems.filter((elem) => elem.id !== item.id);
            this.setState({addedItems : filteredItems})
            
          } else {
            console.log("Added " + index)
            this.setState({itemCount : this.state.itemCount + 1})
            this.setState({totalPrice : this.state.totalPrice + parseInt(item.price)})
            this.state.addedItems.push(item)
          }
          item.isAdded= !item.isAdded
          return {
            ...item,
            isAdded: !item.isAdded
          }
         } 
         return item;

        }) 
      });
   }

  /**
   * Function to handle checkout process
   * @param event
   */
  onClickCheckout = (event) => {
    this.setState({
      checkout : true
    });
  };

  /**
   * Function to handle checkout process
   * @param event
   */
  toggleBuyButton = (event) => {
    this.setState({
      checkout : !this.state.checkout
    });
  };

	/**
   * Function to handle payment process
   * @param event
   */
  handlePayment = (event) => {
   
  };
  
  /**
   * Function to remove items from checkout list
   * @param event
   */
  removeCheckoutItem = index => {
    this.setState({
      items: this.state.addedItems.map((item, itemIndex) => {
        if(itemIndex === index) {
          this.setState({itemCount : this.state.itemCount - 1})
          this.setState({totalPrice : this.state.totalPrice - parseInt(item.price)})
          var filteredItems = this.state.addedItems.filter((elem) => elem.id !== item.id);
          this.setState({addedItems : filteredItems})
        }
        return item;
      }) 
    })
  };


  /********************************************
  *
  * Functions in use for Seller View
  *
  *********************************************/

	/**
   * Function to handle payment process
   * @param event
   */
  toggleAddItem = (event) => {
    console.log(window.location.pathname)
    this.setState({
    	displayAddItem : !this.state.displayAddItem,
    	itemEdited : null,
    	items: this.state.sellerItems.map((item, itemIndex) => {
      	if (item.editFlag === true) {
		    	item.editFlag = false
		    }
		    return item
      })
    })
  };

  handleAddItemChangeValue = (event) => {
  		this.setState({
  			value: event.target.value
  		})
  }

  toggleEditItem = (index) => {
  	console.log("Edit item with index " + index)

  	this.setState({
  		displayAddItem : true,
	  	items: this.state.sellerItems.map((item, itemIndex) => {
				if(index >= 0 && itemIndex === index) {
					this.setState({itemEdited : item.editFlag?null:item})
					item.editFlag = !item.editFlag
					return {
					  ...item,
					  editFlag: !item.editFlag
					}
				} else {
					item.editFlag = false
				}
				return item; 
			})
  	})
  };

  /**
   * Function to handle new/update item submit process
   * @param event
   */

	handleSubmitItem = (event) => {
   
  };

  /********************************************
  *
  * Functions in use for Item Details View
  *
  *********************************************/

  /**
  * Function to display ItemDetails
  */
	Item = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
  	var filtered = this.state.buyerItems.filter((elem) => elem.id === parseInt(id));
    if (filtered.length === 0) {
      console.log("Filtered " + filtered.length)
      filtered = this.state.sellerItems.filter((elem) => elem.id === parseInt(id));
      console.log("Filtered " + filtered.length)
    } else {
      console.log("Filtered not null : " + filtered.length)
    }
  	
    return (
      <ItemView
      	item={filtered[0]}
      	toggleBuy={this.state.checkout}
      	onClickBuy={this.toggleBuyButton}
      	onClickPay={this.handlePayment}
       />
    );
  }

  /**
   * Main method to render the page
   */
  render() {
   
    return <div >
      <Header />
      <Jumbotron/>
      <Router>
	      <Switch>
		      <Route exact path="/">
	          <BuyerView 
			     		state = {this.state}
			     		toggleItemAddition = {this.toggleItemAddition}
			     		onClickCheckout = {this.onClickCheckout}
			     		removeCheckoutItem = {this.removeCheckoutItem} 
			     		onClickPay = {this.handlePayment}
			     	/>
		      </Route>
		      <Route exact path="/seller">
	          <SellerView 
			     		state  = {this.state}
			     		addItem = {this.toggleAddItem}
			     		editItem = {this.toggleEditItem}
			     		onChangeItem = {this.handleAddItemChangeValue}
			     		submitItem = {this.handleSubmitItem}
			     		editable = "true" 
			     	/>
		      </Route>
		      <Route exact path="/content">
	          <ContentView 
			     		state  = {this.state}
			     	/>
		      </Route>
          <Route exact path="/profile">
            <ContentView 
              state  = {this.state}
            />
          </Route>
		      <Route path="/:id" children={<this.Item />}></Route>
	   	 	</Switch>
   	 	</Router>     	
      
      <hr/>

      <Footer/>

    </div>;
  }
}

export default App;
 
