export class Principal {
  public authenticated: boolean;
  public authorities: Authority[] = [];

  constructor(authenticated: boolean, authorities: any[]) {
    this.authenticated = authenticated;
    authorities.map(auth => this.authorities.push(new Authority(auth.authority)))
  }

  isAuthenticated() {
    return this.authorities.some((auth: Authority) => auth.authority.indexOf('USER') > -1)
  }
}

export class Authority {
  public authority: String;

  constructor(authority: String) {
    this.authority = authority;
  }
}
