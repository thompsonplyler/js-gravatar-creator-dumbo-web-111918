class Identicon {
  constructor(string) {
    this.string = string;
    this.hashed = md5.array(string)
  }
  
  hash() {
    return this.hashed
  }

  // get hash() {
  //   return this.hash();
  // }
  // make use of the md5.array method, which is in scope because we required it in our index.html
}
