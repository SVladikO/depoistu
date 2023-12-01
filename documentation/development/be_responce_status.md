## List of status which BE started to use.

### 201 Created  (ALL POST)
##### We use this status for each post which create company, customer, menu_item, favorite company
This indicates that the request was completed,
and a new resource was created as a result.
The URI(s) sent in the response entity can refer
to the newly generated help, with a Location
header field providing the most particular URI for the resource.

### 204 No Content (empty company, menu items)
#### We don't use it yet.
This response is sent when the server has completed
the request and does not need to return
an entity-body, but wants updated metainformation.
The answer may contain additional or
updated metadata in entity-headers, which should be
associated with the requested variant if present.

### 400 Bad Request  (no query param)
##### Validation issues
When the server is unable to understand the request
due to incorrect syntax, this response is returned.

### 401 Unauthorized (auth middle layer
##### For situation for request which require token is missed, broken, wrong. 
Even though the HTTP standard specifies “unauthorized,”
this response indicates “unauthenticated”
logically. To get the requested response, the client
must first authenticate itself.

### 403 Forbidden  
##### Exist customer try to change data of another owner. POST/PUT menu, menu/visible. PUT company etc.
This response is gotten when the server refuses to
provide the requested resource because the client does
not have access permissions to the material; it is
unauthorized. Unlike 401, the server is aware of the client’s identity.

### 404 Not Found
#### We don't use it yet.
This means the requested resource is unavailable on
the server, or maybe the URL has been mistyped in
the browser. This can also indicate that the endpoint
is correct, but the resource does not exist in an
API. This response may be used instead of 403 to conceal
the existence of a resource from an unauthorized client.


### 500 Internal Server Error (DB request)
##### DB throw this issue when query is broken, no connection to db for some reason. 
The server ran into an unanticipated problem that stopped
it from completing the request.

### 503 Service Not Available
#### We don't use it yet.
This happens due to a sudden overload or server maintenance
and it means the server cannot handle the request.

504 Gateway Timeout
#### We don't use it yet.
When the server is operating as a gateway and cannot promptly
respond, this error response is returned.
