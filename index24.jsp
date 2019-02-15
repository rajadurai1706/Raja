

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
   <% 
   Class.forName("com.mysql.jdbc.Driver"); 
   String myDatabase = "jdbc:mysql://localhost:3306/mydb1?user=root&password=1234"; 
   Connection myConnection = DriverManager.getConnection(myDatabase);
   Statement myStatement = myConnection.createStatement();  
   String id11=request.getParameter("id11");
   String id22=request.getParameter("id22");
   String sqlString = "SELECT FROM users WHERE username='"+id11+"' AND password='"+id22+"' ";
   ResultSet rs = myStatement.executeQuery(sqlString);
   if(rs.next()) {
       System.out.println("Success"); }
   else {
       System.out.println("Failed");
   }

   %>


    </body>

</html>