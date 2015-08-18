/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=Fridge 
  **/ 

	
var body = request.rawBody ;

var params = {
 'body':body ,
  'apsdb.documentKey':'dockey1',
   'apsdb.store':'RTStore', 
};

var result = apsdb.callApi("SaveDocument", params, null);
return result;
	
