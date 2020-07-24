package com.google.sps.data;

/** Class containing loginStatus statistics. */
public final class LoginStatus {

  private int intLoginResult;

  public LoginStatus(int intLoginResult){
    this.intLoginResult = intLoginResult;
  }

  public int getIntLoginResult(){
      return intLoginResult;
  }
}//class LoginStatus
