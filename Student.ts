export default class Students {
  constructor(private fname, private lName) { }


  GetFullName(): string {
    return this.fname + ' ... ' + this.lName;
  }
}

// export { Students };