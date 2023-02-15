class App {
  constructor(Appname, password) {
    this._Appname = Appname;
    this._password = password;
  }

  equals(otherApp) {
    return this.Appname === otherApp.Appname;
  }

  get Appname() {
    return this._Appname;
  }

  get password() {
    return this._password;
  }
}



export default App;
