import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from "../Pages/HomePage";
import AddAddressPage from "../Pages/AddAddressPage";
import CartPage from "../Pages/CartPage";
import EditProfilePage from "../Pages/EditProfilePage";
import EditAdressPage from "../Pages/EditAdressPage"
import LoginPage from "../Pages/LoginPage";
import ProfilePage from "../Pages/ProfilePage";
import RestaurantPage from "../Pages/RestaurantPage";
import SignUpPage from "../Pages/SignUpPage";
import ErrorPage from "../Pages/ErrorPage";



export default function Routes() {
    return (
        <BrowserRouter>
			<Switch>
                <Route exact path="/feed">
                    <HomePage/>
                </Route>
                <Route exact path="/profile/add-address">
                    <AddAddressPage/>
                </Route>

                <Route exact path="/cart">
                    <CartPage/>
                </Route>

                <Route exact path="/profile/edit">
                    <EditProfilePage/>
                </Route>

                <Route exact path="/profile/edit/address">
                    <EditAdressPage/>
                </Route>

                <Route exact path="/">
                    <LoginPage/>
                </Route>

                <Route exact path="/profile">
                    <ProfilePage/>
                </Route>

                <Route exact path="/restaurants">
                    <RestaurantPage/>
                </Route>

                <Route exact path="/sign-up">
                    <SignUpPage/>
                </Route>

                <Route>
                    <ErrorPage/> 
                </Route>

			</Switch>
	    </BrowserRouter>
    )
}
