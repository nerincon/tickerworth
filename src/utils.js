export function getCompanies () {
  try {
    return JSON.parse(window.sessionStorage.getItem('companies'))
  } catch (e) {
    console.error('Uh-oh! Companies in localStorage was not valid JSON')
    return null
  }
}

export function matchStateToTermWithHeaders (state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.symbol.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

export function CategorizedRequest (value, cb) {
  setTimeout(cb, 500, value
    ? getCompanies().filter(state => matchStateToTermWithHeaders(state, value))
    : getCompanies()
  )
}

export function setCompanies (companyListing) {
  console.log('listing: ' + companyListing)
  window.sessionStorage.setItem('companies', JSON.stringify(companyListing))
}
