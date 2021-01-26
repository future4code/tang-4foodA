export const goToHomePage = (history) => {
    history.push('/feed')
}

export const goToAddAddressPage = (history) => {
    history.push('/profile/add-address')
}

export const goToCartPage = (history) => {
    history.push('/cart')
}

export const goToEditPage = (history) => {
    history.push('/profile/edit')
}

export const goToLoginPage = (history) => {
    history.push('/')
}

export const goToProfilePage = (history) => {
    history.push('/profile')
}

export const goToRestaurantsPage = (history, id) => {
    history.push(`/restaurants/${id}`)
}

export const goToSignUpPage = (history) => {
    history.push('/sign-up')
}

export const goToSearchPage = (history) => {
    history.push('/search')
}

export const goBack = (history) => {
    history.goBack()
}

