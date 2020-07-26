package com.google.sps.data;

/** Class containing loginStatus statistics. */
public final class LoginStatus {

  private int intLoginResult;
  private String loginEmail;

  public LoginStatus(int intLoginResult, String loginEmail){
    this.intLoginResult = intLoginResult;
    this.loginEmail = loginEmail;
  }

  public int getIntLoginResult(){
      return intLoginResult;
  }//getintLoginResult

  public String getLoginEmail(){
      return loginEmail;
  }//getLoginEmail
}//class LoginStatus
