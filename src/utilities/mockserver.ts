// demo purposes only.
// here we imagine we might send a POST request to a server with our completed form data.

type RequestBody = {
  name: string
  password: string
  birthday: string // ISO Format
  preferences : {
    techPref: "front end" | "back end" | "both"
    pizzaToppings: {}
    timezone: string
  }
 }

export const mockServer = (req: RequestBody) => { console.log('req', req) };