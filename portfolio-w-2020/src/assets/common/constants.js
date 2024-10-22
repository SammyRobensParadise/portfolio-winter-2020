const AUTHOR_DETAILS = {
  fullName: 'Sammy Robens-Paradise',
  firstName: 'Sammy',
  lastName: 'Robens-Paradise',
  email: 'srobensparadise@gmail.com',
  schoolEmail: 'srobensp@edu.uwaterloo.ca',
  school: 'University of Waterloo',
  program: 'Systems Design Engieering',
  phoneNumber: 7788879189,
  phoneNumberString: '778-887-9189',
  location: 'Waterloo, Ontario',
  websiteLink: 'https://sammyrp.com',
}
const WEBSITE_DETAILS = {
  created: new Date('12-26-2019'),
  author: AUTHOR_DETAILS.fullName,
  owner: AUTHOR_DETAILS.fullName,
  authorContact: AUTHOR_DETAILS.email,
}
const COOKIES = {
  hasPrevVisit: {
    name: 'has_prev_visit',
  },
  doesNotWantMobileWarn: {
    name: 'does_not_want_mobile_warn',
  },
}
export { AUTHOR_DETAILS, WEBSITE_DETAILS, COOKIES }
