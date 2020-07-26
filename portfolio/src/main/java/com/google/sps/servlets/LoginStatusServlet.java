// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import com.google.sps.data.LoginStatus;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;


@WebServlet("/loginstatus")
public class LoginStatusServlet extends HttpServlet {

    UserService userService = UserServiceFactory.getUserService();
    
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    //get the login status
    boolean loginResult = userService.isUserLoggedIn();
    String loginEmail = userService.getCurrentUser().getEmail();

    /** converting to an int for easy passing of value
     * 1 is for logged in
     * 0 is for logged out
    */
    int intLoginResult = 0;
    if (loginResult == true)
        intLoginResult = 1; 

    // Convert the login status to JSON
    LoginStatus loginStatus = new LoginStatus(intLoginResult, loginEmail);
    String json = new Gson().toJson(loginStatus);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
    
  }//doGet
}//LoginStatusServlet
