/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=iAmDevice1 
  **/ 

	
var obj = new Object();

obj ["store"] = "RTStore";
obj ["channel"] = "Garden";

var result = apsdb.callApi("Subscribe", obj, null);
return result;
	
