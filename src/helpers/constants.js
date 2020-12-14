export const firstField = [
  "Domain",
  "Page Response Time",
  "Page Path",
  "Screen Height",
  "Screen Width",
  "User Email",
  "First Name",
  "Last Name",
  "# of Visits"
]

export const secondField = [
  "equals",
  "contains",
  "starts with",
  "in list"
]

export const renderSwitch = (param) => {
  switch(param) {
    case "Domain":
      return "website.com";
    case "User Email":
      return "johndoe@email.com";
    case "First Name":
      return "John";
    case "Last Name":
      return "Doe";
    case "Page Path", "# of Visits", "Page Response Time":
      return "";
    default:
      return "website.com";
  }
}
