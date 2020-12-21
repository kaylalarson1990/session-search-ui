export const firstField = [
  "Choose one..",
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
  "Choose one..",
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

export const querySwitch = (param) => {
  switch(param)  {
    case "equals":
      return "SELECT __ FROM session WHERE __;";
    case "contains":
      return "SELECT __ FROM session WHERE CONTAINS(__, 'string');";
    case "starts with":
      return "SELECT __ FROM session WHERE __ LIKE __;";
    case "in list":
      return "SELECT __ FROM session WHERE __ IN __;";
    case "between":
      return "SELECT __ FROM session WHERE __ BETWEEN __ AND __;";
    default:
      return "Your Generated SQL Statement goes here:"
  }
}
